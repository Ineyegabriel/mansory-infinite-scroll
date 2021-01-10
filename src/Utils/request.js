const axios = require("axios");  
const APIURL = "https://pixabay.com/api";
const APIKEY = "15373599-b05b8127e7dd2f4418ce544d3"

export const useGetImages = (page = 1) => (
    axios.get(`${APIURL}/?page=${page}&key=${APIKEY}`)
);
