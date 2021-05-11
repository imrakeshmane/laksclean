


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
import MyAccountVendor from '../../screens/Vendore/MyAccount';
;
import KYCUpdate from '../../screens/Dashbord/KYCDoc/KYCDoc';
import NormalWebView from '../../components/normailWebView';

const VendorAccountStack = createStackNavigator({

   

    MyAccountVendor:
    {
        screen: MyAccountVendor,
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
    vendorUpdate:
    {
        screen: NormalWebView,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
            },
            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="Update Profile" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    KYCUpdate:
    {
        screen: KYCUpdate,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
            },
            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="KYCUpdate Screen" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
   
   

},
    {
        initialRouteName: 'MyAccountVendor',

    }

)
export default VendorAccountStack;







