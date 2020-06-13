import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Category from './pages/Catalog/Category';
import Product from './pages/Catalog/Product';
import Login from './pages/Login';
import Cart from './pages/Checkout/Cart';
// import Todo from './pages/Todo';

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

const App = () => {
    return (
        /* Start: Stack Navigation */
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen
        //             name="Home"
        //             component={Home}
        //             options={{headerShown: false, title: 'Homepage!'}}
        //         />
        //         <Stack.Screen
        //             name="Catalog"
        //             component={Catalog}
        //             options={{title: 'Catalog Page!'}}
        //         />
        //         <Stack.Screen
        //             name="Todo"
        //             component={Todo}
        //             options={{title: 'Todo!'}}
        //         />
        //     </Stack.Navigator>
        // </NavigationContainer>
        /* End: Stack Navigation */

        /* Start: Tab Navigation */
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name === 'Catalog') {
                            iconName = focused ? 'menu' : 'menu';
                        } else if (route.name === 'Todo') {
                            iconName = focused
                                ? 'calendar-check'
                                : 'calendar-check';
                        } else if (route.name === 'Login') {
                            iconName = focused ? 'account' : 'account';
                        } else if (route.name === 'Cart') {
                            iconName = focused ? 'cart' : 'cart';
                        }

                        return (
                            <Icon name={iconName} size={size} color={color} />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{title: 'Home'}}
                />
                <Tab.Screen
                    name="Catalog"
                    component={CatalogStack}
                    options={{title: 'Catalog'}}
                />
                {/* <Tab.Screen
                    name="Todo"
                    component={Todo}
                    options={{title: 'Todo'}}
                /> */}
                <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{title: 'Cart'}}
                />
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{title: 'Account'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
        /* End: Tab Navigation */
    );
};

export default App;
