const getComments = () => {
    return fetch('https://jsonplaceholder.typicode.com/Comments')
                .then(value => value.json())
}

export {getComments};