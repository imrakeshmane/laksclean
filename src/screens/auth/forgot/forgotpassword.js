import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Keyboard, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Loader from '../../../components/Loader/Loader'
import colors from '../../../utils/colors';
import Api from '../../../utils/Api';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import ToastComponent from '../../../components/ToastComponent/Toaster';
import Icons from 'react-native-vector-icons/FontAwesome';
import { UserAction } from '../../../reduxManager/index';

const ForgotPassword = (props) => {

    const [loginParams, setLoginParums] = useState({
        email: '',
        password: ''
    });
    const [showErorMsg, setErrorMsg] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [showButton, setShowButton] = useState('');

    useEffect(() => {
        setErrorMsg('');
    }, [])
    const validateEmail = (userEmail) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(loginParams.email).toLowerCase())) {
            return true;
        } else {
            return false;
        }
    }




    const resetPassword = () => {
        if (loginParams.email) {
            setErrorMsg('');
            setLoader(true);
            const formData = new FormData();
            formData.append('username', loginParams.email);
            return new Promise((resolve, reject) => {
                Api.postApi(formData, 'FORGOT')
                    .then(response => {
                        console.log(response, 'responseresponse')
                        if (response && response.data && response.data.status === "1") {
                            ToastComponent.SuccessToaster(response.data.message);

                        } else if (response && response.data && response.data.status === "2") {
                            setErrorMsg(response.data.message);
                        } else {
                            setErrorMsg(response.data.message);
                        }
                        setLoader(false);
                        resolve(response)
                    })
                    .catch(error => {
                        setLoader(false);
                        setErrorMsg('Something goes wrong...');
                        reject(error)
                    })
            });

        } else {

            setErrorMsg('Please insert Mobile or Email..!')

        }
    }


    const { navigation } = props;
    const [showLoader, setLoader] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    return (
        <SafeAreaView style={styles.safeA}>
            {showLoader ? <Loader /> :
                <>

                    <View style={styles.imageView}>
                        <Image
                            style={styles.logo}
                            source={require('../../../assets/SplashIcon.jpeg')}
                        />
                    </View>


                    <Text style={styles.errorText}>{showErorMsg}</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

                        <Icons name="phone" size={30} color="gray" style={styles.iconMargin} />
                        <TextInput
                            keyboardType={'number-pad'}
                            placeholder={'Mobile'}
                            registerParams
                            style={{ height: 40, borderBottomWidth: 1, width: "80%" }}
                            onChangeText={value => {
                                setLoginParums({ ...loginParams, email: value })
                            }}
                        />

                    </View>
                    {showOtpInput &&


                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>

                            <Icons name="phone" size={30} color="gray" style={styles.iconMargin} />
                            <TextInput
                                keyboardType={'number-pad'}
                                placeholder={'Otp'}
                                maxLength={6}
                                registerParams
                                style={{ height: 40, borderBottomWidth: 1, width: "80%" }}
                                onChangeText={value => {
                                    setLoginParums({ ...loginParams, email: value })
                                }}
                            />

                        </View>
                    }

                    <View style={styles.loginView}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                //resetPassword()
                                if (showOtpInput) {

                                } else {
                                    setShowOtpInput(true);
                                }


                            }}
                        >
                            {/* <Text style={styles.buttonTextLogin}>Reset Password Link</Text> */}
                            <Text
                                style={{
                                    backgroundColor: colors.lightblueColor,
                                    color: '#fff',
                                    borderRadius: 10,
                                    padding: 5,

                                    textAlign: 'center', justifyContent: 'center', alignSelf: 'center', textTransform: 'uppercase',
                                }}>
                                {showOtpInput ? 'Submit' : 'Send Otp'}
                            </Text>

                        </TouchableOpacity>
                    </View>

                    {/* <View style={styles.registerView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Register');
                            }}
                        >
                            <Text style={styles.passcodeText}>Don't have any account? <Text style={{ color: 'black' }}>REGISTER</Text></Text>
                        </TouchableOpacity>
                    </View> */}
                </>
            }

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    safeA: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    imageView: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginVertical: 20
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center'

    },
    inputView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 15
    },
    registerView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 15
    },
    textInput: {
        marginTop: 5,
        borderBottomWidth: 2,
        width: '70%',
        height: 80,
        backgroundColor: colors.white,
        borderColor: colors.lightGrey,
        fontFamily: 'Rubik',
    },
    loginView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 15

    },
    buttonText: {
        fontFamily: 'Rubik',
        fontSize: 16,
        alignContent: 'center',
        alignItems: 'center',
        color: colors.white,
    },

    button: {
        alignItems: "center",
        backgroundColor: colors.primeryBtnColor,
        padding: 8,
        width: '50%',
        borderRadius: 30
    },

    buttonTextLogin: {
        fontSize: 18,
        color: colors.white,
        fontWeight: '700',
        fontWeight: 'bold',
        paddingVertical: 3,
        alignSelf: 'center',
        fontFamily: 'Rubik',

    },
    passcodeText:
    {
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 30,
        color: '#b3b3b3',
        // flex: 1,
        // backgroundColor: 'red',
        padding: 10,
        fontFamily: 'Rubik',


    },

    imageBack: {
        width: '100%',
        height: '100%',
    },

    logo: {


        width: '100%',
        resizeMode: 'center',


    },
    logoView: {
        flex: 2,
        width: '60%',
        height: 'auto',
        alignItems: 'center',
        alignContent: 'center',
    },
    iconMargin: {
        marginRight: 10, justifyContent: 'center', alignSelf: 'center'
    }

});

export default ForgotPassword;