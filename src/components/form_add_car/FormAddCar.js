import {useState} from "react";
import {editCar, saveCar} from "../../services/form.service";
import Cars from "../cars/Cars";

export default function FormAddCar() {
    // let [formState, setFormState] = useState({model: '', price: '', year: ''});

    // let onFormInputChange = (e) => {
    //     setFormState({...formState, [e.target.name]: e.target.value});
    // }

    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');

    let onModelInputChange = (e) => {
        setModel(e.target.value);
    }

    let onPriceInputChange = (e) => {
        setPrice(e.target.value);
    }

    let onYearInputChange = (e) => {
        setYear(e.target.value);
    }

    let save = (e) => {
        e.preventDefault();
        if (!model.length || model.length > 20) {
            alert('Model name should be less than 20 symbols');
        } else if (price < 0) {
            alert('Price should be grater than 0');
        } else if (year < 1990 || year > 2021) {
            alert('Enter valid produce year (1990 - 2021)');
        } else {
        const car = {
            'model': model,
            'price': price,
            'year': year
        }
        saveCar(car);
        setModel('');
        setPrice('');
        setYear('');
        }
    }

    const editChosenCar = (car) => {
        // e.preventDefault();
        // console.log(car);

        setModel(car.model);
        setYear(car.year);
        setPrice(car.price);

        editCar(car);
    }

    return (
        <div>
            <h3><u>Form for adding a car</u></h3>
            <form>
                <p><label>
                    Enter car model
                    <input type="text" name={'model'} value={model} onChange={onModelInputChange}/>
                </label></p>
                <p><label>
                    Enter car price
                    <input type="number" name={'price'} value={price} onChange={onPriceInputChange}/>
                </label></p>
                <p><label>
                    Enter production year
                    <input type="number" name={'year'} value={year} onChange={onYearInputChange}/>
                </label></p>
                <button onClick={save}>SAVE NEW CAR</button>
                <button onClick={editChosenCar}>SAVE EDITED CAR</button>
            </form>

            <Cars editChosenCar={editChosenCar}/>

        </div>
    );
}