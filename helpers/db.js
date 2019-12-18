import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('favorites.db');

export const init = () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql('CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY NOT NULL, event_ID INTEGER NOT NULL)',
				[],
				() => {
					resolve();
				},
				(_, err) => {
					reject(err);
				})
		});
	});
};

export const insertFavorite = (event_id) => {
	return new Promise((resolve, reject) => {
		db.transaction(tx => {
			tx.executeSql(
				'INSERT INTO favorites (event_id) VALUES (?);',
				[event_id],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
};

export const removeFavorite = (event_id) => {
	return new Promise((resolve, reject) => {
		db.transaction(tx => {
			tx.executeSql(
				'DELETE FROM favorites WHERE event_id = ?;',
				[event_id],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
};

export const fetchFavorites = () => {
	return new Promise((resolve, reject) => {
		db.transaction(tx => {
			tx.executeSql(
				'SELECT * FROM favorites',
				[],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
};

export const fetchFavorite = (event_id) => {
	return new Promise((resolve, reject) => {
		db.transaction(tx => {
			tx.executeSql(
				'SELECT * FROM favorites WHERE event_id = ?',
				[event_id],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
};
