import { useContext } from "react";
import { AppContext } from "../App";



export const Home = () =>{
    const {username} = useContext(AppContext);
    return (
      <div>
            <h1>THIS IS THE HOME PAGE</h1>
            <p>Username: {username}</p>
      </div>
    );
};