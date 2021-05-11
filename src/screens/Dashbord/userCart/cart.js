import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Image,
    StatusBar,
    FlatList,
    SafeAreaView,
    Dimensions
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
import Api from '../../../utils/Api';
import Toaster from '../../../components/ToastComponent/Toaster';
import Loader from '../../../components/Loader/Loader';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationEvents } from 'react-navigation';
import AutoHeightWebView from 'react-native-autoheight-webview';

const UserCart = (props) => {
    const { navigation } = props;
    const [imagePath, setImagePath] = useState('https://laksclean.com/Dev-Laksclean/upload/')

    const [showLoader, setLoader] = useState(false);
    useEffect(() => {
        getAllProductCart()
    }, []);
    const [cartList, setcartList] = useState([])


    const getAllProductCart = () => {
        const formData = new FormData();
        formData.append('user_id', props.userInfo.id);
        setLoader(true);
        Api.postApi(formData, 'Userapi/get_user_cart')
            .then(response => {
                console.log("get_user_cart", response)
                if (response && response.status === 200) {
                    if (response.data.data) {
                        setcartList(response.data.data)
                    }
                }
                setLoader(false);

            })
            .catch(error => {
                setLoader(false);
                console.log(error)
            })

    }

    const updateQty = (id, qty) => {
        console.log(props.userInfo, ' props.userInfo')
        const formData = new FormData();
        formData.append('id', id);
        formData.append('qty', qty);
        setLoader(true);

        Api.postApi(formData, 'Userapi/update_cart_qty')
            .then(response => {
                console.log("ActiveService", response)
                if (response && response.status === 200) {
                    Toaster.SuccessToaster(response.data.message);
                    getAllProductCart();
                    //  setActiveServices(response.data.service);
                } else {
                    setLoader(false);
                }
                setLoader(false);

            })
            .catch(error => {
                setLoader(false);
                console.log(error,'get_user_cart err')
            })

    }
    const removeProduct = (id) => {
        console.log(props.userInfo, ' props.userInfo')
        const formData = new FormData();
        formData.append('id', id);
        setLoader(true);
        Api.postApi(formData, 'Userapi/remove_cart')
            .then(response => {
                console.log("ActiveService", response)
                if (response && response.status === 200) {
                    Toaster.SuccessToaster(response.data.message);
                    getAllProductCart();
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





    const EcommerseProduct = ({ item, index }) => {
        return (
            <>
               
                <View onPress={() => {
                    navigation.navigate("SelectCleaner")
                }} style={{ flex: 1, flexDirection: 'row', margin: 5, borderRadius: 10, alignItems: 'center', backgroundColor: 'white', padding: 10, margin: 5 }}>
                    <Image resizeMode={"center"} source={item.image ? { uri: imagePath + item.image } : require('../../../assets/product3.jpeg')} style={{ width: 70, height: 70, margin: 5, borderRadius: 10, justifyContent: 'center' }} />

                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#000', fontSize: 14, fontWeight: 'bold' }} numberOfLines={1}>{item.name}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: colors.lightblueColor }}>$ {item.price}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => {
                                    if (item.qty > 1) {
                                        updateQty(item.id, (+item.qty) - 1)
                                    }
                                }} style={{ padding: 5, marginHorizontal: 10, backgroundColor: colors.lightblueColor, borderRadius: 5 }}>
                                    <Icons name="ios-remove" size={15} color="white" />
                                </TouchableOpacity>
                                <Text style={{ textAlign: 'center', color: 'black', fontSize: 12, fontWeight: 'bold' }}>{item.qty}</Text>
                                <TouchableOpacity onPress={() => {
                                    updateQty(item.id, (+item.qty) + 1)
                                }} style={{ padding: 5, marginHorizontal: 10, backgroundColor: colors.lightblueColor, borderRadius: 5 }}>
                                    <Icons name="ios-add" size={15} color="white" />
                                </TouchableOpacity>

                            </View>
                            <TouchableOpacity onPress={() => {
                                removeProduct(item.id)
                            }} style={{ padding: 5, marginRight: 5 }}>
                                <Icons
                                    name={"ios-trash"}
                                    size={25}
                                    color="red"
                                />
                            </TouchableOpacity>
                        </View>

                    </View>


                </View>
            </>

        )
    }
    const AppWebView = () => {

        // console.log(mainURL)

        const [url, setURL] = useState('https://laksclean.com/Dev-Laksclean/cart?user_id=' + props.userInfo.id);


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
    const getPrice = () => {
        let FinalPrice = 0;

        cartList.map((p) => {
            const pp = (+p.price)
            FinalPrice = FinalPrice + pp * (+p.qty);

        });

        return FinalPrice;
    }


    return (
        <>
         <NavigationEvents
                    onWillFocus={() => {
                        getAllProductCart()
                    }}
                    onDidBlur={() => {
                        //getAllProductCart()
                    }
                    } />
            {showLoader ? <Loader /> :
            cartList && cartList.length===0 ? <View style={{justifyContent:'center',alignItems:'center',flex:6}}> 
            <Text style={{fontSize:18}}>Your Cart is Empty</Text>

        </View> : 




                <AppWebView />
           }
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
export default connect(mapStateToProps)(UserCart);