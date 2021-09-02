import React from 'react';
import classes from './Search.module.scss';

const Search = (props) => {
    return (
        <div className={classes.container}>
            <div>
                <input
                    placeholder='поиск по таблице'
                    onChange={props.getInputValue}
                />
            </div>
        </div>
    )
}

export default Search;
