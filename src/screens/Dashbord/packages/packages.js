// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import React, { useContext, useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Image,
    StatusBar,
    FlatList,
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
import { RadioButton } from 'react-native-paper';
import useForceUpdate from 'use-force-update';
import Api from '../../../utils/Api';
import { UserAction } from '../../../reduxManager/index';
import { connect } from 'react-redux';
import { Alert, CheckBox } from 'react-native';
import Toaster from '../../../components/ToastComponent/Toaster';
import Loader from '../../../components/Loader/Loader';



const PackageView = (props) => {

    const { route, navigation } = props;

    const { categoryData, scheduleJSON, inquiryResponse } = navigation.state.params;
    console.log(categoryData, 'categoryData')
    console.log(scheduleJSON, 'scheduleJSON')
    console.log(inquiryResponse, 'responseinquiryResponse')
    const [subcategoryList, setSubCategory] = useState([])

    useEffect(() => {
        getsubCategory()
    }, []);

   

    const getsubCategory = () => {
        setLoader(true)

        Api.getApi('Userapi/getCategoryServices?category=' + inquiryResponse.category)
            .then(response => {

                console.log(response, 'responsegetCategoryServices')
                setLoader(false)

                console.log(response.data.category, "printresponsecategorycategorycategorydatadatadata")

                if (response && response.data && response.data.error !== "true") {
                    


                    let tempData = []
                    response.data.category && response.data.category.map((e, i) => {
                        debugger
                        if (e) {
                            e.isCLiningProduct = false;
                            e.package.map((p, pi) => {
                                p.plainIndex = i,
                                p.isCheked=0

                            });
                            tempData.push(e);
                        }
                    });
                    setSubCategory(response.data.category);
                } else {
                    Toaster.ErrorToaster(response.data.message)
                }
            })
            .catch(error => {
                setLoader(false);
                console.log(error)
            })
    }

    const [showLoader, setLoader] = useState(false);



    const forceUpdate = useForceUpdate();

    const handleClick = () => {
        forceUpdate();
    };


    const setPrice = (item,isView) => {
        console.log(item, 'item')
        let price = 0;


        item && item.package && item.package.map((e, i) => {

            if (e.isCheked === 1) {
                price = price + (+e.price);
                // if(e.price===null){
                //     return  "No Price Added"
                // }
            }

        });

        if (price === 0) {
            return "Select Plan"
        }
        if(isView){
            return "$ "+price
        }else{
            return  price;
        }
        

    }

const [selectedPackage,setSelectedPackage]=useState()
    const ServiceViewNew = ({ item, index }) => {
        console.log(item)
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, marginVertical: 5, borderBottomWidth: 1, borderBottomColor: 'lightgray', padding: 5 }} >

                <RadioButton

                    value="checked"
                    style={{ flex: 1 }}
                    status={item.isCheked === 1 ? 'checked' : 'unchecked'}
                    color={colors.primary}
                    onPress={() => {
                        debugger
                        subcategoryList && subcategoryList[item.plainIndex].package.map((s, si) => {
                            if (si !== index) {
                                s.isCheked = 0
                            } 

                        });
                        handleClick()
                        setSelectedPackage(item);

                        item.isCheked === 1 ? item.isCheked = 0 : item.isCheked = 1;
                        // setSubCategory(subcategoryList)
                        handleClick()
                    }}

                />
                <Text style={{ color: 'black', flex: 3, padding: 5 }} numberOfLines={2}>{item.name}</Text>
                {/* <Text style={{ textAlign: 'right', flex: 1, marginRight: 40, color: colors.primary }}>{'$10'}</Text> */}

            </View>
        )
    }


    const ServiceView = ({ item, index }) => {
        console.log(item, 'itemServiceViewServiceView')
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', margin: 10, borderRadius: 10, borderColor: 'gray', borderWidth: 1 }} >



                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>{item.title}</Text>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>Choose When You want:</Text>

                <FlatList
                    data={item.package}
                    mainIndex={index}
                    renderItem={ServiceViewNew}
                    key={(item.serv)}
                    // horizontal={true}
                    style={{ flex: 1 }}
                    numColumns={2}
                    keyExtractor={(item, index) => index + '0bv'}
                />



                <View style={{ margin: 10 }}>
                    <Text style={{ color: '#000', fontSize: 18, marginVertical: 5, fontWeight: 'bold' }} >{setPrice(item,true)}</Text>
                    <TouchableOpacity onPress={() => {
                        placeOrderApi(item);
                    }} style={{marginVertical:10}}>
                        <Text style={{ color: "#fff", fontWeight: 'bold', textTransform: 'uppercase', backgroundColor: '#E60073', padding: 10, justifyContent: 'center', alignSelf: 'center', borderRadius: 5 }}>Select Plan & Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }

    // orderid:1,
    // user_id:91,
    // inquiry_id:1,
    // currency:USD,
    // amount:149,
    // type:weekly,
    // f_name:ravi,
    // l_name: sharma,
    // email:a@gmail.com,
    // mobile:9856858689,
    // address:ramsds,
    // city:indore,
    // country:india,
    // pincode:452001
    const makePayment = (order,item) => {
        debugger
        setLoader(true)
        const formData = new FormData();
        formData.append('orderid', order.order_id);
        formData.append('user_id', props.userInfo.id);
        formData.append('inquiry_id', inquiryResponse.inquiry_id);
        formData.append('currency', 'USD');
        formData.append('amount', setPrice(item,false));
        formData.append('type', selectedPackage.type);


        formData.append('f_name', scheduleJSON.contact_name);
        formData.append('l_name', scheduleJSON.contact_name);
        formData.append('email', 'test@yopmail.com');

        formData.append('mobile', scheduleJSON.mobile);

        formData.append('address', scheduleJSON.fulladdress);
        formData.append('city', 'test');
        formData.append('country', 'test');
        formData.append('pincode', '414141');

        console.log(formData, 'formData')
        debugger
        Api.postApi(formData, 'Userapi/makePayment')
            .then(response => {
                setLoader(false)
                console.log(response, 'makePayment')
                if (response && response.status === 200 && response.data.message === 'Order Placed Succesfully!.') {
                    navigation.navigate('mybooking')
                } else {
                    // setErrorMsg(response.data.message);
                    Toaster.ErrorToaster(response.data.message)
                }
                //  resolve(response)
            })
            .catch(error => {
                setLoader(false)
                console.log(error)
                alert(error.response.data.message)
            })


    }


    const placeOrderApi = (item) => {
        debugger
        console.log(item, 'selected Planl');

        if (setPrice(item,false) === "Select Plan") {
            Toaster.ErrorToaster('Please Select Plan');
            return
        }
        setLoader(true)
        const formData = new FormData();
        formData.append('user_id', props.userInfo.id);
        formData.append('service_id', item.service_id);
        formData.append('selected_plan', item.title);
        formData.append('price', setPrice(item,false));
        formData.append('inquiry_id', inquiryResponse.inquiry_id);
        formData.append('payment_status', 'Pending');
        formData.append('transaction_id', 'null');
        console.log(formData, 'formData')
        debugger
        Api.postApi(formData, 'Userapi/placeOrder')
            .then(response => {
                setLoader(false)
                console.log(response, 'placeOrder')
                if (response && response.status === 200 && response.data.message === 'Order Placed Succesfully!.') {
                    Toaster.SuccessToaster(response.data.message);
                    makePayment(response.data,item);
                    return
                    navigation.navigate('mybooking')
                } else {
                    // setErrorMsg(response.data.message);
                    Toaster.ErrorToaster(response.data.message)
                }
                //  resolve(response)
            })
            .catch(error => {
                setLoader(false)
                console.log(error)
                alert(error.response.data.message)
            })


    }


    return (
        <>
            {showLoader ? <Loader /> :

                <SafeAreaView style={{ backgroundColor: '#fff' }}>

                    <ScrollView>

                        <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 20, justifyContent: 'center', alignSelf: 'center', margin: 10 }}>{categoryData.name} Package</Text>
                        <FlatList
                            data={subcategoryList}
                            renderItem={ServiceView}
                            key={(subcategoryList)}

                        // keyExtractor={(item, index) => index + 'Keys'}
                        // style={{ marginTop: 20 }}
                        />


                    </ScrollView>

                </SafeAreaView >
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
export default connect(mapStateToProps)(PackageView);