 import axios from "axios";


 const instance = axios.create({
  baseURL: "http://localhost:4000/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${localStorage.getItem('token_access')}`,
       

  },
});

export default instance;
