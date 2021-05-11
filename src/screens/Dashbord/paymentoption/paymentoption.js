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

import Icon from 'react-native-vector-icons/Ionicons';

const PaymentOptions = (props) => {
    const { navigation } = props;
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [images, setImages] = useState([require('../../../assets/slider1.jpg'), require('../../../assets/slider2.jpeg'),
    require('../../../assets/slider3.jpeg'),
    require('../../../assets/slider4.jpeg'),
        // Network image
        // Local image])
    ]);



    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            <ScrollView>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: colors.primeryBtnColor, fontSize: 18, marginLeft: 10, marginVertical: 10 }}>Shipment</Text>
                    <Text style={{ color: colors.primeryBtnColor, fontSize: 16, marginRight: 10, marginVertical: 10 }}>Edit</Text>
                </View>
                <View style={{ marginHorizontal: 10,borderBottomWidth: 1,borderBottomColor:colors.primeryBtnColor, padding: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Rakesh Mane</Text>
                    <Text>Zenda Chouck ,Herwad </Text>
                    <Text>A/p - Herawd ,Tal -shirol,Dist- Kolhapur </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: colors.primeryBtnColor, fontSize: 18, marginLeft: 10, marginVertical: 10 }}>Order Summery</Text>
                    <Text style={{ color: colors.primeryBtnColor, fontSize: 16, marginRight: 10, marginVertical: 10 }}>Edit</Text>
                </View>

                <View style={{ marginHorizontal: 10,borderBottomWidth: 1,borderBottomColor:colors.primeryBtnColor, padding: 10 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 10, marginVertical: 10, color: 'black' }}>Value Pack 300ml</Text>
                        <Text style={{ color: colors.primeryBtnColor, fontWeight: 'bold', fontSize: 16, marginRight: 10, marginVertical: 10 }}>$ 100</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 10, marginVertical: 10, color: 'black' }}>Value Pack 3 300ml</Text>
                        <Text style={{ color: colors.primeryBtnColor, fontWeight: 'bold', fontSize: 16, marginRight: 10, marginVertical: 10 }}>$ 50</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 10, marginVertical: 10, color: 'black' }}>Value Pack 1 300ml</Text>
                        <Text style={{ color: colors.primeryBtnColor, fontWeight: 'bold', fontSize: 16, marginRight: 10, marginVertical: 10 }}>$ 70</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 10, marginVertical: 10, color: 'black' }}>Value Pack 300ml</Text>
                        <Text style={{ color: colors.primeryBtnColor, fontWeight: 'bold', fontSize: 16, marginRight: 10, marginVertical: 10 }}>$ 10</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 10, marginVertical: 10, color: 'black' }}>Sub Total</Text>
                        <Text style={{ color: colors.primeryBtnColor, fontWeight: 'bold', fontSize: 16, marginRight: 10, marginVertical: 10 }}>$ 230</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 10, marginVertical: 10, color: 'black' }}>Delivery Charges</Text>
                        <Text style={{ color: colors.primeryBtnColor, fontWeight: 'bold', fontSize: 16, marginRight: 10, marginVertical: 10 }}>$ 20</Text>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 10, marginVertical: 10, color: 'black', fontWeight: 'bold' }}>Total</Text>
                        <Text style={{ color: colors.primeryBtnColor, fontWeight: 'bold', fontSize: 16, marginRight: 10, marginVertical: 10 }}>$ 250</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',marginHorizontal:10,borderBottomWidth: 1,borderBottomColor:colors.primeryBtnColor, padding: 10}}>
                   <View>
                   <Text style={{ color: colors.primeryBtnColor, fontSize: 18, marginLeft: 10, marginTop: 10 }}>Apply Coupon</Text>
                   <Text style={{ marginLeft: 10, color: 'black',fontSize:10 }}>Click to view other Offers</Text>
                   </View>
                    <Icon name="ios-arrow-dropright" size={20} style={{marginRight:30}} color={colors.primeryBtnColor}  />
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',marginHorizontal:10,borderBottomWidth: 1,borderBottomColor:colors.primeryBtnColor,borderBottomColor:colors.primeryBtnColor, padding: 10 }}>
                   <View>
                   <Text style={{ color: colors.primeryBtnColor, fontSize: 18, marginLeft: 10, marginTop: 10 }}>Paymnet</Text>
                   <Text style={{ marginLeft: 10, color: 'black',fontSize:10 }}>Credit cart ******1231</Text>
                   </View>
                    <Icon name="ios-arrow-dropright" size={20} style={{marginRight:30}} color={colors.primeryBtnColor}  />
                </View>
                
                
            </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({

});
function mapStateToProps(state) {
    return {
        userInfo: state.userData
    }
}
export default connect(mapStateToProps)(PaymentOptions);