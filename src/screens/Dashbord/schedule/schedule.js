// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import React, { useContext, useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Image,
    StatusBar, TextInput,
    FlatList,
    SafeAreaView, ActivityIndicator
} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import { SearchBar } from 'react-native-elements';
// import { SliderBox } from "react-native-image-slider-box";
// import { Linking } from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
// import colors from '../../../utils/colors';
// import IconFon from 'react-native-vector-icons/FontAwesome';
// import { DatePicker } from 'native-base';
// import Api from '../../../utils/Api';
import { connect } from 'react-redux';
// import Loader from '../../../components/Loader/Loader';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import DateTimePicker from 'react-native-modal-datetime-picker';
// // import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/Feather';
// import moment from 'moment';


const Schedule = (props) => {
    // const [selectedValue, setSelectedValue] = useState("0");
    // const [selectedSecondValue, setSelectedSecondValue] = useState("0");
    // const { route, navigation } = props;

    // const { categoryData } = navigation.state.params;
    // const [showLoader, setLoader] = useState(false);
    // const [subCategoryList, setSubCategory] = useState([])
    // const ref = useRef();
    // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    // const [pickTime, setPickTime] = useState('');
    // const [isPick, setIsPick] = useState(false);
    // const [pickDate, setPickDate] = useState('');
    // const [selectedLocation, setSelectedLocation] = useState('');
    // useEffect(() => {
    //     ref.current?.setAddressText('Please Select Your Location');
    // }, []);

    // useEffect(() => {
    //     getContry()
    // }, []);

    // let timeArray = [
    //     {
    //         "value": "1",
    //         "label": "Select Time",

    //     },

    //     {
    //         "value": "01:00",
    //         "label": "01:00",
    //     },
    //     {
    //         "value": "02:00",
    //         "label": "02:00",
    //     },
    //     {
    //         "value": "03:00",
    //         "label": "03:00",
    //     },
    //     {
    //         "value": "04:00",
    //         "label": "04:00",
    //     },
    //     {
    //         "value": "05:00",
    //         "label": "05:00",
    //     },
    //     {
    //         "value": "06:00",
    //         "label": "06:00",
    //     },
    //     {
    //         "value": "07:00",
    //         "label": "07:00",
    //     },
    //     {
    //         "value": "08:00",
    //         "label": "08:00",
    //     },
    //     {
    //         "value": "09:00",
    //         "label": "09:00",
    //     },
    //     {
    //         "value": "10:00",
    //         "label": "10:00",
    //     },
    //     {
    //         "value": "11:00",
    //         "label": "11:00",
    //     },
    //     {
    //         "value": "12:00",
    //         "label": "12:00",
    //     },
    //     {
    //         "value": "13:00",
    //         "label": "13:00",
    //     },
    //     {
    //         "value": "14:00",
    //         "label": "14:00",
    //     },
    //     {
    //         "value": "15:00",
    //         "label": "15:00",
    //     },
    //     {
    //         "value": "16:00",
    //         "label": "16:00",
    //     },
    //     {
    //         "value": "17:00",
    //         "label": "17:00",
    //     },
    //     {
    //         "value": "18:00",
    //         "label": "18:00",
    //     },
    //     {
    //         "value": "19:00",
    //         "label": "19:00",
    //     },
    //     {
    //         "value": "20:00",
    //         "label": "20:00",
    //     },
    //     {
    //         "value": "21:00",
    //         "label": "21:00",
    //     },
    //     {
    //         "value": "22:00",
    //         "label": "22:00",
    //     },
    //     {
    //         "value": "23:00",
    //         "label": "23:00",
    //     },
    //     {
    //         "value": "23:59",
    //         "label": "23:59",
    //     }
    // ]
    // const [showActivityLoader, setshowActivityLoader] = useState(false);

    // const [contryList, setContryList] = useState([])
    // const getContry = () => {
    //     debugger
    //     Api.getApi('Userapi/getCountry')
    //         .then(response => {
    //             console.log(response, 'getCountry')
    //             setLoader(false);
    //             let tempContry = [];
    //             let initial = {
    //                 label: 'Select Country',
    //                 value: '1000',
    //             }
    //             tempContry.push(initial);
    //             if (response && response.data && response.data.country) {

    //                 response.data.country.map((c, i) => {
    //                     c.label = c.country
    //                     c.value = c.id
    //                     tempContry.push(c);
    //                 })
    //                 console.log(tempContry, 'tempContry')
    //                 setContryList(tempContry)

    //             }
    //         }).catch((err) => {
    //             console.log(response)
    //         })

    // }

    // const [stateList, setStateList] = useState([])

    // const getState = (id) => {
    //     const formData = new FormData();

    //     formData.append('country', id);
    //     console.log(formData)
    //     setshowActivityLoader(true)
    //     Api.postApi(formData, 'Userapi/getState')
    //         .then(response => {
    //             setLoader(false);

    //             console.log(response, 'getState')
    //             let tempContry = [];
    //             setStateList([]);
    //             setCityList([]);
    //             setAreaList([]);
    //             let initial = {
    //                 label: 'Select State',
    //                 value: '1000',
    //             }
    //             tempContry.push(initial);

    //             if (response && response.data && response.data.state) {

    //                 response.data.state.map((c, i) => {
    //                     c.label = c.state
    //                     c.value = c.id
    //                     tempContry.push(c);
    //                 })
    //                 console.log(tempContry, 'tempContry')
    //                 setStateList(tempContry)

    //             }
    //             setshowActivityLoader(false)
    //         }).catch((err) => {
    //             setshowActivityLoader(false);

    //             console.log(err)
    //         })

    // }

    // const [cityList, setCityList] = useState([])

    // const getCity = (id) => {
    //     const formData = new FormData();
    //     formData.append('state', id);
    //     console.log(formData)
    //     setshowActivityLoader(true)
    //     Api.postApi(formData, 'Userapi/getCity')
    //         .then(response => {
    //             setshowActivityLoader(false);
    //             console.log(response, 'getCity')
    //             let tempContry = [];
    //             setCityList([]);
    //             setAreaList([]);
    //             let initial = {
    //                 label: 'Select City',
    //                 value: '1000',
    //             }
    //             tempContry.push(initial);

    //             if (response && response.data && response.data.city) {

    //                 response.data.city.map((c, i) => {
    //                     c.label = c.city
    //                     c.value = c.id
    //                     tempContry.push(c);
    //                 })
    //                 console.log(tempContry, 'tempContry')
    //                 setCityList(tempContry)

    //             }
    //         }).catch((err) => {
    //             setshowActivityLoader(false);

    //             console.log(err)
    //         })

    // }

    // const [areaList, setAreaList] = useState([])

    // const getArea = (id) => {
    //     const formData = new FormData();
    //     formData.append('city', id);
    //     console.log(formData)
    //     setshowActivityLoader(true)
    //     Api.postApi(formData, 'Userapi/getArea')
    //         .then(response => {
    //             setshowActivityLoader(false);
    //             console.log(response, 'getares')
    //             let tempContry = [];
    //             let initial = {
    //                 label: 'Select Area',
    //                 value: '1000',
    //             }
    //             tempContry.push(initial);

    //             if (response && response.data && response.data.area) {
    //                 setAreaList([]);
    //                 response.data.area.map((c, i) => {
    //                     c.label = c.area
    //                     c.value = c.id
    //                     tempContry.push(c);
    //                 })
    //                 console.log(tempContry, 'tempContry')
    //                 setAreaList(tempContry)

    //             }
    //         }).catch((err) => {
    //             setshowActivityLoader(false);

    //             console.log(err)
    //         })

    // }

    // const [scheduleJSON, setScheduleJSON] = useState({

    //     //  "selectedPlan": categoryData.name,
    //     "contact_name": props.userInfo.first_name,
    //     "mobile": "",
    //     "date": "",
    //     "hour": "",
    //     "minutes": "",
    //     "amPm": "",
    //     "fulladdress": "",
    //     "locationAdddres": "",
    //     "category": categoryData.id,
    //     "lat": "12122121",
    //     "long": "3232223",
    //     "otherSpecifications": ""
    // });
    // const [areaValues, setArea] = useState({
    //     "city": '',
    //     "contry": "",
    //     "state": "",
    //     "area": ""
    // });

    // const showDatePicker = () => {
    //     setDatePickerVisibility(true);
    // };

    // const hideDatePicker = () => {
    //     setDatePickerVisibility(false);
    // };

    // const handleConfirm = (date) => {

    //     const d = moment(date).format("hh:mm:ss a");
    //     // console.warn("A date has been picked: ", date);
    //     debugger
    //     var oldString = date.toString();
    //     var mynewarray = oldString.split(' ');
    //     var i = oldString.indexOf(' ');
    //     var partone = oldString.slice(0, i).trim();
    //     var parttwo = oldString.slice(i + 13, oldString.length).trim();

    //     var j = parttwo.indexOf(' ');
    //     var actualTime = parttwo.slice(0, j).trim();
    //     // setPickTime(date.toString());
    //     setPickTime(actualTime.toString());
    //     debugger
    //     setScheduleJSON({ ...scheduleJSON, hour: actualTime.toString() })

    //     setIsPick(true);
    //     hideDatePicker();
    // };
    // debugger


    // const dropInquiryBookingApi = () => {
    //     debugger
    //     const d = moment(areaValues.date).format('YYYY-MM-DD');
    //     const formData = new FormData();
    //     formData.append('contact_name', props.userInfo.first_name);
    //     formData.append('mobile', props.userInfo.mobile_no);
    //     formData.append('date', d);
    //     formData.append('fulladdress', scheduleJSON.fulladdress);
    //     formData.append('locationAdddres', areaValues.area);
    //     formData.append('category', categoryData.id);
    //     formData.append('country', areaValues.contry ? areaValues.contry : areaValues.area);
    //     formData.append('city', areaValues.city ? areaValues.city : areaValues.area);
    //     formData.append('state', areaValues.state ? areaValues.state : areaValues.area);
    //     formData.append('area', areaValues.area);
    //     formData.append('time', scheduleJSON.hour);
    //     console.log(props, 'rProps')

    //     setLoader(true);
    //     Api.postApi(formData, 'Userapi/dropInquiry')
    //         .then(response => {

    //             console.log(response, 'responseUserapi/dropInquiry')
    //             setLoader(false);
    //             // console.log(response.data.data.user_type, 'usertypeusertypeusertypeusertype');
    //             if (response && response.status === 200 && response.data.message === 'Inquiry Submited Succesfully!.') {

    //                 navigation.navigate('PackageView', { "categoryData": categoryData, "scheduleJSON": scheduleJSON, "inquiryResponse": response.data });

    //             }
    //             // else if (response && response.status === 200 && response.data.Message === "User logged in successfully." && response.data.data.user_type === 'CUSTOMER') {
    //             //     alert('This is Vendor Screen,Please change tab and again login');
    //             // }
    //             else {
    //                 // setErrorMsg(response.data.message);
    //                 alert(response.data.message)
    //                 setLoader(false);
    //             }
    //             //  resolve(response)
    //         })
    //         .catch(error => {
    //             setLoader(false);
    //             console.log(error, 'error');
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //             // setErrorMsg('Mobile Number or Password Wrong..!');
    //             // alert('Mobile Number or Password Wrong..!')
    //             // reject(error)
    //         })


    // }

    // let countries = contryList.length === 0 ? "0" : contryList[0].value;
    // let states = stateList.length === 0 ? "3" : stateList[0].value;
    // let citys = cityList.length === 0 ? "3" : cityList[0].value;
    // let areas = areaList.length === 0 ? "3" : areaList[0].value;
    // let times = '1';




    return (
        <>
        <Text>Schedule</Text>
            {/* {showLoader ? <Loader /> :



                <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='always'>

                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 10 }}>Enter your information</Text>
                        <ScrollView Style={{ flex: 9, backgroundColor: 'red' }} keyboardShouldPersistTaps='always'>
                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Person Name</Text>
                            <TextInput onChangeText={(text) => { setScheduleJSON({ ...scheduleJSON, contact_name: text }) }} style={{ borderWidth: 1, borderColor: '#000', marginHorizontal: 10, borderRadius: 5 }} value={props.userInfo.first_name} placeholder="Enter Person Name" />

                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Mobile Number</Text>
                            <TextInput keyboardType='number-pad' maxLength={10} onChangeText={(text) => { setScheduleJSON({ ...scheduleJSON, mobile: text }) }} style={{ borderWidth: 1, borderColor: '#000', marginHorizontal: 10, borderRadius: 5 }} value={scheduleJSON.mobile} placeholder="Enter Mobile Number" />

                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Booking Date</Text>

                            <DatePicker
                                minimumDate={new Date()}
                                locale={"en"}
                                mode='date'
                                format="DD-MM-YYYY"
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select Date"

                                placeHolderTextStyle={{ color: 'lightgray', marginVertical: 5, height: 50, fontSize: 16, borderWidth: 1, borderColor: '#000', margin: 10, borderRadius: 5 }}
                                onDateChange={(text) => {
                                    setScheduleJSON({ ...scheduleJSON, date: text.toString() })
                                    console.log("printselecteddate", text.toString());

                                }}

                                disabled={false}

                            />

                           
                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Booking Time</Text>
                            {timeArray && timeArray.length !== 0 && <DropDownPicker
                                items={timeArray}
                                defaultValue={times}
                                containerStyle={{

                                }}
                                style={{
                                    height: 50,
                                    fontSize: 16, margin: 10, borderWidth: 1, borderColor: '#000', borderRadius: 30,
                                    color: 'green'
                                }}
                                selectedLabelStyle={{
                                    color: 'black'
                                }}
                                labelStyle={{
                                    fontSize: 14,
                                    textAlign: 'left',
                                    color: '#000'
                                }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                onChangeItem={item => {
                                   
                                    setScheduleJSON({ ...scheduleJSON, hour: item.value })

                                }

                                }
                            />}

                            <DateTimePicker
                                isVisible={isDatePickerVisible}
                                mode="time"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />


                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Select country</Text>
                            {contryList && contryList.length !== 0 && <DropDownPicker
                                items={contryList}
                                defaultValue={countries}
                                containerStyle={{

                                }}
                                style={{
                                    height: 50,
                                    fontSize: 16, margin: 10, borderWidth: 1, borderColor: '#000', borderRadius: 30,
                                    color: 'green'
                                }}
                                selectedLabelStyle={{
                                    color: 'black'
                                }}
                                labelStyle={{
                                    fontSize: 14,
                                    textAlign: 'left',
                                    color: '#000'
                                }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                onChangeItem={item => {
                                    countries = item.value
                                    setArea({ ...areaValues, contry: item.value });
                                    getState(item.value)


                                }

                                }
                            />}

                            {stateList && stateList.length !== 0 && <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Select State</Text>}
                            {stateList && stateList.length !== 0 && <DropDownPicker
                                items={stateList}
                                defaultValue={states}
                                containerStyle={{

                                }}
                                style={{
                                    height: 50,
                                    fontSize: 16, margin: 10, borderWidth: 1, borderColor: '#000', borderRadius: 30,
                                }}
                                selectedLabelStyle={{
                                    color: 'black'
                                }}
                                labelStyle={{
                                    fontSize: 14,
                                    textAlign: 'left',
                                    color: '#000'
                                }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                onChangeItem={item => {
                                    setArea({ ...areaValues, state: item.value });
                                    getCity(item.value)


                                }

                                }
                            />}

                            {cityList && cityList.length !== 0 && <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Select City</Text>}
                            {cityList && cityList.length !== 0 && <DropDownPicker
                                items={cityList}
                                defaultValue={citys}
                                containerStyle={{

                                }}
                                style={{
                                    height: 50,
                                    fontSize: 16, margin: 10, borderWidth: 1, borderColor: '#000', borderRadius: 30,
                                }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                selectedLabelStyle={{
                                    color: 'black'
                                }}
                                labelStyle={{
                                    fontSize: 14,
                                    textAlign: 'left',
                                    color: '#000'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                onChangeItem={item => {
                                    setArea({ ...areaValues, city: item.value });
                                    getArea(item.value)


                                }

                                }
                            />}

                            {areaList && areaList.length !== 0 && <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Select Area</Text>}
                            {areaList && areaList.length !== 0 && <DropDownPicker
                                items={areaList}
                                defaultValue={areas}
                                containerStyle={{

                                }}
                                selectedLabelStyle={{
                                    color: 'black'
                                }}
                                labelStyle={{
                                    fontSize: 14,
                                    textAlign: 'left',
                                    color: '#000'
                                }}
                                style={{
                                    height: 50,
                                    fontSize: 16, margin: 10, borderWidth: 1, borderColor: '#000', borderRadius: 30,
                                }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                onChangeItem={item => {
                                    setArea({ ...areaValues, area: item.value });
                                }

                                }
                            />}

                            
                            {showActivityLoader && <ActivityIndicator style={{ fontSize: 100 }} size="large" color={colors.primeryBtnColor} />}


                            <Text style={{ color: colors.tintColor, fontSize: 16, fontWeight: 'bold', margin: 10 }}>Full Address </Text>
                            <TextInput onChangeText={(text) => { setScheduleJSON({ ...scheduleJSON, fulladdress: text }) }} multiline={true} style={{ borderWidth: 1, borderColor: '#000', marginHorizontal: 10, borderRadius: 5, height: 100, textAlignVertical: 'top', }} multiline={true} placeholder="Enter Service Address" />

                            

                            <TouchableOpacity
                                style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'flex-end', margin: 10, padding: 5 }} onPress={() => { Linking.openURL('http://google.com') }}>
                                <Text style={{
                                    color: colors.tintColor, fontSize: 16, fontWeight: 'bold', justifyContent: 'center', alignSelf
                                        : 'center', marginLeft: 5, textDecorationLine: 'underline'
                                }}>Contract Agreement </Text>
                            </TouchableOpacity>

                        </ScrollView>

                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => {
                                debugger
                                if (selectedValue && selectedSecondValue) {


                                    if (!scheduleJSON.date) {
                                        alert("Please Select Date")
                                        return
                                    }
                                    if (!scheduleJSON.hour) {
                                        alert("Please Select Time")
                                        return
                                    }
                                    if (!areaValues.city || !areaValues.contry || !areaValues.state || !areaValues.area) {
                                        alert("Please select Country, State, City, Area ")
                                        return
                                    }
                                    if (!scheduleJSON.fulladdress) {
                                        alert("Please insert Full Address")
                                        return
                                    }

                                    else {

                                        setScheduleJSON({ ...scheduleJSON, hour: selectedValue + selectedSecondValue })

                                        console.log("printdatachanges", categoryData);
                                        console.log("scheduleJSONscheduleJSON", scheduleJSON);
                                        //alert(scheduleJSON)

                                        dropInquiryBookingApi()

                                    }
                                }

                            }}>

                            <View style={{ flexDirection: 'row', flex: 1, width: '80%', backgroundColor: colors.tintColor, justifyContent: 'center', padding: 10, borderRadius: 10, alignSelf: 'center', marginBottom: 10 }}>
                                <Text style={{ color: "white", fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', }}>Next </Text>
                                <IconFon
                                    size={25}
                                    color={'#211f30'}
                                    name={'check'}
                                    style={{
                                        fontSize: 20, color: '#fff', alignSelf: 'center'
                                    }}
                                />
                            </View>

                        </TouchableOpacity>

                    </View>
                </ScrollView >
            }
            */}
        </> 
    );
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

function mapStateToProps(state) {
    return {
        userInfo: state.userData
    }
}
export default connect(mapStateToProps)(Schedule);