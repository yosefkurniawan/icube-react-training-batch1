import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import PrimaryButton from '../../components/primaryButton';
import {useMutation} from '@apollo/react-hooks';
import {saveItem, getItem} from '../../helpers/localStorage';
// import {getLoginStatus} from '../../helpers/customer';
import {globalStyles, formStyles} from '../../assets/style';
import styles from './style';
import {connect} from 'react-redux';
// import AsyncStorage from '@react-native-community/async-storage';
import AUTH_ACTION from '../../stores/actions/auth';
import Loader from '../../components/Loader';

const schemaGenerateCustomerToken = gql`
    mutation generateCustomerToken($email: String!, $password: String!) {
        generateCustomerToken(email: $email, password: $password) {
            token
        }
    }
`;

const Login = ({signIn}) => {
    const [username, setUsername] = useState('jojo@icube.us');
    const [password, setPassword] = useState('Icubeus@1234');

    const [generateCustomerToken, {loading, data, error}] = useMutation(
        schemaGenerateCustomerToken,
    );

    if (loading) {
        return <Loader />;
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

        let dataFormat = {
            type: 'signin',
            token: token,
        };
        signIn(dataFormat);
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

// const mapStateToProps = (state) => ({
//     auth: state.auth,
// });

const mapDispatchToProps = (dispatch) => ({
    signIn: (data) => dispatch(AUTH_ACTION.set(data)),
});

export default connect(null, mapDispatchToProps)(Login);
