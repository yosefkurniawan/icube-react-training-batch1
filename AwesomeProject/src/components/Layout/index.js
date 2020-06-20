import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Landing from '../../pages/Landing';
import Home from '../../pages/Home';
import Cart from '../../pages/Checkout/Cart';
import Notification from '../../pages/Notification';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Catalog from '../../pages/Catalog';
import Category from '../../pages/Catalog/Category';
// import Customer from '../../pages/Customer';
import Account from '../../pages/Customer/Account';
import Login from '../../pages/Customer/Login';
import Product from '../../pages/Catalog/Product';
import {Text, ScrollView} from 'react-native';
// import style from './style';
// import {globalStyles} from '../../assets/style';
import {connect} from 'react-redux';

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

// function MyAccountStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Customer" component={Customer} />
//             <Stack.Screen name="Account" component={Account} />
//             <Stack.Screen
//                 name="Login"
//                 component={Login}
//                 options={{headerShown: false}}
//             />
//         </Stack.Navigator>
//     );
// }

function AuthStack() {
    return (
        // <Stack.Navigator>
        //     <Stack.Screen
        //         name="Home"
        //         component={Home}
        //         options={{headerShown: false, title: 'Homepage!'}}
        //     />
        //     <Stack.Screen
        //         name="Catalog"
        //         component={Catalog}
        //         options={{title: 'Catalog Page!'}}
        //     />
        //     <Stack.Screen name="Category" component={Category} />
        //     <Stack.Screen name="Product" component={Product} />
        //     {/* <Stack.Screen
        //                     name="Todo"
        //                     component={Todo}
        //                     options={{title: 'Todo!'}}
        //                 /> */}
        //     <Stack.Screen
        //         name="Cart"
        //         component={Cart}
        //         options={{title: 'Cart'}}
        //     />
        //     <Stack.Screen
        //         name="Notification"
        //         component={Notification}
        //         options={{title: 'Notification'}}
        //     />
        //     <Stack.Screen
        //         name="Account"
        //         component={Account}
        //         options={{title: 'Account'}}
        //     />
        // </Stack.Navigator>
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
                    } else if (route.name === 'Account') {
                        iconName = focused ? 'account' : 'account';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'cart' : 'cart';
                    } else if (route.name === 'Notification') {
                        iconName = focused ? 'bell' : 'bell';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{headerShown: false, title: 'Homepage!'}}
            />
            <Tab.Screen
                name="Catalog"
                component={CatalogStack}
                options={{title: 'Catalog Page!'}}
            />
            {/* <Tab.Screen name="Category" component={Category} />
            <Tab.Screen name="Product" component={Product} /> */}
            {/* <Stack.Screen
                                    name="Todo"
                                    component={Todo}
                                    options={{title: 'Todo!'}}
                                /> */}
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{title: 'Cart'}}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{title: 'Notification'}}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{title: 'Account'}}
            />
        </Tab.Navigator>
    );
}

function NoAuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Landing"
                component={Landing}
                options={{
                    title: 'Landing',
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{title: 'Login'}}
            />
        </Stack.Navigator>
    );
}
const Layout = ({auth}) => {
    let isLoggedIn = auth.user ? true : false;
    console.log('isLoggedIn');
    console.log(isLoggedIn);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={isLoggedIn ? AuthStack : NoAuthStack}
                    options={{
                        title: 'Main',
                        headerShown: false,
                    }}
                />
                {/* {isLoggedIn ? (
                    <Stack.Screen name="Auth" component={AuthStack} />
                ) : (
                    <Stack.Screen name="NoAuth" component={NoAuthStack} />
                )} */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, null)(Layout);
