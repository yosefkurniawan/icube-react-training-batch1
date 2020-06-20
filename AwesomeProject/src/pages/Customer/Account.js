import React from 'react';
import {SafeAreaView, ScrollView, Text, Button} from 'react-native';
import {globalStyles} from '../../assets/style';
import {removeItem, getItem} from '../../helpers/localStorage';
import AUTH_ACTION from '../../stores/actions/auth';
import {connect} from 'react-redux';

const Account = ({handleSetIsLogin, signOut}) => {
    const handleLogout = () => {
        console.log('logoout');
        removeItem('token').then(() => {
            getItem('token').then((value) => {
                console.log(value);
            });
        });
        handleSetIsLogin(false);
        signOut();
    };
    return (
        <SafeAreaView>
            <ScrollView style={globalStyles.scrollView}>
                <Text>Dashboard.</Text>
                <Button title="Logout" onPress={() => handleLogout()} />
            </ScrollView>
        </SafeAreaView>
    );
};

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(AUTH_ACTION.delete()),
});

export default connect(null, mapDispatchToProps)(Account);
