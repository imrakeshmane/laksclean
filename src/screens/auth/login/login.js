import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    StatusBar,
    FlatList,
    SafeAreaView,
} from 'react-native';
import Loader from '../../../components/Loader/Loader'
import colors from '../../../utils/colors';
import Api from '../../../utils/Api';
import AsyncStorage from '@react-native-community/async-storage';

import ToastComponent from '../../../components/ToastComponent/Toaster';
import Icons from 'react-native-vector-icons/FontAwesome';
import { UserAction } from '../../../reduxManager/index';
// import { CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HomePage from '../../Dashbord/home/home';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = (props) => {

    const [isUser, setUser] = useState(true)
    const { navigation } = props;
    const [showLoader, setLoader] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [show, setShow] = useState(false);
    const [loginParams, setLoginParums] = useState({
        email: '',
        password: ''
    });
    //    user
    // email: '8522222222',
    //     password: '123456'

    //    Vendor
    // email: '7387159996',
    //     password: '123456'
    const [showErorMsg, setErrorMsg] = useState('');
    const loderTimer = async () => {
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    }
    const validateEmail = (userEmail) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(loginParams.email).toLowerCase())) {
            return true;
        } else {
            return false;
        }
    }
    const loginApiUser = () => {

        if (loginParams.email && loginParams.password) {
            if (validateEmail()) {
                // setErrorMsg('Invalid Email..!')
                alert('Invalid Email..!')
            }
            setLoader(true);
            loderTimer()
            const formData = new FormData();
            formData.append('mobile_no', loginParams.email);
            formData.append('password', loginParams.password);
            Api.postApi(formData, 'Userapi/user_login')
                .then(response => {

                    console.log(response, 'responseresponse')
                    console.log(response.data, 'responsedataresponsedataresponsedataresponsedata')
                    // console.log(response.data.data.user_type, 'usertypeusertypeusertypeusertype');
                    if (response && response.status === 200 && response.data.message === 'User Login Succesfully') {
                        debugger
                        let userData = response.data.data;
                        console.log("printuserdata", userData);
                        userData.token = response.data.mobile_no
                        UserAction.setUserDetails(userData)
                        setLoader(false);
                        navigation.navigate('Drawer');
                    }
                    else {
                        setErrorMsg(response.data.message);

                        alert(response.data.message + 1)
                        setLoader(false);
                    }
                    //  resolve(response)
                })
                .catch(error => {
                    setLoader(false);
                    console.log(error)
                    // setErrorMsg('Mobile Number or Password Wrong..!');
                    alert(error)
                    // reject(error)
                })

        } else {
            if (!loginParams.email) {
                // setErrorMsg('Please enter Email or Mobile..!')
                alert('Please enter Email or Mobile..!');
            } else {
                //setErrorMsg('Please enter Password..!')
                alert('Please enter Password..!');
            }
        }
    }

    const loginVendorApi = () => {
        // setErrorMsg('');
        // alert('');
        if (loginParams.email && loginParams.password) {
            if (validateEmail()) {
                // setErrorMsg('Invalid Email..!')
                alert('Invalid Email..!')
            }
            // setErrorMsg('');
            //alert('');
            setLoader(true);
            loderTimer()
            // const formData = new FormData();
            // formData.append('mobileNo', loginParams.email);
            // formData.append('password', loginParams.password);

            const formData = new FormData();
            formData.append('mobile_no', loginParams.email);
            formData.append('password', loginParams.password);

            // const payload = {
            //     "mobileNo": loginParams.email,
            //     "password": loginParams.password
            // };
            setLoader(true);

            Api.postApi(formData, 'Api_controller/service_provider_login')
                .then(response => {

                    console.log(response, 'responseresponseservice_provider_loginservice_provider_login')
                    console.log(response.data, 'responsedataservice_provider_login')
                    // console.log(response.data.data.user_type, 'usertypeusertypeusertypeusertype');
                    if (response && response.status === 200 && response.data.message === 'User Login Succesfully') {
                        debugger
                        let userData = response.data.data[0]
                        console.log("printuserdata", userData);
                        // userData.token = response.data.mobile_no
                        UserAction.setUserDetails(userData)
                        setLoader(false);
                        //  navigation.navigate('Drawer');
                        navigation.navigate('VendorStack');

                    }
                    // else if (response && response.status === 200 && response.data.Message === "User logged in successfully." && response.data.data.user_type === 'CUSTOMER') {
                    //     alert('This is Vendor Screen,Please change tab and again login');
                    // }
                    else {
                        // setErrorMsg(response.data.message);
                        alert(response.data.message)
                        setLoader(false);
                    }
                    //  resolve(response)
                })
                .catch(error => {
                    setLoader(false);
                    console.log(error)
                    // setErrorMsg('Mobile Number or Password Wrong..!');
                    alert('Mobile Number or Password Wrong..!')
                    // reject(error)
                })

        } else {
            if (!loginParams.email) {
                // setErrorMsg('Please enter Email or Mobile..!')
                alert('Please enter Email or Mobile..!');
            } else {
                //setErrorMsg('Please enter Password..!')
                alert('Please enter Password..!');
            }
        }
    }
    return (
        <>
            {showLoader ? <Loader /> :
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>

                            {isUser === true ? <Image
                                source={require('../../../assets/UserBg.jpeg')}
                                style={{
                                    height: 200,
                                    width: '100%',

                                    alignSelf: 'center',
                                }}
                            />
                                : <Image
                                    source={require('../../../assets/office_cleaning.jpg')}
                                    style={{
                                        height: 200,
                                        width: '100%',

                                        alignSelf: 'center',
                                    }}
                                />
                            }
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    flex: 8,
                                    borderTopLeftRadius: 60,
                                    borderTopRightRadius: 60,
                                    marginTop: -20,
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        margin: 20,
                                    }}>

                                    <TouchableOpacity
                                        onPress={() => {
                                            setUser(true)
                                        }}
                                        style={{
                                            flexDirection: 'row',
                                            backgroundColor: isUser ? colors.lightblueColor : 'white',
                                            borderRadius: 10,
                                            flex: 1,
                                            padding: 10,
                                            elevation: 2,
                                        }}>
                                        <Icon
                                            color={isUser ? colors.lightblueColor : 'white'}
                                            name={'check-circle'}
                                            size={20}
                                            style={{ fontSize: 30, color: '#fff' }}
                                        />

                                        <Text
                                            style={{
                                                color: !isUser ? colors.lightblueColor : 'white',
                                                justifyContent: 'center',
                                                alignSelf: 'center',
                                                marginLeft: 5, textTransform: 'uppercase',
                                            }}>
                                            User
                             </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setUser(false)
                                        }}
                                        style={{
                                            flexDirection: 'row',
                                            backgroundColor: !isUser ? colors.lightblueColor : 'white',
                                            flex: 1,
                                            borderRadius: 10,
                                            padding: 10,
                                            elevation: 2,
                                        }}>
                                        <Icon
                                            color={isUser ? 'white' : colors.lightblueColor}
                                            name={'check-circle'}
                                            size={20}
                                            style={{ fontSize: 30, color: '#fff' }}
                                        />

                                        <Text
                                            style={{
                                                color: isUser ? colors.lightblueColor : 'white',
                                                justifyContent: 'center',
                                                marginLeft: 5,
                                                alignSelf: 'center', textTransform: 'uppercase',
                                            }}>
                                            Professional
                                  </Text>
                                    </TouchableOpacity>
                                </View>
                                {/* <Text style={styles.errorText}>{showErorMsg}</Text> */}

                                <View style={{ margin: 20 }}>



                                    <Text style={{ fontSize: 25 }}>Login</Text>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            borderRadius: 5,
                                            marginTop: 30,
                                            justifyContent: 'space-between',
                                        }}>
                                        <TextInput
                                            placeholder={'Mobile'}
                                            value={loginParams.email}
                                            keyboardType='number-pad'
                                            maxLength={10}
                                            style={{ marginLeft: 20, color: 'black', width: '80%' }}
                                            onChangeText={value => {
                                                setLoginParums({ ...loginParams, email: value })
                                            }}
                                        />
                                        <Icon
                                            style={styles.searchIcon}
                                            name="user"
                                            size={20}
                                            color="#000"
                                        />
                                    </View>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            borderRadius: 5,
                                            marginTop: 30,
                                            justifyContent: 'space-between',
                                        }}>
                                        <TextInput
                                            secureTextEntry={showPassword}
                                            style={{ marginLeft: 20, color: 'black', width: '75%' }} placeholder="Password"
                                            value={loginParams.password}
                                            onChangeText={value => {
                                                setLoginParums({ ...loginParams, password: value })
                                            }}
                                        />
                                        <TouchableOpacity onPress={() => {
                                            setShowPassword(!showPassword)
                                            setShow(!show)
                                        }}>


                                            <Icon
                                                style={styles.searchIcon}
                                                name={show === false ? "eye" : "eye-slash"}
                                                size={20}
                                                color="#000"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>

                                        <TouchableOpacity onPress={() => {
                                            navigation.navigate('ForgotPasswordPage');
                                        }}
                                            style={{
                                                flexDirection: 'row',
                                                backgroundColor: '#fff',
                                                padding: 10,
                                            }}>
                                            <Text
                                                style={{
                                                    color: '#000',
                                                    justifyContent: 'center',
                                                    marginLeft: 5,
                                                    alignSelf: 'center',
                                                }}>
                                                Forgot Password ?
                                     </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={() => {
                                        if (isUser) {
                                            loginApiUser()
                                            // navigation.navigate('Drawer');

                                        } else {
                                            // navigation.navigate('VendorStack');

                                            loginVendorApi();

                                        }
                                    }}>


                                        <Text
                                            style={{
                                                backgroundColor: colors.lightblueColor,
                                                color: '#fff',
                                                width: '80%',
                                                borderRadius: 10,
                                                padding: 10,

                                                textAlign: 'center', justifyContent: 'center', alignSelf: 'center', textTransform: 'uppercase',
                                            }}>
                                            Login
                             </Text>
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            width: '100%',
                                            color: 'gray',
                                            marginTop: 20,

                                            height: 1,
                                            elevation: 2,
                                        }}></View>

                                    <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'center', alignSelf: 'center' }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                backgroundColor: '#fff',


                                            }}>
                                            <Text
                                                style={{
                                                    color: '#6baefa',
                                                    justifyContent: 'center',

                                                    alignSelf: 'center',
                                                }}>
                                                Don't have an account ?
                                            </Text>
                                        </View>

                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                backgroundColor: '#fff',

                                            }}>
                                            <TouchableOpacity
                                                style={{
                                                    justifyContent: 'center',

                                                }}
                                                onPress={() => {
                                                    navigation.navigate('Register');
                                                }}>
                                                <Text
                                                    style={{
                                                        color: colors.lightblueColor,
                                                        marginLeft: 5,
                                                        fontWeight: 'bold',
                                                    }}>
                                                    Sign Up Here
                                        </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            }
        </>

    );
}

const styles = StyleSheet.create({
    safeA: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderColor: 'gray',
    },
    searchIcon: {
        padding: 10,
        color: 'gray',
    },
    input: {
        flex: 1,
        margin: 20,
        color: 'white',

        padding: 10,
        borderRadius: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center'

    },

});
export default Login;