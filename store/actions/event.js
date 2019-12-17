import * as types from './types';
import * as queries from '../../graphql/queries';
import { client } from '../../graphql/client';

export const fetchEventStart = () => {
    return {
        type: types.FETCH_EVENT_START
    };
};

export const fetchEventSuccess = (event) => {
    return {
        type: types.FETCH_EVENT_SUCCESS,
        event: event
    };
};

export const fetchEventFail = (error) => {
    return {
        type: types.FETCH_EVENT_FAIL,
        error: error
    };
};

export const loadEvent = (id) => {
    return dispatch => {
        dispatch(fetchEventStart());

        client.query({query: queries.getEvent, variables: {id: parseInt(id)}}).then(response => {
            if (response.data && response.data.event) {
                dispatch(fetchEventSuccess(response.data.event));
            }
        }).catch(err => {
            dispatch(fetchEventFail(err));
        });
    };
};
