/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PrimaryButton from '../primaryButton';
import {useMutation} from '@apollo/react-hooks';
import {globalStyles, formStyles} from '../../assets/style';
import styles from './style';

const schemaGenerateCustomerToken = gql`
    mutation generateCustomerToken($email: String!, $password: String!) {
        generateCustomerToken(email: $email, password: $password) {
            token
        }
    }
`;

const FormLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const saveToken = async (value) => {
        try {
            await AsyncStorage.setItem('token', value);
        } catch (e) {
            // saving error
        }
    };

    const getToken = async () => {
        const value = await AsyncStorage.getItem('token');
        return value;
    };

    const [generateCustomerToken, {loading, data, error}] = useMutation(
        schemaGenerateCustomerToken,
    );

    const removeToken = async () => {
        try {
            await AsyncStorage.removeItem('token');
        } catch (e) {
            // saving error
        }
    };

    if (loading) {
        return <Text>Loading...</Text>;
    }
    if (error) {
        return <Text>Error fetching data!</Text>;
    }

    if (data) {
        const token = data.generateCustomerToken.token;
        console.log(token);
        saveToken(token);
        getToken();
        // removeToken();
        getToken();
    }

    const handleSubmit = () => {
        generateCustomerToken({
            variables: {
                email: username,
                password: password,
            },
        });
    };

    return (
        <ScrollView style={globalStyles.container}>
            <View style={styles.container}>
                <Text style={globalStyles.title}>Login</Text>
                <TextInput
                    value={username}
                    label="Email"
                    style={formStyles.input}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    value={password}
                    label="Password"
                    secureTextEntry={true}
                    style={formStyles.input}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity
                    style={globalStyles.fullWidth}
                    onPress={() => handleSubmit()}>
                    <PrimaryButton label={'Login'} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default FormLogin;
