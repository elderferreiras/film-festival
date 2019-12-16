import * as types from '../actions/types';
import { updateObject } from '../../utility';

const initialState = {
    events: [],
    loading: true,
    err: null
};

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_EVENTS_START:
            return fetchEventsStart(state, action);
        case types.FETCH_EVENTS_SUCCESS:
            return fetchEventsSuccess(state, action);
        case types.FETCH_EVENTS_FAIL:
            return fetchEventsFail(state, action);
        default:
            return state;
    }
};

const fetchEventsStart = (state, action) => {
    return updateObject(
        state,
        {
            loading: true,
            error: null
        }
    );
};

const fetchEventsSuccess = (state, action) => {
    return updateObject(
        state,
        {
            loading: false,
            events: action.events,
            error: null
        }
    );
};

const fetchEventsFail = (state, action) => {
    return updateObject(
        state,
        {
            loading: false,
            error: action.error
        }
    );
};

export default eventsReducer;
