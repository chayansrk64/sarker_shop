import React from 'react';
import './ActiveLinks.css'
import { NavLink } from 'react-router-dom';

const ActiveLinks = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({isActive}) => isActive ? "active" : ""}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLinks;