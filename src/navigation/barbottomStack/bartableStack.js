import React from 'react';

import Bar from '../../screens/bar/bar_dashboard'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Icons
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';





const BarTablesStacks = createStackNavigator(
    {
        BarTablesStacks: Bar
    },
    {
        initialRouteName: 'BarTablesStacks',
        headerMode: 'none'
    }

);

export default BarTablesStacks;
