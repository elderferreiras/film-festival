import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    StyleSheet,
    Button
} from 'react-native';
import { cdnUrl } from '../environment/env';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Event = (props) => {
    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.grid}>
            <TouchableComponent style={styles.touchableComponent} onPress={props.pressed}>
                <View style={styles.container}>
                    <View style={styles.time}>
                        <Text style={styles.text}>{props.time}</Text>
                    </View>
                    <View style={styles.poster}>
                        <Image
                            source={{uri: cdnUrl + props.poster}}
                            style={{width: 50, height: 70}}/>
                    </View>
                    <View style={styles.rightGrid}>
                        <View style={styles.details}>
                            <Text style={{...styles.text, ...styles.title}}>{props.title}</Text>
                            <Text style={styles.text}>{[props.category, `${props.runningTime} min`].join(' | ')} </Text>
                            <Text style={{...styles.text, color: Colors.secondary}}>{props.venue.title}</Text>
                        </View>
                        <View style={styles.buttonGrid}>
                            <TouchableOpacity style={styles.button}>
                                <View>
                                    <Ionicons name="md-heart-empty" size={32} color={Colors.secondary} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    grid: {
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 5,
    },
    rightGrid: {
        flexDirection: "row",
        backgroundColor: Colors.primary,
        width: "60%",
        height: "100%",
        paddingTop: 5,
        paddingBottom: 5,
    },
    buttonGrid: {
        width: "20%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderBottomWidth: 3,
        borderBottomColor: Colors.accent
    },
    time: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.accent,
        width: "20%",
        height: "100%",
        paddingTop: 5,
        paddingBottom: 5,
    },
    poster: {
        backgroundColor: Colors.primary,
        width: "20%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    details: {
        width: "80%"
    },
    text: {
        color: Colors.white
    },
    title: {
        fontSize: 16
    },
    touchableComponent: {
        flex: 1
    },
});

export default Event;