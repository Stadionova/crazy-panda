import React from 'react';
import classes from './Table.module.scss';

const Table = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.row}>
                <div className={classes.board}>
                    <table className={classes.table}>
                        <tbody>
                            {props.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table;
