import React from 'react';
import {Text, SafeAreaView, View, FlatList} from 'react-native';
import {globalStyles} from '../../assets/style';

const DATA = [
    {
        id: 1,
        title: 'Title 1',
        content: 'Lorem ipsum dolor sit amet',
    },
    {
        id: 2,
        title: 'Title 2',
        content: 'Lorem ipsum dolor sit amet 2',
    },
    {
        id: 3,
        title: 'Title 3',
        content: 'Lorem ipsum dolor sit amet 3',
    },
];

const NotificationItem = ({title, content}) => {
    <View>
        <Text>
            {title} - {content}
        </Text>
    </View>;
};

const Notification = ({navigation}) => {
    return (
        <SafeAreaView style={globalStyles.SafeAreaView}>
            <View style={globalStyles.container}>
                <Text>TEST FLATLIST</Text>
                <FlatList
                    data={DATA}
                    renderItem={(item) => NotificationItem(item)}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export default Notification;
