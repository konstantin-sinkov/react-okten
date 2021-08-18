export default function Car({car, deleteChosenCar, setChosenCar}) {

  const onClickDelete = () => {
      deleteChosenCar(car);
  }

    const onClickEdit = () => {
        setChosenCar(car);
    }


  return (
    <div>
        <p>
            {car.id} model - {car.model}, price - {car.price}USD, year - {car.year}
            <button onClick={onClickDelete}>DELETE</button>
            <button onClick={onClickEdit}>EDIT</button>
        </p>

    </div>
  );
}