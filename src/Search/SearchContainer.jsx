import React from 'react';
import { connect } from "react-redux";
import { searchInputValueInTable, showTheseRowses } from "../store";
import Search from './Search';

const mapStateToProps = function (state) {
    return {
        newTaskInputValue: state.newTaskInputValue,
        rowsValues: state.rowsValues
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInputValue: (event) => {
            const newTdValue = event.target.value;
            dispatch(searchInputValueInTable(newTdValue));
        },
        rowsToHide: (arrOfMatches) => {
            dispatch(showTheseRowses(arrOfMatches));
        }
    }
}

class SearchContainer extends React.Component {
    render() {
        if (this.props.newTaskInputValue !== '') {
            let arrOfMatches = [];
            for (let key in this.props.rowsValues) {
                this.props.rowsValues[key] && this.props.rowsValues[key].map(task => {
                    if (task === this.props.newTaskInputValue) {
                        arrOfMatches.push(key);
                    }
                    return arrOfMatches;
                });
            }
            if (arrOfMatches.length > 0) {
                this.props.rowsToHide(arrOfMatches);
            }
        } else {
            this.props.rowsToHide();
        }
        return (
            <>
                <Search getInputValue={this.props.getInputValue} />
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
