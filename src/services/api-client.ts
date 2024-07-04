import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '3d0dbface4e9472ba46c65ed6183c736'
    }
})