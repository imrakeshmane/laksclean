import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { View, Text, Image } from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from '../screens/Dashbord/home/home';
import ConfirmBooking from '../screens/Dashbord/mybookings/mybooking';
import DeliveryDetails from '../screens/Dashbord/deliverydetails/deliveryDetails';
import Schedule from '../screens/Dashbord/schedule/schedule';
import MyBookingsStack from './bottomStacks/myBookingStack';
import HomeStack from './bottomStacks/homeStack';
import DrawerScreen from '../screens/myAccount/account';
import Myshop from '../screens/Dashbord/myshop/myshop';
import UserCart from '../screens/Dashbord/userCart/cart';
import AccountStack from './bottomStacks/accountStack';




const AppNavigation = createBottomTabNavigator({
    Landing:
    {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home',

            tabBarIcon: ({ tintColor, focused }) => (
                <View style={{ alignContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                    <Icon name="ios-home" size={22} color={tintColor} />
                </View>
            ),
        },

    },
    MyCourses:
    {
        screen: MyBookingsStack,
        navigationOptions: {
            tabBarLabel: 'My Bookings',

            tabBarIcon: ({ tintColor, focused }) => (
                <View style={{ alignContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                    <Icon name="ios-list" size={22} color={tintColor} />
                </View>
            ),
        },

    },
    Shop:
    {
        screen: Myshop,
        navigationOptions: {
            tabBarLabel: 'My Shop',

            tabBarIcon: ({ tintColor, focused }) => (
                <View style={{ alignContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                    <Icon name="ios-planet" size={22} color={tintColor} />
                </View>
            ),
        },

    },
    Help:
    {
        screen: UserCart,
        navigationOptions: {
            tabBarLabel: 'My Cart',

            tabBarIcon: ({ tintColor, focused }) => (
                <View style={{ alignContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                    <Icon name="ios-cart" size={22} color={tintColor} />
                </View>
            ),
        },

    },
    MyProfile:
    {
        screen: AccountStack,
        navigationOptions: {
            tabBarLabel: 'My Profile',
            tabBarIcon: ({ tintColor, focused }) => (
                <View style={{ alignContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                    <Icon name="ios-person" size={22} color={tintColor} />
                </View>
            ),
        },


    },



},
    {
        tabBarOptions: {
            activeTintColor: colors.activeTintColor,
            activeBackgroundColor: colors.white,
            inactiveTintColor: colors.tintColor,
            style: {
                borderWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                alignSelf: 'center',
                height: 60,


                ...Platform.select({
                    android: {
                        backgroundColor: colors.white,
                    },
                })
            },
            labelStyle: {
                fontSize: 12,
                fontWeight: 'bold',
                marginBottom: 5,
                alignSelf: 'center'

            },
        }

    },
    {
        initialRouteName: 'Landing',
        defaultNavigationOptions: ({ navigation }) => ({
            title: "Screen"
        }),
    }


)
export default AppNavigation;
