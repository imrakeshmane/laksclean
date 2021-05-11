


import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderTitle from '../../components/Headers/headerTitle';
import MyBookings from '../../screens/Dashbord/mybookings/mybooking';
import CompletePaymenet from '../../screens/Dashbord/completePaymnet/completePaymnet';


const MyBookingsStack = createStackNavigator({

    mybooking:
    {
        screen: MyBookings,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            header:true,
            headerStyle: {
                //alignItems:'center'
            },
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
            },
            // headerLeft: (<HeaderLeft navigation={navigation} />),
            headerTitle: (<HeaderTitle navigation={navigation} title="Complete Payment" />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },

},
    {
        initialRouteName: 'mybooking',

    }

)
export default MyBookingsStack;







