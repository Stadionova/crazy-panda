import React from 'react';
import classes from './Pagination.module.scss';
import { NavLink } from "react-router-dom";

const Pagination = (props) => {
    return (
        <div className={classes.pagination}>
            <NavLink to='/page/1' className={classes.first}>1</NavLink>
            <NavLink to='/page/2' className={classes.second}>2</NavLink>
            <NavLink to='/page/3' className={classes.third}>3</NavLink>
            <NavLink to='/page/4' className={classes.fourth}>4</NavLink>
            <NavLink to='/page/5' className={classes.fifth}>5</NavLink>
            <NavLink to='/page/6' className={classes.sixth}>6</NavLink>
        </div>
    )
}

export default Pagination;
