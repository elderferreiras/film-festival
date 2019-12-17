import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Colors from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import NewsFeedScreen from '../screens/NewsFeedScreen';
import FestivalCalendarScreen from '../screens/FestivalCalendarScreen';
import FavoriteMoviesScreen from '../screens/FavoriteMoviesScreen';
import MovieScreen from '../screens/MovieScreen';
import CalendarFilterScreen from '../screens/CalendarFilterScreen';


const configuration = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    },
    headerLayoutPreset: 'center'
};

const CalendarNavigator = createStackNavigator({
    FestivalCalendar: FestivalCalendarScreen,
    MovieScreen: MovieScreen,
    CalendarFilter: CalendarFilterScreen
}, configuration);

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoriteMoviesScreen,
    MovieScreen: MovieScreen,
}, configuration);

const NewsFeedNavigator = createStackNavigator({
    NewsFeed: NewsFeedScreen
}, configuration);

const tabScreenConfig = {
    NewsFeed: {
        screen: NewsFeedNavigator,
        navigationOptions: {
            tabBarLabel: 'News Feed',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-paper' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primary
        }
    },
    Calendar: {
        screen: CalendarNavigator,
        navigationOptions: {
            tabBarLabel: 'Festival Calendar',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-calendar' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primary
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarLabel: 'My Favorites',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-heart' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primary
        }
    }
};

const FestivalTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.secondary,
        shifting: true
    }) :
    createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.secondary
        }
    });

const MainNavigator = createDrawerNavigator({
    FilmFestival: {
        screen: FestivalTabNavigator,
        navigationOptions: {
            drawerLabel: 'Film Festival'
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.tertiary,
    }
});

export default createAppContainer(MainNavigator);
