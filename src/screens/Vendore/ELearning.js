// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import React, { useContext, useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text, Dimensions,
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
import colors from '../../utils/colors';
import WebView from 'react-native-webview';
import { connect } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import AutoHeightWebView from 'react-native-autoheight-webview';
const ELearning = (props) => {
    const [showLoader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }, [])
    // const purchaseCard = ({ item, index }) => {
    //     return (
    //         <TouchableOpacity onPress={() => {
    //             navigation.navigate('MyAccount');
    //         }}>


    //             <View style={{ flexDirection: 'row', backgroundColor: '#fff', margin: 10, elevation: 4, borderRadius: 5, flex: 1, padding: 10 }}>

    //                 <View style={{ flexDirection: 'column', flex: 1, }}>


    //                     <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>{item.chapterName} </Text>
    //                     <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', margin: 5 }}>{item.chapterTitle}</Text>

    //                 </View>
    //                 <View style={{ flexDirection: 'column', flex: 1, }}>


    //                     <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', justifyContent: 'center', textAlign: 'right', alignItems: 'center', margin: 5 }}>{item.chapterCount}</Text>
    //                 </View>



    //             </View>
    //         </TouchableOpacity>
    //     )
    // }


    const AppWebView = () => {

        // console.log(mainURL)

        const [url, setURL] = useState('https://laksclean.com/Dev-Laksclean/provider-learning?user_id=' + props.userInfo.id);


        return (
            <View style={{ flex: 1 }}>


                <WebView
                    onLoadStart={() => {

                        // setLoader(true)

                        console.log('Load start')
                    }}
                    onError={() => {
                        setLoader(false);
                    }}
                    onLoadStart={() => {
                        debugger

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

                {/* <AutoHeightWebView

                    onLoadStart={() => {
                        // setLoader(true)

                    }}
                    onMessage={(event) => console.log('onMessage', event)}
                    onLoadEnd={() => {
                        setLoader(false);
                    }}
                    onLoad={() => setLoader(false)}
                    style={{ width: Dimensions.get('window').width }}
                    source={{ uri: url }}
                    scalesPageToFit={true}
                    viewportContent={'width=device-width, user-scalable=no'}

                /> */}
            </View>
        )

    }
    return (
        <>
            {showLoader ? <Loader /> :
                <SafeAreaView>

                    <ScrollView>
                        <AppWebView />



                    </ScrollView>


                </SafeAreaView >
            }
        </>
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

function mapStateToProps(state) {
    return {
        userInfo: state.userData
    }
}
export default connect(mapStateToProps)(ELearning);