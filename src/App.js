import './App.css';
import { useReducer } from 'react';
import reducer from "./reducers/reducer";

// є об'єкт, значення якого 0
// Стоврити 2 кнопки.
//     Перша збільшує   значення на 10
// Друга зменшує на 2.
//
// Зміну стану та виведення реалізувати через redcer


function App() {
    // let counter;
    const initialState = {counter: 0};
    let [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Counter</h2>
            <h3>Counter value - {state.counter}</h3>
            <button onClick={() => dispatch({type: 'ADD_10'})}>Add 10</button>
            <button onClick={() => dispatch({type: 'SUB_2'})}>Subs 2</button>
        </div>

    );
}

export default App;