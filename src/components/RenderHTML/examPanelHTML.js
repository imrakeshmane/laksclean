import React, { useState, useEffect, } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
// import assets from '../../assets/index';.

import { WebView } from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview'
const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const ExamPanelHTML = (props) => {
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
         <AutoHeightWebView
        style={{ width: Dimensions.get('window').width - 15, marginTop: 35 }}
        customScript={`document.body.style.background = 'lightyellow';`}
        customStyle={`
          * {
            font-family: 'Times New Roman';
          }
          p {
            font-size: 16px;
          }
        `}
        onSizeUpdated={size => console.log(size.height)}
        files={[{
            href: 'cssfileaddress',
            type: 'text/css',
            rel: 'stylesheet'
        }]}
        source={{
            html: HtmlView }}
   
        scalesPageToFit={true}
        viewportContent={'width=device-width, user-scalable=no'}
        /*
        other react-native-webview props
        */

        />
    );
}

const styles = StyleSheet.create({

});
export default ExamPanelHTML;