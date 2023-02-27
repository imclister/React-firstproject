
import './App.css';
// import { User } from './User.js'
// import { Todos } from './Todos.js'
// import { Text } from './Text.js'
import { useEffect , useState} from 'react'; 

import axios from 'axios';

function App() {

  //example 1
  //example 1
  //Mapping through array, declaring and displaying variable,creating and importing another component (js file) ,jsx

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
  
//   const [age , setAge] = useState(2)
//   const addage = () => {
//     setAge(age +1);
//   };

//   const [inputtext, setInputtext] = useState("")
//   const handleInputChange = (event) =>
//   {
//      setInputtext(event.target.value)
//   }

//   const [showText, setShowText] = useState(true)  
//   const showOrHideText = () =>
//   {
//      setShowText (!showText);
//   }


//   const [color , SetColor] = useState('black')
//   const changeColor = () => {
//     SetColor(color == "black" ? 'red' : 'black') 
//   }

//   return (
//     <div className="App">{age}
//       <button  onClick={addage}>Add</button>
//       <p></p>
//       <h4>Hello {inputtext}</h4>
//       <input type="text" onChange={handleInputChange}  />

//       {/* && as THEN */}
//       {showText === true && <p style={{ color:color }}>HI! I AM CLISTER.</p> }
//       <p></p>
//       <button onClick={showOrHideText}>SHOW/HIDE</button>
      
//       {/* Using anonymouse function */}
//       <button onClick={ () => {setShowText(!showText) }} >SHOW/HIDE</button>
//       <p></p>
//       <button onClick={changeColor}>Change Color</button>
//     </div>

    
//   );
// }

// EXERCISE
// EXERCISE

// const [count, setCount] = useState(0)
// const increase  = () => {
//   setCount(count + 1)
// }
// const decrease  = () => {
//   setCount(count - 1)
// }
// const reset  = () => {
//   setCount(0)
// }

// return (
//   <div className="App">
//     <p>{ count }</p>
//     <button onClick={decrease}>-</button>
//     <button onClick={increase}>+</button>
//     <button onClick={reset}>Reset</button>
//   </div>
// );















// TOPIC 3
// TOPIC 3

//using state, manipulating object, spread operator,  mapping array, array filter
//  const [todos, setTodos] = useState([]);
//  const [newTask, setNewTask] = useState("");

//  const handlechangeTask = (event) =>
//  {
//     setNewTask(event.target.value);
//  }
//  const addTodo = () => {
//     setTodos([...todos,{ id: todos.length === 0 ? 0 : todos[todos.length -1].id + 1  , task:newTask   , taskstatus: "Ongoing" } ]);
//     setNewTask("");
//  }
//  const deleteTodo = (todoId) => {
//    const currentTodos = [...todos];
//    setTodos(currentTodos.filter((todo) =>  todo.id !== todoId));
//  }

//  const completeTodo = (todoID) => {
//     setTodos(
//       todos.map( (todo) => {
//         if(todo.id === todoID)
//           return {...todo , taskstatus : "Completed" };
//         else 
//           return todo;
//       })
//     );
//  }

// return (
//   <div className="App">
//     <div className='row'>
//       <div className='col-12 p-4'>
//         <input className='form-control w-100' type="text" onChange={handlechangeTask}  value={newTask}></input>
//         <button className='btn btn-primary w-100 mt-2' onClick={addTodo}>Add to List</button>
//       </div>
//       <div className='col-12'>
//         {todos.map((todo,  key) => {
//             return <Todos key={key} completeTodo ={completeTodo} todoStatus={todo.taskstatus} todoID = {todo.id} todoTask={todo.task} deleteTodo = {deleteTodo}  />
//         })}
//       </div>
//     </div>
//   </div>
// );














// TOPIC 4
// TOPIC 4

//COMPONENT LIFE CYCLE, useEffect HOOK, MOUNTING, UPDATING, AND UNMOUNTING COMPONENT
// const [showText, setShowText] = useState(false);

// const handleShowTextChange = () => {
//   setShowText(!showText)
// }

// return (
//   <div className="App">
//     <button className='btn btn-primary text-white mt-4' onClick={handleShowTextChange}>Show Text</button>
//     {showText && <Text />}
//   </div>
// );



//FETCHING FROM API, USING USEEFFECT HOOK,
// const [catFact, setCatFact] = useState("");

// useEffect(()=>{
//   axios.get("https://catfact.ninja/fact").then((res)=>{
//     setCatFact(res.data.fact);
//   });
// },[]);

// return(
//   <div className='container'>
//       <button className='mt-4 btn btn-primary text-white mx-auto'>Random Fact</button>
//       <p>{catFact}</p>
//   </div>
// )


// EXERCISE 1
// const [name, setName] = useState("");
// const [age, setAget] = useState(null);


// const predictAge = () => {
//   // axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
//   axios.get("https://api.agify.io/?name=" + name).then((res) => {
//     setAget(res.data.age);
//   });
// }


// return (
//   <div className="App">
//     <div className='container'>
//       <input className='form-control border border-success mt-4' placeholder='Enter your name...' type="text" 
//         onChange={ (event) =>setName(event.target.value) } />
//       <button className='btn btn-primary text-white w-100 mt-4' onClick={predictAge} >Predict Age</button>
//       <p className='mt-4 font-weight-bold'>{name}</p>
//       <p>{age}</p>
//     </div>
    
//   </div>
// )


//EXERCISE 2



// fetch("https://excuser-three.vercel.app/v1/excuse/family/").then((res) => res.json()).then((data) =>{
//   console.log(data);
// });
const [excuse , setExcuse] = useState("");


  const fetchtExcuse= (category) =>{
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`).then((res) => {
     setExcuse(res.data[0].excuse);
    });
  };
    


 



return (
  <div className='App'>
    <div className='container'>
      <button className='btn btn-primary' onClick={ () => {fetchtExcuse('family')}}>Family</button>
      <button className='btn btn-success' onClick={ () => {fetchtExcuse('party')}}>Patry</button>
      <button className='btn btn-warning text-white' onClick={ () => {fetchtExcuse('office')}}>Office</button>
      <p>{excuse}</p>
    </div>
  </div>
)

}



export default App; 
