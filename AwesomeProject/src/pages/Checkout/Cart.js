import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {globalStyles} from '../../assets/style';

const Cart = () => {
    return (
        <SafeAreaView>
            <ScrollView style={globalStyles.scrollView}>
                <Text>Cart Page</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Cart;
