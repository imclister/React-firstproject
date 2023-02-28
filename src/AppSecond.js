
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Aboutus } from './pages/Aboutus';
import { Contact } from './pages/Contact';
import { Menu } from './pages/Menu';
import { Profile } from './pages/Profile';
import { useState ,createContext } from 'react';
import { Navbar } from './components/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext();

function App() {

    // const client = new QueryClient(); DEFAULT
    const client = new QueryClient({
        defaultOptions : {
            queries: {
                refetchOnWindowFocus : true, //IF SET TO TRUE, IT WILL REFECT DATA FROM API EVERY TIME YOU SWITCH TAB
            },
        },
    });

    const [username, setUsername] = useState("imclister")

    const handleUsernameChange = (newUsername) =>{
        setUsername(newUsername);
    };

    return(
        <div className='App'>
            <QueryClientProvider client={client}>
                <AppContext.Provider value={{ username,setUsername }}>
                    <Router>
                        <Navbar/>
                        <Routes>
                            <Route path='/home'  element={<Home/>}/>
                            <Route path='/profile'  element={<Profile />}/>
                            <Route path='/aboutus' element={<Aboutus />}/>
                            <Route path='/contact' element={<Contact/> }/>
                            <Route path='/menu' element={<Menu/>}/>
                        </Routes>
                    </Router>
                </AppContext.Provider>
            </QueryClientProvider>
        </div>
    )
}


export default App; 