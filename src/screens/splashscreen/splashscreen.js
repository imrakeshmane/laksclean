import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../utils/colors';
import { connect } from 'react-redux';

const SplashScreenPage = (props) => {
    const { navigation } = props;
    const [splashscreenTime, setSpashscreenTime] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            console.log(props.userInfo, 'props.userInfoprops.userInfoprops.userInfo')
debugger 
            if (props.userInfo &&   props.userInfo.user_type) {
                console.log(props.userInfo, 'props.userInfoprops.userInfoprops.userInfo')

                if (props.userInfo &&  props.userInfo.user_type==="CUSTOMER") {
                    navigation.navigate('VendorStack');

                }else{
                    navigation.navigate('Drawer');

                }
            }

            setSpashscreenTime(true)
        }, 3000)
    }, []);


    useEffect(() => {
        if (splashscreenTime) {

        }

    }, [splashscreenTime])
    return (

        <>
            <StatusBar barStyle="dark-content" />
            {!splashscreenTime ? <SafeAreaView style={[styles.safeA, {backgroundColor:'white'}]}>
                <View style={styles.imageViewNew}>
                    <Image
                        style={[styles.logoSpashScrenn]}
                        source={require('../../assets/SplashIcon.jpeg')}
                    />
                </View>


            </SafeAreaView> :
                <SafeAreaView style={styles.safeA}>
                    <View style={styles.imageView}>
                        <Image
                            style={[styles.logo, { height: 80, marginLeft: 20, }]}
                            source={require('../../assets/v2_qkisot.png')}
                        />
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ justifyContent: 'center', fontWeight: 'bold', alignSelf: 'center', fontSize: 40, color: '#9F9F9F' }}>{'\u2022'}</Text>
                                <Text style={{ justifyContent: 'center', fontWeight: 'bold', alignSelf: 'center', fontSize: 16, marginLeft: 5, textTransform: 'uppercase', color: '#9F9F9F' }}>Find</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: 5 }}>
                                <Text style={{ justifyContent: 'center', fontWeight: 'bold', alignSelf: 'center', fontSize: 40, color: '#9F9F9F' }}>{'\u2022'}</Text>
                                <Text style={{ justifyContent: 'center', fontWeight: 'bold', alignSelf: 'center', fontSize: 16, marginLeft: 5, textTransform: 'uppercase', color: '#9F9F9F' }}>Check</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: 5 }}>
                                <Text style={{ justifyContent: 'center', fontWeight: 'bold', alignSelf: 'center', fontSize: 40, color: '#9F9F9F' }}>{'\u2022'}</Text>
                                <Text style={{ justifyContent: 'center', fontWeight: 'bold', alignSelf: 'center', fontSize: 16, marginLeft: 5, textTransform: 'uppercase', color: '#9F9F9F' }}>Book</Text>
                            </View>

                        </View>
                        <Image
                            style={styles.logoNew}
                            source={require('../../assets/v2_qhkays.png')}
                        />
                    </View>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#727070', marginBottom: 20 }}>Best Cleaning Service Providers</Text>
                        <Text style={{ fontSize: 14 }}>LaksClean is a family owned Canadian </Text>
                        <Text style={{ fontSize: 14 }}>company providing reliable, comprehensive and </Text>
                        <Text style={{ fontSize: 14 }}>cost-effective residential and commercial cleaning  </Text>


                        <View style={{ flexDirection: 'row', marginTop: 20 }}>

                            <TouchableOpacity onPress={() => {

                                navigation.navigate('Login');
                            }} style={{ backgroundColor: colors.lightblueColor, width: '80%', padding: 10, borderRadius: 10, marginHorizontal: 10 }}>
                                <Text style={{ color: "white", fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', }}>Get Started</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </SafeAreaView>
            }
        </>

    )
}

const styles = StyleSheet.create({
    safeA: {
        flex: 1,
        marginVertical: 30

    },
    imageView: {
        flex: 5,
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginVertical: 20
    },
    imageViewNew: {
        flex: 5,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginLeft: 0,
        height: 200,
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 50

    },
    logoNew: {
        marginLeft: 0,
        height: '60%',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 50

    },
    logoSpashScrenn: {
        height: 300,
        width: '90%',
        resizeMode: 'contain',



    },
    abhiPediaTest: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black
    }
});
function mapStateToProps(state) {
    return {
        userInfo: state.userData
    }
}
export default connect(mapStateToProps)(SplashScreenPage);