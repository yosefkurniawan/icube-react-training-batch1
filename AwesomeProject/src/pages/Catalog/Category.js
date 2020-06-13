import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {globalStyles} from '../../assets/style';

const Catalog = ({navigation}) => {
    return (
        <SafeAreaView style={globalStyles.SafeAreaView}>
            <View style={globalStyles.container}>
                <Text>Category List:</Text>
                <Button
                    title="Product"
                    onPress={() =>
                        navigation.navigate('Product', {title: 'Test Product'})
                    }
                />
            </View>
        </SafeAreaView>
    );
};

export default Catalog;
