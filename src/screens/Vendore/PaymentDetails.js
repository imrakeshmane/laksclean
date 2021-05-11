// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import React, { useContext, useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Image,
    StatusBar, TextInput,
    FlatList, Switch,
    SafeAreaView
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const PaymentDetails = ({ route, navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);



    return (
        <SafeAreaView>

            <ScrollView>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('AvailableDetails');
                }}>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', textAlign: 'left', flex: 1 }}>Select Date</Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderColor: 'gray',
                                borderWidth: 1,
                                borderRadius: 20,
                                flex: 1,
                                justifyContent: 'space-between',
                            }}>
                            <TextInput placeholder="Select Calendar" style={{ justifyContent: 'center', textAlign: 'center', alignContent: 'center', flex: 1 }} />

                        </View>


                    </View>
                    <View style={{ flexDirection: 'row' }}>


                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 10 }}>Sr</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 10 }}>Name</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', marginLeft: 40, marginTop: 10, marginBottom: 10, marginRight: 10 }}>Service Name</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 10 }}>Amount</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 10 }}>Status</Text>
                    </View>
                    <View style={{ backgroundColor: '#000', height: 2, margin: 5 }}></View>
                    <View style={{ flexDirection: 'row' }}>


                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>1</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>Vishal Detake</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>House Cleaning</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 5, marginBottom: 5, marginRight: 5 }}>$ 200</Text>
                        <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold', margin: 5, justifyContent: 'center', textAlign: 'center', flex: 1 }}>SetteId</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>


                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>2</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>Vishal Detake</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>House Cleaning</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 5, marginBottom: 5, marginRight: 5 }}>$ 200</Text>
                        <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold', margin: 5, justifyContent: 'center', textAlign: 'center', flex: 1 }}>SetteId</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>


                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>3</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>Vishal Detake</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>House Cleaning</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 5, marginBottom: 5, marginRight: 5 }}>$ 200</Text>
                        <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold', margin: 5, justifyContent: 'center', textAlign: 'center', flex: 1 }}>unSetteId</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>


                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>4</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>Vishal Detake</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>House Cleaning</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 5, marginBottom: 5, marginRight: 5 }}>$ 200</Text>
                        <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold', margin: 5, justifyContent: 'center', textAlign: 'center', flex: 1 }}>SetteId</Text>
                    </View>
                    <View style={{ backgroundColor: '#000', height: 2, margin: 5 }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>Total</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>$ 800</Text>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>SetteId Amount</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>$ 600</Text>

                    </View>
                    <View style={{ backgroundColor: '#000', height: 2, margin: 5 }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>UnsetteId Amount</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>$ 200</Text>





                    </View>
                </TouchableOpacity>
            </ScrollView>
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
export default PaymentDetails;