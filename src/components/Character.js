import './Character.css';

export default function Character ({name, surname, age, info}) {

    // let {name, surname, age, info} = props;

    return(
        <div className={'character'}>
            <h2>{name} {surname}</h2>
            <h3>{name} {surname} is {age} y.o.</h3>
            <p>{info}</p>
        </div>
    )
}