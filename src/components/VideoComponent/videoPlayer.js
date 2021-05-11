
import React, { useEffect, useState, useRef } from 'react';
import {
    StyleSheet,
    View, Text, Image, TouchableOpacity,
    Picker, FlatList, SafeAreaView,
    Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Icons from 'react-native-vector-icons/AntDesign';
import assets from '.. /../../assets';

// const customData = require('../../../AppLetters.json');



const MediaPlayer = (props) => {
    const { navigation } = props;
    // const [videoData, setvideoData] = useState(null);
    let videoData = useRef();
    const [isFullScreen, setisFullScreen] = useState(false);
    const [playerStates, setPlayerSates] = useState(
        {
            currentTime: 0,
            duration: 0,
            isFullScreen: false,
            time: 0,
            rate: 1,
            ShowStatusBar: false,
            isLoading: true,
            paused: true,
            selectedMode: true,
            url: '',
            playerState: 1,
            screenType: 'cover',
            VideoArrayList: [],
            thumbnailUrl: '',
            videoUrl: '',
            video: ''
        }
    )
    useEffect(() => {
        Orientation.lockToPortrait();
        console.log(props);
    }, []);

    const onReplay = () => {
        //Handler for Replay
        setPlayerSates({ ...playerStates, playerState: PLAYER_STATES.PLAYING });
        videoData.seek(0);
    };

    const onProgress = data => {
        const { isLoading, playerState } = playerStates;
        // Video Player will continue progress even if the video already ended
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            setPlayerSates({ ...playerStates, currentTime: data.currentTime });
        }
    };

    const onPaused = playerState => {
        console.log(playerState)
        //Handler for Video Pause
        setPlayerSates({
            ...playerStates,
            paused: !playerStates.paused,
            playerState,
        });

    };

    const onLoad = data => setPlayerSates({ ...playerStates, duration: data.duration, isLoading: false });

    const onLoadStart = data => setPlayerSates({ ...playerStates, isLoading: true });

    const onEnd = () => setPlayerSates({ ...playerStates, playerState: PLAYER_STATES.ENDED });

    const onError = () => alert('Oh! ', error);

    const onSeek = s => {
        videoData.seek(s)
    };
    const onSeeking = currentTime => videoData.seek(playerStates.currentTime);
    const onFullScreen = () => {
        const { isFullScreen } = playerStates;
        if (isFullScreen) {
            setshowModal(false);
            Orientation.lockToPortrait();
            setPlayerSates({
                ...playerStates,
            });

            videoData.seek(playerStates.currentTime);
            setPlayerSates({ ...playerStates, screenType: 'cover' });
        } else {
            videoData.seek(playerStates.currentTime);
            setPlayerSates({ ...playerStates, screenType: 'cover' });
            setPlayerSates({ ...playerStates, ShowStatusBar: true });
            Orientation.lockToLandscape();
            setshowModal(true);
            setPlayerSates({
                ...playerStates,
            });
        }
        setPlayerSates({ ...playerStates, isFullScreen: !isFullScreen });
    };



    const renderToolbar = () => {

        return <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            {/* Player ratio */}
            {renderHeader()}
            <View style={{ width: 80, color: 'white' }}>
                <Picker
                    style={{ width: 120, color: 'white' }}

                    selectedValue={(playerStates && playerStates.rate) || 'a'}
                    onValueChange={(value) => {
                        var rate = parseFloat(value);
                        setPlayerSates({ ...playerStates, rate: rate });

                    }} itemStyle={{ color: 'white' }}>
                    <Picker.Item label="x1.50" value={1.50} />
                    <Picker.Item label="x1.25" value={1.25} />
                    <Picker.Item label="x1.0" value={1.0} />
                    <Picker.Item label="x0.75" value={0.75} />
                </Picker>
            </View>
        </View>
    }

    const renderHeader = () => {
        if (playerStates.isFullScreen) {
            return null;
        }
        return <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity onPress={() => {
                navigation.goBack(null);
                const { isLoading, playerState } = playerStates;
                console.log(playerStates.paused, 'playerStatesplayerStatesplayerStatesplayerStates')

            }} >
                <View style={{ width: 40, height: 40, borderRadius: 40 / 2, marginTop: 5 }}>

                    <View style={{ alignContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                        <Icons
                            style={{ color: assets.colors.appTheme }} name='arrowleft' size={24} color='red' />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    }

    return (
        <SafeAreaView>

            <View>
                <View style={styles.container} >
                    {/* Video Player */}
                    <Video
                        //   onEnd={this.onEnd}
                        onLoad={onLoad}
                        onLoadStart={onLoadStart}
                        onProgress={onProgress}
                        paused={playerStates.paused}
                        ref={ref => (videoData = ref)
                        }
                        style={{ ...StyleSheet.absoluteFill }}
                        resizeMode={playerStates.screenType}
                        onFullScreen={playerStates.isFullScreen}
                        source={{ uri: playerStates.videoUrl }}
                        rate={playerStates.rate}
                        style={{
                            width: Dimensions.get('window').width,
                            height: Dimensions.get('window').width * (9 / 16),
                            backgroundColor: 'black',
                            marginBottom: 5

                        }}
                        volume={10}
                    />

                    <MediaControls
                        duration={playerStates.duration}
                        isLoading={playerStates.isLoading}
                        mainColor="#333"
                        onFullScreen={onFullScreen}
                        onPaused={onPaused}
                        onReplay={onReplay}
                        onSeek={onSeek}
                        onSeeking={onSeeking}
                        playerState={playerStates.playerState}
                        progress={playerStates.currentTime}
                        toolbar={renderToolbar()}

                    />
                </View>
                {/* Toggle Switch For portrait and landscap mode */}

                {/* <View style={styles.ToggleSwitchView}>
                    <ToggleSwitch
                        isOn={playerStates.selectedMode}
                        onColor="green"
                        style={styles.ToggleSwitch}
                        offColor="black"
                        label={customData.Home.mode}
                        labelStyle={{ color: "black", fontWeight: "600" }}
                        size="medium"
                        onToggle={isOn => {
                            // if (this.state.selectedMode == false) {
                            //     this.setState({
                            //         selectedMode: true
                            //     });
                            // } else {
                            //     this.setState({
                            //         selectedMode: false
                            //     });
                            // }
                        }
                        }
                    />
                </View> */}
            </View>
        </SafeAreaView>
    );

}




















// class RelatedVideo extends React.Component {
//     videoPlayer;

//     constructor(props) {
//         super(props);
//         this.state = {
//             currentTime: 0,
//             duration: 0,
//             isFullScreen: false,
//             time: 0,
//             rate: 1,
//             ShowStatusBar: false,
//             isLoading: true,
//             paused: true,
//             selectedMode: true,
//             url: '',
//             playerState: 1,
//             screenType: 'cover',
//             VideoArrayList: [],
//             thumbnailUrl: '',
//             videoUrl: '',
//             video: ''
//         };
//         this.requestExternalStoreageRead()
//         const VIMEO_ID = '385976256';
//         fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
//             .then(res => res.json())
//             .then(res => {
//                 this.setState({
//                     thumbnailUrl: res.video.thumbs['640'],
//                     videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
//                     video: res.video,
//                 });
//                 console.log(res, 'res')
//                 console.log(this.state, 'state')
//             });
//         // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
//     }


//     async requestExternalStoreageRead() {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//                 {
//                     'title': 'SG Learning App ...',
//                     'message': ' needs access to external storage'
//                 }
//             );
//             console.log(granted, 'gra');
//             if (granted) {
//                 RNFS.readFile(filePath, 'ascii').then(res => {
//                     console.log(res)
//                 })
//                     .catch(err => {

//                         console.log(err.message, err.code);

//                     });
//             }
//             return granted == PermissionsAndroid.RESULTS.GRANTED
//         }
//         catch (err) {
//             //Handle this error
//             return false;
//         }
//     }
//     handleBackButtonClick = () => {
//         this.setState({
//             isFullScreen: false,
//         });
//         Orientation.lockToPortrait();
//         this.props.navigation.goBack(null);
//         return true;
//     }
//     componentWillMount() {
//         BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
//     }

//     componentWillUnmount() {
//         BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
//     }

//     onSeek = seek => {
//         //Handler for change in seekbar
//         this.videoPlayer.seek(seek);
//     };

//     onPaused = playerState => {
//         console.log(playerState)
//         //Handler for Video Pause
//         this.setState({
//             paused: !this.state.paused,
//             playerState,
//         });
//         this.setState({ screenType: 'cover' });
//         if (this.state.selectedMode == false || this.state.isFullScreen) {
//             return;
//         } else {
//             if (this.state.paused == true) {
//                 Orientation.lockToLandscape();
//                 this.setState({ screenType: 'cover' });
//                 this.setState({ ShowStatusBar: false });
//             } else {
//                 Orientation.lockToPortrait();
//                 this.setState({ screenType: 'cover' });
//                 this.setState({ ShowStatusBar: true });
//             }
//         }
//     };

//     onReplay = () => {
//         //Handler for Replay
//         this.setState({ playerState: PLAYER_STATES.PLAYING });
//         this.videoPlayer.seek(0);
//     };

//     onProgress = data => {
//         const { isLoading, playerState } = this.state;
//         // Video Player will continue progress even if the video already ended
//         if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
//             this.setState({ currentTime: data.currentTime });
//         }
//     };

//     onLoad = data => this.setState({ duration: data.duration, isLoading: false });

//     onLoadStart = data => this.setState({ isLoading: true });

//     onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });

//     onError = () => alert('Oh! ', error);

//     exitFullScreen = () => {
//         alert('Exit full screen');
//     };

//     enterFullScreen = () => { };

//     onFullScreen = () => {
//         const { isFullScreen } = this.state;
//         if (isFullScreen) {
//             Orientation.lockToPortrait();
//             this.setState({ screenType: 'cover' });
//         } else {
//             this.setState({ screenType: 'cover' });
//             this.setState({ ShowStatusBar: true });
//             Orientation.lockToLandscape();
//         }
//         this.setState({ isFullScreen: !isFullScreen });
//     };

//     renderRecommendedVideos = ({ item, index }) => {

//         return (
//             <View style={{
//                 margin: 10,
//                 backgroundColor: 'white',
//                 borderRadius: 10,
//                 flex: 1,
//                 flexDirection: "row",


//             }}>
//                 <Image
//                     style={{
//                         margin: 10,
//                         width: 100,
//                         height: 80,
//                         borderRadius: 4,
//                     }}
//                     source={require("../../../assets/subscription.jpg")}
//                 />

//                 <Text numberOfLines={2} style={{
//                     margin: 10,
//                     flex: 1,
//                     fontSize: 16, color: '#42a5f5',
//                     justifyContent: 'center',
//                 }}>{item.name}</Text>

//             </View>



//         )
//     }

//     renderToolbar = () => (

//         <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
//             <StatusBar hidden={true} />
//             {/* Player ratio */}
//             <View style={{ width: 80, color: 'white' }}>
//                 <Picker
//                     style={{ width: 120, color: 'white' }}

//                     selectedValue={(this.state && this.state.rate) || 'a'}
//                     onValueChange={(value) => {
//                         var rate = parseFloat(value);
//                         this.setState({ rate: rate });

//                     }} itemStyle={{ color: 'white' }}>
//                     <Picker.Item label="x1.50" value={1.50} />
//                     <Picker.Item label="x1.25" value={1.25} />
//                     <Picker.Item label="x1.0" value={1.0} />
//                     <Picker.Item label="x0.75" value={0.75} />
//                 </Picker>
//             </View>
//         </View>
//     );






//     onSeeking = currentTime => this.setState({ currentTime });

//     render() {

//         return (
//             <SafeAreaView>
//                 <View>
//                     <View style={styles.container} >
//                         {/* Video Player */}
//                         <Video
//                             onEnd={this.onEnd}
//                             onLoad={this.onLoad}
//                             onLoadStart={this.onLoadStart}
//                             onProgress={this.onProgress}
//                             paused={this.state.paused}
//                             ref={videoPlayer => (this.videoPlayer = videoPlayer)
//                             }
//                             style={{ ...StyleSheet.absoluteFill }}
//                             resizeMode={this.state.screenType}
//                             onFullScreen={this.state.isFullScreen}
//                             source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
//                             rate={this.state.rate}
//                             style={{
//                                 width: Dimensions.get('window').width,
//                                 height: Dimensions.get('window').width * (9 / 16),
//                                 backgroundColor: 'black',

//                             }}
//                             volume={10}
//                         />
//                         {/* Player Contriller */}
//                         <MediaControls
//                             duration={this.state.duration}
//                             isLoading={this.state.isLoading}
//                             mainColor="#333"
//                             onFullScreen={this.onFullScreen}
//                             onPaused={this.onPaused}
//                             onReplay={this.onReplay}
//                             onSeek={this.onSeek}
//                             onSeeking={this.onSeeking}
//                             playerState={this.state.playerState}
//                             progress={this.state.currentTime}
//                             toolbar={this.renderToolbar()}

//                         />

//                     </View>
//                     {/* Toggle Switch For portrait and landscap mode */}

//                     <View style={styles.ToggleSwitchView}>
//                         <ToggleSwitch
//                             isOn={this.state.selectedMode}
//                             onColor="green"
//                             style={styles.ToggleSwitch}
//                             offColor="black"
//                             label={customData.Home.mode}
//                             labelStyle={{ color: "black", fontWeight: "600" }}
//                             size="medium"
//                             onToggle={isOn => {
//                                 if (this.state.selectedMode == false) {
//                                     this.setState({
//                                         selectedMode: true
//                                     });
//                                 } else {
//                                     this.setState({
//                                         selectedMode: false
//                                     });
//                                 }
//                             }
//                             }
//                         />
//                     </View>
//                 </View>
//                 <View style={{ marginBottom: 20 }}>

//                     <FlatList
//                         style={{ flexDirection: 'column', marginBottom: 530, }}
//                         data={alVideos}
//                         keyExtractor={(item, index) => index.toString()}
//                         renderItem={this.renderRecommendedVideos}
//                     />

//                 </View>
//             </SafeAreaView>
//         );
//     }
// }


const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'black',
    },
    toolbar: {
        marginTop: 5,
        padding: 1,
    },
    mediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
    },
    TextStyle: {
        fontSize: 15,
        margin: 10,
        borderColor: '#f2f8f9',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        textAlign: 'center'

    },
    switchBtn: {
        marginLeft: 10,
        marginTop: 10,
        textAlign: 'right'
    },
    ToggleSwitchView: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    ToggleSwitch: {
        marginRight: 50,
    }
});

export default MediaPlayer;