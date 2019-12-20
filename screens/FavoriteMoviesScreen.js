import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from "../components/UI/HeaderButton";
import { headerStyle, headerTitleStyle } from '../constants/HeaderStyle';
import Colors from '../constants/Colors';

const FavoriteMoviesScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>FavoriteMoviesScreen</Text>
        </View>
    );
};

FavoriteMoviesScreen.navigationOptions = (props) => {
    return {
        headerTitle: 'My Favorites',
        headerTintColor: Colors.white,
        headerTitleStyle,
        headerStyle,
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

export default FavoriteMoviesScreen;
