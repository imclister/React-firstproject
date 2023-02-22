
import './App.css';
import { User } from './User.js'
import {useState} from 'react'; 

function App() {

  //example 1
  //example 1
  //Mapping through array, declaring and displaying variable,creating and importing another component (js file)

  // const names =["Allan" , "Smith" , "Gregor","Clister"];
  // const persons = [
  //   {
  //     name:'Johm Smith',
  //     age : 21,
  //     email: 'smith@gmail.com'
  //   },
  //   {
  //     name:'Johm Doe',
  //     age : 22,
  //     email: 'doe@gmail.com'
  //   },
  //   {
  //     name:'Johm Cena',
  //     age : 23,
  //     email: 'cena@gmail.com'
  //   }
  // ];
     
  // return (
  //   <div className="App">
  //     <div class="row">
  //       {persons.map((person,key) => {
  //         return <User name={person.name} email={person.email} age={person.age}/>;
  //       })}
  //     </div>
        
  //   </div>
  // );















  //EXAMPLE 2
  //EXAMPLE 2
  //EXAMPLE 2
  //using state, changing the variable in the DOM using state, using ternary operator, using anonymous function
  const [age , setAge] = useState(2)
  const addage = () => {
    setAge(age +1);
  };

  const [inputtext, setInputtext] = useState("")
  const handleInputChange = (event) =>
  {
   
     setInputtext(event.target.value)
  }

  const [showText, setShowText] = useState(true)  
  const showOrHideText = () =>
  {
     setShowText (!showText);
  }

  return (
    <div className="App">{age}
      <button  onClick={addage}>Add</button>
      <p></p>
      <h4>Hello {inputtext}</h4>
      <input type="text" onChange={handleInputChange}  />

      {/* && as THEN */}
      {showText === true && <p>HI! I AM CLISTER.</p> }
      <p></p>
      <button onClick={showOrHideText}>SHOW/HIDE</button>
      {/* Using anonymouse function */}
      <button onClick={ () => {setShowText(!showText)}} >SHOW/HIDE</button>
    </div>
  );
}





export default App; 
