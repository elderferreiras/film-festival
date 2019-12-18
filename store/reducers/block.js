import * as types from '../actions/types';
import { updateObject } from '../../utility';

const initialState = {
    block: {},
    loading: true,
    err: null
};

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_BLOCK_START:
            return fetchBlockStart(state, action);
        case types.FETCH_BLOCK_SUCCESS:
            return fetchBlockSuccess(state, action);
        case types.FETCH_BLOCK_FAIL:
            return fetchBlockFail(state, action);
        default:
            return state;
    }
};

const fetchBlockStart = (state, action) => {
    return updateObject(
        state,
        {
            loading: true,
            error: null
        }
    );
};

const fetchBlockSuccess = (state, action) => {
    return updateObject(
        state,
        {
            loading: false,
            block: action.block,
            error: null
        }
    );
};

const fetchBlockFail = (state, action) => {
    return updateObject(
        state,
        {
            loading: false,
            error: action.error
        }
    );
};

export default eventReducer;
