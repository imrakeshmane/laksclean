


import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
// import HeaderTitle from '../../components/Headers/headerTitle';
import MyBookings from '../../screens/Dashbord/mybookings/mybooking';
import CompletePaymenet from '../../screens/Dashbord/completePaymnet/completePaymnet';
import HomePage from '../../screens/Dashbord/home/home'
import SelectCleaner from '../../screens/Dashbord/selectcleaner/selectCleaner';
import Schedule from '../../screens/Dashbord/schedule/schedule';
import UserCart from '../../screens/Dashbord/userCart/cart';

import PackageView from '../../screens/Dashbord/packages/packages';
import ProductDetails from '../../screens/Dashbord/productDetails/productDetails';
import CheckOut from '../../screens/Dashbord/checkOut/checkout'

import colors from '../../utils/colors';
import AppWebView from '../../components/webview';
import HeaderTitle from '../../components/Headers/headerTitle';
import HeaderRight from '../../components/Headers/headerRight'


const HomeStack = createStackNavigator({

    mybooking:
    {
        screen: HomePage,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            // header: t,
            headerStyle: {
                //alignItems:'center'
                backgroundColor: colors.primeryBtnColor,
                // borderBottomLeftRadius: 30,
            },
            headerTintColor: 'white',
            // headerMode: 'float',
            headerLeft:(<HeaderTitle navigation={navigation} title="Laksclean" />),
         headerTitle: (<HeaderTitle navigation={navigation} title=" " />),
            //  headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    SelectCleaner:
    {
        screen: SelectCleaner,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
                backgroundColor: colors.primeryBtnColor,
                borderBottomLeftRadius: 30,
            },
            headerTintColor: 'white',
            headerMode: 'float',
            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="Select Cleaner" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },

    Schedule:
    {
        screen: Schedule,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
                backgroundColor: colors.primeryBtnColor,
                borderBottomLeftRadius: 30,
            },
            headerTintColor: 'white',
            headerMode: 'float',
            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="Schedule Booking" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    PackageView:
    {
        screen: PackageView,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
                backgroundColor: colors.primeryBtnColor,
                borderBottomLeftRadius: 30,
            },
            headerTintColor: 'white',
            headerMode: 'float',
            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="Select Package" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    Conform:
    {
        screen: MyBookings,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
                backgroundColor: colors.primeryBtnColor,
                borderBottomLeftRadius: 30,
            },
            headerTintColor: 'white',
            headerMode: 'float',
            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="My Bookings" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    CompletePaymenet:
    {
        screen: CompletePaymenet,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
                backgroundColor: colors.primeryBtnColor,
                borderBottomLeftRadius: 30,
            },
            headerTintColor: 'white',
            headerMode: 'float',

            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="Complete Booking" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    UserCart:
    {
        screen: UserCart,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
                backgroundColor: colors.primeryBtnColor,
                borderBottomLeftRadius: 30,
            },
            headerTintColor: 'white',
            headerMode: 'float',

            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="Cart" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    ProductDetails:
    {
        screen: ProductDetails,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
                backgroundColor: colors.primeryBtnColor,
                borderBottomLeftRadius: 30,
            },
            headerTintColor: 'white',
            headerMode: 'float',

            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="Product" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    CheckOut:
    {
        screen: CheckOut,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
                backgroundColor: colors.primeryBtnColor,
                borderBottomLeftRadius: 30,
            },
            headerTintColor: 'white',
            headerMode: 'float',

            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="Check Out" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    AppWebView:
    {
        screen: AppWebView,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
                backgroundColor: colors.primeryBtnColor,
                borderBottomLeftRadius: 30,
            },
            headerTintColor: 'white',
            headerMode: 'float',

            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="Order" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },

},
    {
        initialRouteName: 'mybooking',

    }

)
export default HomeStack;







