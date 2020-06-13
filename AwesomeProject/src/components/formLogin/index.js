import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import PrimaryButton from '../primaryButton';
import {useMutation} from '@apollo/react-hooks';
import AsyncStorage from '@react-native-community/async-storage';
import {saveItem, getItem} from '../../helpers/localStorage';
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
    const [username, setUsername] = useState('jojo@icube.us');
    const [password, setPassword] = useState('Icubeus@1234');

    const [generateCustomerToken, {loading, data, error}] = useMutation(
        schemaGenerateCustomerToken,
    );

    if (loading) {
        return <Text>Loading...</Text>;
    }
    if (error) {
        return <Text>Error fetching data!</Text>;
    }

    if (data) {
        const token = data.generateCustomerToken.token;
        saveItem('token', token).then(() => {
            getItem('token').then((value) => {
                console.log(value);
            });
        });
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
