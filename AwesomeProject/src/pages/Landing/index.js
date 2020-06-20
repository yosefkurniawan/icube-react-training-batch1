import React, {useEffect} from 'react';
import {Text, Button, SafeAreaView, View} from 'react-native';
import {globalStyles} from '../../assets/style';
import {getItem, removeItem} from '../../helpers/localStorage';
import AUTH_ACTION from '../../stores/actions/auth';
import {connect} from 'react-redux';

const Landing = ({navigation, signIn}) => {
    // if (!isLogin) {
    //     navigation.navigate('Login');
    // }
    // getItem('token').then((value) => {
    //     console.log('checkHome');
    //     console.log(value);
    //     if (value) {
    //         navigation.navigate('Home');
    //     }
    // });
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Landing page: check auth');
            // The screen is focused
            // Call any action
            // removeItem('token');
            getItem('token').then((value) => {
                console.log(value);
                if (value) {
                    navigation.navigate('Home');

                    let dataFormat = {
                        type: 'signin',
                        token: value,
                    };
                    signIn(dataFormat);
                }
            });
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation, signIn]);
    return (
        <SafeAreaView style={globalStyles.SafeAreaView}>
            <View style={globalStyles.container}>
                <Text>Please Login to access!</Text>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Account')}
                />
            </View>
        </SafeAreaView>
    );
};

const mapDispatchToProps = (dispatch) => ({
    signIn: (data) => dispatch(AUTH_ACTION.set(data)),
});

export default connect(null, mapDispatchToProps)(Landing);
