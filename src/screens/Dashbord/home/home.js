import React, { useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Image,
    StatusBar, Switch,
    FlatList,
    SafeAreaView
} from 'react-native';

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
import ToastComponent from '../../../components/ToastComponent/Toaster';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


// const APIURL = 'https://laksclean.com/Dev-Laksclean/';

const HomePage = (props) => {
    const { navigation } = props;
    const [isEnabled, setIsEnabled] = useState(false);
    const [showLoader, setLoader] = useState(false);
    const ref = useRef();

    useEffect(() => {
        ref.current?.setAddressText('Some Text');
        getCategory()
        getAllProducts()
    }, []);

    const [productList, setProductList] = useState([])
    const getAllProducts = () => {
        setLoader(true);


        fetch(APIURL + 'Userapi/getproduct', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'responseJson');
                setProductList(responseJson.product)
                setImagePath('https://laksclean.com/Dev-Laksclean/upload/');
                setLoader(false);

            })
            .catch((error) => {
                console.error(error);
            });
        return
        Api.getApi('Userapi/getproduct')
            .then(response => {
                console.log("getproduct", response)
                if (response && response.status === 200) {
                    setProductList(response.data.product)
                }
                setLoader(false);

            })
            .catch(error => {
                setLoader(false);
                console.log(error)
            })

    }



    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [images, setImages] = useState([require('../../../assets/slider1.jpg'), require('../../../assets/slider2.jpeg'),
    require('../../../assets/slider3.jpeg'),
    require('../../../assets/slider4.jpeg'),
        // Network image
        // Local image])
    ]);
    const APIURL = 'https://laksclean.com/Dev-Laksclean/';

    const [imagePath, setImagePath] = useState('https://laksclean.com/Dev-Laksclean/upload/')
    const [categoryList, setCategory] = useState([])
    const getCategory = () => {
        debugger
        setLoader(true);
        fetch(APIURL + 'Userapi/getCategory', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'responseJson');
                setCategory(responseJson.category);
                setImagePath('https://laksclean.com/Dev-Laksclean/upload/');
                setLoader(false);

            })
            .catch((error) => {
                console.error(error);
            });

        return

        Api.getApi('Userapi/getCategory')
            .then(response => {

                console.log(response, 'category')
                if (response && response.data.category) {
                    setImagePath('https://laksclean.com/Dev-Laksclean/upload/');
                    setCategory(response.data.category);
                } else {
                    setLoader(false);
                }
            })
            .catch(error => {
                setLoader(false);
                console.log(error, 'err rr r  r r r ')
            })
    }
    const purchaseCard = ({ item, index }) => {
        return (

            <TouchableOpacity onPress={() => {
                navigation.navigate("SelectCleaner")
            }} style={{ flex: 1, margin: 5, borderRadius: 10, justifyContent: 'center', backgroundColor: '#f8f8f8', }}>
                <Image source={item.path} style={{ width: 100, height: 100, margin: 5, borderRadius: 10, justifyContent: 'center' }} />
                <Text style={{ color: '#000', fontSize: 14, justifyContent: 'center', alignSelf: 'center' }}>{item.cleanerName}</Text>
            </TouchableOpacity>

        )
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
    const categoryCard = ({ item, index }) => {
        //  console.log(item.category_image)
        //  console.log("printitem", item);
        return (

            <TouchableOpacity key={index + 'Cat'} onPress={() => {
                navigation.navigate('AppWebView', { 'mainURL': 'https://laksclean.com/Dev-Laksclean/appointment-booking?user_id=' + props.userInfo.id + '&&category=' + item.id });

            }} style={{
                flex: 1, margin: 5, borderRadius: 10, justifyContent: 'center', width: 120,
                height: 100,
                backgroundColor: '#f8f8f8',

            }}>
                <Image source={{ uri: "https://laksclean.com/Dev-Laksclean/upload/" + item.category_image }} style={{ width: 100, height: 60, margin: 5, justifyContent: 'center', alignSelf: 'center' }} />
                <Text style={{ color: '#000', fontSize: 12, justifyContent: 'center', alignSelf: 'center', width: 100, alignItems: 'center', textAlign: 'center' }}>{item.name}</Text>

            </TouchableOpacity>



        )
    }

    const rendercategoryes = () => {
        if (categoryList && categoryList.length !== 0) {

            return (

                <FlatList
                    data={categoryList}
                    renderItem={categoryCard}
                    // horizontal={true}
                    numColumns={3}
                    keyExtractor={(item, index) => index + 'cat'}
                />
            );
        } else {
            return <Text style={{ textAlign: "center", fontSize: 10 }}>Please Wait</Text>
        }

    }


    return (

        <ScrollView style={{ flex: 1 }}>
            <View>

                {/* <View style={{ backgroundColor: colors.primeryBtnColor, }}>


                    <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}> */}

                {/* <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginHorizontal: 5, marginLeft: 5 }}>Laksclean</Text>
                        </View> */}

                <View style={{ flexDirection: 'row', marginVertical: 5, alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}> {" "} </Text>
                    {/* <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                style={{ justifyContent: 'center', alignItems: 'center', }}
                            /> */}
                    {/* <Text style={{ color: 'white' }}>Fr
                                </Text>
                            <Icons name="ios-notifications" size={25} color="white" style={{ marginHorizontal: 10 }} />
                            <Icons name="ios-cart" size={25} color="white" style={{ marginHorizontal: 10 }} /> */}
                    {/* </View>

                    </View> */}
                    {/* <Searchbar
                        placeholder="Search"
                        onChangeText={() => {

                        }}
                        value={"search"}
                        style={{ marginLeft: 10, marginRight: 10, marginBottom: 10, height: 40 }}
                    /> */}
                </View>


                <View >
                    <SliderBox
                        images={images}
                        sliderBoxHeight={190}
                        autoplay
                        circleLoop


                        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    />
                </View>



                <View style={{ backgroundColor: '#fff' }}>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginVertical: 5, marginLeft: 10 }}>Choose Categories</Text>
                        {/* <Text style={{ color: 'skyblue', fontSize: 16, fontWeight: 'bold', padding: 5, marginVertical: 5 }}>View All</Text> */}

                    </View>

                    {rendercategoryes()}

                    {/* <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', padding: 5, marginVertical: 5, marginLeft: 10 }}>Clean my house</Text>
                    <FlatList
                        data={SubjectList2}
                        renderItem={purchaseCard}
                        showsHorizontalScrollIndicator={false}
                        key={(SubjectList2)}
                        horizontal={true}
                        keyExtractor={(item, index) => index}
                    /> */}

                    <Text style={{ backgroundColor: 'white', height: 4 }} />


                    {/* <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', padding: 5, marginVertical: 5, marginLeft: 10 }}>Trending Service</Text>
                    <FlatList
                        data={TrendingList}
                        renderItem={trendingCard}
                        showsHorizontalScrollIndicator={false}
                        key={(TrendingList)}
                        horizontal={true}
                        keyExtractor={(item, index) => index}
                    /> */}
                    <Text style={{ backgroundColor: 'white', height: 4 }} />

                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>Our Products</Text>
                    <FlatList
                        data={productList}
                        renderItem={EcommerseProduct}
                        showsHorizontalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={{ marginHorizontal: 10 }}
                        keyExtractor={(item, index) => index + "ecid"}
                    />
                </View>
            </View>
        </ScrollView>
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
export default connect(mapStateToProps)(HomePage);