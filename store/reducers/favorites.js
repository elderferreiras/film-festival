import * as types from '../actions/types';
import { updateObject } from '../../utility';

const initialState = {
	favorites: [],
	loading: true,
	err: null
};

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_FAVORITES_START:
			return fetchFavoritesStart(state, action);
		case types.FETCH_FAVORITES_SUCCESS:
			return fetchFavoritesSuccess(state, action);
		case types.FETCH_EVENT_FAIL:
			return fetchFavoritesFail(state, action);
		default:
			return state;
	}
};

const fetchFavoritesStart = (state, action) => {
	return updateObject(
		state,
		{
			loading: true,
			error: null
		}
	);
};

const fetchFavoritesSuccess = (state, action) => {
	return updateObject(
		state,
		{
			loading: false,
			favorites: action.favorites,
			error: null
		}
	);
};

const fetchFavoritesFail = (state, action) => {
	return updateObject(
		state,
		{
			loading: false,
			error: action.error
		}
	);
};

export default favoritesReducer;
