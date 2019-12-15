import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { headerStyle, headerTitleStyle } from '../constants/HeaderStyle';

const CalendarFilterScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>CalendarFilterScreen</Text>
        </View>
    );
};

CalendarFilterScreen.navigationOptions = (props) => {
    return {
        headerTitle: 'Filter',
        headerTintColor: Colors.white,
        headerTitleStyle,
        headerStyle
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

export default CalendarFilterScreen;
