import React, {useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../store/actions/event';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Colors from "../constants/Colors";
import {headerStyle, headerTitleStyle} from "../constants/HeaderStyle";
import HeaderButton from '../components/HeaderButton';
import { addFavorite, isFavorite,deleteFavorite } from '../store/actions/favorites';

const MovieScreen = (props) => {
    const id = props.navigation.getParam('id');
    const dispatch = useDispatch();
    const event = useSelector(state => state.event.event);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);


    useEffect(() => {
        async function checkIfFavorite() {
            return await isFavorite(id);
        }

        checkIfFavorite().then((data) => {
            props.navigation.setParams({isFav: !!data.rows._array.length});
        });
    }, [id]);  useEffect(() => {
        dispatch(actionTypes.loadEvent(id));
    }, [dispatch, id]);

    const toggleFavoriteHandler = useCallback(() => {
        async function addFav(isFav) {
            if (!isFav) {
                console.log('addFavorite');
                return await addFavorite(id);
            } else {
                console.log('deleteFavorite');
                return await deleteFavorite(id);
            }
        }

        async function checkIfFavorite() {
            return await isFavorite(id);
        }

        checkIfFavorite().then((__) => {
            addFav(!!__.rows._array.length).then((_) => {
                checkIfFavorite().then((data) => {
                    props.navigation.setParams({isFav: !!data.rows._array.length});
                });
            });
        });
    }, [id]);

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
