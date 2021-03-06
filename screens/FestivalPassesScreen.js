import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from "../components/UI/HeaderButton";
import { headerTitleStyle, headerStyle } from '../constants/HeaderStyle';
import Colors from '../constants/Colors';

const FestivalPassesScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>FestivalPassesScreen</Text>
        </View>
    );
};

FestivalPassesScreen.navigationOptions  = (props) => {
    return {
        headerTitle: 'FestivalPassesScreen',
        headerTintColor: Colors.white,
        headerStyle,
        headerTitleStyle,
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    props.navigation.toggleDrawer();
                }}/>
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

export default FestivalPassesScreen;
