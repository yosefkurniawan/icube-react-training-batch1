import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {globalStyles} from '../../assets/style';
import Login from './Login';
import Account from '../Customer/Account';
import {getItem} from '../../helpers/localStorage';

const Customer = ({navigation}) => {
    const [isLogin, setIsLogin] = useState(false);
    // AsyncStorage.getItem('token').then((value) => {
    //     console.log(value);
    //     setIsLogin(true);
    // });

    const handleSetIsLogin = (value) => {
        setIsLogin(value);
    };
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Customer page: check Auth');
            // The screen is focused
            // Call any action
            // removeItem('token');
            getItem('token').then((value) => {
                console.log(value);
                if (value) {
                    setIsLogin(true);
                } else {
                    setIsLogin(false);
                }
            });
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);
    useEffect(() => {
        const unsubscribe = () => {
            console.log('Customer page: check Auth');
            // Call any action
            getItem('token').then((value) => {
                console.log(value);
                if (value) {
                    setIsLogin(true);
                } else {
                    setIsLogin(false);
                }
            });
        };

        return unsubscribe;
    }, [navigation]);
    return (
        <SafeAreaView>
            <ScrollView style={globalStyles.scrollView}>
                {!isLogin ? (
                    <Login handleSetIsLogin={handleSetIsLogin} />
                ) : (
                    <Account handleSetIsLogin={handleSetIsLogin} />
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Customer;
