import React, { useState, useEffect, } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, SafeAreaView, Dimensions } from 'react-native';
import colors from '../../utils/colors';
// import assets from '../../assets/index';
const windowWidth = Dimensions.get('window').width;

const Loader = (props) => {
    const { navigation, subjectName } = props;
    return (
       
        <View style={styles.overlayView}>
            <ActivityIndicator style={{fontSize:100}} size="large" color={colors.primeryBtnColor} />
            <Text style={styles.textColor}>Please Wait...!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    overlayView: {
        position: 'absolute',
        justifyContent: 'center',
        left: 0, 
        top: 0,
        right: 0,
        bottom: 0,
         opacity: 0.7,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        

    },
    textColor: {
        fontSize: 25,
        marginTop:20,
        fontWeight: 'bold',
        color: colors.primeryBtnColor
    }
});
export default Loader;