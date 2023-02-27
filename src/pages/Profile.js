import  {ChangeProfile} from '../components/ChangeProfile';
import { useContext } from 'react';
import { AppContext } from '../App';

export const Profile = () =>{
    const {username} = useContext(AppContext);

    return (
        <div>
            <h1>THIS IS THE PROFILE PAGE</h1>
            <p>Username: {username}</p>
            <ChangeProfile/>
        </div>
    );
};