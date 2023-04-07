import axios from 'axios';

const baseURL = "http://localhost:8080/journeys"

export async function getJourneys(month){

    if(!month) {
        console.log("Please, enter the month");
        return "Please, enter the month";
    }

    try {
        const response = await axios.get(baseURL, {
            params: {
                page: 1,
                limit: 50,
                month: month
            }
        })

        return response.data;

    } catch (error) {
        console.log(error);
    }
}