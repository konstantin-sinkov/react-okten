import './App.css';
import FormAddCar from "./components/form_add_car/FormAddCar";
import Cars from "./components/cars/Cars";

{
  // IP с дома 195.72.146.25
  // IP в офисе 192.168.1.253
  //
  // есть API для вывода и добавления машин:
  //
  //   модель выглядит так
  // {
  //   "id": 40,
  //     "model": "seat",
  //     "price": 2300,
  //     "year": 2018
  // }
  //
  //
  // GET  http://<IP>/api/v1/cars получить массив всех машин
  //
  //   создать форму для добавления машинки
  //
  // POST http://<IP>/api/v1/cars записать новую машину в базу данных (обратите внимание что метод post, а не get нужно будет указывать в httpClient)
  //
  //   Валидация:
  //       model максимальная длина 20 символов
  // price минимум 0
  // year мин 1990 мах 2021
  //
  // у вас должна быть форма для добавления машинки, и под ней должен быть адекватный вывод всех машин
}

function App() {
  return (
    <div>
      <FormAddCar />
      <Cars />
    </div>
  );
}

export default App;