import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {globalStyles} from '../../assets/style';

const Catalog = ({navigation}) => {
    return (
        <SafeAreaView style={globalStyles.SafeAreaView}>
            <View style={globalStyles.container}>
                <Text>Category List:</Text>
                <Button
                    title="New Arrival"
                    onPress={() =>
                        navigation.navigate('Category', {title: 'New Arrivals'})
                    }
                />
                <Button
                    title="Best Sellers"
                    onPress={() =>
                        navigation.navigate('Category', {title: 'Best Sellers'})
                    }
                />
                <Button
                    title="Men"
                    onPress={() =>
                        navigation.navigate('Category', {title: 'Men'})
                    }
                />
                <Button
                    title="Women"
                    onPress={() =>
                        navigation.navigate('Category', {title: 'Women'})
                    }
                />
                <Button
                    title="Accessories"
                    onPress={() =>
                        navigation.navigate('Category', {title: 'Accessories'})
                    }
                />
                <Button
                    title="Sale"
                    onPress={() =>
                        navigation.navigate('Category', {title: 'Sale'})
                    }
                />
            </View>
        </SafeAreaView>
    );
};

export default Catalog;
