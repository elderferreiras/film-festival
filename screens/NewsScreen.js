import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NewsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>NewsScreen</Text>
        </View>
    );
};

NewsScreen.navigationOptions = {
    title: 'News Screen'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default NewsScreen;
