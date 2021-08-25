import {useEffect, useState} from "react";
import {getCars, deleteCar} from "../../services/cars.service";
import Car from "../car/Car";
import FormAddCar from "../form_add_car/FormAddCar";

export default function Cars() {
  let [cars, setCars] = useState([]);
  let [car, setCar] = useState({});

  useEffect(() => {
    getCars().then(value => {
      setCars([...value]);
    });
  }, [])

  const addCarToList = (car) => {
    // setCar({...car});
    cars.push(car);
    cars.sort((car1, car2) => car1.id - car2.id);
  }

  const deleteChosenCar = (car) => {
    // setCar({...car});
    // console.log(car);
    deleteCar(car.id);
    let filteredCars = cars.filter(el => el.id !== car.id);
    setCars([...filteredCars]);
  }

  const setChosenCar = (car) => {
    setCar({...car});
  }

  return (
      <div>
        <FormAddCar
            cars={cars}
            car={car}
            addCarToList={addCarToList}
        />
        <h3><u>Cars list</u></h3>
        {
          cars.map(el =>
              <Car
                  key={el.id}
                  item={el}
                  deleteChosenCar={deleteChosenCar}
                  setChosenCar={setChosenCar}
              />)
        }
      </div>
  );
}