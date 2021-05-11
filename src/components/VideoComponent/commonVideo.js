import React, { useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ActivityIndicator,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from "react-native";
import Api from '../../utils/Api';
import Loader from '../../components/Loader/Loader'
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';
import ToastComponent from '../../components/ToastComponent/Toaster';
import colors from '../../utils/colors';

import CustomVideoPlayer from '../../components/VideoComponent/VideoControlPalyer'
import YoutubePlayerView from '../../components/VideoComponent/YoutubeComponent';
import Orientation from 'react-native-orientation-locker';
import RenderVideoCipher from '../../components/VideoComponent/videoCipher';
const ScreenHeight = Dimensions.get('window').width;
const ScreenWidth = Dimensions.get('window').height;


let embedInfo = {
    "otp": "",
    "playbackInfo": ""
};

const CommonVideos = (props) => {
    const { route, navigation } = props;
    const values = navigation.state.params;
    const image = {
        uri:
            "data:image/jpeg;base64,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"
    };
    const [showLoader, setLoader] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState();
    const [videoList, setVideoList] = useState([]);
    const [resourceLecture, setResourceLecture] = useState([]);
    const [resourceTopic, setResourceTopic] = useState([]);
    const [resourceStudyList, setResourceStudyList] = useState([]);
    const [upComingLectures, setUpcomingLectures] = useState([]);
    const [upComingLecturesBTN, setUpComingLecturesBTN] = useState(false);

    const [modalRederHtmlContent, setHTMLContent] = useState('')
    const [showstudyNotesModal, setShowStudyNotesModal] = useState(false);
    const [contentLoading, setContentLoading] = useState(false);
    const [lecturePagination, setPagination] = useState({
        start: '1',
        end: '10'
    });
    const [loadMoreOff, setLoadMore] = useState(true)
    const [btnLoader, setbtnLoader] = useState(false)

    const closeStudyNotesModal = () => {
        setShowStudyNotesModal(false)
    }


    const [isHTMLRednder, setIsHTMLRednder] = useState(false);
    const [selectedLectures, setSelectedLecture] = useState({})
    const CallEveryTime = () => {
        //getLectures()
    }
    const { VieoID,videoType } = navigation.state.params;
    debugger
    useEffect(() => {
        setCheckScreen(false)
        Orientation.lockToPortrait();
        componentRendered(videoType,VieoID);

    }, [])






    


    //************************* Get all Comments start ******************** */
    const GetVideoID = async (id) => {
        // setLoader(true);
        let data = {}
        Api.postApiDirectURL(data, id + '/otp')
            .then(response => {
                debugger
                if (response && response.data && response.data.otp) {
                    embedInfo = response.data;
                    setVideoDataURL(id)
                } else {
                    ToastComponent.ErrorToaster('Data not Found');
                }
                // setLoader(false);
            })
            .catch(error => {
                console.log(error, 'svjsdbhvhsdblvblsdbvhl');
                // setLoader(false);
            })
    }




    const [videoDataURL, setVideoDataURL] = useState('');
    // Video url Form Vimeo
    const componentRendered = (type, id) => {
        debugger
        if (type === 0 || type === '0') {
            // ToastComponent.ErrorToaster('Vimeo')
            // setVideoDataURL("https://148vod-adaptive.akamaized.net/exp=1604304875~acl=%2F7f4b0217-2ea6-469d-a8bc-e70dce6d2c93%2F%2A~hmac=ba63c10138171fd9d3bef65ee36a2f2ddd3ac607c3dbef7056223e7714b2b9a0/7f4b0217-2ea6-469d-a8bc-e70dce6d2c93/sep/video/3590b8c7,8f29dd10,a92c6807,e6953904/master.m3u8")

            fetch(`https://player.vimeo.com/video/${id}/config`)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    debugger
                    if (res.title === "Sorry") {
                        res.message ? ToastComponent.ErrorToaster(res.message) :
                            ToastComponent.ErrorToaster("Vimeo Error")
                    } else {
                        setVideoDataURL(res.request.files.hls.cdns[res.request.files.hls.default_cdn].url)
                    }
                    // setVideoDataURL(res.request.files.hls.cdns[res.request.files.hls.default_cdn].url)
                });
        } else if (type === "2") {
            setVideoDataURL(id)
        } else {

            GetVideoID(id)
            // setVideoDataURL("https://www.youtube.com/zftOSYMkT6A")
            // ToastComponent.ErrorToaster('Player under construction')
        }
    }

    const MediaPlayer = () => {
        if (!videoDataURL) {
            return false
        }
        return (

            <View style={{ flex: 1, backgroundColor: 'black' }}>
               
                {videoType === '1' || videoType === '0' ?
                    (videoType === '0' ? <CustomVideoPlayer source={videoDataURL} navigator={navigation} values={values}
                        setCheckScreen={setCheckScreen}
                    /> :
                        <>
                            <RenderVideoCipher
                                style={{ height: 240, width: '100%' }}
                                embedInfo={embedInfo}
                                setCheckScreen={setCheckScreen}
                                checkScreen={checkScreen}
                            />
                        </>
                    )
                    :
                    <YoutubePlayerView navigation={navigation} youtubeVideoID={videoDataURL} />
                }
            </View>

        )
    }
    const [checkScreen, setCheckScreen] = useState(false);

   
    

   

    return (
        <>

            {showLoader ? <Loader /> :
                <>
                    <NavigationEvents
                        onWillFocus={() => {
                            CallEveryTime()
                        }}
                        onDidBlur={() => {
                            CallEveryTime()
                        }
                        } />
                 
                    <View style={styles.safearea}>
                        <View style={checkScreen ? { height: ScreenHeight, } : styles.container_video}>
                            {MediaPlayer()}
                        </View>
                    </View>
                </>
            }

        </>

    )
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1
    },
    container: {
        justifyContent: 'center',
        backgroundColor: "#eeeeee",
    },
    container_video: {
        flex: 0.6,
        width: '100%'
    },
    infoContainer: {
        flex: 1,
        width: '100%'
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    texttitle: {
        color: "#000",
        fontSize: 18,

        fontWeight: 'bold'
    },
    play_icon: {
        color: "#000",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: 20
    },
    container_details: {
        marginTop: 4,
        padding: 10
    },
    highlight: {
        backgroundColor: "#ffe698",
        width: 80,
        padding: 2,
        borderRadius: 4,
        textAlign: "center",
        fontSize: 14
    },
    CourseCOde: {

        padding: 2,
        textAlign: "left",
        fontSize: 13
    },
    container_lectures: {
        marginTop: 4,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius: 6
    },

    list: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 8,
        borderBottomColor: "#eeeeee",
        borderBottomWidth: 3,
        backgroundColor: "#fff",
    },
    listnoborder: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 8,
        backgroundColor: "#fff"
    },
    lectureWord: {
        fontSize: 18
    },
    loadMoreBtn: {
        justifyContent: 'center',
        backgroundColor: colors.primeryBtnColor,

        alignItems: 'center'
    },
    loadMoreText: {
        color: colors.primeryBtnColor,
        padding: 5,
        fontSize: 14
    },
    dayWiseText: {
        fontWeight: 'bold'
    },
    lectureCount: {
        fontSize: 12
    },
    lectureTitle: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 14
    },
    listSingleView: {
        flex: 0.9,
        marginLeft: 20
    },
    listSingleIcon: {
        flex: 0.1,
        marginRight: 15
    },
    resourseView: {
        flexDirection: 'row',

        margin: 5
    },
    resourceBtn: {
        flex: 2,
        height: 75,
        marginHorizontal: 5,
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderRadius: 5,
        // borderBottomColor: 'red',
        borderBottomWidth: 4

    },
    resourseText: {
        padding: 5,
        textAlign: 'center',
        margin: 10,
        fontSize: 13
    },
    resoursesName: {
        marginLeft: 20,
        fontWeight: 'bold',

    },
    resourseDetailsView: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        marginVertical: 5,
    },
    resourseListText: {
        fontSize: 14,
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        margin: 5
    },
    resourseListTextContant: {
        fontSize: 14,
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center',
        padding: 5,
        margin: 5
    },
    commentView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 5
    },
    commentUserView: {
        alignItems: 'center',
    },
    commentColumView: {
        flex: 8,
        backgroundColor: 'white',
        borderRadius: 15,
        borderTopLeftRadius: 0,
        padding: 10
    },
    commentColumViewReply: {
        backgroundColor: 'white',
        borderRadius: 15,
        borderTopLeftRadius: 0,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
    },
    commentuserName: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userNameText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    userNameReplyText: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    postOn: {
        fontSize: 10
    },
    loadMoreBtn: {
        justifyContent: 'center',
        backgroundColor: colors.primeryBtnColor,
        marginHorizontal: "30%",
        marginTop: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10
    },
    loadMoreText: {
        color: colors.white,
        padding: 5,
        fontSize: 14
    },
});

function mapStateToProps(state) {
    debugger
    return {
        userInfo: state.userData,
        selectedCourseRedux: state.selectedCourse,
        Leture: state.Lecture
    }
}
export default connect(mapStateToProps)(CommonVideos);