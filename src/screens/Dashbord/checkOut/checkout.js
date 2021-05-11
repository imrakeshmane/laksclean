import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Image,
    StatusBar, TextInput,
    FlatList,
    SafeAreaView
} from 'react-native';

import Modal from 'react-native-modal';
// import colors from '../../../../utils/colors';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
//import { SearchBar } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
import Icons from 'react-native-vector-icons/Ionicons'
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Searchbar } from 'react-native-paper';
import colors from '../../../utils/colors';

import Icon from 'react-native-vector-icons/Ionicons';
import Api from '../../../utils/Api';
import Loader from '../../../components/Loader/Loader';
import Toaster from '../../../components/ToastComponent/Toaster';

const CheckOut = (props) => {
    const { navigation } = props;
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [images, setImages] = useState([require('../../../assets/slider1.jpg'), require('../../../assets/slider2.jpeg'),
    require('../../../assets/slider3.jpeg'),
    require('../../../assets/slider4.jpeg'),
        // Network image
        // Local image])
    ]);

    const [orderInfo, setOrederInfo] = useState({
        fName: '',
        lName: '',
        mobile: '',
        email: '',
        address: '',
        city: '',
        country: '',
        pincode: ''
    })

    const [showLoader, setLoader] = useState(false);

    const dropInquiryBookingApi = () => {
        debugger
        const formData = new FormData();
        formData.append('user_id', props.userInfo.id);
        formData.append('f_name', orderInfo.fName);
        formData.append('l_name', orderInfo.lName);
        formData.append('email', orderInfo.email);
        formData.append('mobile', orderInfo.mobile);
        formData.append('address', orderInfo.address);
        formData.append('city', orderInfo.city);
        formData.append('country', orderInfo.country);
        formData.append('pincode', orderInfo.pincode);

        console.log(props, 'rProps')

        setLoader(true);
        Api.postApi(formData, 'Userapi/purchase_product')
            .then(response => {

                console.log(response, 'responseUserapi/purchase_product')
                setLoader(false);
                if (response && response.status === 200 ) {
                    Toaster.SuccessToaster(response.data.message);
                    setOrederInfo({
                        fName: '',
                        lName: '',
                        mobile: '',
                        email: '',
                        address: '',
                        city: '',
                        country: '',
                        pincode: ''
                    });
                    // navigation.navigate('PackageView', { "categoryData": categoryData, "orderInfo": orderInfo, "inquiryResponse": response.data });
                }

                else {
                    setLoader(false);
                }
            })
            .catch(error => {
                setLoader(false);
                console.log(error, 'error');
                console.log(error.response.data);
            })


    }

    return (
        <>
            {showLoader ?
                <Loader /> :

                <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <ScrollView>
                        <View>
                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>First Name</Text>
                            <TextInput onChangeText={(text) => { setOrederInfo({ ...orderInfo, fName: text }) }} style={{ borderWidth: 1, borderColor: '#000', marginHorizontal: 10, borderRadius: 5 }} value={orderInfo.fName} placeholder="Enter First Name" />
                        </View>

                        <View>
                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Last Name</Text>
                            <TextInput maxLength={10} onChangeText={(text) => { setOrederInfo({ ...orderInfo, lName: text }) }} style={{ borderWidth: 1, borderColor: '#000', marginHorizontal: 10, borderRadius: 5 }} value={orderInfo.lName} placeholder="Enter Last Name" />
                        </View>

                        <View>
                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Email</Text>
                            <TextInput onChangeText={(text) => { setOrederInfo({ ...orderInfo, email: text }) }} style={{ borderWidth: 1, borderColor: '#000', marginHorizontal: 10, borderRadius: 5 }} value={orderInfo.email} placeholder="Enter Email" />
                        </View>

                        <View>
                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Mobile Number</Text>
                            <TextInput keyboardType='number-pad' maxLength={10} onChangeText={(text) => { setOrederInfo({ ...orderInfo, mobile: text }) }} style={{ borderWidth: 1, borderColor: '#000', marginHorizontal: 10, borderRadius: 5 }} value={orderInfo.mobile} placeholder="Enter Mobile Number" />
                        </View>

                        <View>
                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Address</Text>
                            <TextInput  onChangeText={(text) => { setOrederInfo({ ...orderInfo, address: text }) }} style={{ borderWidth: 1, borderColor: '#000', marginHorizontal: 10, borderRadius: 5 }} value={orderInfo.address} placeholder="Enter Address" />
                        </View>

                        <View>
                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Country</Text>
                            <TextInput   onChangeText={(text) => { setOrederInfo({ ...orderInfo, country: text }) }} style={{ borderWidth: 1, borderColor: '#000', marginHorizontal: 10, borderRadius: 5 }} value={orderInfo.country} placeholder="Enter Country" />
                        </View>
                        <View>
                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>City</Text>
                            <TextInput   onChangeText={(text) => { setOrederInfo({ ...orderInfo, city: text }) }} style={{ borderWidth: 1, borderColor: '#000', marginHorizontal: 10, borderRadius: 5 }} value={orderInfo.city} placeholder="Enter City" />
                        </View>

                        <View>
                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Pincode</Text>
                            <TextInput keyboardType='number-pad'  maxLength={6} onChangeText={(text) => { setOrederInfo({ ...orderInfo, pincode: text }) }} style={{ borderWidth: 1, borderColor: '#000', marginHorizontal: 10, borderRadius: 5 }} value={orderInfo.pincode} placeholder="Enter Pincode" />
                        </View>

                        <TouchableOpacity
                            style={{ flex: 1 ,marginTop:10}}
                            onPress={() => {
                                debugger
                                if (orderInfo) {
                                    if (!orderInfo.fName) {
                                        alert("Enter First Name")
                                        return
                                    }
                                    if (!orderInfo.lName) {
                                        alert("Enter Last Name")
                                        return
                                    }
                                    if (!orderInfo.email) {
                                        alert("Enter Email")
                                        return
                                    }
                                    if (!orderInfo.mobile) {
                                        alert("Enter Mobile Number")
                                        return
                                    }
                                    if (!orderInfo.city || !orderInfo.country || !orderInfo.address || !orderInfo.pincode) {
                                        alert("Please select Country, State, City, Address, Pincode ")
                                        return
                                    }

                                    else {

                                        dropInquiryBookingApi()
                                    }
                                }

                            }}>

                            <View style={{ flexDirection: 'row', flex: 1, width: '80%', backgroundColor: colors.tintColor, justifyContent: 'center', padding: 10, borderRadius: 10, alignSelf: 'center', marginBottom: 10 }}>
                                <Text style={{ color: "white", fontWeight: 'bold', textAlign: 'center', }}>Place Order </Text>

                            </View>

                        </TouchableOpacity>


                    </ScrollView>



                </SafeAreaView>


            }
        </>
    );

}

const styles = StyleSheet.create({

});
function mapStateToProps(state) {
    return {
        userInfo: state.userData
    }
}
export default connect(mapStateToProps)(CheckOut);