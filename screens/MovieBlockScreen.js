import React, {useEffect} from 'react';
import { SafeAreaView, FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import Colors from '../constants/Colors';
import { headerStyle, headerTitleStyle } from '../constants/HeaderStyle';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../store/actions/block';
import Event from '../components/Event';
import DefaultText from '../components/DefaultText';
import BlockSummary from '../components/BlockSummary';

const MovieBlockScreen = (props) => {
    const id = props.navigation.getParam('id');

    const dispatch = useDispatch();

    const block = useSelector(state => state.block.block);
    const loading = useSelector(state => state.block.loading);

    useEffect(() => {
        dispatch(actionTypes.loadBlock(id));
    }, [dispatch, id]);

    const onPressedEvent = (id, title, type) => {
        switch(type) {
            case 'BLOCK':
                props.navigation.navigate({
                    routeName: 'BlockScreen', params: {
                        id,
                        title
                    }
                });
                break;
            case 'FILM':
            default:
                props.navigation.navigate({
                    routeName: 'MovieScreen', params: {
                        id,
                        title
                    }
                });
        }
    };

    const activityIndicator =  <View style={[styles.activityIndicatorContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color={Colors.secondary} />
    </View>;

    return (
        <SafeAreaView style={styles.container}>
            <BlockSummary {...block}/>
            {loading? activityIndicator : <FlatList
                data={block.events}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Event {...item} pressed={(type) => onPressedEvent(item.id, item.title, type)}/>}
            /> }
        </SafeAreaView>
    );
};

MovieBlockScreen.navigationOptions = (props) => {
    return {
        headerTitle: props.navigation.getParam('title'),
        headerTintColor: Colors.white,
        headerTitleStyle,
        headerStyle
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MovieBlockScreen;
