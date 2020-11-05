import { apiTypeCreator, actionCreator } from '../utils/redux';

const PREFIX = 'INCOME_EXPENDITURE_DATA';

const INITIAL_STATE = {
    data: null,
    loading: false,
    error: null
}

const types = {
   ...apiTypeCreator(PREFIX) 
}

const actions = {
    fetch: actionCreator(types[PREFIX].FETCH),
    success: actionCreator(types[PREFIX].SUCCESS),
    error: actionCreator(types[PREFIX].ERROR)
}

const reducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case types[PREFIX].FETCH: {
            return {
                ...state,
                loading: true,
            }
        }
        case types[PREFIX].SUCCESS: {
            return {
                ...state,
                loading: false,
                data: payload
            }
        }
        case types[PREFIX].ERROR: {
            return {
                ...state,
                loading: false,
                data: null,
                error: payload
            }
        }
        default:
            return state;
    }
}

const getState = state => state;

const selectors = {
    getState
}

export { types, PREFIX, actions, selectors};
export default reducer;