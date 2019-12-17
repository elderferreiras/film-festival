import * as types from '../actions/types';
import { updateObject } from '../../utility';

const initialState = {
    event: {},
    loading: true,
    err: null
};

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_EVENT_START:
            return fetchEventStart(state, action);
        case types.FETCH_EVENT_SUCCESS:
            return fetchEventSuccess(state, action);
        case types.FETCH_EVENT_FAIL:
            return fetchEventFail(state, action);
        default:
            return state;
    }
};

const fetchEventStart = (state, action) => {
    return updateObject(
        state,
        {
            loading: true,
            error: null
        }
    );
};

const fetchEventSuccess = (state, action) => {
    return updateObject(
        state,
        {
            loading: false,
            event: action.event,
            error: null
        }
    );
};

const fetchEventFail = (state, action) => {
    return updateObject(
        state,
        {
            loading: false,
            error: action.error
        }
    );
};

export default eventReducer;
