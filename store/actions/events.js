import * as types from './types';
import * as queries from '../../graphql/queries';
import { client } from '../../graphql/client';

export const fetchEventsStart = () => {
    return {
        type: types.FETCH_EVENTS_START
    };
};

export const fetchEventsSuccess = (events) => {
    return {
        type: types.FETCH_EVENTS_SUCCESS,
        events: events
    };
};

export const fetchEventsFail = (error) => {
    return {
        type: types.FETCH_EVENTS_FAIL,
        error: error
    };
};

export const loadEvents = () => {
    return dispatch => {
        dispatch(fetchEventsStart());

        client.query({query: queries.listEvents}).then(response => {
           if (response.data && response.data.events) {
               dispatch(fetchEventsSuccess(response.data.events));
           }
        }).catch(err => {
            dispatch(fetchEventsFail(err));
        });
    };
};
