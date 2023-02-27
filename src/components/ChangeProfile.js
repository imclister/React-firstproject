import { useState,useContext } from 'react';
import { AppContext } from '../App';

export const ChangeProfile = () =>{
    const {setUsername} = useContext(AppContext);

    const [newUsername, setNewUsername] = useState("");

   

    return(
        <div className="container">
            <input type="text" className="form-control" onChange={ (event) => { setNewUsername(event.target.value) }} />
            <button className="btn btn-danger text-white" onClick={ () => {setUsername(newUsername)}}>Change Username</button>
        </div>
    );
};