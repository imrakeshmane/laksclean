// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import React, { useContext, useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Image,
    TextInput,
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

const VendorMyServices = (props) => {

    const { navigation } = props;
    useEffect(() => {
                console.log(props,'props')

        getActiveServices()
    }, [])
    const [activeServeces, setActiveServices] = useState([]);
    const [showLoader, setLoader] = useState(false);

    const getActiveServices = () => {
        debugger
        const formData = new FormData();
        formData.append('user_id', props.userInfo.id);
        formData.append('service_id', '23');
        setLoader(true);
        setActiveServices([])
        Api.postApi(formData, 'Api_controller/get_all_active_services')
            .then(response => {
                console.log("get_all_active_services", response)
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
        const formData = new FormData();
        formData.append('user_id', props.userInfo.id);
        Api.postApi(formData, 'Api_controller/user_all_serrvices')
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


 




   

const activeDeactiveServeces =(id) =>{
    const formData = new FormData();
    formData.append('user_id', props.userInfo.id);
    formData.append('service_id', id);
    setLoader(true);

    Api.postApi(formData, 'Api_controller/ActiveService')
        .then(response => {
            console.log("ActiveService", response)
            if (response && response.status === 200) {
            Toaster.SuccessToaster("done")
            getActiveServices()
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

    const renderAllServices = ({ item, index }) => {
        return (

            <View style={{ flexDirection: 'column', backgroundColor: '#D1E9F9', margin: 10, elevation: 4, borderRadius: 10 }}>


                {activeIndex === 3 && <Image
                    source={item.cover_image ? { uri: item.cover_image } : require('../../../assets/office_cleaning.jpg')}
                    style={{
                        height: 150,
                        width: '100%',
                        alignSelf: 'center',
                    }}
                />}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                    <Text style={{ color: '#000000', flex: 2, fontSize: 16, fontWeight: 'bold', padding: 5 }}>{item.title}</Text>
                    {activeIndex === 3 && <TouchableOpacity style={{ marginVertical: 8, flex: 1, alignSelf: 'flex-end' }} onPress={() => {
                        activeDeactiveServeces(item.id)
                    }}>
                        <Text style={{ backgroundColor:item.activve_inactive === "0" ? colors.primary:'red', fontWeight: 'bold', color: '#fff', fontSize: 12, borderRadius: 5, padding: 5, justifyContent: 'center', textAlign: 'center', }}>{item.activve_inactive === "0" ? "Add Service" : "Remove Service"}</Text>
                    </TouchableOpacity>}
                </View>





            </View>

        )
    }

    const AppWebView = () => {

        // console.log(mainURL)

        const [url, setURL] = useState('https://laksclean.com/Dev-Laksclean/my_services?user_id=' + props.userInfo.id);


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


    const [activeIndex, setActiveIndex] = useState(1)
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            {showLoader ? <Loader /> : <>
                <Text style={{ color: 'white', fontSize: 18, padding: 10, paddingVertical: 15, textAlign: 'center', backgroundColor: colors.primary, fontWeight: 'bold' }}>Welcome </Text>

                <ScrollView>
                    <AppWebView />

                    {/* <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => {
                            getActiveServices()
                            setActiveIndex(1)
                        }} style={{ backgroundColor: colors.primary, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderRightWidth: 1, borderRightColor: colors.white }}>
                            <Text style={{ color: colors.white, padding: 8, width: 100, textAlign: 'center', marginVertical: 3, }}>Active </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            getAllInactiveSer();
                            setActiveIndex(2)
                        }} style={{ backgroundColor: colors.primary, borderRightWidth: 1, borderRightColor: colors.white }}>
                            <Text style={{ color: colors.white, padding: 8, width: 100, textAlign: 'center', marginVertical: 3 }}>InActive </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            getAllServices()
                            setActiveIndex(3)
                        }} style={{ backgroundColor: colors.primary, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ color: colors.white, padding: 8, width: 100, textAlign: 'center', marginVertical: 3 }}>Add Services</Text>
                        </TouchableOpacity>
                    </View>

                    {3===3 && <FlatList
                        data={activeServeces}
                        renderItem={renderAllServices}
                        key={(activeServeces)}

                        keyExtractor={(item, index) => index}
                    // style={{ marginTop: 20 }}
                    />} */}
                    {/* {activeIndex === 2 && <FlatList
                        data={ScheduleBooking}
                        renderItem={ConfromBooking}
                        key={(ScheduleBooking)}

                        keyExtractor={(item, index) => index}
                    // style={{ marginTop: 20 }}
                    />} */}
                    {/* {activeIndex === 3 && <FlatList
                        data={allServicesList}
                        renderItem={renderAllServices}
                        key={(allServicesList)}

                        keyExtractor={(item, index) => index}
                    // style={{ marginTop: 20 }}
                    />} */}


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
export default connect(mapStateToProps)(VendorMyServices);