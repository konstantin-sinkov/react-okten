const url = "http://91.201.233.14/api/v1/cars";

const getCars = () => {
    return fetch(url)
        .then(value => value.json());
}

const getCar = (id) => {
    return fetch(url + '/' + id)
        .then(value => value.json());
}

const deleteCar = (id) => {
    return fetch(url + '/' + id, {
        method: 'DELETE',
    });
}


export {getCars, deleteCar, getCar};