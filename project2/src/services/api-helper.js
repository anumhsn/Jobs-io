import axios from 'axios';


export const fetchJobs = async (description, location) => {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?description=${description}&location=${location}`);
    return response.data;
}

