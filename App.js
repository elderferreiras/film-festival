import React, {useState} from 'react';
import Navigator from './navigation/FestivalNavigator';
import { AppLoading } from "expo";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import eventsReducer from './store/reducers/events';
import eventReducer from './store/reducers/event';
import blockReducer from './store/reducers/block';
import favoritesReducer from './store/reducers/favorites';
import * as Font from 'expo-font';
import { init } from './helpers/db';

init().then(() => {
    console.log('Database: initialized.');
}).catch(err => {
    console.log('Database initialization failed.');
    console.log(err);
});

const rootReducer = combineReducers({
    calendar: eventsReducer,
    event: eventReducer,
    block: blockReducer,
    favorites: favoritesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'open-sans-semi-bold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    })
};

export default function App() {
    const [loadedFonts, setLoadedFonts] = useState(false);

    if(!loadedFonts) {
        return <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setLoadedFonts(true)}
          onError={(err) => console.log(err)}
        />;
    }

    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    );
}
