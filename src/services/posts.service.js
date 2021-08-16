import axios from "axios";

let config = {
    baseURL: "https://jsonplaceholder.typicode.com/posts"
}

let axiosInstance = axios.create(config);

let getPosts = () => {
    return axiosInstance.get('');
}

export {getPosts};