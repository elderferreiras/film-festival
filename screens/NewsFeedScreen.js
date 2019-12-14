import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from "../components/HeaderButton";

const NewsFeedScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>NewsFeedScreen</Text>
        </View>
    );
};

NewsFeedScreen.navigationOptions  = (props) => {
    return {
        headerTitle: 'Your Favorites',
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

export default NewsFeedScreen;
