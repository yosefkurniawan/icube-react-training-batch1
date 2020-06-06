/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import PrimaryButton from '../primaryButton';
import {globalStyles, formStyles} from '../../assets/style';
import styles from './style';

const FormLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        alert(username + ' ' + password);
    };

    return (
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
    );
};

export default FormLogin;
