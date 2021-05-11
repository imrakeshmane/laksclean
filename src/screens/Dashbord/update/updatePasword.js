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


const UpdatePassword = (props) => {

    const [isUser, setUser] = useState(true)
    const { navigation } = props;
    const [showLoader, setLoader] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [changePassword, setLoginParums] = useState({
        cpassword: '',
        password: ''
    });
    const [showErorMsg, setErrorMsg] = useState('');
    
    const loginApiUser = () => {
        debugger
        setErrorMsg('');
        if (changePassword.cpassword && changePassword.password) {
            if (changePassword.cpassword !== changePassword.password) {
                setErrorMsg('Password not Match..!');
                return 
            }
            setErrorMsg('');
            const payload = {
                "mobileNo": props.userInfo.mobile_no,
                "password": changePassword.password
            };
            
            setLoader(true);

            Api.putApi(payload, 'user/password',props.userInfo.token)
                .then(response => {

                    console.log(response, 'password')
                    if (response && response.data.status=== "SUCCESS") {

                    ToastComponent.SuccessToaster(response.data.Message)
                    setLoginParums({
                        cpassword: '',
                        password: ''
                    })

                    }  else {
                        setErrorMsg(response.data.Message);
                    }
                    setLoader(false);

                    //  resolve(response)
                })
                .catch(error => {
                    setLoader(false);
                    console.log(error)
                    setErrorMsg('Something Wrong ..!');
                    // reject(error)
                })

        } else {
            if (!changePassword.password) {
                setErrorMsg('Please enter Password!')
            } else {
                setErrorMsg('Please enter Conform  Password..!')
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



                                    <Text style={{ fontSize: 25 }}>Change Password</Text>

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
                                        <TextInput
                                            placeholder={'Password'}
                                            value={changePassword.password}
                                            style={{ marginLeft: 20, color: 'black' ,width:'80%'}}
                                            onChangeText={value => {
                                                setLoginParums({ ...changePassword, password: value })
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
                                            marginTop: 20,
                                            justifyContent: 'space-between',
                                        }}>
                                        <TextInput style={{ marginLeft: 20, color: 'black' ,width:'80%'}} 
                                        placeholder="Conform Password"
                                            value={changePassword.cpassword}
                                            onChangeText={value => {
                                                setLoginParums({ ...changePassword, cpassword: value })
                                            }}
                                        />
                                    </View>
                                       <TouchableOpacity onPress={() => {
                                         loginApiUser()
                                    }}   style={{marginTop:20,alignContent:'center',justifyContent:'center',alignItems:'center'}}>


                                        <Text
                                            style={{
                                                backgroundColor: colors.lightblueColor,
                                                color: '#fff',
                                                width: '100%',
                                                borderRadius: 5,
                                                padding: 10,
                                                fontSize: 16,
                                                fontWeight:'bold',
                                                textAlign: 'center',
                                            }}>
                                            Save
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
        marginTop:20,
        textAlign: 'center'

    },

});
function mapStateToProps(state) {
    return {
        userInfo: state.userData,
    }
}
export default connect(mapStateToProps)(UpdatePassword);