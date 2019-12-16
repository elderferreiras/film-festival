import React from 'react';
import { View, Text, Image } from 'react-native';

const Event = (props) => {
    return <View>
        <Image source={{uri: "https://montana-international-film-festival.s3-us-west-2.amazonaws.com/" + props.poster}}  style={{width: 50, height: 50}}/>
        <Text>{props.title}</Text>
    </View>;
};

export default Event;
