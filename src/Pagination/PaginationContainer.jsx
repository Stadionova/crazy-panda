import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './Pagination.module.scss';

const PaginationContainer = () => {
    return (
        <div className={classes.pagination}>
            <NavLink to={{ pathname: '/page/1', page: 1 }}  >1</NavLink>
            <NavLink to={{ pathname: '/page/2', page: 2 }}  >2</NavLink>
            <NavLink to={{ pathname: '/page/3', page: 3 }}  >3</NavLink>
        </div>
    )
}

export default PaginationContainer;
