import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview'
import Loader from './Loader/Loader';
const NormalWebView = (props) => {
    const { route, navigation } = props;

    const { mainURL } = navigation.state.params;
    // console.log(mainURL)

    const [loader, setLoader] = useState(true);
    const [url, setURL] = useState(mainURL);

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)

        }, 4000)
    }, [])
    return (
        <View style={{ flex: 1 }}>
            {loader ? <Loader /> :

                <WebView
                    onLoadStart={() => { 

                        debugger
                        console.log('Load start') }}
                    onError={() => 
                    {
                        debugger

                        setLoader(false);
                    }}
                    onLoadStart={() => {
                        debugger

                        // setLoader(true)
                    }}
                    onLoadEnd={() => {
                        debugger

                        setLoader(false);
                    }}
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                    // source={{ uri: url }}
                    scalesPageToFit={true}
                    viewportContent={'width=device-width, user-scalable=no'}
                    source={{ uri: url }} />
                // <AutoHeightWebView
                //     // onLoadStart={()=>{console.log('Load start')}}
                //     // onError={() => console.log('error')}
                //     onLoadStart={() => {
                //         // setLoader(true)

                //     }}
                //     onMessage={(event) => console.log('onMessage', event)}
                //     onLoadEnd={() => {
                //         // setURL('https://merafamily.techasoft.com/login')
                //         setLoader(false);
                //     }}
                //     onLoad={() => setLoader(false)}
                //     style={{ width: Dimensions.get('window').width }}
                //     source={{ uri: url }}
                //     scalesPageToFit={true}
                //     viewportContent={'width=device-width, user-scalable=no'}

                // />
            }



        </View>
    )

}
export default NormalWebView;

