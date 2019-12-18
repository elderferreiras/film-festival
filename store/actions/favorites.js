import * as types from './types';
import * as queries from '../../graphql/queries';
import {client} from '../../graphql/client';
import {insertFavorite, fetchFavorite, removeFavorite} from '../../helpers/db';

export const fetchFavoritesStart = () => {
	return {
		type: types.FETCH_FAVORITES_START
	};
};

export const fetchFavoritesSuccess = (favorites) => {
	return {
		type: types.FETCH_FAVORITES_SUCCESS,
		favorites: favorites
	};
};

export const fetchFavoritesFail = (error) => {
	return {
		type: types.FETCH_FAVORITES_FAIL,
		error: error
	};
};

export const loadFavorites = () => {
	return dispatch => {
		dispatch(fetchFavoritesStart());

		client.query({query: queries.getCalendar}).then(response => {
			if (response.data && response.data.calendar) {
				dispatch(fetchFavoritesSuccess(response.data.calendar));
			}
		}).catch(err => {
			dispatch(fetchFavoritesFail(err));
		});
	};
};

export const addFavorite = async (id) => {
	return await insertFavorite(id);
};


export const deleteFavorite = async (id) => {
	return await removeFavorite(id);
};

export const isFavorite = async (id) => {
	return await fetchFavorite(id);
};
