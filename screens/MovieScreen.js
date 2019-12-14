import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MovieScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>MovieScreen</Text>
        </View>
    );
};

MovieScreen.navigationOptions = {
    title: 'Movie Screen'
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
