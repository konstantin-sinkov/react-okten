import {useState} from "react";
import {saveCar} from "../../services/form.service";

export default function FormAddCar() {
  let [formState, setFormState] = useState({model: '', price: '', year: ''});

  let onFormInputChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  let save = (e) => {
      e.preventDefault();
      saveCar(formState);
      // setFormState({...formState, [e.target.name]: ''});

  }

  return (
    <div>
        <form onSubmit={save}>
            {/*<input type="number" name={'id'} value={}/>*/}
            <label>
                Enter car model
                <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange}/>
            </label>
            <label>
                Enter car price
                <input type="number" name={'price'} value={formState.price} onChange={onFormInputChange}/>
            </label>
            <label>
                Enter production year
                <input type="number" name={'year'} value={formState.year} onChange={onFormInputChange}/>
            </label>
            <input type="submit" />
        </form>

    </div>
  );
}