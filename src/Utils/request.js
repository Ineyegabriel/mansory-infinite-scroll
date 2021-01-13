const axios = require("axios");  
const APIKEY = "15373599-b05b8127e7dd2f4418ce544d3"

export const useGetImages = (page = 1) => {
    return axios.get(`https://pixabay.com/api/?page=${page}&key=${APIKEY}`)
      .then(({data, status}) =>{
        const {total,hits} = data;
        return {total, hits, status}
      })
}

    