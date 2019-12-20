import React, { Fragment } from 'react';
import BlockSummary from './BlockSummary';
import { FlatList } from 'react-native';
import Event from '../Event';

const Block = (props) => {
    return (
        <Fragment>
            <BlockSummary {...props.event}/>
            <FlatList
                data={props.event.events}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Event {...item}
                                               pressed={(type) => props.pressed(item.id, item.title, type)}/>}
            />
        </Fragment>
    );
};

export default Block;
