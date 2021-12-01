import axios from "axios";
//local
// const URL_PREFIX = "http://localhost:3001";
//deployed
const URL_PREFIX = "https://zoo-school-back.herokuapp.com";

const API = {
    getProfile: (tkn) => {
        return axios.get(`${URL_PREFIX}/profile`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    login: (usrData) =>{
        return axios.post(`${URL_PREFIX}/login`,usrData)
    },
    signup: (usrData) =>{
        return axios.post(`${URL_PREFIX}/signup`,usrData)
    }
};

export default API;