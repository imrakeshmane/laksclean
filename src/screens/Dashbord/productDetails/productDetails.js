import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Image,
    StatusBar,
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
import Toaster from '../../../components/ToastComponent/Toaster';
import Api from '../../../utils/Api';
import Loader from '../../../components/Loader/Loader';

const ProductDetails = (props) => {
    const { navigation } = props;
    const { productInfo = '', productList } = navigation.state.params;
    console.log(productInfo, 'productInfo');
    const [productDetails, setProductDetails] = useState(productInfo)
    const[imagePath,setImagePath]=useState('https://laksclean.com/Dev-Laksclean/upload/')

    const [images, setImages] = useState([require('../../../assets/slider1.jpg'), require('../../../assets/slider2.jpeg'),
    require('../../../assets/slider3.jpeg'),
    require('../../../assets/slider4.jpeg'),
        // Local image])
    ]);
    const [showLoader, setLoader] = useState(false);


    const addTocart = (id) => {
        console.log(props.userInfo, ' props.userInfo')
        const formData = new FormData();
        formData.append('product_id', id);
        formData.append('user_id', props.userInfo.id);
        formData.append('qty', productCount);

        setLoader(true);

        Api.postApi(formData, 'Userapi/add_to_cart')
            .then(response => {
                console.log("ActiveService", response)
                if (response && response.status === 200) {
                    Toaster.SuccessToaster(response.data.message)
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






    const EcommerseProduct = ({ item, index }) => {
        return (

            <View style={{
                flex: 1,
                margin: 3,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F8F8F8',
                padding: 5,
                width: 200,
                padding: 5
            }}>
                <Image resizeMode={'contain'}
                    source={item.main_image ?{uri:imagePath+item.main_image}: require('../../../assets/product3.jpeg')} style={{ width: 150, height: 70, borderRadius: 10, padding: 5, justifyContent: 'center' }} />
                <View style={{ flexDirection: 'column', justifyContent: 'center', width: '70%' }}>

                    <Text numberOfLines={1} style={{ color: '#000', fontSize: 12, justifyContent: 'center', alignSelf: 'center', padding: 2 }}>{item.product_name}</Text>

                    <Text style={{ fontWeight: 'bold', fontSize: 14, justifyContent: 'center', alignSelf: 'center', color: colors.lightblueColor }}>${item.selling_price}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    setProductDetails(item)
                }} style={{ backgroundColor: colors.lightblueColor, width: '100%', padding: 5, borderRadius: 5, marginVertical: 5, marginHorizontal: 10 }}>
                    <Text style={{ color: "white", fontWeight: 'bold', textAlign: 'center', marginHorizontal: 5 }}>View </Text>
                </TouchableOpacity>
            </View>

        )
    }


    const [productCount, setProductCount] = useState(1)

    return (
        <>
            {showLoader ? <Loader /> :
                <SafeAreaView >

                    <ScrollView>
                        <View style={{ backgroundColor: '#fff' }}>
                            <View style={{ flex: 1, margin: 5, }}>
                                <Image resizeMode={"center"} source={productDetails.main_image ?{uri:imagePath+productDetails.main_image}: require('../../../assets/product3.jpeg')} style={{ width: '100%', height: 150, alignSelf: 'center', borderRadius: 20, marginTop: 10 }} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10 }}>
                                    <Text style={{ color: '#676A6C', fontSize: 14, fontWeight: 'bold', }}>{productDetails && productDetails.product_name}</Text>
                                    <Text style={{ color: '#4C9BE9', fontSize: 16, fontWeight: 'bold', }}>$ {productDetails && productDetails.selling_price}</Text>
                                </View>

                                <Text style={{ color: '#676A6C', fontSize: 12, fontWeight: 'bold', width: 170, marginHorizontal: 20 }}>{productDetails && productDetails.short_desc}</Text>
                                <View style={{ flexDirection: 'row', width: 100, alignItems: 'center', marginTop: 20, justifyContent: 'space-around' }}>
                                    <TouchableOpacity onPress={() => {
                                        setProductCount(productCount + 1)
                                    }} style={{ padding: 8, marginHorizontal: 10, backgroundColor: colors.lightblueColor, borderRadius: 5 }}>
                                        <Icons name="ios-add" size={15} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>{productCount}</Text>
                                    <TouchableOpacity onPress={() => {
                                        if (productCount > 1) {
                                            setProductCount(productCount - 1)
                                        }
                                    }} style={{ padding: 8, marginHorizontal: 10, backgroundColor: colors.lightblueColor, borderRadius: 5 }}>
                                        <Icons name="ios-remove" size={15} color="white" />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => {
                                    console.log(productDetails,'productDetails')
                                    addTocart(productDetails.id)
                                }} style={{ backgroundColor: colors.lightblueColor, width: '40%', padding: 5, borderRadius: 5, marginVertical: 5, marginHorizontal: 10, alignSelf: 'flex-end' }}>
                                    <Text style={{ color: "white", fontWeight: 'bold', textAlign: 'center', marginHorizontal: 5 }}>Add to Cart </Text>
                                </TouchableOpacity>
                            </View>


                            <Text style={{ backgroundColor: 'white', height: 5 }} />

                            <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', padding: 5, marginVertical: 5 }}> Products</Text>
                            <FlatList
                                data={productList}
                                renderItem={EcommerseProduct}
                                showsHorizontalScrollIndicator={false}
                                key={(productList)}
                                horizontal={true}
                                style={{ marginHorizontal: 10, }}
                                keyExtractor={(item, index) => index + "id"}
                            // style={{ marginTop: 20 }}
                            />
                        </View>
                    </ScrollView>

                </SafeAreaView>
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
export default connect(mapStateToProps)(ProductDetails);