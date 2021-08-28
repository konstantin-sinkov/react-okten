import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "./services/users.service";
import User from "./components/user/User";

function App() {
  let state = useSelector(state => state);
  let dispatch = useDispatch();
  // console.log(state);

  let {users} = state;
    // console.log(users);

    useEffect((value) => {
      getUsers().then(value => {
        // console.log(value);
        let action = {type: "FETCH_USERS", payload: value}
        dispatch(action)
      });
    } , []);

    let onSubmit = (e) => {
      e.preventDefault();
    }

  return (
      <div>
          <form onSubmit={onSubmit}>
            <input type="text" name={'name'} placeholder={'Enter User Name'}/>
            <input type="email" name={'email'} placeholder={'Enter User Email'}/>
            <input type="submit"/>
          </form>
          <hr/>
          {
              users.map(el =>
                  <div>
                    <User user={el} />
                  </div>)
          }
      </div>

  );
}

export default App;