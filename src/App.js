import {BrowserRouter as Router, Link} from "react-router-dom"
import './App.css';
import Users from "./components/users/Users";
import {Route} from "react-router";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

// Є три лінки
// /users-page
// /posts-page
// /comments-page
// При кліку на відповідну лінку
// відбувається перехід на відповідний компонент,
// який дістає з jsonplaceholder інформацію про відповідні
// стуності, та виводить їх повний список


function App() {
  return (
      <Router>
          <div className={'nav_bar'}>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/comments'}>Comments</Link>
          </div>
          <Route path={'/users'} render={() => <Users/>} />
          <Route path={'/posts'} render={() => <Posts/>} />
          <Route path={'/comments'} render={() => <Comments/>} />
      </Router>

  );
};

export default App;