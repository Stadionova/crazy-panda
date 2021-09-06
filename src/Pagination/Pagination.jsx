import React from 'react';
import classes from './Pagination.module.scss';
import { NavLink } from "react-router-dom";

const Pagination = () => {
    return (
        <div className={classes.pagination}>
            <NavLink to={{ pathname: '/page/1', page: 1 }} >1</NavLink>
            <NavLink to={{ pathname: '/page/2', page: 2 }} >2</NavLink>
            <NavLink to={{ pathname: '/page/3', page: 3 }} >3</NavLink>
            {/* <NavLink to={{ pathname: '/page/4', page: 4 }} >4</NavLink>
            <NavLink to={{ pathname: '/page/5', page: 5 }} >5</NavLink>
            <NavLink to={{ pathname: '/page/6', page: 6 }} >6</NavLink> */}
        </div>
    )
}

export default Pagination;
