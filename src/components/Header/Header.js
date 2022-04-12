import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../logo.svg';
import './Header.css';
const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        navigate('/');
    }
    return (
        <nav className='header'>
            <div>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className='nav-item'>
                <Link to='/shop'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/about'>About</Link>
                {
                    user ?
                        <button onClick={handleSignOut}>Sign Out</button>
                        : <Link to='/login'>Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;