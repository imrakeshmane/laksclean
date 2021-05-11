// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import React, { useContext, useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Image,
    StatusBar,
    FlatList, TextInput,
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
const ScanQRCode = ({ route, navigation }) => {

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }} >

            <ScrollView>
                <View style={{ justifyContent: 'center', alignSelf: 'center', margin: 20, flexDirection: 'column', flex: 1 }} >


                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>
                        Enter Customer OTP
              </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, }}
                        onChangeText={text => onChangeText(text)}
                        placeholder={"OTP"}

                    />
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ELearning')
                    }}>


                        <Text style={{ color: '#000000', fontSize: 20, margin: 10, padding: 10, flex: 0.28, borderWidth: 1, borderBottomColor: '#428947', borderRadius: 10, justifyContent: 'center', alignSelf: 'center' }}>
                            Submit
              </Text>
                    </TouchableOpacity>
                </View>
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
export default ScanQRCode;