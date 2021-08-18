import {useEffect, useState} from "react";
import {deleteCar, getCars} from "../../services/cars.service";
import Car from "../car/Car";

export default function Cars({editChosenCar}) {
  let [cars, setCars] = useState([]);
  let [car, setCar] = useState({});

  useEffect(() => {
    getCars().then(value => {
      setCars([...value]);
    });
  }, [cars]);

  const deleteChosenCar = (car) => {
    setCar({...car});
    // console.log(car);
    deleteCar(car.id);
  }

  const setChosenCar = (car) => {
    setCar({...car});
    editChosenCar(car);
  }

  return (
    <div>
      <h3><u>Cars list</u></h3>
      {
        cars.map(el =>
            <Car
                key={el.id}
                car={el}
                deleteChosenCar={deleteChosenCar}
                setChosenCar={setChosenCar}
            />)
      }
    </div>
  );
}