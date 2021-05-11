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
const CompleteBooking = ({ route, navigation }) => {


    let ScheduleBooking =
        [
            {
                address: 'Canada Office Center Details',
                ScheduleDate: '03-10-2020',
                time: '01.30 PM',
                ReqDetails: 'One Bed Room Hall Kitchen Cleaning',
                paymentStatus: 'Paid'


            },
            {
                address: 'Canada Office Center Details',
                ScheduleDate: '03-10-2020',
                time: '01.30 PM',
                ReqDetails: 'One Bed Room Hall Kitchen Cleaning',
                paymentStatus: 'Paid'


            },
            {
                address: 'Canada Office Center Details',
                ScheduleDate: '03-10-2020',
                time: '01.30 PM',
                ReqDetails: 'One Bed Room Hall Kitchen Cleaning',
                paymentStatus: 'Paid'


            },
            {
                address: 'Canada Office Center Details',
                ScheduleDate: '03-10-2020',
                time: '01.30 PM',
                ReqDetails: 'One Bed Room Hall Kitchen Cleaning',
                paymentStatus: 'Paid'


            },


        ];


    const purchaseCard = ({ item, index }) => {
        return (

            <View style={{ flexDirection: 'column', backgroundColor: '#8AE783', margin: 10, padding: 10, elevation: 4, borderRadius: 10 }}>
                <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'flex-end' }}>Complete  </Text>
                <View style={{ flexDirection: 'row', }}>


                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Address -: </Text>
                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>{item.address}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>


                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Schedule Date -: </Text>
                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>{item.ScheduleDate}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>


                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Time -: </Text>
                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>{item.time}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>


                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Payment Status -: </Text>
                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>{item.paymentStatus}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>


                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Requirement Details -: </Text>
                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', flex: 1 }}>{item.ReqDetails}</Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', margin: 10 }}>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('AcceptBooking');

                    }}>


                        <Text style={{ backgroundColor: 'red', color: '#fff', fontSize: 20, borderRadius: 5, padding: 5, justifyContent: 'center', textAlign: 'center', }}>Give Customer Feedback  & Review</Text>
                    </TouchableOpacity>

                </View>

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
export default CompleteBooking;