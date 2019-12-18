import React, {useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../store/actions/event';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Colors from "../constants/Colors";
import {headerStyle, headerTitleStyle} from "../constants/HeaderStyle";
import HeaderButton from '../components/HeaderButton';

const MovieScreen = (props) => {
    const id = props.navigation.getParam('id');
    const dispatch = useDispatch();
    const event = useSelector(state => state.event.event);

    useEffect(() => {
        dispatch(actionTypes.loadEvent(id));
    }, [dispatch, id]);

    const toggleFavoriteHandler = useCallback(() => {
        //dispatch(toggleFavorite(id));
    }, [dispatch, id]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);


    useEffect(() => {
        props.navigation.setParams({isFav: true});
    }, []);


    return (
        <View style={styles.container}>
            <Text>{event? event.title : ''}</Text>
            <Text>{event? event.description : ''}</Text>
        </View>
    );
};

MovieScreen.navigationOptions = (props) => {
    return {
        headerTitle: props.navigation.getParam('title'),
        headerTintColor: Colors.white,
        headerTitleStyle,
        headerStyle,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName={props.navigation.getParam('isFav')? "ios-heart" : "ios-heart-empty"}
                    onPress={props.navigation.getParam('toggleFav')}
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

export default MovieScreen;
