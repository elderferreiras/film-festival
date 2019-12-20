import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import DefaultText from '../UI/DefaultText';
import Colors from '../../constants/Colors';

const BlockSummary = props => {
    return (
        <View style={styles.container}>
            <View style={styles.information}>
                <DefaultText style={styles.description}>{props.description}</DefaultText>
                <DefaultText style={styles.subtitle}>{props.subtitle}</DefaultText>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
    },
    information: {
        marginTop: 2,
        marginBottom: 2,
        padding: 10,
        backgroundColor: Colors.primary
    },
    subtitle: {
        color: Colors.secondary,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 14,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    description: {
        color: Colors.white,
        marginTop: 5,
        fontSize: 16,
        textAlign: 'justify'
    },
});

export default BlockSummary;
