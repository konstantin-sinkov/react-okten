import {BrowserRouter as Router, Link} from "react-router-dom"
import './App.css';
import Users from "./components/users/Users";
import {Route} from "react-router";
import Posts from "./components/posts/Posts";

// Є дві лінки
// /users
// /posts
//
// /users - робить все те, що було на занятті останнім способом (через кнопку та ддатковий запит на сервер)
// /posts - Отримує posts з jsobplaceholder, виводить їх всі.
// Біля кожного поста зробити лінку (не конопку) яка буде вести на детальну інформацію поста. Детальну інформацію
// отримувати через history.state


function App() {
  return (
      <Router>
          <div className={'nav_bar'}>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
          </div>
          <Route path={'/users'} component={Users} />
          <Route path={'/posts'} component={Posts} />
      </Router>

  );
}

export default App;