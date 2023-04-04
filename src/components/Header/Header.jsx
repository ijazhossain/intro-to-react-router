import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">HOME</ActiveLink>
            <ActiveLink to="/friends">Friend</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/about">ABOUT</ActiveLink>
            <ActiveLink to="/contact">CONTACT</ActiveLink>
        </nav>
    );
};

export default Header;