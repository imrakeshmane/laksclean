// // React Native Bottom Navigation
import React, { useContext, useEffect, useState, useRef } from 'react';
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
import { connect } from 'react-redux';

// import { CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import IconNew from 'react-native-vector-icons/MaterialCommunityIcons';
import IconNew2 from 'react-native-vector-icons/MaterialIcons';
import colors from '../../utils/colors';
import { UserAction } from '../../reduxManager';
import Api from '../../utils/Api';
import IonicIcons from 'react-native-vector-icons/Ionicons';


const MyAccountVendor = (props) => {
    console.log(props.userInfo)
    const [showLoader, setLoader] = useState(false);

    useEffect(() => {
        getUserDetails()
    }, [])
    const getUserDetails = () => {
        debugger
        const formData = new FormData();
        formData.append('user_id', props.userInfo.id);
        formData.append('type', 'USER');

        setLoader(true);
        Api.postApi(formData, 'Userapi/UserProfile')
            .then(response => {
                console.log("UserProfile", response)
                setLoader(false);
            })
            .catch(error => {
                setLoader(false);
                console.log(error)
            })
    }


    console.log("userinfo", props.userInfo)
    const { navigation } = props;
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

            <TouchableOpacity onPress={() => {
                debugger
                // console.log('https://laksclean.com/Dev-Laksclean/Main_work/update_profile/?id=' + props.userInfo.id)

                navigation.navigate("vendorUpdate", { mainURL: 'https://laksclean.com/Dev-Laksclean/Main_work/update_profile/?id=' + props.userInfo.id })
            }}
                style={{
                    marginTop: 20,
                    flex: 1,
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 5,
                }}>
                <Image source={require('../../assets/avatar6.png')} style={{ width: 80, height: 80, resizeMode: 'center', borderRadius: 100 / 2, margin: 5 }} />
                <View>
                    <Text
                        style={{
                            marginTop: 20,
                            fontSize: 14, fontWeight: 'bold',
                            marginLeft: 5,
                        }}>
                        {props.userInfo && props.userInfo.first_name}{"  "}
                        {props.userInfo && props.userInfo.last_name}
                    </Text>
                    <Text>{props.userInfo && props.userInfo.mobile_no}</Text>

                </View>
                <Icon
                    style={{
                        padding: 10,
                        color: '#42a5f5',

                        alignSelf: 'flex-end',
                        flex: 2,
                    }}
                    name="edit"
                    size={25}
                    color="#000"
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                // console.log('https://laksclean.com/Dev-Laksclean/Main_work/update_profile/?id=' + props.userInfo.id)

                navigation.navigate("vendorUpdate", { mainURL: 'https://laksclean.com/Dev-Laksclean/Main_work/update_profile/?id=' + props.userInfo.id })
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                <Icon
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="user"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',
                        marginLeft: 5,
                        flex: 8,
                    }}>
                    Edit Profile
        </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate("vendorUpdate", { mainURL: 'https://laksclean.com/Dev-Laksclean/Main_work/update_bank/?id=' + props.userInfo.id })
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                <IonicIcons
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="ios-build"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',
                        marginLeft: 5,
                        flex: 8,
                    }}>
                    KYC Details
        </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => {
                navigation.navigate("vendorUpdate", { mainURL: 'https://laksclean.com/Dev-Laksclean/my_quiz' })
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                <IonicIcons
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="ios-cube"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',
                        marginLeft: 5,
                        flex: 8,
                    }}>
                    Quiz
        </Text>
            </TouchableOpacity>




            <TouchableOpacity onPress={() => {
                navigation.navigate("vendorUpdate", { mainURL: 'https://laksclean.com/Dev-Laksclean/cart?user_id=' + props.userInfo.id })
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start', borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                <IonicIcons
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="ios-cart"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',
                        marginLeft: 5,
                        flex: 8,
                    }}>
                    My Cart
        </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("vendorUpdate", { mainURL: 'https://laksclean.com/Dev-Laksclean/Main_work/update_avail/?id=' + props.userInfo.id })
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start', borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                <IonicIcons
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="ios-analytics"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',
                        marginLeft: 5,
                        flex: 8,
                    }}>
                    Availability
        </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate("vendorUpdate", { mainURL: 'https://laksclean.com/Dev-Laksclean/product-order?user_id=' + props.userInfo.id })
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start', borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                <Icon
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="graduation-cap"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',

                        marginLeft: 5,
                        flex: 8,
                    }}>
                    Product Order
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate("vendorUpdate", { mainURL: 'https://laksclean.com/Dev-Laksclean/reviews?user_id=' + props.userInfo.id })
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start', borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>


                <IonicIcons
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="ios-eye"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',
                        marginLeft: 5,
                        flex: 8,
                    }}>
                    Review
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate("vendorUpdate", { mainURL: 'https://laksclean.com/Dev-Laksclean/user-booking-transaction?user_id=' + props.userInfo.id })
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start', borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>


                <IonicIcons
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="ios-card"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',
                        marginLeft: 5,
                        flex: 8,
                    }}>
                    Payment History
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                UserAction.resetUserDetails({});
                navigation.navigate("SplashScreen")
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start', borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                <Icon
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="sign-out"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',
                        marginLeft: 5,
                        flex: 8,
                    }}>
                    Logout
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

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
});


function mapStateToProps(state) {
    return {
        userInfo: state.userData,
        selectedCourseRedux: state.selectedCourse
    }
}
// export default connect(mapStateToProps)(DrawerScreen);
// // https://aboutreact.com/react-native-bottom-navigation/
// import React, { useContext, useEffect, useState, useRef } from 'react';
// import {
//     TouchableOpacity,
//     StyleSheet,
//     View,
//     Text, Image,
//     StatusBar, TextInput,
//     FlatList, Switch,
//     SafeAreaView
// } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import { SearchBar } from 'react-native-elements';
// import { SliderBox } from "react-native-image-slider-box";
// import {
//     Header,
//     LearnMoreLinks,
//     Colors,
//     DebugInstructions,
//     ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import colors from '../../utils/colors';
// import { UserAction } from '../../reduxManager';
// import { connect } from 'react-redux';
// import Api from '../../utils/Api';
// import DropDownPicker from 'react-native-dropdown-picker';
// import Toaster from '../../components/ToastComponent/Toaster';
// const MyAccountVendor = ({ route, navigation, userInfo }) => {
//     const [isEnabled, setIsEnabled] = useState(false);
//     const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//     const [showLoader, setLoader] = useState(false);

//     useEffect(() => {
//         getUserDetails()
//     }, []);
//     const [areaValues, setArea] = useState({
//         "city": userInfo.city,
//         "contry": userInfo.country,
//         "state": userInfo.state,
//         "area": userInfo.area
//     });
//     const getUserDetails = () => {
//         debugger
//         const formData = new FormData();
//         formData.append('user_id', userInfo.id);
//         formData.append('type', 'CUSTOMER');

//         setLoader(true);
//         Api.postApi(formData, 'Userapi/UserProfile')
//             .then(response => {
//                 console.log("UserProfile", response);
//                 if (response && response.data && response.data.message) {

//                     UserAction.setUserDetails(response.data.message);
//                     getContry();
//                     getState(response.data.message.country);
//                     getCity(response.data.message.state);
//                     getArea(response.data.message.city);

//                 } else {

//                 }

//                 setLoader(false);
//             })
//             .catch(error => {
//                 setLoader(false);
//                 console.log(error)
//             })
//     }




//     const [showActivityLoader, setshowActivityLoader] = useState(false);

//     const [contryList, setContryList] = useState([])
//     const getContry = () => {
//         debugger
//         Api.getApi('Userapi/getCountry')
//             .then(response => {
//                 console.log(response, 'getCountry')
//                 setLoader(false);
//                 let tempContry = [];
//                 if (response && response.data && response.data.country) {

//                     response.data.country.map((c, i) => {
//                         c.label = c.country
//                         c.value = c.id
//                         tempContry.push(c);
//                     })
//                     console.log(tempContry, 'tempContry')
//                     setContryList(tempContry)

//                 }
//             }).catch((err) => {
//                 console.log(response)
//             })

//     }

//     const [stateList, setStateList] = useState([])

//     const getState = (id) => {
//         const formData = new FormData();

//         formData.append('country', id);
//         console.log(formData)
//         setshowActivityLoader(true)
//         Api.postApi(formData, 'Userapi/getState')
//             .then(response => {
//                 setLoader(false);

//                 console.log(response, 'getState')
//                 let tempContry = [];
//                 setStateList([]);
//                 setCityList([]);
//                 setAreaList([]);
//                 if (response && response.data && response.data.state) {

//                     response.data.state.map((c, i) => {
//                         c.label = c.state
//                         c.value = c.id
//                         tempContry.push(c);
//                     })
//                     console.log(tempContry, 'tempContry')
//                     setStateList(tempContry)

//                 }
//                 setshowActivityLoader(false)
//             }).catch((err) => {
//                 setshowActivityLoader(false);

//                 console.log(err,'getState')
//             })

//     }

//     const [cityList, setCityList] = useState([])

//     const getCity = (id) => {
//         const formData = new FormData();
//         formData.append('state', id);
//         console.log(formData)
//         setshowActivityLoader(true)
//         Api.postApi(formData, 'Userapi/getCity')
//             .then(response => {
//                 setshowActivityLoader(false);
//                 console.log(response, 'getCity')
//                 let tempContry = [];
//                 setCityList([]);
//                 setAreaList([]);
//                 if (response && response.data && response.data.city) {

//                     response.data.city.map((c, i) => {
//                         c.label = c.city
//                         c.value = c.id
//                         tempContry.push(c);
//                     })
//                     console.log(tempContry, 'tempContry')
//                     setCityList(tempContry)

//                 }
//             }).catch((err) => {
//                 setshowActivityLoader(false);

//                 console.log(err)
//             })

//     }

//     const [areaList, setAreaList] = useState([])

//     const getArea = (id) => {
//         const formData = new FormData();
//         formData.append('city', id);
//         console.log(formData)
//         setshowActivityLoader(true)
//         Api.postApi(formData, 'Userapi/getArea')
//             .then(response => {
//                 setshowActivityLoader(false);
//                 console.log(response, 'getares')
//                 let tempContry = [];
//                 if (response && response.data && response.data.area) {
//                     setAreaList([]);
//                     response.data.area.map((c, i) => {
//                         c.label = c.area
//                         c.value = c.id
//                         tempContry.push(c);
//                     })
//                     console.log(tempContry, 'tempContry')
//                     setAreaList(tempContry)

//                 }
//             }).catch((err) => {
//                 setshowActivityLoader(false);

//                 console.log(err)
//             })

//     }

//     let countries = contryList.length === 0 ? userInfo.country: userInfo.country;
//     let states = stateList.length === 0 ? userInfo.state : stateList[0].value;
//     let citys = cityList.length === 0 ? userInfo.city: cityList[0].value;
//     let areas = areaList.length === 0 ? userInfo.area : areaList[0].value;





//     const updateUserDetails = (id) => {
//         const formData = new FormData();
//         formData.append('first_name', userInfo.first_name);

//         formData.append('last_name', userInfo.last_name);

//         formData.append('country_code', areaValues.contry);
//         formData.append('mobile_no', userInfo.mobile_no);
//         formData.append('location', '123');
//         formData.append('user_id', userInfo.id);
//         formData.append('image', '');
//         formData.append('state', areaValues.state);
//         formData.append('city', areaValues.city);
//         formData.append('area', areaValues.area);


//         console.log(formData)

//         setshowActivityLoader(true)
//         Api.postApi(formData, 'Api_controller/profile_changes')
//             .then(response => {
//                 setshowActivityLoader(false);
//                 console.log(response, 'profile_changes');
//                 if(response.status==200 && response.data.error==='false'){
//                     getUserDetails()

//                 }else{
//                    Toaster.ErrorToaster(response.data.message) 
//                 }


//             }).catch((err) => {
//                 console.log(err,'profile_changes error')
//             })

//     }
//     return (
//         <SafeAreaView>

//             <ScrollView>

//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
//                     <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', textAlign: 'left', flex: 1 }}>Account Active</Text>
//                     <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
//                         <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', }}>Profile Active</Text>
//                         <Switch
//                             trackColor={{ false: "#767577", true: "#81b0ff" }}
//                             thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//                             ios_backgroundColor="#3e3e3e"
//                             onValueChange={toggleSwitch}
//                             value={isEnabled}
//                         />
//                     </View>
//                 </View>
//                 <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold', margin: 10 }}>Profile Details</Text>

//                 <View style={{ flexDirection: 'column', backgroundColor: '#fff', margin: 10, padding: 10, elevation: 4, borderRadius: 5 }}>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


//                         <Image
//                             source={require('../../assets/icon.png')}
//                             style={{
//                                 height: 80,
//                                 width: 80,
//                                 alignSelf: 'center',
//                             }}
//                         />
//                         <Text style={{ color: userInfo && userInfo.kyc_status==='2'?'green':'red', fontSize: 14, fontWeight: 'bold', }}>{userInfo && userInfo.kyc_status==='2' ? "Approve":"Pending"}</Text>
//                     </View>
//                     <View style={{ flex: 1, }}>


//                         <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>First Name </Text>
//                         <View
//                             style={{
//                                 flexDirection: 'row',
//                                 alignItems: 'center',
//                                 borderColor: 'black',
//                                 borderWidth: 1,
//                                 borderRadius: 5,
//                                 marginVertical: 10,
//                                 justifyContent: 'space-between',
//                             }}>
//                             <TextInput
//                                 style={{ marginLeft: 20, color: 'black', width: '100%' }} placeholder="First Name"
//                                 value={userInfo.first_name}
//                                 onChangeText={value => {
//                                     userInfo.first_name = value
//                                     // setLoginParums({ ...loginParams, password: value })
//                                 }}
//                             />
//                         </View>


//                         {/* last Name */}
//                         <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>Last Name </Text>
//                         <View
//                             style={{
//                                 flexDirection: 'row',
//                                 alignItems: 'center',
//                                 borderColor: 'black',
//                                 borderWidth: 1,
//                                 borderRadius: 5,
//                                 marginVertical: 10,
//                                 justifyContent: 'space-between',
//                             }}>
//                             <TextInput
//                                 style={{ marginLeft: 20, color: 'black', width: '100%' }} placeholder="Last Name"
//                                 value={userInfo.last_name}
//                                 onChangeText={value => {
//                                     userInfo.last_name=value
//                                     // setLoginParums({ ...loginParams, password: value })
//                                 }}
//                             />
//                         </View>

//                         {/* mobile number  */}

//                         <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>Mobile </Text>
//                         <View
//                             style={{
//                                 flexDirection: 'row',
//                                 alignItems: 'center',
//                                 borderColor: 'black',
//                                 borderWidth: 1,
//                                 borderRadius: 5,
//                                 marginVertical: 10,
//                                 justifyContent: 'space-between',
//                             }}>
//                             <TextInput
//                                 style={{ marginLeft: 20, color: 'black', width: '100%' }} placeholder="Mobile"
//                                 value={userInfo.mobile_no}
//                                 onChangeText={value => {
//                                     userInfo.mobile_no=value
//                                     // setLoginParums({ ...loginParams, password: value })
//                                 }}
//                             />
//                         </View>



//                         <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>Pincode </Text>
//                         <View
//                             style={{
//                                 flexDirection: 'row',
//                                 alignItems: 'center',
//                                 borderColor: 'black',
//                                 borderWidth: 1,
//                                 borderRadius: 5,
//                                 marginVertical: 10,
//                                 justifyContent: 'space-between',
//                             }}>
//                             <TextInput
//                                 style={{ marginLeft: 20, color: 'black', width: '100%' }} placeholder="Pincode"
//                                 value={userInfo.pincode}
//                                 onChangeText={value => {
//                                     userInfo.pincode= value
//                                     console.log(userInfo.pincode,'userInfo.pincode')
//                                     // setLoginParums({ ...loginParams, password: value })
//                                 }}
//                             />
//                         </View>

//                     </View>

//                     <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Select country</Text>
//                             {contryList && contryList.length !== 0 && <DropDownPicker
//                                 items={contryList}
//                                 defaultValue={countries}
//                                 containerStyle={{

//                                 }}
//                                 style={{
//                                     height: 50,
//                                     fontSize: 16, marginVertical: 10, borderWidth: 1, borderColor: '#000', borderRadius: 30,
//                                 }}
//                                 itemStyle={{
//                                     justifyContent: 'flex-start'
//                                 }}
//                                 labelStyle={{color:'black'}}
//                                 dropDownStyle={{ backgroundColor: '#fafafa' }}
//                                 onChangeItem={item => {
//                                     countries = item.value
//                                     setArea({ ...areaValues, contry: item.value });
//                                     getState(item.value)


//                                 }

//                                 }
//                             />}

//                             {stateList && stateList.length !== 0 && <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Select State</Text>}
//                             {stateList && stateList.length !== 0 && <DropDownPicker
//                                 items={stateList}
//                                 defaultValue={states}
//                                 containerStyle={{

//                                 }}
//                                 style={{
//                                     height: 50,
//                                     fontSize: 16, marginVertical: 10, borderWidth: 1, borderColor: '#000', borderRadius: 30,
//                                 }}
//                                 itemStyle={{
//                                     justifyContent: 'flex-start'
//                                 }}
//                                 labelStyle={{color:'black'}}

//                                 dropDownStyle={{ backgroundColor: '#fafafa' }}
//                                 onChangeItem={item => {
//                                     setArea({ ...areaValues, state: item.value });
//                                     getCity(item.value)


//                                 }

//                                 }
//                             />}

//                             {cityList && cityList.length !== 0 && <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Select City</Text>}
//                             {cityList && cityList.length !== 0 && <DropDownPicker
//                                 items={cityList}
//                                 defaultValue={citys}
//                                 containerStyle={{

//                                 }}
//                                 style={{
//                                     height: 50,
//                                     fontSize: 16, marginVertical: 10, borderWidth: 1, borderColor: '#000', borderRadius: 30,
//                                 }}
//                                 itemStyle={{
//                                     justifyContent: 'flex-start'
//                                 }}
//                                 labelStyle={{color:'black'}}

//                                 dropDownStyle={{ backgroundColor: '#fafafa' }}
//                                 onChangeItem={item => {
//                                     setArea({ ...areaValues, city: item.value });
//                                     getArea(item.value)


//                                 }

//                                 }
//                             />}

//                             {areaList && areaList.length !== 0 && <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Select Area</Text>}
//                             {areaList && areaList.length !== 0 && <DropDownPicker
//                                 items={areaList}
//                                 defaultValue={areas}
//                                 containerStyle={{

//                                 }}
//                                 style={{
//                                     height: 50,
//                                     fontSize: 16, marginVertical: 10, borderWidth: 1, borderColor: '#000', borderRadius: 30,
//                                 }}
//                                 labelStyle={{color:'black'}}

//                                 itemStyle={{
//                                     justifyContent: 'flex-start'
//                                 }}
//                                 dropDownStyle={{ backgroundColor: '#fafafa' }}
//                                 onChangeItem={item => {
//                                     setArea({ ...areaValues, area: item.value });
//                                 }

//                                 }
//                             />}



//                     <View style={{ flex: 1, justifyContent: 'center',  margin: 10 ,borderRadius: 5, backgroundColor: colors.primeryBtnColor,}}>
//                         <TouchableOpacity onPress={() => {
//                             updateUserDetails()
//                             // navigation.navigate('PaymentDetails');
//                         }}>


//                             <Text style={{  color: '#fff', paddingHorizontal: 10,textAlign:'center', paddingVertical: 10 }}>
//                                 Update   </Text>
//                         </TouchableOpacity>
//                     </View>


//                 </View>

//                 <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold', margin: 10 }}>KYC Documents</Text>

//                 <View style={{ flexDirection: 'column', backgroundColor: '#fff', margin: 10, padding: 10, elevation: 4, borderRadius: 5 }}>
//                     <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>



//                         <Text style={{ color: 'green', fontSize: 14, fontWeight: 'bold', }}>Approve</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginTop: 10 }}>
//                         <View style={{ flexDirection: 'column', }}>
//                             <Text style={{ color: 'green', fontSize: 14, fontWeight: 'bold', padding: 5 }}>Personal KYC Documents </Text>
//                             <Text style={{ color: 'green', fontSize: 14, fontWeight: 'bold', padding: 5 }}>Light Bill</Text>
//                             <Text style={{ color: 'green', fontSize: 14, fontWeight: 'bold', padding: 5 }}>Service KYC Documents </Text>
//                             <Text style={{ color: 'green', fontSize: 14, fontWeight: 'bold', padding: 5 }}>Bank KYC Documents</Text>
//                             <Text style={{ color: 'green', fontSize: 14, fontWeight: 'bold', padding: 5 }}>Upload Cleanliness Agreement </Text>
//                         </View>
//                     </View>
//                     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', margin: 10 }}>
//                         <TouchableOpacity onPress={() => {
//                             navigation.navigate("KYCUpdate",{"userId":userInfo.id});
//                         }}>
//                             <Text style={{ borderRadius: 5, backgroundColor: 'red', color: '#fff', paddingHorizontal: 10, paddingVertical: 5 }}>
//                                 Edit
//                     </Text>
//                         </TouchableOpacity>
//                     </View>


//                 </View>

//                 <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold', margin: 10 }}>Assign Availability Service Provide City</Text>

//                 <View style={{ flexDirection: 'column', backgroundColor: '#fff', margin: 10, padding: 10, elevation: 4, borderRadius: 5 }}>

//                     <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'space-between', marginTop: 10 }}>
//                         <View style={{ flexDirection: 'row', }}>


//                             <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>Availability Now -: </Text>
//                             <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>Canada Main City</Text>
//                         </View>

//                         <View style={{ flexDirection: 'row' }}>


//                             <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>Available Date -: </Text>
//                             <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>03-11-2020</Text>
//                         </View>
//                     </View>
//                     <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
//                         <View style={{ flexDirection: 'row' }}>


//                             <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>Available Time -: </Text>
//                             <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold', }}>10.00 am to 10.08 pm</Text>
//                         </View>


//                     </View>

//                     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', margin: 10 }}>
//                         <TouchableOpacity onPress={() => {
//                             alert("We are working on this");
//                         }}>
//                             <Text style={{ borderRadius: 5, backgroundColor: 'red', color: '#fff', paddingHorizontal: 10, paddingVertical: 5 }}>
//                                 Edit
//     </Text>
//                         </TouchableOpacity>
//                     </View>

//                     <TouchableOpacity onPress={() => {
//                         UserAction.resetUserDetails({});
//                         navigation.navigate("SplashScreen")
//                     }}
//                         style={{
//                             flex: 1,
//                             justifyContent: 'flex-start',
//                             marginVertical: 20,
//                             backgroundColor: colors.primeryBtnColor,
//                             flexDirection: 'row',
//                             marginLeft: 10,
//                             marginRight: 10,
//                             marginTop: 5,
//                             marginBottom: 5,
//                             borderRadius: 5
//                         }}>

//                         <Text
//                             style={{
//                                 textAlign: 'center',
//                                 fontSize: 14,
//                                 fontWeight: 'bold',
//                                 marginLeft: 5,
//                                 color: 'white',
//                                 padding: 6,
//                                 flex: 8,
//                             }}>
//                             Logout
//                 </Text>
//                     </TouchableOpacity>


//                 </View>

//             </ScrollView>
//         </SafeAreaView >
//     );
// }
// const styles = StyleSheet.create({
//     button: {
//         alignItems: 'center',
//         backgroundColor: '#DDDDDD',
//         padding: 10,
//         width: 300,
//         marginTop: 16,
//     },
//     scrollView: {
//         backgroundColor: Colors.lighter,
//     },
//     engine: {
//         position: 'absolute',
//         right: 0,
//     },
//     body: {
//         backgroundColor: Colors.white,
//     },
//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//         color: Colors.black,
//     },
//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//         color: Colors.dark,
//     },
//     highlight: {
//         fontWeight: '700',
//     },
//     footer: {
//         color: Colors.dark,
//         fontSize: 12,
//         fontWeight: '600',
//         padding: 4,
//         paddingRight: 12,
//         textAlign: 'right',
//     },
// });

// function mapStateToProps(state) {
//     return {
//         userInfo: state.userData,
//         selectedCourseRedux: state.selectedCourse
//     }
// }




export default connect(mapStateToProps)(MyAccountVendor);