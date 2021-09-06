import React from 'react';
import { connect } from "react-redux";
import { searchInputValueInTable, showTheseRowses } from "../store";
import Search from './Search';

const mapStateToProps = function (state) {
    return {
        newTaskInputValue: state.newTaskInputValue,
        pagesData: state.pagesData
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
        let currentPageHref = window.location.href.slice(-1);
        if (this.props.newTaskInputValue !== '') {
            let arrOfMatches = {};
            for (let key in this.props.pagesData[currentPageHref]) {
                this.props.pagesData[currentPageHref][key] && this.props.pagesData[currentPageHref][key].map(task => {
                    if (task === this.props.newTaskInputValue) {
                        if (arrOfMatches[currentPageHref] && arrOfMatches[currentPageHref].length > 0) {
                            arrOfMatches[currentPageHref].push(key);
                        } else {
                            arrOfMatches[currentPageHref] = [];
                            arrOfMatches[currentPageHref].push(key);
                        }
                    }
                    return arrOfMatches;
                });
            }
            if (arrOfMatches && arrOfMatches[currentPageHref] && arrOfMatches[currentPageHref].length > 0) {
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
