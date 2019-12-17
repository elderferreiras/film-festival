import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../store/actions/event';

const MovieScreen = (props) => {
    const id = props.navigation.getParam('id');
    const dispatch = useDispatch();
    const event = useSelector(state => state.event.event);

    useEffect(() => {
        dispatch(actionTypes.loadEvent(id));
    }, [dispatch, id]);

    return (
        <View style={styles.container}>
            <Text>{event? event.title : ''}</Text>
        </View>
    );
};

MovieScreen.navigationOptions = (props) => {
    return {
        headerTitle: props.navigation.getParam('title')
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
