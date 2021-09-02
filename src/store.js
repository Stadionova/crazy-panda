import { createStore } from 'redux';

const INPUT_TASK_VALUE_CHANGED = 'INPUT_TASK_VALUE_CHANGED';
const TABLE_DATA_WAS_CHANGED = 'TABLE_DATA_WAS_CHANGED';
const SHOW_THESE_ROWSES_AFTER_SEARCH = 'SHOW_THESE_ROWSES_AFTER_SEARCH';
const TURN_ON_FILTER = 'TURN_ON_FILTER';

const initialState = {
    newTaskInputValue: '',
    tableColumns: {
        0: '',
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D'
    },
    rowsValues: {},
    arrOfMatches: [],
    isFilterTurnedOn: false
};

function toDoListReducer(state = initialState, action) {
    switch (action.type) {
        case INPUT_TASK_VALUE_CHANGED:
            return {
                ...state,
                newTaskInputValue: action.inputValue
            }
        case SHOW_THESE_ROWSES_AFTER_SEARCH:
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
            let stateCopy = {
                ...state.rowsValues
            }

            let tr = [action.changedTrId];
            let td = [action.changedTdIndex];

            if (stateCopy[tr]) {
                if (stateCopy[tr][td - 1]) {
                    stateCopy[tr][td - 1] = action.newTdValue;
                } else {
                    stateCopy[tr].push(action.newTdValue);
                }
            } else {
                stateCopy[tr] = [action.newTdValue];
            }

            return {
                ...state,
                rowsValues: stateCopy
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
