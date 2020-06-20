import React, {useState} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from './lib/apolloClient';
import {Provider} from 'react-redux';
import stores from './stores';
import Layout from './components/Layout';
import {globalStyles} from './assets/style';
import {SafeAreaView} from 'react-native';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Provider store={stores}>
                <SafeAreaView style={globalStyles.SafeAreaView}>
                    <Layout />
                </SafeAreaView>
            </Provider>
        </ApolloProvider>
    );
};

export default App;
