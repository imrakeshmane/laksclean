// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  
} from 'react-native';
import { connect } from 'react-redux';


const UpdateProfile = (props) => {
  // const { navigation } = props;
  // const [showLoader, setLoader] = useState(false);
  // const [forumImage, setForumImage] = useState(false);
  // const [imagePath, setImagePath] = useState();
  // const [fullName, setFullName] = useState(props.userInfo.first_name);
  // const [lastname, setLastName] = useState(props.userInfo.last_name);
  // const [mobileNo, setMobileNo] = useState(props.userInfo.mobile_no);
  // const [emailId, setEmailId] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [dob, setDob] = useState('');
  // const [saveimagePath, setSaveimagePath] = useState('');
  // const [savedImage, setSavedImage] = useState(false);
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const [pickTime, setPickTime] = useState('');
  // const [isPick, setIsPick] = useState(false);
  // // useEffect(() => {
  // //   // PostProfile()
  // // }, []);
  // const requestCameraPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       {
  //         title: "Camera Permission",
  //         message:
  //           "Abhipedia needs access to your camera " +
  //           "so you can take awesome pictures.",
  //         buttonNeutral: "Ask Me Later",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "OK"
  //       }
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } catch (err) {
  //     return false;
  //     console.warn(err);
  //   }
  // };

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date) => {
  //   // console.warn("A date has been picked: ", date);

  //   var oldString = date.toString();
  //   // var mynewarray = oldString.split(' ');


  //   // console.log("My New Array Output is", mynewarray);


  //   // var i = oldString.indexOf(' ');
  //   // var partone = oldString.slice(0, i).trim();
  //   // var parttwo = oldString.slice(i + 13, oldString.length).trim();

  //   // var j = parttwo.indexOf(' ');
  //   // var actualTime = parttwo.slice(0, j).trim();

  //   // console.log("partone", partone);
  //   // console.log("parttwo", parttwo);
  //   // console.log("actualTime", actualTime);

  //   // // setPickTime(date.toString());
  //   // setPickTime(actualTime.toString());

  //   var updateDate = moment(oldString).format("DD-MM-YYYY");
  //   console.log("printoldStringdate", oldString);
  //   console.log("printupdateddate", updateDate);
  //   setPickTime(updateDate.toString());


  //   setIsPick(true);
  //   hideDatePicker();
  // };


  // const PostProfile = () => {


  //   var payload = {

  //   }
  //   Api.postApi(payload, 'user/prifile')
  //     .then(response => {

  //       console.log(response, 'verify')
  //       if (response && response.status === 200) {
  //         // let userData = response.data.data;
  //         // userData.token = response.data.token
  //         // UserAction.setUserDetails(userData)
  //         navigation.navigate('Drawer');

  //       } else {
  //         setErrorMsg(response.data.message);
  //         setLoader(false);
  //       }
  //       //  resolve(response)
  //     })
  //     .catch(error => {
  //       setLoader(false);
  //       console.log(error)
  //       setErrorMsg('Something goes wrong...');
  //       // reject(error)
  //     })


  // }
  // const setToster = (text, color) => {
  //   const toasterData = {
  //     text: text,
  //     position: 'top',
  //     duration: 2000,
  //     buttonText: 'X',
  //     style: {
  //       backgroundColor: color,
  //       marginTop: 0,
  //       marginHorizontal: 20,
  //       borderRadius: 5,
  //     },
  //   };
  //   color === 1
  //     ? ToastComponent.ErrorToaster(text)
  //     : ToastComponent.SuccessToaster(text);
  // };

  // const imageSelect = async () => {
  //   if(!requestCameraPermission){
  //     ToastComponent.ErrorToaster('Camera Permission not Granted')
  //     return 
  //   }
  //   ImagePicker.showImagePicker(options, image => {
  //     if (image.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (image.error) {
  //       setToster();
  //       console.log('ImagePicker Error: ', image.error);
  //       image.error && setToster(image.error, 1);
  //     } else if (image.customButton) {
  //       console.log('User tapped custom button: ', image.customButton);
  //     } else {
  //       if (image) {
  //         var getImageName = image.uri.split('/');
  //         Platform.OS === 'ios'
  //           ? (image.fileName = getImageName[getImageName.length - 1])
  //           : '';
  //         image.data = '';
  //         image.name = image.fileName;
  //         console.log(
  //           image,
  //           'imageimageimageimageimageimageimageimageimageimage',
  //         );

  //         console.log(image.path, ' image.pathimage.path');

  //         //   let payload = new FormData();
  //         //   payload.append('file', image);
  //         setForumImage(true);
  //         setImagePath(image);
  //         setSaveimagePath(image.uri);
  //         setSavedImage(true);
  //       }
  //     }
  //   });
  // };

  // const options = {
  //   title: 'Select Image from',
  //   quality: 1,
  //   //  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  //   storageOptions: {
  //     skipBackup: true,
  //     path: 'images',
  //   },
  //   maxWidth: 300,
  //   maxHeight: 400,
  //   allowsEditing: true,
  //   cropping: true,
  // };

  return (
    <>
    <Text>User Profile</Text>
    </>
  );
};

function mapStateToProps(state) {
  return {
    userInfo: state.userData,
    selectedCourseRedux: state.selectedCourse
  }
}
export default connect(mapStateToProps)(UpdateProfile);