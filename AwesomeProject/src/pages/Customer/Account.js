import React from 'react';
import {SafeAreaView, ScrollView, Text, Button} from 'react-native';
import {globalStyles} from '../../assets/style';
import {removeItem, getItem} from '../../helpers/localStorage';

const Account = ({handleSetIsLogin}) => {
    const handleLogout = () => {
        console.log('logoout');
        removeItem('token').then(() => {
            getItem('token').then((value) => {
                console.log(value);
            });
        });
        handleSetIsLogin(false);
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

export default Account;
