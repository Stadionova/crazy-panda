import React from 'react';
import { turnOnFilter } from "../store";
import Table from './Table';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../store';

const TableContainer = () => {
    const arrOfMatches = useSelector((state) => state.arrOfMatches);
    const pagesData = store.getState().pagesData;

    const [isFilterTurnedOn, catchClickOnFilter] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(turnOnFilter(isFilterTurnedOn));
    });

    const tableColumns = {
        0: '',
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D'
    }

    function changeStatus() {
        if (isFilterTurnedOn === true) {
            catchClickOnFilter(false);
        } else {
            catchClickOnFilter(true);
        }
    }

    function renderTableHeaders(tds, idtr) {
        for (let key in tableColumns) {
            if (+key > 0) {
                tds.push(
                    <td key={key}
                        className={`tr_${idtr}-td_${+key}`}
                        onClick={changeStatus}
                        style={{ textAlign: "center" }}>
                        {tableColumns[key]}
                    </td>
                );
            } else {
                tds.push(
                    <td key={key}
                        className={`tr_${idtr}-td_${+key}`}
                        disabled="disabled"
                        onClick={changeStatus}
                    >
                    </td>
                );
            }
        }
        return tds;
    }

    function renderHeadersWithNums(tds, i, idtr) {
        tds.push(
            <td key={i}
                className={`tr_${idtr}-td_${i}`}
                style={{ textAlign: "center" }}>
                {idtr}
            </td>
        );
    }

    function renderCellsWithData(tds, idtr) {
        let currentPageHref = window.location.href.slice(-1);
        renderHeadersWithNums(tds, 0, idtr);
        if (currentPageHref === '/') {
            pagesData[1][idtr].forEach((value, index) => {
                tds.push(
                    <td key={index + 1}
                        className={`tr_${idtr}-td_${index + 1}`}>
                        {value}
                    </td>
                );
            });
        } else {
            pagesData[currentPageHref][idtr].forEach((value, index) => {
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

    function renderTd(idtr) {
        let tds = [];
        return idtr === 0
            ? renderTableHeaders(tds, idtr)
            : renderCellsWithData(tds, idtr);
    }

    function reverseRows(cell) {
        if (isFilterTurnedOn === true) {
            let cellCopyToReverse = cell.slice(1).reverse();
            let cellHeaders = [cell[0]];
            let newArray = cellHeaders.concat(cellCopyToReverse);
            return newArray;
        } else {
            return cell;
        }
    }

    function renderTable() {
        let cell = [];
        let currentPageHref;

        if (window.location.href.slice(-1) === '/') {
            currentPageHref = 1;
        } else {
            currentPageHref = window.location.href.slice(-1);
        }

        cell.push(<tr key={0} id={0}>{renderTd(0)}</tr>);
        if (arrOfMatches === undefined) {
            if (currentPageHref === '/') {
                for (let key in pagesData[1]) {
                    cell.push(<tr key={key} id={key}>{renderTd(key)}</tr>);
                }
            } else {
                for (let key in pagesData[currentPageHref]) {
                    cell.push(<tr key={key} id={key}>{renderTd(key)}</tr>);
                }
            }
        } else {
            for (let key in pagesData[currentPageHref]) {
                arrOfMatches[currentPageHref]?.forEach((trToHide) => {
                    if (key === trToHide) {
                        cell.push(<tr key={key} id={key}>{renderTd(key)}</tr>);
                    }
                });
            }
        }
        return reverseRows(cell);
    }

    return (
        <>
            <Table renderTable={renderTable} />
        </>
    )

}

export default TableContainer;
