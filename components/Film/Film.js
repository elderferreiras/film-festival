import React from 'react';
import DefaultText from '../UI/DefaultText';

const Film = (props) => {
    return (
        <DefaultText>{props.description}</DefaultText>
    );
};

export default Film;
