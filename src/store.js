import { createStore } from 'redux';

const INPUT_TASK_VALUE_CHANGED = 'INPUT_TASK_VALUE_CHANGED';
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
            1: ['q', 'w1', 'r', 'q1'],
            2: ['q', '2й', 'r', 'w2'],
            3: ['q', 'w3', 'z', 'e3'],
            4: ['q', '4ww', 'r', 'r4'],
            5: ['s', 'w5', 'r', 't5']
        },
        2: {
            1: ['q', 'ddw', 'l', 't6'],
            2: ['x', 'йff', 'rp', 'y7'],
            3: ['xx', 'wgg', 'zzzzz', 'u8'],
            4: ['vb', 'wbw', '1', 'i9'],
            5: ['ss', 'w6', '2', 'o10']
        },
        3: {
            1: ['1', 'wl', '6', 'a11'],
            2: ['2', 'll', '7p', 's12'],
            3: ['3x', 'waa', '8zzzz', 'd13'],
            4: ['4b', 'wssw', '9', 'f14'],
            5: ['5s', '55w', '10', 'g15']
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
