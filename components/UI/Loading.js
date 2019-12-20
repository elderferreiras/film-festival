import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';

const Loading = () => {
    return <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={Colors.secondary}/>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});

export default Loading;
