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
import { SearchBar } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icons from 'react-native-vector-icons/Ionicons'


const CompletePaymenet = ({ route, navigation }) => {


    let ScheduleBooking =
        [
            {
                name: "Rakesh Mane",
                service: "House Clean",
                address: 'Canada Office Center Details',
                ScheduleDate: '03-10-2020',
                time: '01.30 PM',
                ReqDetails: 'One Bed Room Hall Kitchen Cleaning',
                paymentStatus: 'Paid'


            },
            {
                name: "Sandip Tandle",
                service: "Car Clean",
                address: 'Canada Office Center Details',
                ScheduleDate: '03-10-2020',
                time: '01.30 PM',
                ReqDetails: 'One Bed Room Hall Kitchen Cleaning',
                paymentStatus: 'Cancel'


            },
            {
                name: "Test Test",
                service: "House Clean",
                address: 'Canada Office Center Details',
                ScheduleDate: '03-10-2020',
                time: '01.30 PM',
                ReqDetails: 'One Bed Room Hall Kitchen Cleaning',
                paymentStatus: 'Paid'


            },
            {
                name: "Test test",
                service: "House Clean",
                address: 'Canada Office Center Details',
                ScheduleDate: '03-10-2020',
                time: '01.30 PM',
                ReqDetails: 'One Bed Room Hall Kitchen Cleaning',
                paymentStatus: 'Pending'


            },


        ];


    const purchaseCard = ({ item, index }) => {
        return (

            <View style={{ flexDirection: 'column', backgroundColor: '#bdeab9', margin: 10, padding: 10, elevation: 4, borderRadius: 10 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                    <Text style={{ color: '#000000', fontSize: 20, marginVertical: 5, fontWeight: 'bold' }} >{item.service}</Text>
                   
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ color: '#000000', fontSize: 16, }}>Name of Provider  - </Text>
                    <Text style={{ color: '#000000', fontSize: 14, }}>{item.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>


                    <Text style={{ color: '#000000', fontSize: 16, }}>Schedule Date - </Text>
                    <Text style={{ color: '#000000', fontSize: 14, }}>{item.ScheduleDate}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#000000', fontSize: 16, }}>Time - </Text>
                    <Text style={{ color: '#000000', fontSize: 14, }}>{item.time}</Text>
                </View>
                <Text style={{ color: '#000000', fontSize: 16, }}>Requirement Details - </Text>
                <Text style={{ color: '#000000', fontSize: 14, flex: 1 }}>{item.ReqDetails}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#000000', fontSize: 16, }}>Payment Status - </Text>
                    <Text style={{ color: '#000000', fontSize: 14, }}>{item.paymentStatus}</Text>
                </View>

                    <TouchableOpacity onPress={() => {
                        // navigation.navigate('DeliveryDetails');
                    }} style={{marginVertical:8,width:"70%",alignSelf:'center'}}>
                        <Text style={{ backgroundColor: 'red', fontWeight: 'bold', color: '#fff', fontSize: 14, borderRadius: 5, padding: 5, justifyContent: 'center', textAlign: 'center', }}>Give Review</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginVertical:8,width:"70%",alignSelf:'center'}} onPress={() => {
                        navigation.navigate('mybooking');
                    }}>
                        <Text style={{ backgroundColor: 'green', fontWeight: 'bold', color: '#fff', fontSize: 14, borderRadius: 5, padding: 5, justifyContent: 'center', textAlign: 'center', }}>Reschedule Appoinment</Text>
                    </TouchableOpacity>


            </View>

        )
    }

    return (
        <SafeAreaView>

            <ScrollView>
                <FlatList
                    data={ScheduleBooking}
                    renderItem={purchaseCard}
                    key={(ScheduleBooking)}

                    keyExtractor={(item, index) => index}
                // style={{ marginTop: 20 }}
                />


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
export default CompletePaymenet;