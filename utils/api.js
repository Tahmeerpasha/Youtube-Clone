import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': 'cc216a6a59msh6c35cb1d8030c84p1fa740jsn83ad3680747f',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromAPI = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        // Handle the error here
        console.error("API request error:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}
