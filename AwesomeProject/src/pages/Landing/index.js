import React, {useEffect, useState} from 'react';
import {Text, Button, SafeAreaView, View} from 'react-native';
import {globalStyles} from '../../assets/style';
import {getItem} from '../../helpers/localStorage';
import AUTH_ACTION from '../../stores/actions/auth';
import {connect} from 'react-redux';

const Landing = ({navigation, signIn}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log('Landing page: check auth');
        getItem('token').then((value) => {
            console.log(value);
            if (value) {
                navigation.navigate('Main');

                let dataFormat = {
                    type: 'signin',
                    token: value,
                };
                signIn(dataFormat);
            }
            setLoading(false);
        });
    }, [navigation, signIn]);

    if (loading) {
        return <Text>Loading...</Text>;
    }
    return (
        <SafeAreaView style={globalStyles.SafeAreaView}>
            <View style={globalStyles.container}>
                <Text>Please Login to access!</Text>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </SafeAreaView>
    );
};

const mapDispatchToProps = (dispatch) => ({
    signIn: (data) => dispatch(AUTH_ACTION.set(data)),
});

export default connect(null, mapDispatchToProps)(Landing);
