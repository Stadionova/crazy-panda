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
        let currentPageHref;
        if (this.props.newTaskInputValue !== '') {
            let arrOfMatches = {};
            if (window.location.href.slice(-1) === '/') {
                currentPageHref = 1;
            } else {
                currentPageHref = window.location.href.slice(-1);
            }
            for (let key in this.props.pagesData[currentPageHref]) {
                this.props.pagesData[currentPageHref][key].map(task => {
                    if (task === this.props.newTaskInputValue) {
                        if (arrOfMatches[currentPageHref]?.length > 0) {
                            arrOfMatches[currentPageHref].push(key);
                        } else {
                            arrOfMatches[currentPageHref] = [];
                            arrOfMatches[currentPageHref].push(key);
                        }
                    }
                    return arrOfMatches;
                });
            }
            if (arrOfMatches[currentPageHref]?.length > 0) {
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
