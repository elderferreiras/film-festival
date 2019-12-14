import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderButton from "../components/HeaderButton";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

const FestivalCalendarScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>FestivalCalendarScreen</Text>
        </View>
    );
};

FestivalCalendarScreen.navigationOptions = (props) => {
    return {
        headerTitle: 'Festival Calendar',
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
                    iconName="ios-options"
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

export default FestivalCalendarScreen;
