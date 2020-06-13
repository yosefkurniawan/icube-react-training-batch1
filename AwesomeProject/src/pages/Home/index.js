import React from 'react';
import {Text, Button, SafeAreaView, View} from 'react-native';
import {globalStyles} from '../../assets/style';

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={globalStyles.SafeAreaView}>
            <View style={globalStyles.container}>
                <Text>Menu:</Text>
                <Button
                    title="Todo List"
                    onPress={() => navigation.navigate('Todo')}
                />
                <Button
                    title="Categories"
                    onPress={() => navigation.navigate('Catalog')}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;
