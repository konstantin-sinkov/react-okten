import {useState} from "react";
import {saveCar} from "../../services/form.service";

export default function FormAddCar() {
    let [formState, setFormState] = useState({model: '', price: '', year: ''});

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    // let [model, setModel] = useState('');
    // let [price, setPrice] = useState('');
    // let [year, setYear] = useState('');
    //
    // let onModelInputChange = (e) => {
    //     setModel(e.target.value);
    // }
    //
    // let onPriceInputChange = (e) => {
    //     setPrice(e.target.value);
    // }
    //
    // let onYearInputChange = (e) => {
    //     setYear(e.target.value);
    // }

    let save = (e) => {
        e.preventDefault();
        if (!formState.model.length || formState.model.length > 20) {
            alert('Model name should be less than 20 symbols');
        } else if (formState.price < 0) {
            alert('Price should be grater than 0');
        } else if (formState.year < 1990 || formState.year > 2021) {
            alert('Enter valid produce year (1990 - 2021)');
        } else {
        // const car = {
        //     'model': model,
        //     'price': price,
        //     'year': year
        // }
        saveCar(formState);
            setFormState({model: '', price: '', year: ''});
        // setModel('');
        // setPrice('');
        // setYear('');
        }
    }

    return (
        <div>
            <h3><u>Form for adding a car</u></h3>
            <form onSubmit={save}>
                <p><label>
                    Enter car model
                    <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange}/>
                </label></p>
                <p><label>
                    Enter car price
                    <input type="number" name={'price'} value={formState.price} onChange={onFormInputChange}/>
                </label></p>
                <p><label>
                    Enter production year
                    <input type="number" name={'year'} value={formState.year} onChange={onFormInputChange}/>
                </label></p>
                <input type="submit"/>
            </form>

        </div>
    );
}