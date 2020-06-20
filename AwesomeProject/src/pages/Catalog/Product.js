import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {globalStyles} from '../../assets/style';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const Product = ({navigation: {goBack}, route: {params}}) => {
    return (
        <SafeAreaView style={globalStyles.SafeAreaView}>
            <View style={globalStyles.container}>
                <Text>Product Title: {params.name}</Text>
                <Button onPress={() => goBack()} title="Back" />
            </View>
        </SafeAreaView>
    );
};

export default Product;
