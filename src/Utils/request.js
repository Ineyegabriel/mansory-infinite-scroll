const axios = require("axios");
const APIKEY = "15373599-b05b8127e7dd2f4418ce544d3";

export const useGetImages = (page = 1) => {
  return axios
    .get(`https://pixabay.com/api/?page=${page}&key=${APIKEY}`)
    .then(({ data, status }) => {
      const { total, hits } = data;
      return { total, hits, status };
    });
};

/**
 * This is the get request I intend to you for testing,
 * I am directing it to localhost because moxios is installed and axios woild look
 * to moxios for a response. And then I will serve it will dummy data that is found in the dummyData.js
 */
export const testFetch = () => {
  return axios.get("http://localhost:3000").then(({ data }) => {
    return { data };
  });
};
