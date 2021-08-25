import {useEffect, useState} from "react";
import {getCar, getCars} from "../../services/cars.service";

export default function Car({item, deleteChosenCar, setChosenCar}) {
    let id = item.id;

    let [car, setCar] = useState({});



    const onClickDelete = () => {
        deleteChosenCar(item);
    }

    const onClickEdit = () => {
        console.log(item.id);

        // getCar(item.id).then(value => {
        //     setCar({...car});
        // })
        // setChosenCar(car);
    }

    return (
        <div>
            <p>#{item.id} model - {item.model}, price - {item.price}USD, year - {item.year}</p>
            <button onClick={onClickDelete}>DELETE</button>
            <button onClick={onClickEdit}>EDIT</button>
        </div>

    );
}