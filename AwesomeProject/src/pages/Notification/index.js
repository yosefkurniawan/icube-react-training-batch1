import React from 'react';
import {Text, ScrollView, View, FlatList} from 'react-native';
import {globalStyles} from '../../assets/style';
import {connect} from 'react-redux';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import Loader from '../../components/Loader';
import style from './style';

const queryNotification = gql`
    {
        customerNotificationList {
            items {
                entityId
                unread
                createdAt
                content
                subject
            }
        }
    }
`;

const NotificationItem = ({item}) => {
    return (
        <View style={style.item}>
            <Text style={style.date}>{item.createdAt}</Text>
            <Text style={style.subject}>{item.subject}</Text>
            <Text>{item.content}</Text>
        </View>
    );
};

const Notification = ({navigation, auth}) => {
    let token = auth.user.token;

    const {loading, data, error} = useQuery(queryNotification, {
        context: {
            headers: {
                Authorization: token ? `Bearer ${token}` : '',
            },
        },
        fetchPolicy: 'cache-and-network',
    });

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <Text>Unexpected error during fetching Data...</Text>;
    }

    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>Your Notification</Text>
            <FlatList
                data={data.customerNotificationList.items}
                renderItem={({item}) => <NotificationItem item={item} />}
                keyExtractor={(item) => item.entityId}
            />
        </ScrollView>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, null)(Notification);
