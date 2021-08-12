import axios from "axios";

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/users',
};

let axiosInstance = axios.create(config);

const getUsers = () => {
    return axiosInstance.get('');
}

const getUser = (id) => {
    return axiosInstance.get('/' + id);
}

// fetch requests
// function getUsers() {
//     return  fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json());
// }
//
// function getUser(id) {
//     return  fetch('https://jsonplaceholder.typicode.com/users' + id)
//         .then(value => value.json());
// }

export {getUsers, getUser};

