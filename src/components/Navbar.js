import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <div>
            
            <Link to="/home" className='btn btn-primary mx-2'>Home</Link>
            <Link to="/profile" className='btn btn-primary mx-2'>Profile</Link>
            <Link to="/aboutus" className='btn btn-primary mx-2'>About Us</Link>
            <Link to="/contact" className='btn btn-primary mx-2'>Contact</Link>
            <Link to="/menu" className='btn btn-primary mx-2'>Menu</Link>
                    
        </div>
    );
};