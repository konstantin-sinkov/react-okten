import {useEffect, useState} from "react";
import {getCars} from "../../services/cars.service";
import Car from "../car/Car";

export default function Cars() {
  let [cars, setCars] = useState([]);

  useEffect(() => {
    getCars().then(value => {
      setCars([...value]);
    });
  }, [cars])

  return (
    <div>
      <h3><u>Cars list</u></h3>
      {
        cars.map(el =>
            <Car
                key={el.id}
                car={el}
            />)
      }
    </div>
  );
}