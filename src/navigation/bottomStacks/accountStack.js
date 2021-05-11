


import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderTitle from '../../components/Headers/headerTitle';
import MyBookings from '../../screens/Dashbord/mybookings/mybooking';
import CompletePaymenet from '../../screens/Dashbord/completePaymnet/completePaymnet';
import DrawerScreen from '../../screens/myAccount/account';
import UpdateProfile from '../../screens/Dashbord/profileUpdate/updateProfile';
import UpdatePassword from '../../screens/Dashbord/update/updatePasword';
import UpdateMobile from '../../screens/Dashbord/update/updateMobile';
import KYCDoc from '../../screens/Dashbord/KYCDoc/KYCDoc';
import NormalWebView from '../../components/normailWebView';


const AccountStack = createStackNavigator({

    account:
    {
        screen: DrawerScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            header: false,
            headerStyle: {
                //alignItems:'center'
            },
            // headerLeft: (<HeaderLeft navigation={navigation} />),
            // headerTitle: (<HeaderTitle navigation={navigation} title="AbhiPedia" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    updateProfile:
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
    KYCDoc:
    {
        screen: KYCDoc,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
            },
            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="KYCDoc Screen" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    UpdatePassword:
    {
        screen: UpdatePassword,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
            },
            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="Update Password" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },
    UpdateMobile:
    {
        screen: UpdateMobile,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            headerStyle: {
                //alignItems:'center'
            },
            //  headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="Update Mobile" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },

},
    {
        initialRouteName: 'account',

    }

)
export default AccountStack;







