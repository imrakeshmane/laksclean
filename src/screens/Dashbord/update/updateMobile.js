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
import ToastComponent from '../../../components/ToastComponent/Toaster';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';


const UpdateMobile = (props) => {

    const [isUser, setUser] = useState(true)
    const { navigation } = props;
    const [showLoader, setLoader] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [updateMobile, setLoginParums] = useState({
        otp: '',
        newNumber: ''
    });
    const [isOTPSend, setSendOTP] = useState(false);
    const [showErorMsg, setErrorMsg] = useState('');

    const sendOTP = () => {
        debugger
        setErrorMsg('');
        if (updateMobile.newNumber) {
            setErrorMsg('');
            let payload = {};
            if (isOTPSend) {
                payload = {
                    "mobileNo": updateMobile.newNumber,
                    "otp": updateMobile.otp
                };
            } else {
                payload = {
                    "newMobileNo": updateMobile.newNumber,
                };
            }

            Api.postApi(payload, isOTPSend ? 'auth/verify' : 'user/change/userId', props.userInfo.token)
                .then(response => {

                    console.log(response, isOTPSend ? 'auth/verify' : 'user/change/userId')
                    if (response && response.data.status === "SUCCESS") {
                        ToastComponent.SuccessToaster(response.data.Message)
                        if (isOTPSend) {
                            // setSendOTP(false);
                            navigation.goBack();
                        }
                        setSendOTP(true);


                    } else {
                        setErrorMsg(response.Message);
                        setLoader(false);
                    }
                    //  resolve(response)
                })
                .catch(error => {
                    setLoader(false);
                    console.log(error)
                    setErrorMsg('Mobile Number or Password Wrong..!');
                    // reject(error)
                })

        } else {
            if (!updateMobile.password) {
                setErrorMsg('Please enter Mobile Number..!')
            } else {
                setErrorMsg('Please enter New Mobile Number..!')
            }
        }
    }
    return (
        <>
            {showLoader ? <Loader /> :
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>

                            <View
                                style={{
                                    backgroundColor: 'white',
                                    flex: 8,
                                    borderTopLeftRadius: 60,
                                    borderTopRightRadius: 60,
                                }}>

                                <Text style={styles.errorText}>{showErorMsg}</Text>

                                <View style={{ margin: 20 }}>



                                    <Text style={{ fontSize: 25 }}>Change Mobile</Text>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            borderRadius: 5,
                                            marginTop: 20,
                                            justifyContent: 'space-between',
                                        }}>
                                        <TextInput style={{ marginLeft: 20, color: 'black', width: '80%' }}
                                            placeholder="New Mobile Number"
                                            value={updateMobile.cpassword}
                                            onChangeText={value => {
                                                setLoginParums({ ...updateMobile, newNumber: value })
                                            }}
                                        />
                                    </View>
                                    {isOTPSend && <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            borderRadius: 5,
                                            marginTop: 20,
                                            justifyContent: 'space-between',
                                        }}>
                                        <TextInput keyboardType={'number-pad'} maxLength={4} style={{ marginLeft: 20, color: 'black', width: '80%' }}
                                            placeholder="OTP"
                                            value={updateMobile.cpassword}
                                            onChangeText={value => {
                                                setLoginParums({ ...updateMobile, otp: value })
                                            }}
                                        />
                                    </View>}
                                    <TouchableOpacity onPress={() => {
                                        sendOTP()
                                    }} style={{ marginTop: 20, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>


                                        <Text
                                            style={{
                                                backgroundColor: colors.lightblueColor,
                                                color: '#fff',
                                                width: '100%',
                                                borderRadius: 5,
                                                padding: 10,
                                                fontSize: 16,
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                            }}>
                                            {isOTPSend ? "Verify " : "Update"}
                                        </Text>
                                    </TouchableOpacity>
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
        marginTop: 20,
        textAlign: 'center'

    },

});
function mapStateToProps(state) {
    return {
        userInfo: state.userData,
    }
}
export default connect(mapStateToProps)(UpdateMobile);