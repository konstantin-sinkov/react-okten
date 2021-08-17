export default function Car({car}) {
  return (
    <div>
        <p>{car.id} model - {car.model}, price - {car.price}USD, year - {car.year}</p>
    </div>
  );
}