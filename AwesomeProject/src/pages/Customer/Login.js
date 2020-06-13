import React, {useState, useEffect} from 'react';
import {gql} from 'apollo-boost';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import PrimaryButton from '../../components/primaryButton';
import {useMutation} from '@apollo/react-hooks';
import {saveItem, getItem} from '../../helpers/localStorage';
// import {getLoginStatus} from '../../helpers/customer';
import {globalStyles, formStyles} from '../../assets/style';
import styles from './style';
// import AsyncStorage from '@react-native-community/async-storage';

const schemaGenerateCustomerToken = gql`
    mutation generateCustomerToken($email: String!, $password: String!) {
        generateCustomerToken(email: $email, password: $password) {
            token
        }
    }
`;

const Login = ({handleSetIsLogin}) => {
    const [username, setUsername] = useState('jojo@icube.us');
    const [password, setPassword] = useState('Icubeus@1234');
    // const [isLogin, setIsLogin] = useState();

    // AsyncStorage.getItem('token').then((value) => {
    //     console.log(value);
    // });
    // useEffect(() => {
    //     AsyncStorage.getItem('token').then((value) => {
    //         console.log(value);
    //         setIsLogin(true);
    //     });
    // });

    const [generateCustomerToken, {loading, data, error}] = useMutation(
        schemaGenerateCustomerToken,
    );

    if (loading) {
        return <Text>Loging in...</Text>;
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
        handleSetIsLogin(true);
    }

    const handleSubmit = () => {
        console.log('Login clicked');
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

export default Login;
