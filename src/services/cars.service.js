const url = "http://195.72.146.25/api/v1/cars";

const getCars = () => {
    return fetch(url)
        .then(value => value.json());
}

const deleteCar = (id) => {
    fetch(url + '/' + id, {
        method: 'DELETE',
    });
}

const editCar = () => {}


export {getCars, deleteCar};