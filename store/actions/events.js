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

        client.query({query: queries.getCalendar}).then(response => {
           if (response.data && response.data.calendar) {
               dispatch(fetchEventsSuccess(response.data.calendar));
           }
        }).catch(err => {
            dispatch(fetchEventsFail(err));
        });
    };
};
