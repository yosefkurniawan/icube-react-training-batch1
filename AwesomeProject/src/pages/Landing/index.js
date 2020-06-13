import React, {useEffect} from 'react';
import {Text, Button, SafeAreaView, View} from 'react-native';
import {globalStyles} from '../../assets/style';
import {getItem, removeItem} from '../../helpers/localStorage';

const Landing = ({navigation}) => {
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
                }
            });
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);
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

export default Landing;
