import axios from 'axios';

const baseURL = "http://localhost:8080/journeys"
const orderByURL = "http://localhost:8080/journeys/order-by-"

export async function getJourneys(page, month){

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

export async function getJourneysOrderBy(page, month, orderBy){

    if(!month) {
        console.log("Please, enter the month");
        return "Please, enter the month";
    }

    try {
        const response = await axios.get(`${orderByURL}${orderBy}`, {
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