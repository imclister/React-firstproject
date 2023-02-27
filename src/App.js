
import './App.css';
import { BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";
import { Home } from './pages/Home';
import { Aboutus } from './pages/Aboutus';
import { Contact } from './pages/Contact';
import { Menu } from './pages/Menu';
import { Profile } from './pages/Profile';
import { useState ,createContext } from 'react';

export const AppContext = createContext();

function App() {

    const [username, setUsername] = useState("imclister")

    const handleUsernameChange = (newUsername) =>{
        setUsername(newUsername);
    };

    return(
        <div className='App'>
            <AppContext.Provider value={{ username,setUsername }}>
                <Router>
                    <div>
                        <Link to="/home" className='btn btn-primary mx-2'>Home</Link>
                        <Link to="/profile" className='btn btn-primary mx-2'>Profile</Link>
                        <Link to="/aboutus" className='btn btn-primary mx-2'>About Us</Link>
                        <Link to="/contact" className='btn btn-primary mx-2'>Contact</Link>
                        <Link to="/menu" className='btn btn-primary mx-2'>Menu</Link>
                    </div>
                    <Routes>
                        <Route path='/home'  element={<Home/>}/>
                        <Route path='/profile'  element={<Profile />}/>
                        <Route path='/aboutus' element={<Aboutus />}/>
                        <Route path='/contact' element={<Contact/> }/>
                        <Route path='/menu' element={<Menu/>}/>
                    </Routes>
                </Router>
            </AppContext.Provider>
            
        </div>
    )
}


export default App; 