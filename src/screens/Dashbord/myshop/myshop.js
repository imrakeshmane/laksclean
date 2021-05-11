import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Image,
    StatusBar, Switch,
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
import Api from '../../../utils/Api';
import Loader from '../../../components/Loader/Loader';

const APIURL = 'https://laksclean.com/Dev-Laksclean/';

const MyShop = (props) => {
    const { navigation } = props;
    const [imagePath, setImagePath] = useState('https://laksclean.com/Dev-Laksclean/upload/')

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [images, setImages] = useState([require('../../../assets/slider1.jpg'), require('../../../assets/slider2.jpeg'),
    require('../../../assets/slider3.jpeg'),
    require('../../../assets/slider4.jpeg'),
        // Network image
        // Local image])
    ]);


    useEffect(() => {
        getAllProducts()
    }, [])





    const [showLoader, setLoader] = useState(false);

    const [productList, setProductList] = useState([])
    const getAllProducts = () => {
        setLoader(true);
        fetch(APIURL + '/Userapi/getproduct', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'responseJson');
                setProductList(responseJson.product)
                setLoader(false);

            })
            .catch((error) => {
                setLoader(false);

                console.error(error);
            });

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
                    source={item.main_image ? { uri: imagePath + item.main_image } : require('../../../assets/product3.jpeg')} style={{ width: 150, height: 70, borderRadius: 10, padding: 5, justifyContent: 'center' }} />
                <View style={{ flexDirection: 'column', justifyContent: 'center', width: '70%' }}>

                    <Text numberOfLines={1} style={{ color: '#000', fontSize: 12, justifyContent: 'center', alignSelf: 'center', padding: 2 }}>{item.product_name}</Text>

                    <Text style={{ fontWeight: 'bold', fontSize: 14, justifyContent: 'center', alignSelf: 'center', color: colors.lightblueColor }}>${item.selling_price}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ProductDetails', { "productInfo": item, "productList": productList });
                }} style={{ backgroundColor: colors.lightblueColor, width: '100%', padding: 5, borderRadius: 5, marginVertical: 5, marginHorizontal: 10 }}>
                    <Text style={{ color: "white", fontWeight: 'bold', textAlign: 'center', marginHorizontal: 5 }}>View </Text>
                </TouchableOpacity>
            </View>

        )
    }


    return (

        <SafeAreaView style={{ flex: 1 }}>
            {showLoader ? <Loader /> :


                <View style={{ backgroundColor: '#fff' }}>

                    <Text style={{ color: 'white', fontSize: 18, padding: 10, paddingVertical: 15, textAlign: 'center', backgroundColor: colors.primeryBtnColor, fontWeight: 'bold' }}> Products</Text>
                    <FlatList
                        data={productList}
                        renderItem={EcommerseProduct}
                        showsHorizontalScrollIndicator={false}
                        key={(productList)}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        style={{ marginHorizontal: 10 }}
                        keyExtractor={(item, index) => index + "id"}
                    />
                </View>
            }
        </SafeAreaView>
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
export default connect(mapStateToProps)(MyShop);