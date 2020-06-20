import React, {useState} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from './lib/apolloClient';
import {Provider} from 'react-redux';
import stores from './stores';
import Layout from './components/Layout';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Provider store={stores}>
                <Layout />
            </Provider>
        </ApolloProvider>
    );
};

export default App;
