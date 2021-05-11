import React, { useState, useEffect, } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
// import assets from '../../assets/index';.
import AutoHeightWebView from 'react-native-autoheight-webview';
import { WebView } from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const RenderHTML = (props) => {
    const { content,size="40px",setHeight=180 } = props

    const [HtmlView, setHtmlView] = useState(`
    <!DOCTYPE html>
    <style>
    body {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      </style>
    <html>
    <body>
       <div style="font-size:${size}">
       ${content}
       </div>
    </body>
    </html>
    `);

    //  <iframe src="https://player.vdocipher.com/playerAssets/1.x/vdo/embed/index.html#otp=20160313versUSE313z5K3hYg2u3bAOuVfqXtDX08nbuAZmumcw7LchDnU9uso3n&playbackInfo=eyJ2aWRlb0lkIjoiZmU3OTRhNDQzOTliNDBjN2FmZTQ4Y2UwZTUzODkyMTMifQ==&theme=b9671d45d2d84c37b2d602940d340a00" style="border:0;height:360px;width:100%" allowFullScreen="true" allow="encrypted-media"></iframe>


    return (
            //     <WebView
            //     scalesPageToFit={true}
            //     bounces={false}
            //     scrollEnabled={true}
            //     javaScriptEnabled
            //     style={{ height: setHeight, width: windowWidth-50, alignSelf:'center'}}
            //     source={{
            //         html: HtmlView,
            //     }}
            //     automaticallyAdjustContentInsets={false}
            // />
            <AutoHeightWebView
        style={{width: '100%',flex:1,marginVertical:10 }}
        customScript={`document.body.style.background = 'white';
        document.body.style.userSelect = 'none'
        `}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={true}
        source={{html : content }}
        customStyle={`
            img {
                width: 'auto';
                height: 'auto';
                max-height: 270px;
            }
        `}
        viewportContent={'width=device-width, user-scalable=no'}
    />
    );
}

const styles = StyleSheet.create({

});
export default RenderHTML;