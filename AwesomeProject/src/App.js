import React, {useState} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from './lib/apolloClient';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Category from './pages/Catalog/Category';
import Customer from './pages/Customer';
import Account from './pages/Customer/Account';
import Login from './pages/Customer/Login';
import Product from './pages/Catalog/Product';
import Cart from './pages/Checkout/Cart';
import Notification from './pages/Notification';
import {Provider} from 'react-redux';
import stores from './stores';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CatalogStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Catalog"
                component={Catalog}
                options={{headerShown: false}}
            />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    );
}

function MyAccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Customer" component={Customer} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

const App = () => {
    return (
        /* Start: Stack Navigation */
        <ApolloProvider client={client}>
            <Provider store={stores}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Landing"
                            component={Landing}
                            options={{
                                title: 'Landing',
                            }}
                        />
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{headerShown: false, title: 'Homepage!'}}
                        />
                        <Stack.Screen
                            name="Catalog"
                            component={Catalog}
                            options={{title: 'Catalog Page!'}}
                        />
                        <Stack.Screen name="Category" component={Category} />
                        <Stack.Screen name="Product" component={Product} />
                        {/* <Stack.Screen
                            name="Todo"
                            component={Todo}
                            options={{title: 'Todo!'}}
                        /> */}
                        <Stack.Screen
                            name="Cart"
                            component={Cart}
                            options={{title: 'Cart'}}
                        />
                        <Stack.Screen
                            name="Account"
                            component={Customer}
                            options={{title: 'Account'}}
                        />
                        <Stack.Screen
                            name="Notification"
                            component={Notification}
                            options={{title: 'Notification'}}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </ApolloProvider>
        /* End: Stack Navigation */

        /* Start: Tab Navigation */
        // <ApolloProvider client={client}>
        //     <NavigationContainer>
        //         <Tab.Navigator
        //             screenOptions={({route}) => ({
        //                 tabBarIcon: ({focused, color, size}) => {
        //                     let iconName;

        //                     if (route.name === 'Home') {
        //                         iconName = focused ? 'home' : 'home';
        //                     } else if (route.name === 'Catalog') {
        //                         iconName = focused ? 'menu' : 'menu';
        //                     } else if (route.name === 'Todo') {
        //                         iconName = focused
        //                             ? 'calendar-check'
        //                             : 'calendar-check';
        //                     } else if (route.name === 'Account') {
        //                         iconName = focused ? 'account' : 'account';
        //                     } else if (route.name === 'Cart') {
        //                         iconName = focused ? 'cart' : 'cart';
        //                     }

        //                     return (
        //                         <Icon
        //                             name={iconName}
        //                             size={size}
        //                             color={color}
        //                         />
        //                     );
        //                 },
        //             })}
        //             tabBarOptions={{
        //                 activeTintColor: 'tomato',
        //                 inactiveTintColor: 'gray',
        //             }}>
        //             <Tab.Screen
        //                 name="Landing"
        //                 component={Landing}
        //                 options={{
        //                     title: 'Landing',
        //                     tabBarVisible: false,
        //                 }}
        //             />
        //             <Tab.Screen
        //                 name="Home"
        //                 component={Home}
        //                 options={{title: 'Home'}}
        //             />
        //             <Tab.Screen
        //                 name="Catalog"
        //                 component={CatalogStack}
        //                 options={{title: 'Catalog'}}
        //             />
        //             {/* <Tab.Screen
        //                 name="Todo"
        //                 component={Todo}
        //                 options={{title: 'Todo'}}
        //             /> */}
        //             <Tab.Screen
        //                 name="Cart"
        //                 component={Cart}
        //                 options={{title: 'Cart'}}
        //             />
        //             <Tab.Screen
        //                 name="Account"
        //                 component={Customer}
        //                 options={{title: 'Account'}}
        //             />
        //         </Tab.Navigator>
        //     </NavigationContainer>
        // </ApolloProvider>
        /* End: Tab Navigation */
    );
};

export default App;
