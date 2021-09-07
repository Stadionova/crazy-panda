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
            if (+key > 0) {
                tds.push(
                    <td key={key}
                        className={`tr_${idtr}-td_${+key}`}
                        onClick={this.props.catchClickOnFilter}
                        style={{ textAlign: "center" }}>
                        {this.props.tableColumns[key]}
                    </td>
                );
            } else {
                tds.push(
                    <td key={key}
                        className={`tr_${idtr}-td_${+key}`}
                        disabled="disabled"
                        onClick={this.props.catchClickOnFilter}>
                    </td>
                );
            }
        }
        return tds;
    }
    renderHeadersWithNums(tds, i, idtr) {
        tds.push(
            <td key={i}
                className={`tr_${idtr}-td_${i}`}
                style={{ textAlign: "center" }}>
                {idtr}
            </td>
        );
    }
    renderCellsWithData(tds, idtr) {
        let currentPageHref = window.location.href.slice(-1);
        this.renderHeadersWithNums(tds, 0, idtr);
        if (typeof (currentPageHref) !== Number) {
            this.props.pagesData[1][idtr].forEach((value, index) => {
                tds.push(
                    <td key={index + 1}
                        className={`tr_${idtr}-td_${index + 1}`}>
                        {value}
                    </td>
                );
            });
        } else {
            this.props.pagesData[currentPageHref][idtr].forEach((value, index) => {
                tds.push(
                    <td key={index + 1}
                        className={`tr_${idtr}-td_${index + 1}`}>
                        {value}
                    </td>
                );
            });
        }
        return tds;
    }
    renderTd = (idtr) => {
        let tds = [];
        return idtr === 0
            ? this.renderTableHeaders(tds, idtr)
            : this.renderCellsWithData(tds, idtr);
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
            if (typeof (currentPageHref) !== Number) {
                console.log('this.props.pagesData ', this.props.pagesData);
                for (let key in this.props.pagesData[1]) {
                    cell.push(<tr key={key} id={key}>{this.renderTd(key)}</tr>);
                }
            } else {
                for (let key in this.props.pagesData[currentPageHref]) {
                    cell.push(<tr key={key} id={key}>{this.renderTd(key)}</tr>);
                }
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
