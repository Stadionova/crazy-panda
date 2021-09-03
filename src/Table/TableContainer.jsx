import React from 'react';
import { connect } from "react-redux";
import { changeTableData, turnOnFilter } from "../store";
import Table from './Table';
import classes from './Table.module.scss';

const mapStateToProps = (state) => {
    return {
        newTaskInputValue: state.newTaskInputValue,
        tableColumns: state.tableColumns,
        rowsValues: state.rowsValues,
        arrOfMatches: state.arrOfMatches,
        isFilterTurnedOn: state.isFilterTurnedOn,
        page: state.page
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInputValue: (event) => {
            const changedTdIndex = event.target.className.slice(-1);
            const changedTrId = event.target.parentNode.id;
            const newTdValue = event.target.value;
            dispatch(changeTableData(changedTdIndex, changedTrId, newTdValue));
        },
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
    renderCellsWithData(tds, idtr) {
        for (let i = 0; i < 5; i++) {
            let id = i;
            if (id === 0) {
                tds.push(
                    <input
                        key={i}
                        className={`tr_${idtr}-td_${id}`}
                        onChange={this.props.getInputValue}
                        placeholder={idtr}
                        style={{ textAlign: "center" }}
                    />
                );
            } else {
                tds.push(
                    <input
                        key={i}
                        className={`tr_${idtr}-td_${id}`}
                        onChange={this.props.getInputValue}
                    />
                );
            }
        }
        return tds;
    }
    renderTd = (idtr) => {
        let tds = [];
        if (idtr === 0) {
            this.renderTableHeaders(tds, idtr);
        } else {
            this.renderCellsWithData(tds, idtr);
        }
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
        let idCount = 0;
        if (this.props.arrOfMatches && this.props.arrOfMatches.length > 0) {
            for (let i = 0; i < 10; i++) {
                if (i === 0) {
                    cell.push(
                        <tr key={idCount} id={idCount} onClick={this.props.catchClickOnFilter}>
                            {this.renderTd(i)}
                        </tr>
                    );
                    idCount += 1;
                } else {
                    this.props.arrOfMatches.forEach((tableData) => {
                        if (tableData === String(idCount)) {
                            cell.push(<tr key={idCount} id={idCount}>{this.renderTd(idCount)}</tr>);
                            idCount += 1;
                        } else {
                            cell.push(<tr key={idCount} id={idCount} className={classes.hide}>{this.renderTd(idCount)}</tr>);
                            idCount += 1;
                        }
                    });
                }
            }
            return this.reverseRows(cell);
        } else {
            for (let i = 0; i <= 10; i++) {
                let id;
                if (i === 0) {
                    id = i;
                    cell.push(<tr key={i} id={id}>{this.renderTd(id)}</tr>);
                } else {
                    id = i;
                    cell.push(<tr key={i} id={id}>{this.renderTd(id)}</tr>);
                }
            }
            return this.reverseRows(cell);
        }
    }
    render() {
        console.log('this.props.page ', this.props.page);
        return (
            <>
                <Table renderTable={this.renderTable} />
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
