import axios from 'axios';
const cor = "https://cors-anywhere.herokuapp.com/";

export const fetchJobs = async () => {
    const response = await axios.get(`${cor}jobs.github.com/positions.json?description=javascript&location=new+york`);
    return response.data;
}

