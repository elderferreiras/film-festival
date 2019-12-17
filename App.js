import React from 'react';
import Navigator from './navigation/FestivalNavigator';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import eventsReducer from './store/reducers/events';
import eventReducer from './store/reducers/event';

const rootReducer = combineReducers({
    calendar: eventsReducer,
    event: eventReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    );
}
