import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './Header.css';
class Header extends Component {
    render() {
        return (
            <nav className='header'>
                <div>
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>
                <div className='nav-item'>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/orders'>Orders</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </nav>
        );
    }
}

export default Header;