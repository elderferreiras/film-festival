import * as types from './types';
import * as queries from '../../graphql/queries';
import { client } from '../../graphql/client';

export const fetchBlockStart = () => {
    return {
        type: types.FETCH_BLOCK_START
    };
};

export const fetchBlockSuccess = (block) => {
    return {
        type: types.FETCH_BLOCK_SUCCESS,
        block: block
    };
};

export const fetchBlockFail = (error) => {
    return {
        type: types.FETCH_BLOCK_FAIL,
        error: error
    };
};

export const loadBlock = (id) => {
    return dispatch => {
        dispatch(fetchBlockStart());

        client.query({query: queries.getEvent, variables: {id: parseInt(id)}}).then(response => {
            if (response.data && response.data.event) {
                dispatch(fetchBlockSuccess(response.data.event));
            }
        }).catch(err => {
            dispatch(fetchBlockFail(err));
        });
    };
};
