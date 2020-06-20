import React from 'react';
import {Text, ScrollView} from 'react-native';
import {globalStyles} from '../../assets/style';

const Cart = () => {
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>Cart Page</Text>
            <Text>Coming soon...</Text>
        </ScrollView>
    );
};

export default Cart;
