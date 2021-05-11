


import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderTitle from '../../components/Headers/headerTitle';
import MyBookings from '../../screens/Dashbord/mybookings/mybooking';
import CompletePaymenet from '../../screens/Dashbord/completePaymnet/completePaymnet';
import myshop from '../../screens/Dashbord/myshop/myshop';
import ProductDetails from '../../screens/Dashbord/productDetails/productDetails';
import colors from '../../utils/colors';


const VendorMyShopStack = createStackNavigator({

    myshop:
    {
        screen: myshop,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            header:false,
            headerStyle: {
                //alignItems:'center'
            },
            // headerLeft: (<HeaderLeft navigation={navigation} />),
            // headerTitle: (<HeaderTitle navigation={navigation} title="AbhiPedia" />),
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
            headerTitle: (<HeaderTitle navigation={navigation} title='Product' />),
            // headerRight: () => <HeaderRight navigation={navigation} />

        })
    },

},
    {
        initialRouteName: 'myshop',

    }

)
export default VendorMyShopStack;







