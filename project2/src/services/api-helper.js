import axios from 'axios';


export const fetchJobs = async (location) => {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?description=web+developer&location=${location}`);
    return response.data;
}

