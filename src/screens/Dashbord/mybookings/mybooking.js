// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import React, { useContext, useEffect, useState, } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Image,
    TextInput,
    FlatList,
    SafeAreaView,
    Dimensions
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
import AutoHeightWebView from 'react-native-autoheight-webview';
import WebView from 'react-native-webview';

const MyBookings = (props) => {

    const { navigation } = props;
    useEffect(() => {
        // getMyBookings()
        setLoader(true)
        setTimeout(() => {
            setLoader(false)

        }, 4000)
    }, [])
    const [activeServeces, setActiveServices] = useState([]);
    const [showLoader, setLoader] = useState(false);

    const [myBookings, setMybooking] = useState([])

    const getMyBookings = () => {
        debugger
        const formData = new FormData();
        formData.append('user_id', props.userInfo.id);
        setLoader(true);
        setActiveServices([])
        Api.postApi(formData, 'Userapi/get_user_booking')
            .then(response => {
                console.log("get_user_booking", response)
                if (response && response.status === 200) {
                    setMybooking(response.data.data);
                } else {
                    setLoader(false);
                }
                setLoader(false);

            })
            .catch(error => {
                setLoader(false);
                console.log(error)
            })
    }

    const getAllInactiveSer = () => {
        debugger
        const formData = new FormData();
        formData.append('user_id', props.userInfo.id);
        formData.append('service_id', '23');
        setLoader(true);
        setActiveServices([])
        Api.postApi(formData, 'Api_controller/inActiveService')
            .then(response => {
                console.log("inActiveService", response)
                if (response && response.status === 200) {
                    setActiveServices(response.data.service);
                } else {
                    setLoader(false);
                }
                setLoader(false);

            })
            .catch(error => {
                setLoader(false);
                console.log(error)
            })
    }
    const [allServicesList, setAllServicesList] = useState([])
    const getAllServices = () => {
        debugger
        setLoader(true);
        let fromdata = ''
        Api.postApi(fromdata, 'Api_controller/user_all_serrvices')
            .then(response => {
                console.log("user_all_serrvices", response)
                if (response && response.status === 200) {
                    setAllServicesList(response.data.data);
                } else {
                    setLoader(false);
                }
                setLoader(false);

            })
            .catch(error => {
                setLoader(false);
                console.log(error)
            })
    }


    const AppWebView = () => {

        // console.log(mainURL)

        const [url, setURL] = useState('https://laksclean.com/Dev-Laksclean/user-booling-list?user_id=' + props.userInfo.id);


        return (
            <View style={{ flex: 1 }}>


                {/* <WebView
                    onLoadStart={() => {

                        debugger
                        console.log('Load start')
                    }}
                    onError={() => {
                        debugger

                        setLoader(false);
                    }}
                    onLoadStart={() => {
                        debugger

                        // setLoader(true)
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

                 <AutoHeightWebView

                    onLoadStart={() => {
                        // setLoader(true)

                    }}
                    onMessage={(event) => console.log('onMessage', event)}
                    onLoadEnd={() => {
                        setLoader(false);
                    }}
                    onLoad={() => setLoader(false)}
                    style={{ width: Dimensions.get('window').width }}
                    source={{ uri: url }}
                    scalesPageToFit={true}
                    viewportContent={'width=device-width, user-scalable=no'}

                /> 
            </View>
        )

    }
    const ConfromBooking = ({ item, index }) => {
        return (

            <View style={{ flexDirection: 'column', backgroundColor: '#D1E9F9', margin: 10, borderRadius: 5 }}>


                <View style={{ padding: 5, marginHorizontal: 8, marginVertical: 5 }}>
                    <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>{item.selected_plan}</Text>
                    <Text style={{ color: '#000000', fontSize: 12, marginVertical: 3 }}>{item.type}</Text>
                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>$ {item.price}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Icons name={item.paymentStatus === "Paid" ? "ios-checkmark-circle-outline" : item.paymentStatus === "Cancel" ? "ios-close-circle" : "ios-alert"} size={20} color={item.paymentStatus === "Paid" ? "green" : "red"} />
                            <Text style={{ color: item.paymentStatus === "Paid" ? 'green' : 'red', fontSize: 12, marginHorizontal: 5 }}>{item.admin_payment_status}</Text>
                        </View>

                    </View>
                </View>




            </View>

        )
    }

    const activeDeactiveServeces = (id) => {
        const formData = new FormData();
        formData.append('user_id', props.userInfo.id);
        formData.append('service_id', id);
        setLoader(true);

        Api.postApi(formData, 'Api_controller/ActiveService')
            .then(response => {
                console.log("ActiveService", response)
                if (response && response.status === 200) {
                    Toaster.SuccessToaster("done")
                    //  setActiveServices(response.data.service);
                } else {
                    setLoader(false);
                }
                setLoader(false);

            })
            .catch(error => {
                setLoader(false);
                console.log(error)
            })

    }


    const [activeIndex, setActiveIndex] = useState(1)
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            {showLoader ? <Loader /> : <>


                <Text style={{ color: 'white', fontSize: 18, padding: 10, paddingVertical: 15, textAlign: 'center', backgroundColor: colors.primary, fontWeight: 'bold' }}>Welcome </Text>

                <AppWebView />


                {/* <FlatList
                    data={myBookings}
                    renderItem={ConfromBooking}
                    key={(myBookings)}

                    keyExtractor={(item, index) => index}
                // style={{ marginTop: 20 }}
                /> */}



                {/* </ScrollView> */}
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
// export default connect(mapStateToProps)(VendorMyServices);
export default connect(mapStateToProps)(MyBookings);
