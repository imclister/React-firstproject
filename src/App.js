
import './App.css';
import { User } from './User.js'

function App() {
  const names =["Allan" , "Smith" , "Gregor","Clister"];
  const persons = [
    {
      name:'Johm Smith',
      age : 21,
      email: 'smith@gmail.com'
    },
    {
      name:'Johm Doe',
      age : 22,
      email: 'doe@gmail.com'
    },
    {
      name:'Johm Cena',
      age : 23,
      email: 'cena@gmail.com'
    }
  ];
     
  return (
    
    // <div className="App">
    //   <div class="row">
    //      <User name="Clister" email="clister@gmail.com" age={22} />
    //      <User name="Dracula" email="dracula@gmail.com" age={1024} />
    //      <User name="Alpha" email="alpha@gmail.com" age={2000} />
    //   </div>
    // </div>


    //ARRAY MAP
    // <div className="App">
    //     {names.map((name,key) => {
    //       return <h2 key={key}>{name}</h2>;
    //     })}
    // </div>

    <div className="App">
      <div class="row">
        {persons.map((person,key) => {
          return <User name={person.name} email={person.email} age={person.age}/>;
        })}
      </div>
        
    </div>
  );
}





export default App; 
