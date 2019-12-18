import React from 'react';
import { View, StyleSheet } from 'react-native';
import DefaultText from './DefaultText';
import Colors from '../constants/Colors';

const BlockSummary = props => {
    return (
        <View style={styles.container}>
                <DefaultText style={styles.subtitle}>{props.subtitle}</DefaultText>
                <DefaultText style={styles.description}>{props.description}</DefaultText>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: Colors.white,
        margin: 10,
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        color: Colors.white,
        margin: 10,
        fontSize: 16,
        fontStyle: 'italic'
    },
    description: {
        color: Colors.white,
        margin: 10,
        fontSize: 16,
        textAlign: 'center'
    },
});

export default BlockSummary;
