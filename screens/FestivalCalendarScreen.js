import React, { useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import HeaderButton from "../components/HeaderButton";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import { headerTitleStyle, headerStyle } from '../constants/HeaderStyle';
import Colors from '../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../store/actions/events';
import Event from '../components/Event';
import Constants from 'expo-constants';

const FestivalCalendarScreen = (props) => {
    const events = useSelector(state => state.calendar.events);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionTypes.loadEvents());
    }, [dispatch]);

    const onPressedEvent = (id, title) => {
        props.navigation.navigate({
            routeName: 'MovieScreen', params: {
                id,
                title
            }
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={events}
                renderItem={({ item }) => <Event {...item} pressed={() => onPressedEvent(item.id, item.title)}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

FestivalCalendarScreen.navigationOptions = (props) => {
    return {
        headerTitle: 'FESTIVAL SCHEDULE',
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
        flex: 1
    },
});

export default FestivalCalendarScreen;
