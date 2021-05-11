import React from 'react';
import { View,Text, TouchableOpacity ,Image} from 'react-native';


const HeaderTitle = (props) => {
   
    return (
        <View >
            <View style={{ justifyContent:'flex-start' }}>
               <Text style={{fontSize:18,fontWeight:'bold',color:'white' ,marginLeft:20}}>{props.title}</Text>
            </View>
    </View>

    )
}

export default HeaderTitle;