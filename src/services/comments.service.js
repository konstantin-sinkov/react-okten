import axios from "axios";

let config = {
    baseURL: "https://jsonplaceholder.typicode.com/comments"
}

let axiosInstance = axios.create(config);

let getComments = () => {
    return axiosInstance.get('');
}

export {getComments};