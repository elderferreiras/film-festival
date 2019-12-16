import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderButton from "../components/HeaderButton";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import { headerTitleStyle, headerStyle } from '../constants/HeaderStyle';
import Colors from '../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../store/actions/events';
import Event from '../components/Event';

const FestivalCalendarScreen = (props) => {
    const events = useSelector(state => state.calendar.events);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionTypes.loadEvents());
    }, [dispatch]);

    return (
        <View style={styles.container}>
            {events.map(event => <Event key={event.id} {...event}/>)}
        </View>
    );
};

FestivalCalendarScreen.navigationOptions = (props) => {
    return {
        headerTitle: 'Calendar',
        headerTintColor: Colors.white,
        headerTitleStyle,
        headerStyle,
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    props.navigation.toggleDrawer();
                }}/>
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Filter"
                    iconName="ios-options" onPress={() => {
                        props.navigation.navigate('CalendarFilter')
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FestivalCalendarScreen;
