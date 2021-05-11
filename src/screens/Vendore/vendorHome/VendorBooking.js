// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import React, { useContext, useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Image,
    TextInput,
    FlatList,
    Dimensions,
    SafeAreaView
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors, SearchBar } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icons from 'react-native-vector-icons/Ionicons'
import Api from '../../../utils/Api';
import { connect } from 'react-redux';

import Loader from '../../../components/Loader/Loader';
import Toaster from '../../../components/ToastComponent/Toaster';
import WebView from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview';

const VendorMyBookings = (props) => {

    const { navigation } = props;
    useEffect(() => {
        // setLoader(true)
        console.log(props,'props')
        // getVendorBookingList()
    }, [])
    const [activeServeces, setActiveServices] = useState([]);
    const [scheduleOrderList, setScheduleOrderList] = useState([]);

    const [showLoader, setLoader] = useState(false);

    const getVendorBookingList = () => {
        debugger
        const formData = new FormData();
        formData.append('user_id', props.userInfo.id);
        setLoader(true);
        setActiveServices([])

        Api.postApi(formData, 'Userapi/vendor_oder_list')
            .then(response => {
                setActiveServices([])
                console.log("vendor_oder_list", response)
                if (response && response.status === 200 && response.data.message && response.data.message.length) {
                    setActiveServices(response.data.message);
                } else {
                    Toaster.ErrorToaster(response.data.message)
                }
                setLoader(false);

            })
            .catch(error => {
                setLoader(false);
                console.log(error)
            })
    }

// const acceptOrder = (data) =>{
//     const formData = new FormData();
//     formData.append('user_id', props.userInfo.id);
//     formData.append('order_id', data.ordid);
//     formData.append('reqest_id', data.id);
//     console.log(formData,'formData')

//     setLoader(true);
//     Api.postApi(formData, 'Userapi/accepted_order')
//         .then(response => {
//             console.log("accepted_order", response)
//             if (response && response.status === 200 && response.data.message) {
//                 Toaster.SuccessToaster(response.data.message)

//             } else {
//                 setLoader(false);
//                 Toaster.ErrorToaster(response.data.message)
//             }
//             setLoader(false);

//         })
//         .catch(error => {
//             setLoader(false);
//             console.log(error)
//         })

// }


//     const ConfromBooking = ({ item, index }) => {
//         return (

//             <View style={{ flexDirection: 'column', backgroundColor: '#D1E9F9', margin: 10, padding: 5, elevation: 4, borderRadius: 5 }}>

//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
//                     <Text style={{ color: '#000000', fontSize: 20, marginVertical: 5, fontWeight: 'bold' }} >{item.service}</Text>
//                     <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center', alignItems: 'center' }}>
//                         <Icons name={item.order_status === "Paid" ? "ios-checkmark-circle-outline" : item.order_status === "Cancel" ? "ios-close-circle" : "ios-alert"} size={22} color={item.order_status !== "cancel" ? "green" : "red"} />
//                         <Text style={{ color: item.order_status !== "cancel" ? 'green' : 'red', fontSize: 14, marginHorizontal: 5 }}>{item.order_status}</Text>
//                     </View>
//                 </View>
//                 <Text style={{ color: '#000000', fontSize: 16, flex: 1,fontWeight:'bold' }}>{item.comment}</Text>
//                 <Text style={{ color: '#000000', fontSize: 16, fontWeight:'bold'}}>{item.title}</Text>
//                 <View style={{ flexDirection: 'row', }}>
//                     <Text style={{ color: '#000000', fontSize: 14, }}>Name of Provider  - </Text>
//                     <Text style={{ color: '#000000', fontSize: 16, }}>{item.contact_name}</Text>
//                 </View>
//                 <View style={{ flexDirection: 'row' }}>


//                     <Text style={{ color: '#000000', fontSize: 14, }}>Schedule Date - </Text>
//                     <Text style={{ color: '#000000', fontSize: 16, }}>{item.date}</Text>
//                 </View>
//                 <View style={{ flexDirection: 'row' }}>
//                     <Text style={{ color: '#000000', fontSize: 14, }}>Time - </Text>
//                     <Text style={{ color: '#000000', fontSize: 16, }}>{item.time} : {item.minutes}</Text>
//                 </View>
              
//                 <Text style={{ color: '#000000', fontSize: 16, }}>Address : {item.fulladdress}</Text>


//                 <View style={{ flexDirection: 'row', justifyContent:  'flex-end', alignItems: 'center', margin: 10 }}>
//                     {/* {index === 0 && <TextInput style={{ borderWidth: 1, borderColor: '#000', marginHorizontal: 10, borderRadius: 10, width: '50%', height: 40 }} placeholder="Enter OTP" />
//                     } */}
//                     <TouchableOpacity onPress={() => {

// acceptOrder(item)
//                     }}>
//                         <Text style={{ backgroundColor: colors.primary, fontWeight: 'bold', color: '#fff', fontSize: 14, borderRadius: 5, padding: 5,paddingHorizontal:10, justifyContent: 'center', textAlign: 'center', }}>{item.order_status } booking</Text>
//                     </TouchableOpacity>

//                 </View>

//             </View>

//         )
//     }


const [urlFinal,setURLFInal]=useState('https://laksclean.com/Dev-Laksclean/provider_dashboard?user_id=')
    const AppWebView = () => {

        // console.log(mainURL)

        const [url, setURL] = useState(urlFinal + props.userInfo.id);


        return (
            <View style={{ flex: 1 }}>


                {/* <WebView
                    onLoadStart={() => {

                        setLoader(true)

                        console.log('Load start')
                    }}
                    onError={() => {
                        setLoader(false);
                    }}
                    onLoadStart={() => {
                        debugger

                    }}
                    onLoadEnd={() => {
                        debugger

                        setLoader(false);
                    }}
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                    // source={{ uri: url }}
                    scalesPageToFit={true}
                    viewportContent={'width=device-width, user-scalable=no'}
                    source={{ uri: url }} /> */}

               {showLoader ?<Loader />:  <AutoHeightWebView

                    onLoadStart={() => {
                        // setLoader(true)

                    }}
                    onMessage={(event) => {
                        // setLoader(false);

                    }}
                    onLoadEnd={() => {
                        setLoader(false);
                    }}
                    onLoad={() => setLoader(false)}
                    style={{ width: Dimensions.get('window').width }}
                    source={{ uri: url }}
                    scalesPageToFit={true}
                    viewportContent={'width=device-width, user-scalable=no'}

                />}
            </View>
        )

    }

   
    const [activeIndex, setActiveIndex] = useState(1)
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            {showLoader ? <Loader /> : <>
                <Text style={{ color: 'white', fontSize: 18, padding: 10, paddingVertical: 15, textAlign: 'center', backgroundColor: colors.primary, fontWeight: 'bold' }}>My Bookings </Text>

                <ScrollView>
                <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'center' ,alignItems:'center'}}>
                        <TouchableOpacity onPress={() => {
                            setActiveIndex(1)
                            setURLFInal('https://laksclean.com/Dev-Laksclean/provider_dashboard?user_id=')

                        }} style={{ backgroundColor: colors.primary, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderRightWidth: 1, borderRightColor: colors.white ,flex:1,justifyContent: 'center' ,alignItems:'center'}}>
                            <Text style={{ color: colors.white, padding: 8, width: 100, textAlign: 'center', marginVertical: 3, }}>Latest Order </Text>
                        </TouchableOpacity>
                       
                        <TouchableOpacity onPress={() => {
                            setActiveIndex(3)
                            setURLFInal('https://laksclean.com/Dev-Laksclean/provider-bookings?user_id=')

                        }} style={{ backgroundColor: colors.primary, borderTopRightRadius: 10, borderBottomRightRadius: 10 ,flex:1,justifyContent: 'center' ,alignItems:'center'}}>
                            <Text style={{ color: colors.white, padding: 8, width: 100, textAlign: 'center', marginVertical: 3 }}>Booking List</Text>
                        </TouchableOpacity>
                    </View>
                    <AppWebView />


                </ScrollView>
            </>
            }
        </SafeAreaView >
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
export default connect(mapStateToProps)(VendorMyBookings);