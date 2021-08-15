import './App.css';
import Users from "./components/users/Users";

// 1 Отримати всі user з jsonplaceholder та вивести їх. до кожного user зробити кнопку при натисканні якої виводиться всі
// пости поточного юзера в межах Users компоненти


function App() {
  return (
    <div>
      <Users />
    </div>
  );
}

export default App;