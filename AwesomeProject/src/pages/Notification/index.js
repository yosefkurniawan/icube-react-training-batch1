import React from 'react';
import {Text, SafeAreaView, View, FlatList} from 'react-native';
import {globalStyles} from '../../assets/style';
import {connect} from 'react-redux';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

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
        <View>
            <Text>
                {item.createdAt} -{item.subject} - {item.content}
            </Text>
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
        return <Text>Fetching Data...</Text>;
    }

    if (error) {
        return <Text>Unexpected error during fetching Data...</Text>;
    }

    return (
        <SafeAreaView style={globalStyles.SafeAreaView}>
            <View style={globalStyles.container}>
                <Text>TEST FLATLIST</Text>
                <FlatList
                    data={data.customerNotificationList.items}
                    renderItem={({item}) => <NotificationItem item={item} />}
                    keyExtractor={(item) => item.entityId}
                />
            </View>
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, null)(Notification);
