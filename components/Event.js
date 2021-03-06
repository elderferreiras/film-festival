import React from 'react';
import {
    View,
    Linking,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    StyleSheet
} from 'react-native';
import { cdnUrl } from '../environment/env';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import {getShortDate} from "../utility";
import DefaultText from "./UI/DefaultText";

const Event = (props) => {
    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    const onClickBuyTicket = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    };

    const noPosterPaddingStyle = {
        paddingLeft: props.poster? 0 : 18
    };

    const noPosterStyle = {
        width: `${props.poster? '60%' : '80%'}`,
        ...noPosterPaddingStyle
    };

    let poster = null;

    if (props.poster) {
        poster = <View style={styles.poster}>
            <Image
                source={{uri: cdnUrl + props.poster}}
                style={{width: 50, height: 70}}/>
        </View>;
    }

    return (
        <View style={styles.grid}>
            <TouchableComponent style={styles.touchableComponent} onPress={() => props.pressed(props.type)}>
                <View style={styles.container}>
                    <View style={styles.time}>
                        <DefaultText style={styles.text}>{props.time}</DefaultText>
                        <DefaultText style={styles.dateText}>{getShortDate(props.date)}</DefaultText>
                    </View>
                    {poster}
                    <View style={{...styles.rightGrid, ...noPosterStyle}}>
                        <View style={styles.details}>
                            <DefaultText style={{...styles.text, ...styles.title}}>{props.title}</DefaultText>
                            <DefaultText style={styles.text}>{props.runningTime} min</DefaultText>
                             <DefaultText style={{...styles.text, color: Colors.secondary}}><FontAwesome name="map-marker" size={14} color={Colors.secondary} /> {props.venue? props.venue.title : props.id}</DefaultText>
                        </View>
                        <View style={{...styles.buttonGrid,...noPosterPaddingStyle}}>
                            <TouchableOpacity style={styles.button} onPress={() => onClickBuyTicket(props.tickets)}>
                                <View>
                                    <FontAwesome name="ticket" size={32} color={Colors.secondary} />
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
        borderBottomColor: Colors.tertiary
    },
    time: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.tertiary,
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
    dateText: {
        paddingTop: 5,
        color: Colors.accent,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 16
    },
    touchableComponent: {
        flex: 1
    },
});

export default Event;
