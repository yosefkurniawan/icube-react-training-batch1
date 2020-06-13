import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {globalStyles} from '../../assets/style';

const Catalog = ({navigation: {goBack}, route: {params}}) => {
    return (
        <SafeAreaView style={globalStyles.SafeAreaView}>
            <View style={globalStyles.container}>
                <Text>Product Title: {params.title}</Text>
                <Button onPress={() => goBack()} title="Back" />
            </View>
        </SafeAreaView>
    );
};

export default Catalog;
