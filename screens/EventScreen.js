import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from "../components/UI/HeaderButton";
import { headerStyle, headerTitleStyle } from '../constants/HeaderStyle';
import Colors from '../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite, isFavorite } from '../store/actions/favorites';
import { loadEvent } from '../store/actions/event';
import { loadBlock } from '../store/actions/block';
import Film from '../components/Film/Film';
import Block from '../components/Block/Block';
import Loading from '../components/UI/Loading';

const EventScreen = (props) => {
    const id = props.navigation.getParam('id');
    const type = props.navigation.getParam('type');

    const dispatch = useDispatch();

    let event = null;
    let loading = null;

    if (type === 'FILM') {
        event = useSelector(state => state.event.event);
        loading = useSelector(state => state.event.loading);
    } else if (type === 'BLOCK') {
        event = useSelector(state => state.block.block);
        loading = useSelector(state => state.block.loading);
    }

    useEffect(() => {
        if (type === 'FILM') {
            dispatch(loadEvent(id, type));
        } else if (type === 'BLOCK') {
            dispatch(loadBlock(id, type));
        }
    }, [dispatch, id, type]);

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
    }, [id]);

    const toggleFavoriteHandler = useCallback(() => {
        async function addFav(isFav) {
            if (!isFav) {
                return await addFavorite(id);
            } else {
                return await deleteFavorite(id);
            }
        }

        async function checkIfFavorite() {
            return await isFavorite(id);
        }

        checkIfFavorite().then((__) => {
            addFav(!!__.rows._array.length).then((_) => {
                props.navigation.setParams({isFav: !!!__.rows._array.length});
            });
        });
    }, [id]);

    const onPressedEvent = (id, title, type) => {
        switch (type) {
            case 'FILM':
            default:
                props.navigation.navigate({
                    routeName: 'EventScreen', params: {
                        id,
                        title,
                        type
                    }
                });
        }
    };

    let details = null;

    if (event && event.type === 'BLOCK') {
        details = <Block event={event} pressed={onPressedEvent}/>;
    } else if (event && event.type === 'FILM') {
        details = <Film {...event}/>;
    }

    return (
        <SafeAreaView style={styles.container}>
          {loading? <Loading/> : details}
        </SafeAreaView>
    );
};

EventScreen.navigationOptions = (props) => {
    let headerRight = null;

    if (props.navigation.getParam('event')) {
        headerRight = (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName={props.navigation.getParam('isFav') ? "ios-heart" : "ios-heart-empty"}
                    onPress={props.navigation.getParam('toggleFav')}
                />
            </HeaderButtons>
        );
    }
    return {
        headerTitle: props.navigation.getParam('title'),
        headerTintColor: Colors.white,
        headerTitleStyle,
        headerStyle,
        headerRight
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


export default EventScreen;
