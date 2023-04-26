import axios from 'axios';

const baseURL = "http://localhost:8080/stations"

export async function getStations(page, month){

    if(!month) {
        console.log("Please, enter the month");
        return "Please, enter the month";
    }

    try {

        const response = await axios.get(baseURL, {
            params: {
                page: page,
                limit: 50,
                month: month
            }
        })

        return response.data;

    } catch (error) {
        console.log(error);
    }
}

export async function getStationsWithoutLimit(month){

    if(!month) {
        console.log("Please, enter the month");
        return "Please, enter the month";
    }

    try {

        const response = await axios.get(baseURL, {
            params: {
                month: month
            }
        })

        return response.data;

    } catch (error) {
        console.log(error);
    }
}

export async function getStationsByName(page, month){

    if(!month) {
        console.log("Please, enter the month");
        return "Please, enter the month";
    }

    try {
        const response = await axios.get(`${baseURL}/order-by-name`, {
            params: {
                page: page,
                limit: 50,
                month: month
            }
        })

        return response.data;

    } catch (error) {
        console.log(error);
    }
}