
import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
    StyleSheet,
    View, Text, Image, TouchableOpacity,
    Picker, FlatList, SafeAreaView,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


// const customData = require('../../../AppLetters.json');
import YoutubePlayer from "react-native-youtube-iframe";
import HeaderBack from '../Headers/headerBack';


const YoutubePlayerView = (props) => {
    const { navigation, youtubeVideoID } = props;
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    // const [videoData, setvideoData] = useState(null);


    return (
        <SafeAreaView >
            <View style={styles.backCover}>
                <TouchableOpacity onPress={() =>{
                      navigation.navigate('CourseDetails');
                } } >

                    <View style={{ alignContent: 'center', marginLeft: 30 }}>

                        <Icon
                            name={"ios-arrow-back"}
                            size={30}
                            color="white"
                        />
                    </View>

                </TouchableOpacity>
            </View>
            <YoutubePlayer
                height={300}
                play={playing}
                videoId={youtubeVideoID}
                onChangeState={onStateChange}
            />
        </SafeAreaView>
    );

}




const styles = StyleSheet.create({
    backCover: {
       
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
        
      }
});

export default YoutubePlayerView;