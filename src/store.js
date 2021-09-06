import { createStore } from 'redux';

const INPUT_TASK_VALUE_CHANGED = 'INPUT_TASK_VALUE_CHANGED';
const TABLE_DATA_WAS_CHANGED = 'TABLE_DATA_WAS_CHANGED';
const SHOW_THESE_ROWSES_AFTER_SEARCH = 'SHOW_THESE_ROWSES_AFTER_SEARCH';
const TURN_ON_FILTER = 'TURN_ON_FILTER';

const initialState = {
    newTaskInputValue: '',
    wasPaginationClicked: false,
    isPageWasChanged: false,
    arrOfMatches: {},
    isFilterTurnedOn: false,
    tableColumns: {
        0: '',
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D'
    },
    pagesData: {
        1: {
            1: ['q', 'w', 'r', 'f'],
            2: ['q', 'й', 'r', 'п'],
            3: ['q', 'w', 'z', 'f'],
            4: ['q', 'ww', 'r', 'у'],
            5: ['s', 'w', 'r', 'f']
        },
        2: {
            1: ['q', 'w', 'l', 'f'],
            2: ['x', 'й', 'rp', 'п'],
            3: ['xx', 'w', 'zzzzz', 'f'],
            4: ['vb', 'ww', '1', 'у'],
            5: ['ss', 'w', '2', 'f']
        },
        3: {
            1: ['1', 'w', '6', 'f'],
            2: ['2', 'й', '7p', 'п'],
            3: ['3x', 'w', '8zzzz', 'f'],
            4: ['4b', 'ww', '9', 'у'],
            5: ['5s', 'w', '10', 'f']
        }
    }
};

function toDoListReducer(state = initialState, action) {
    switch (action.type) {
        case INPUT_TASK_VALUE_CHANGED:
            return {
                ...state,
                newTaskInputValue: action.inputValue
            }
        case SHOW_THESE_ROWSES_AFTER_SEARCH:
            console.log('action.arrOfMatches ', action.arrOfMatches);
            return {
                ...state,
                arrOfMatches: action.arrOfMatches
            }
        case TURN_ON_FILTER:
            if (state.isFilterTurnedOn === false && action.isFilterTurnedOn === true) {
                return {
                    ...state,
                    isFilterTurnedOn: action.isFilterTurnedOn
                }
            } else {
                return {
                    ...state,
                    isFilterTurnedOn: false
                }
            }
        case TABLE_DATA_WAS_CHANGED:
            let pagesDataCopy = {
                ...state.pagesData
            }

            let tr = [action.changedTrId];
            let td = [action.changedTdIndex];
            let currentPageHref = window.location.href.slice(-1);

            if (pagesDataCopy[currentPageHref] && pagesDataCopy[currentPageHref][tr]) {
                if (pagesDataCopy[currentPageHref][tr][td - 1]) {
                    pagesDataCopy[currentPageHref][tr].length = td;
                    pagesDataCopy[currentPageHref][tr].splice(td, 0, action.newTdValue);
                } else {
                    pagesDataCopy[currentPageHref][tr].length = td;
                    pagesDataCopy[currentPageHref][tr][td] = action.newTdValue;
                }
            } else if (!pagesDataCopy[currentPageHref]) {
                pagesDataCopy[currentPageHref] = {};
                pagesDataCopy[currentPageHref][tr] = [];
                pagesDataCopy[currentPageHref][tr].length = td;
                pagesDataCopy[currentPageHref][tr].splice(td, 0, action.newTdValue);
            } else {
                pagesDataCopy[currentPageHref][tr] = [];
                pagesDataCopy[currentPageHref][tr].length = td;
                pagesDataCopy[currentPageHref][tr].splice(td, 0, action.newTdValue);
            }
            return {
                ...state,
                pagesData: pagesDataCopy
            }
        default:
            return state;
    }
}

const store = createStore(toDoListReducer, initialState);

export const searchInputValueInTable = (inputValue) => {
    return {
        type: INPUT_TASK_VALUE_CHANGED,
        inputValue: inputValue
    }
};

export const changeTableData = (changedTdIndex, changedTrId, newTdValue) => {
    return {
        type: TABLE_DATA_WAS_CHANGED,
        changedTdIndex: changedTdIndex,
        changedTrId: changedTrId,
        newTdValue: newTdValue
    }
};

export const showTheseRowses = (arrOfMatches) => {
    return {
        type: SHOW_THESE_ROWSES_AFTER_SEARCH,
        arrOfMatches: arrOfMatches
    }
};

export const turnOnFilter = (isFilterTurnedOn) => {
    return {
        type: TURN_ON_FILTER,
        isFilterTurnedOn: isFilterTurnedOn
    }
};

export default store;
