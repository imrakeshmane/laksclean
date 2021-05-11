import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
// import assets from '../../assets/index';.
import { VdoPlayerView } from 'vdocipher-rn-bridge';
import Orientation from 'react-native-orientation-locker';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const RenderVideoCipher = (props) => {
    let  _player =useRef()
     const { embedInfo,setCheckScreen ,checkScreen} = props

    //  <iframe src="https://player.vdocipher.com/playerAssets/1.x/vdo/embed/index.html#otp=20160313versUSE313z5K3hYg2u3bAOuVfqXtDX08nbuAZmumcw7LchDnU9uso3n&playbackInfo=eyJ2aWRlb0lkIjoiZmU3OTRhNDQzOTliNDBjN2FmZTQ4Y2UwZTUzODkyMTMifQ==&theme=b9671d45d2d84c37b2d602940d340a00" style="border:0;height:360px;width:100%" allowFullScreen="true" allow="encrypted-media"></iframe>

useEffect(()=>{
   // alert(checkScreen);
   if(checkScreen){
    Orientation.lockToLandscape();

   }else{
    Orientation.lockToPortrait();  
   }
   
},[checkScreen])
    return (

       <>
            <VdoPlayerView

               ref={player => _player = player}
                    style={{height:!checkScreen?240:windowHeight, width: windowWidth}}
                    embedInfo={embedInfo}
                    onEnterFullscreen={()=>{
                       // setCheckScreen(true)
                    }}
                    onExitFullscreen={()=>{
                        setCheckScreen(false)

                       
                    }}
                  />
                </>
    );
}

const styles = StyleSheet.create({

});
export default RenderVideoCipher;