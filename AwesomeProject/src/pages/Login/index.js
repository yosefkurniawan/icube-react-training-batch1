import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {globalStyles} from '../../assets/style';
import FormLogin from '../../components/FormLogin';

const Login = () => {
    return (
        <SafeAreaView>
            <ScrollView style={globalStyles.scrollView}>
                <FormLogin />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;
