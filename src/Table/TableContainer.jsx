import React from 'react';
import { connect } from "react-redux";
import { turnOnFilter } from "../store";
import Table from './Table';

const mapStateToProps = (state) => {
    return {
        tableColumns: state.tableColumns,
        isFilterTurnedOn: state.isFilterTurnedOn,
        pagesData: state.pagesData,
        arrOfMatches: state.arrOfMatches
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        catchClickOnFilter: () => {
            dispatch(turnOnFilter(true));
        }
    }
}

class TableContainer extends React.Component {
    renderTableHeaders(tds, idtr) {
        for (let key in this.props.tableColumns) {
            let id = +key;
            if (id > 0) {
                tds.push(
                    <input
                        key={key}
                        className={`tr_${idtr}-td_${id}`}
                        placeholder={this.props.tableColumns[key]}
                        onClick={this.props.catchClickOnFilter}
                        style={{ textAlign: "center" }}
                    />
                );
            } else {
                tds.push(
                    <input
                        key={key}
                        className={`tr_${idtr}-td_${id}`}
                        disabled="disabled"
                        onClick={this.props.catchClickOnFilter}
                    />
                );
            }
        }
        return tds;
    }
    renderHeadersWithNums(tds, i, idtr) {
        tds.push(
            <input
                key={i}
                className={`tr_${idtr}-td_${i}`}
                placeholder={idtr}
                style={{ textAlign: "center" }}
            />
        );
    }
    renderCellsWithData(tds, idtr) {
        let currentPageHref = window.location.href.slice(-1);
        this.renderHeadersWithNums(tds, 0, idtr);
        this.props.pagesData[currentPageHref][idtr].forEach((value, index) => {
            tds.push(
                <input
                    key={index + 1}
                    className={`tr_${idtr}-td_${index + 1}`}
                    value={value}
                />
            );
        });
        return tds;
    }
    renderTd = (idtr) => {
        let tds = [];
        idtr === 0 ? this.renderTableHeaders(tds, idtr) : this.renderCellsWithData(tds, idtr);
        return tds;
    }
    reverseRows(cell) {
        if (this.props.isFilterTurnedOn === true) {
            let cellCopyToReverse = cell.slice(1).reverse();
            let cellHeaders = [cell[0]];
            let newArray = cellHeaders.concat(cellCopyToReverse);
            return newArray;
        } else {
            return cell;
        }
    }
    renderTable = () => {
        let cell = [];
        let currentPageHref = window.location.href.slice(-1);
        cell.push(<tr key={0} id={0}>{this.renderTd(0)}</tr>);
        if (this.props.arrOfMatches === undefined) {
            for (let key in this.props.pagesData[currentPageHref]) {
                cell.push(<tr key={key} id={key}>{this.renderTd(key)}</tr>);
            }
        } else {
            for (let key in this.props.pagesData[currentPageHref]) {
                this.props.arrOfMatches[currentPageHref]?.forEach((trToHide) => {
                    if (key === trToHide) {
                        cell.push(<tr key={key} id={key}>{this.renderTd(key)}</tr>);
                    }
                });
            }
        }
        return this.reverseRows(cell);
    }
    render() {
        return (
            <>
                <Table renderTable={this.renderTable} />
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
