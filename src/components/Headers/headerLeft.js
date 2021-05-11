import React from 'react';
import { View, TouchableOpacity,Text,Image } from 'react-native';
// import Icon from 'react-native-vector-icons/Octicons';

const HeaderLeft = ({ navigation }) => {

    const toggleCustomDrawer = () => {
        navigation.toggleDrawer();
    }

    return (
        <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => toggleCustomDrawer()} >
                <View style={{ marginLeft: 20, width: 40, height: 40, borderRadius: 40 / 2,borderColor:'black',borderWidth:1 }}>

                    <View style={{ alignContent: 'center', marginBottom: 10, marginTop: 10 }}>
                    
                     <Image
                        style={{ width: '55%', height: '100%' }}
                        source={require('../../assets/listing-option.png')}
                    />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default HeaderLeft;