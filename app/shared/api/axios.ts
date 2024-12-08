import axios from "axios";

const strapiInstance = axios.create({
    baseURL: 'https://gitfcms.up.railway.app/',
    timeout: 1000,
});


export default strapiInstance