import './App.css';
import User from "./components/User/User";

// Взяти масив usersList.
//     Створити компонент,котрий характеризує юзера.
//     Створити компонент,котрий характеризує підоб'єкт юзера address. Використати в компоненті юзера.
// Створити компонент,котрий характеризує підоб'єкт адреси юзера geo. Використати в компоненті адреси.
// Вкладеність компонентів : App->Users->User->Address->Geo
// Вивести всі об'єкти з масиву


let usersList = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618'
      }
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653'
      }
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications'
    }
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990'
      }
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services'
    }
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342'
      }
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems'
    }
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478'
      }
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications'
    }
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984'
      }
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers'
    }
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677'
      }
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers'
    }
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889'
      }
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies'
    }
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232'
      }
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models'
    }
  }
];

function App() {
  return (
    <div className={'user_wrapper'}>
      <User
          id={usersList[0].id}
          name={usersList[0].name}
          surname={usersList[0].surname}
          email={usersList[0].email}
          phone={usersList[0].phone}
          website={usersList[0].website}
          address={usersList[0].address}
          company={usersList[0].company}
      />
      <User
          id={usersList[1].id}
          name={usersList[1].name}
          surname={usersList[1].surname}
          email={usersList[1].email}
          phone={usersList[1].phone}
          website={usersList[1].website}
          address={usersList[1].address}
          company={usersList[1].company}
      />
      <User
          id={usersList[2].id}
          name={usersList[2].name}
          surname={usersList[2].surname}
          email={usersList[2].email}
          phone={usersList[2].phone}
          website={usersList[2].website}
          address={usersList[2].address}
          company={usersList[2].company}
      />
      <User
          id={usersList[3].id}
          name={usersList[3].name}
          surname={usersList[3].surname}
          email={usersList[3].email}
          phone={usersList[3].phone}
          website={usersList[3].website}
          address={usersList[3].address}
          company={usersList[3].company}
      />
      <User
          id={usersList[4].id}
          name={usersList[4].name}
          surname={usersList[4].surname}
          email={usersList[4].email}
          phone={usersList[4].phone}
          website={usersList[4].website}
          address={usersList[4].address}
          company={usersList[4].company}
      />
      <User
          id={usersList[5].id}
          name={usersList[5].name}
          surname={usersList[5].surname}
          email={usersList[5].email}
          phone={usersList[5].phone}
          website={usersList[5].website}
          address={usersList[5].address}
          company={usersList[5].company}
      />
      <User
          id={usersList[6].id}
          name={usersList[6].name}
          surname={usersList[6].surname}
          email={usersList[6].email}
          phone={usersList[6].phone}
          website={usersList[6].website}
          address={usersList[6].address}
          company={usersList[6].company}
      />
      <User
          id={usersList[7].id}
          name={usersList[7].name}
          surname={usersList[7].surname}
          email={usersList[7].email}
          phone={usersList[7].phone}
          website={usersList[7].website}
          address={usersList[7].address}
          company={usersList[7].company}
      />
      <User
          id={usersList[8].id}
          name={usersList[8].name}
          surname={usersList[8].surname}
          email={usersList[8].email}
          phone={usersList[8].phone}
          website={usersList[8].website}
          address={usersList[8].address}
          company={usersList[8].company}
      />
      <User
          id={usersList[9].id}
          name={usersList[9].name}
          surname={usersList[9].surname}
          email={usersList[9].email}
          phone={usersList[9].phone}
          website={usersList[9].website}
          address={usersList[9].address}
          company={usersList[9].company}
      />
    </div>
  );
}

export default App;