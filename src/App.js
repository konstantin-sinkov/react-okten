import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addUser, getUsers} from "./services/users.service";
import User from "./components/user/User";
import {fetchUsers, postUser} from "./redux/actions/actions";

function App() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let [formState, setFormState] = useState({name: '', email: ''});
    let {users} = state;

    useEffect((value) => {
        getUsers().then(value => {
            // console.log(value);
            dispatch(fetchUsers(value));
        });
    }, []);

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    let onSubmit = (e) => {
        e.preventDefault();
        // let name = e.target.name.value;
        // let email = e.target.email.value;
        // let user = {name: name, email: email};
        // console.log(formState);
        addUser(formState).then(value => {
            dispatch(postUser(value));
            // console.log('saved user', value);
        });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name={'name'}
                    value={formState.name}
                    onChange={onFormInputChange}
                    placeholder={'Enter User Name'}
                />
                <input
                    type="email"
                    name={'email'}
                    value={formState.email}
                    onChange={onFormInputChange}
                    placeholder={'Enter User Email'}
                />
                <input type="submit"/>
            </form>
            <hr/>
            {
                users.map(el =>
                    <div>
                        <User user={el}/>
                    </div>)
            }
        </div>

    );
}

export default App;