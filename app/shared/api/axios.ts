import axios from "axios";

const strapiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI,
    timeout: 1000,
});


export default strapiInstance