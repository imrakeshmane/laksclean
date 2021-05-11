// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import React, { useContext, useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Image,
    StatusBar,
    FlatList, Switch, Picker,
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
const AvailableDetails = ({ route, navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [selectedValue, setSelectedValue] = useState("Select City");

    return (
        <SafeAreaView>

            <ScrollView>


                <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold', margin: 10 }}>Assign Availability Service Provide City</Text>
                <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 10 }}>Availability Now</Text>
                <View style={{
                    flex: 1,

                    alignItems: "center"
                }}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Select City" value="Select City" />
                        <Picker.Item label="Pune" value="js" />
                        <Picker.Item label="Mumbai" value="js" />
                    </Picker>
                </View>
                <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 10 }}>Available Date</Text>

                <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', margin: 10 }}>Available Time</Text>








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
export default AvailableDetails;