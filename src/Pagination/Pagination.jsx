import React from 'react';
import classes from './Pagination.module.scss';
import { NavLink } from "react-router-dom";

const Pagination = () => {
    return (
        <div className={classes.pagination}>
            <NavLink exact to={{ pathname: '/crazy-panda/1', page: 1 }} >1</NavLink>
            <NavLink to={{ pathname: '/crazy-panda/2', page: 2 }} >2</NavLink>
            <NavLink to={{ pathname: '/crazy-panda/3', page: 3 }} >3</NavLink>
        </div>
    )
}

export default Pagination;
