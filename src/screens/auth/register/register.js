
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
    SafeAreaView
} from 'react-native';
import Loader from '../../../components/Loader/Loader'
import colors from '../../../utils/colors';
import Api from '../../../utils/Api';
import AsyncStorage from '@react-native-community/async-storage';
//import Icon from 'react-native-vector-icons/Ionicons';
import ToastComponent from '../../../components/ToastComponent/Toaster';
import Icons from 'react-native-vector-icons/FontAwesome';
import { UserAction } from '../../../reduxManager/index';
import Validation from '../../../components/validations/validation';

import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import { Linking } from 'react-native';
const Register = (props) => {


    const [showErorMsg, setErrorMsg] = useState('');
    const [isOTPSend, setIsOTP] = useState(false);
    const { navigation } = props;
    const [showLoader, setLoader] = useState(false);
    const [isSelected, setSelection] = useState(true);
    const [isUser, setUser] = useState(true)
    const [registerParams, setRegisterParums] = useState({
        firstName: '',
        lastName: '',
        countryCode: '+91',
        mobileNo: '',
        password: '',
        confirmPassword: '',
        otp: '',
        User_id: '',
        email: ''
    });
    const [countryCodeItem, setCountryCodeItem] = useState('');
    const [InsertOTP, setOTPScreen] = useState(false)
    const [showPassword, setShowPassword] = useState(true);
    const [show, setShow] = useState(false);
    const [showConPassword, setShowConPassword] = useState(true);
    const [showConPass, setShowConPass] = useState(false);



    const registerApiUser = () => {
        debugger

        if (!registerParams.firstName) {
            // setErrorMsg('Please insert First Name');
            alert('Please insert First Name')
            return
        }
        if (!registerParams.lastName) {
            // setErrorMsg('Please insert Last Name');
            alert('Please insert Last Name');
            return

        }
        // if (!registerParams.countryCode) {
        //     setErrorMsg('Please insert Country code');
        //     return

        // }
        if (!registerParams.mobileNo) {
            // setErrorMsg('Please insert Mobile Number');
            alert('Please insert Mobile Number');
            return

        }
        if (!registerParams.email) {
            // setErrorMsg('Please insert Mobile Number');
            alert('Please insert Email');
            return

        }
        if (!registerParams.password) {
            // setErrorMsg('Please insert Password');
            alert('Please insert Password')
            return

        }
        // setErrorMsg('')
        //alert('')
        // const payload = {
        //     "firstName": registerParams.firstName,
        //     "lastName": registerParams.lastName,
        //     // "countryCode": registerParams.countryCode,
        //     "countryCode": countryCodeItem,
        //     "mobileNo": registerParams.mobileNo,
        //     "password": registerParams.password,
        //     "userType": 'CUSTOMER'
        // };
        setLoader(true);
        const formData = new FormData();
        formData.append('first_name', registerParams.firstName);
        formData.append('last_name', registerParams.lastName);
        formData.append('country_code', registerParams.countryCode);
        formData.append('mobile_no', registerParams.mobileNo);
        formData.append('email', registerParams.email);
        formData.append('password', registerParams.password);
        formData.append('lat', 2132222);
        formData.append('long', 1111111);

        Api.postApi(formData, 'Userapi/user_registration')
            .then(response => {

                console.log(response, 'registerResponse')

                console.log(response.data, "printresponse");
                if (response && response.status === 200 && response.data.message === 'Please Verify Your Mobile Number') {
                    setLoader(false);

                    // let userData = response.data.data;
                    // userData.token = response.data.token
                    // UserAction.setUserDetails(userData)
                    setRegisterParums({ ...registerParams, User_id: response.data.User_id })
                    setOTPScreen(true);
                } else {
                    // setErrorMsg(response.data.message);
                    alert(response.data.message);
                    console.log(response.data.message, "response.data.messageresponse.data.messageresponse.data.message");
                    setLoader(false);
                }
                //  resolve(response)
            })
            .catch(error => {
                setLoader(false);
                console.log(error.response.data.message, "helloerror")
                // setErrorMsg('User Exist');

                // alert('User Exist');
                alert(error.response.data.message)
                // reject(error)
            })


    }



    const registerVendorApiUser = () => {
        debugger

        if (!registerParams.firstName) {
            // setErrorMsg('Please insert First Name');
            alert('Please insert First Name')
            return
        }
        if (!registerParams.lastName) {
            // setErrorMsg('Please insert Last Name');
            alert('Please insert Last Name');
            return

        }
        // if (!registerParams.countryCode) {
        //     setErrorMsg('Please insert Country code');
        //     return

        // }
        if (!registerParams.mobileNo) {
            // setErrorMsg('Please insert Mobile Number');
            alert('Please insert Mobile Number');
            return

        }
        if (!registerParams.email) {
            // setErrorMsg('Please insert Mobile Number');
            alert('Please insert Email');
            return

        }
        if (!registerParams.password) {
            // setErrorMsg('Please insert Password');
            alert('Please insert Password')
            return

        }

        setLoader(true);
        const formData = new FormData();
        formData.append('first_name', registerParams.firstName);
        formData.append('last_name', registerParams.lastName);
        formData.append('country_code', registerParams.countryCode);
        formData.append('mobile_no', registerParams.mobileNo);
        formData.append('email', registerParams.email);
        formData.append('password', registerParams.password);
        formData.append('lat', 212121);
        formData.append('long', 121212121);

        Api.postApi(formData, 'Api_controller/service_provider_registration')
            .then(response => {

                console.log(response, 'registerResponse')
                setLoader(false);

                console.log(response, "printresponse");
                if (response && response.status === 200 && response.data.message === 'Data Inserted Succesfully') {

                    setRegisterParums({ ...registerParams, User_id: response.data.User_id })
                    setOTPScreen(true);
                } else {
                    // setErrorMsg(response.data.message);
                    alert(response.data.message);
                    console.log(response.data.message, "response.data.messageresponse.data.messageresponse.data.message");
                    setLoader(false);
                }
                //  resolve(response)
            })
            .catch(error => {
                setLoader(false);
                console.log(error.response.data.message, "helloerror")
                // setErrorMsg('User Exist');

                // alert('User Exist');
                alert(error.response.data.message)
                // reject(error)
            })


    }




    const validateOTP = () => {
        debugger

        //   setErrorMsg('')
        //  alert('');
        // const payload = {
        //     "firstName": registerParams.firstName,
        //     "lastName": registerParams.lastName,
        // };

        const formData = new FormData();
        formData.append('user_id', registerParams.User_id);
        formData.append('otp', registerParams.otp);

        setLoader(true);

        debugger
        Api.postApi(formData, 'Userapi/verify_user_otp')
            .then(response => {
                setLoader(false);

                console.log(response, 'verify')
                if (response && response.status === 200 && response.data.message === 'user registered succesfully') {
                    ToastComponent.SuccessToaster('User Registered succesfully Please login to continue')
                    setLoader(false);
                    if (isUser) {
                        navigation.navigate('Login');
                    } else {
                        navigation.navigate('Login');
                    }

                } else {
                    // setErrorMsg(response.data.message);
                    alert(response.data.message);
                    setLoader(false);
                }
                //  resolve(response)
            })
            .catch(error => {
                setLoader(false);
                console.log(error)
                // setErrorMsg('Something goes wrong...');
                //  alert('Something goes wrong...');
                alert(error.response.data.message)
                // reject(error)
            })


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
                                            padding: 15,
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
                                            padding: 15,
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



                                <Text style={styles.errorText}>{showErorMsg}</Text>


                                {!InsertOTP ? <View style={{ margin: 20 }}>
                                    <Text style={{ fontSize: 25 }}>Sign Up</Text>


                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            borderRadius: 5,
                                            marginTop: 10,
                                            justifyContent: 'space-between',
                                        }}>
                                        <TextInput style={{ marginLeft: 20, width: '100%' }} placeholder="First Name"
                                            value={registerParams.firstName} onChangeText={value => {
                                                setRegisterParums({ ...registerParams, firstName: value })
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
                                            marginTop: 10,
                                            justifyContent: 'space-between',
                                        }}>
                                        <TextInput style={{ marginLeft: 20, width: '100%' }} placeholder="Last Name"
                                            value={registerParams.lastName} onChangeText={value => {
                                                setRegisterParums({ ...registerParams, lastName: value })
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

                                            borderRadius: 5,
                                            marginTop: 10,
                                            justifyContent: 'space-between',
                                        }}>


                                        {/* <DropDownPicker
                                            labelStyle={{ color: colors.lightblueColor }}
                                            items={[
                                                {
                                                    "value": "Canada",
                                                    "label": "+1",
                                                    "isoCode": "CA"
                                                },
                                                {
                                                    "value": "United States",
                                                    "label": "+1",
                                                    "isoCode": "US"
                                                },
                                                {
                                                    "value": "Cameroon",
                                                    "label": "+237",
                                                    "isoCode": "CM"
                                                },
                                                {
                                                    "value": "France",
                                                    "label": "+33",
                                                    "isoCode": "FR"
                                                },
                                                {
                                                    "value": "Nigeria",
                                                    "label": "+234",
                                                    "isoCode": "NG"
                                                },
                                                {
                                                    "value": "India",
                                                    "label": "+91",
                                                    "isoCode": "IN"
                                                },
                                            ]}
                                            placeholder="Code"
                                            containerStyle={{ height: 50 }}
                                            style={{
                                                backgroundColor: '#ffffff', width: 90, borderColor: 'gray', borderRadius: 5,
                                                borderWidth: 1,
                                            }}
                                            dropDownStyle={{ backgroundColor: 'white' }}
                                            onChangeItem={item => setCountryCodeItem(item.label)}
                                        /> */}

                                        {/* <TextInput

                                    maxLength={10} style={{
                                        width: '20%', textAlign: 'center', borderColor: 'gray', borderRadius: 5,
                                        borderWidth: 1,
                                    }} placeholder="Code "
                                    value={registerParams.countryCode} onChangeText={value => {
                                        setRegisterParums({ ...registerParams, countryCode: value })
                                    }}
                                /> */}
                                        <TextInput keyboardType={"phone-pad"}
                                            maxLength={10} style={{
                                                width: '25%', height: 40, borderColor: 'gray', borderRadius: 5,
                                                borderWidth: 1, textAlign: 'center'
                                            }} placeholder="+91"
                                            value={registerParams.countryCode}
                                            onChangeText={value => {
                                                setRegisterParums({ ...registerParams, countryCode: value })
                                            }}
                                        />

                                        <TextInput keyboardType={"phone-pad"}
                                            maxLength={10} style={{
                                                width: '70%', height: 40, borderColor: 'gray', borderRadius: 5,
                                                borderWidth: 1, textAlign: 'center'
                                            }} placeholder="Mobile Number"
                                            value={registerParams.mobileNo} onChangeText={value => {
                                                setRegisterParums({ ...registerParams, mobileNo: value })
                                            }}
                                        />

                                    </View>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            borderRadius: 5,
                                            marginTop: 10,
                                            justifyContent: 'space-between',
                                        }}>
                                        <TextInput style={{ marginLeft: 20, width: '100%' }} placeholder="Email"
                                            value={registerParams.email} onChangeText={value => {
                                                setRegisterParums({ ...registerParams, email: value })
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
                                            marginTop: 10,
                                            justifyContent: 'space-between',
                                        }}>
                                        <TextInput secureTextEntry={showPassword}
                                            style={{ marginLeft: 20, width: '80%' }} placeholder="Password"
                                            value={registerParams.password} onChangeText={value => {
                                                setRegisterParums({ ...registerParams, password: value })
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

                                        {/* <Icon
                                    style={styles.searchIcon}
                                    name="eye"
                                    size={20}
                                    color="#000"
                                /> */}
                                    </View>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            borderRadius: 5,
                                            marginTop: 10,
                                            justifyContent: 'space-between',
                                        }}>
                                        <TextInput secureTextEntry={showConPassword}
                                            style={{ marginLeft: 20, width: '80%' }} placeholder="Confirm Password"
                                            value={registerParams.confirmPassword} onChangeText={value => {
                                                setRegisterParums({ ...registerParams, confirmPassword: value })
                                            }}
                                        />

                                        <TouchableOpacity onPress={() => {
                                            setShowConPassword(!showConPassword)
                                            setShowConPass(!showConPass)
                                        }}>


                                            <Icon
                                                style={styles.searchIcon}
                                                name={showConPass === false ? "eye" : "eye-slash"}
                                                size={20}
                                                color="#000"
                                            />
                                        </TouchableOpacity>

                                        {/* <Icon
                                    style={styles.searchIcon}
                                    name="eye"
                                    size={20}
                                    color="#000"
                                /> */}
                                    </View>
                                    <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'center', alignSelf: 'flex-start', alignItems: 'center' }}>
                                        {/* <CheckBox
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{ color: colors.lightblueColor, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}
                                        /> */}

                                        <Icon
                                            size={20}
                                            color={'#211f30'}
                                            name={'check-circle'}
                                            style={{ fontSize: 30, color: colors.lightblueColor }}
                                        />
                                        <TouchableOpacity onPress={() => {
                                            Linking.openURL('https://laksclean.com/Dev-Laksclean/term-conditions')
                                        }}>

                                            <Text

                                                style={{
                                                    color: colors.lightblueColor,
                                                    textDecorationLine: 'underline'

                                                }}>
                                                Accept Terms & Conditions
                                     </Text>
                                        </TouchableOpacity>


                                    </View>
                                    <TouchableOpacity style={{ backgroundColor: colors.lightblueColor, width: '80%', padding: 10, borderRadius: 10, marginHorizontal: 10, justifyContent: 'center', alignSelf: 'center' }}
                                        onPress={() => {
                                            if (isUser) {
                                                if (registerParams.password !== registerParams.confirmPassword) {
                                                    //your error
                                                    alert("Password does not match");
                                                }
                                                else {
                                                    //success
                                                    //  alert("Password Match");
                                                    registerApiUser();
                                                }
                                                //alert(firstName + lastName + mobileNo + password);
                                            }
                                            else {
                                                registerVendorApiUser();
                                                // alert(countryCodeItem);
                                            }
                                        }}>
                                        <Text
                                            style={{
                                                width: '80%', color: "white", fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', justifyContent: 'center', alignSelf: 'center'

                                            }}>
                                            Register Now
                              </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ backgroundColor: colors.lightblueColor, width: '80%', padding: 10, borderRadius: 10, marginHorizontal: 10, justifyContent: 'center', alignSelf: 'center', top: 10 }}
                                        onPress={() => {
                                            setRegisterParums({ registerParams, firstName: '' })
                                            setRegisterParums({ registerParams, lastName: '' })
                                            setRegisterParums({ registerParams, mobileNo: '' })
                                            setRegisterParums({ registerParams, password: '' })
                                            setRegisterParums({ registerParams, confirmPassword: '' })
                                            setRegisterParums({ registerParams, email: '' })

                                        }}>
                                        <Text
                                            style={{
                                                width: '80%', color: "white", fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', justifyContent: 'center', alignSelf: 'center'

                                            }}>
                                            Reset
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

                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', padding: 5, }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                backgroundColor: '#fff',


                                            }}>
                                            <Text
                                                style={{
                                                    color: colors.lightblueColor,
                                                    justifyContent: 'center',
                                                    marginLeft: 5,
                                                    alignSelf: 'center',
                                                }}>
                                                Already a Member ?
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
                                                    navigation.navigate('Login');
                                                }}>
                                                <Text
                                                    style={{
                                                        color: colors.lightblueColor,
                                                        justifyContent: 'center',
                                                        marginLeft: 5,
                                                        alignSelf: 'center',
                                                        fontWeight: 'bold',
                                                    }}>
                                                    Sign In Here
                                     </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                    :


                                    <View style={{ margin: 20 }}>
                                        <Text style={{ fontSize: 25 }}>Enter OTP</Text>

                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                borderRadius: 5,
                                                marginTop: 10,
                                                justifyContent: 'space-between',
                                            }}>
                                            <TextInput keyboardType={"phone-pad"}
                                                maxLength={10} style={{ marginLeft: 20, width: '100%' }} placeholder="Mobile No"
                                                value={registerParams.mobileNo} onChangeText={value => {
                                                    setRegisterParums({ ...registerParams, mobileNo: value })
                                                }}
                                            />
                                            {/* <Icon
                                        style={styles.searchIcon}
                                        name="user"
                                        size={20}
                                        color="#000"
                                    /> */}
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                borderRadius: 5,
                                                marginVertical: 20,
                                                justifyContent: 'space-between',
                                            }}>
                                            <TextInput keyboardType={"phone-pad"}
                                                maxLength={4} style={{ marginLeft: 20, width: '100%' }} placeholder="OTP"
                                                value={registerParams.otp} onChangeText={value => {

                                                    setRegisterParums({ ...registerParams, otp: value })
                                                }}
                                            />
                                            {/* <Icon
                                        style={styles.searchIcon}
                                        name="user"
                                        size={20}
                                        color="#000"
                                    /> */}
                                        </View>
                                        <TouchableOpacity onPress={() => {

                                        }}>
                                            <Text style={{ fontSize: 14, marginBottom: 20, color: colors.primeryBtnColor }}>Resend OTP</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            if (registerParams.otp) {
                                                validateOTP();
                                            } else {
                                                // setErrorMsg('Please Enter OTP..!')
                                                alert('Please Enter OTP..!');
                                            }

                                            //alert(firstName + lastName + mobileNo + password);
                                        }}>
                                            <Text
                                                style={{
                                                    backgroundColor: colors.lightblueColor,
                                                    color: '#fff',
                                                    width: '100%',
                                                    borderRadius: 10,
                                                    padding: 10,
                                                    fontSize: 20,
                                                    textAlign: 'center',
                                                }}>
                                                Submit
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

                                        <View style={{ flexDirection: 'row' }}>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    backgroundColor: '#fff',

                                                    padding: 15,
                                                }}>
                                                <Text
                                                    style={{
                                                        color: colors.lightblueColor,
                                                        justifyContent: 'center',
                                                        marginLeft: 5,
                                                        alignSelf: 'center',
                                                    }}>
                                                    Already a Member ?
                                 </Text>
                                            </View>

                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    backgroundColor: '#fff',
                                                    padding: 15,
                                                }}>
                                                <TouchableOpacity
                                                    style={{
                                                        justifyContent: 'center',
                                                        padding: 5,
                                                    }}
                                                    onPress={() => {
                                                        navigation.navigate('Login');
                                                    }}>
                                                    <Text
                                                        style={{
                                                            color: colors.lightblueColor,
                                                            justifyContent: 'center',
                                                            marginLeft: 5,
                                                            alignSelf: 'center',
                                                            fontWeight: 'bold',
                                                        }}>
                                                        Sign In Here
                                     </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            }
        </>
    )
}

const styles = StyleSheet.create({
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
        marginLeft: 0,
        height: 100,
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 50

    },
    logoView: {
        flex: 2,
        width: '60%',
        height: 'auto',
        alignItems: 'center',
        alignContent: 'center',
    },
    iconMargin: {
        marginRight: 10
    }

});

export default Register;