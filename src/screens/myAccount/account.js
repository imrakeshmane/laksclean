import React, { useContext, useEffect, useState, useRef } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    StatusBar,
    FlatList,
    SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';

// import { CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import IconNew from 'react-native-vector-icons/MaterialCommunityIcons';
import IconNew2 from 'react-native-vector-icons/MaterialIcons';
import colors from '../../utils/colors';
import { UserAction } from '../../reduxManager';
import Api from '../../utils/Api';

import IonicIcons from 'react-native-vector-icons/Ionicons';

const DrawerScreen = (props) => {
    console.log(props.userInfo)
    const [showLoader, setLoader] = useState(false);

    useEffect(() => {
        getUserDetails()
    }, [])
    const getUserDetails = () => {
        debugger
        const formData = new FormData();
        formData.append('user_id', props.userInfo.id);
        formData.append('type', 'USER');

        setLoader(true);
        Api.postApi(formData, 'Userapi/UserProfile')
            .then(response => {
                console.log("UserProfile", response)
                setLoader(false);
            })
            .catch(error => {
                setLoader(false);
                console.log(error)
            })
    }


    console.log("userinfo", props.userInfo)
    const { navigation } = props;
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

            <TouchableOpacity onPress={() => {
                debugger
                console.log('https://laksclean.com/Dev-Laksclean/Main_work/update_profile/?id=' + props.userInfo.id, 'user')

                navigation.navigate("updateProfile", { mainURL: 'https://laksclean.com/Dev-Laksclean/Main_work/update_profile/?id=' + props.userInfo.id })
            }}
                style={{
                    marginTop: 20,
                    flex: 1,
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 5,
                }}>
                <Image source={require('../../assets/avatar6.png')} style={{ width: 80, height: 80, resizeMode: 'center', borderRadius: 100 / 2, margin: 5 }} />
                <View>
                    <Text
                        style={{
                            marginTop: 20,
                            fontSize: 14, fontWeight: 'bold',
                            marginLeft: 5,
                        }}>
                        {props.userInfo && props.userInfo.first_name}{"  "}
                        {props.userInfo && props.userInfo.last_name}
                    </Text>
                    <Text>{props.userInfo && props.userInfo.mobile_no}</Text>

                </View>
                <Icon
                    style={{
                        padding: 10,
                        color: '#42a5f5',

                        alignSelf: 'flex-end',
                        flex: 2,
                    }}
                    name="edit"
                    size={25}
                    color="#000"
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{}}
                onPress={() => {
                    navigation.navigate('AcceptBooking');
                }}>

                <View
                    style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                        borderBottomWidth: 1,
                        borderBottomColor: colors.primeryBtnColor,
                        flexDirection: 'row',
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 5,
                        marginBottom: 5,
                    }}>
                    <IconNew2
                        style={{
                            padding: 10,
                            color: '#42a5f5',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            flex: 2,
                        }}
                        name="home"
                        size={25}
                        color="#000"
                    />
                    <Text
                        style={{
                            justifyContent: 'center',
                            alignSelf: 'center',
                            fontSize: 14, fontWeight: 'bold',
                            marginLeft: 5,
                            flex: 8,
                        }}>
                        Home
          </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("updateProfile", { mainURL: 'https://laksclean.com/Dev-Laksclean/Main_work/update_profile/?id=' + props.userInfo.id })
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                <Icon
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="user"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',
                        marginLeft: 5,
                        flex: 8,
                    }}>
                    Edit Profile
        </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate("updateProfile", { mainURL: 'https://laksclean.com/Dev-Laksclean/user-booking-subscription?user_id=' + props.userInfo.id })
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                <IonicIcons
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="ios-pricetag"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',
                        marginLeft: 5,
                        flex: 8,
                    }}>
                    Subscription Plan
        </Text>
            </TouchableOpacity>





            <TouchableOpacity onPress={() => {
                navigation.navigate("updateProfile", { mainURL: 'https://laksclean.com/Dev-Laksclean/User/user_payment_history?user_id=' + props.userInfo.id })
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start', borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                <IonicIcons
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="ios-card"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',
                        marginLeft: 5,
                        flex: 8,
                    }}>
                    Payment History
        </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate("updateProfile", { mainURL: 'https://laksclean.com/Dev-Laksclean/product-order?user_id=' + props.userInfo.id })
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start', borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                <IonicIcons
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="ios-cart"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',

                        marginLeft: 5,
                        flex: 8,
                    }}>
                    Product Order
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate("updateProfile", { mainURL: 'https://laksclean.com/Dev-Laksclean/reviews?user_id=' + props.userInfo.id })
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start', borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>


                <IonicIcons
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="ios-eye"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',
                        marginLeft: 5,
                        flex: 8,
                    }}>
                    Review
                </Text>
            </TouchableOpacity>



            <TouchableOpacity onPress={() => {
                UserAction.resetUserDetails({});
                navigation.navigate("SplashScreen")
            }}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start', borderBottomWidth: 1,
                    borderBottomColor: colors.primeryBtnColor,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                <Icon
                    style={{
                        padding: 10,
                        color: '#42a5f5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flex: 2,
                    }}
                    name="sign-out"
                    size={25}
                    color="#000"
                />
                <Text
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontSize: 14, fontWeight: 'bold',
                        marginLeft: 5,
                        flex: 8,
                    }}>
                    Logout
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderColor: 'gray',
    },
    searchIcon: {
        padding: 10,
        color: 'gray',
    },
    input: {
        flex: 1,
        margin: 20,
        color: 'white',

        padding: 10,
        borderRadius: 10,
    },
});


function mapStateToProps(state) {
    return {
        userInfo: state.userData,
        selectedCourseRedux: state.selectedCourse
    }
}
export default connect(mapStateToProps)(DrawerScreen);