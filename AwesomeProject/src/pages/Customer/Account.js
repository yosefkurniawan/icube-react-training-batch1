import React from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {globalStyles} from '../../assets/style';
import {removeItem, getItem} from '../../helpers/localStorage';
import AUTH_ACTION from '../../stores/actions/auth';
import {connect} from 'react-redux';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';
import PrimaryButton from '../../components/primaryButton';
import style from './style';

const queryCustomer = gql`
    {
        customer {
            firstname
            lastname
            email
        }
    }
`;

const Account = ({navigation, signOut, auth}) => {
    let token = auth.user ? auth.user.token : '';

    const {loading, data, error} = useQuery(queryCustomer, {
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

    const handleLogout = () => {
        console.log('logout');
        removeItem('token').then(() => {
            getItem('token').then((value) => {
                console.log(value);
            });
        });
        signOut();
        navigation.navigate('Main');
    };
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>Dashboard</Text>
            <Text>
                Hello, {`${data.customer.firstname} ${data.customer.lastname}`}
            </Text>
            <Text>{`Email: ${data.customer.email}`}</Text>
            <TouchableOpacity
                style={style.action}
                onPress={() => handleLogout()}>
                <PrimaryButton label={'Logout'} />
            </TouchableOpacity>
        </ScrollView>
    );
};

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(AUTH_ACTION.delete()),
});

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
