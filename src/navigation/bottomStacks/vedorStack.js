


import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderTitle from '../../components/Headers/headerTitle';
import MyBookings from '../../screens/Dashbord/mybookings/mybooking';
import CompletePaymenet from '../../screens/Dashbord/completePaymnet/completePaymnet';
import HomePage from '../../screens/Dashbord/home/home'
import SelectCleaner from '../../screens/Dashbord/selectcleaner/selectCleaner';
import Schedule from '../../screens/Dashbord/schedule/schedule';
import UserCart from '../../screens/Dashbord/userCart/cart';

import PackageView from '../../screens/Dashbord/packages/packages';
import ProductDetails from '../../screens/Dashbord/productDetails/productDetails';


import colors from '../../utils/colors';
import DrawerScreen from '../../screens/myAccount/account';
import AcceptBooking from '../../screens/Vendore/AcceptBooking';
import AvailableDetails from '../../screens/Vendore/AvailableDetails';
import MyAccount from '../../screens/Vendore/MyAccount';
import ELearnning from '../../screens/Vendore/ELearning';
import ConfirmBooking from '../../screens/Vendore/ConfirmBooking';
import PaymentDetails from '../../screens/Vendore/PaymentDetails';

const VendorStack = createStackNavigator({

    DrawerScreen:
    {
        screen: DrawerScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            header: false,
            headerStyle: {
                //alignItems:'center'
                backgroundColor: colors.primeryBtnColor,
                borderBottomLeftRadius: 30,
            },
            headerTintColor: 'white',
            headerMode: 'float',
            // headerLeft: (<HeaderLeft navigation={navigation} />),
            // headerTitle: (<HeaderTitle navigation={navigation} title="AbhiPedia" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    AcceptBooking:
    {
        screen: AcceptBooking,
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
            headerTitle: (<HeaderTitle navigation={navigation} title=" " />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },

    AvailableDetails:
    {
        screen: AvailableDetails,
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
    MyAccount:
    {
        screen: MyAccount,
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
    ConformBooking:
    {
        screen: ConfirmBooking,
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
    ELearnning:
    {
        screen: ELearnning,
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
    PaymentDetails:
    {
        screen: PaymentDetails,
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
            headerTitle: (<HeaderTitle navigation={navigation} title="Payment details" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    AcceptBooking:
    {
        screen: AcceptBooking,
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
            headerTitle: (<HeaderTitle navigation={navigation} title="Accept Booking" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },

},
    {
        initialRouteName: 'DrawerScreen',

    }

)
export default VendorStack;







