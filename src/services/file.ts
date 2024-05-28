import axios from "axios";

const instancefile = axios.create({
    baseURL: "http://localhost:4000/api/",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `bearer ${localStorage.getItem('token_access')}`,
      "Access-Control-Allow-Origin": "*",
      

    },
    withCredentials: true,
  });

  export default instancefile;