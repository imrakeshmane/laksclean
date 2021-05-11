// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView
    ,
    ScrollView,
    Image,
    StatusBar,
    FlatList,
} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const SelectCleaner = ({ navigation }) => {
    let SubjectList =
        [
            {
                cleanerName: 'Griks Penthon',
                cleanerWorkType: 'Car Wash',
                jobsCount: '45',
                Rates: '$12/h',
                Ratings: '* 4.5',
                path: require('../../../assets/carwash.jpg')

            },

            {
                cleanerName: 'Kesan Forxin',
                cleanerWorkType: 'Car Wash',
                jobsCount: '45',
                Rates: '$12/h',
                Ratings: '* 2.5',
                path: require('../../../assets/carwash1.jpg')

            },

            {
                cleanerName: 'Bali Tomria',
                cleanerWorkType: 'Car Wash',
                jobsCount: '45',
                Rates: '$12/h',
                Ratings: '* 1.5',
                path: require('../../../assets/carwash2.jpg')


            },
            {
                cleanerName: 'Median Lambeord',
                cleanerWorkType: 'Car Wash',
                jobsCount: '45',
                Rates: '$12/h',
                Ratings: '* 4.5',
                path: require('../../../assets/carwash.jpg')


            },
            {
                cleanerName: 'Griks Penthon',
                cleanerWorkType: 'Car Wash',
                jobsCount: '45',
                Rates: '$12/h',
                Ratings: '* 4.5',
                path: require('../../../assets/carwash1.jpg')


            },
            {
                cleanerName: 'Griks Penthon',
                cleanerWorkType: 'Car Wash',
                jobsCount: '45',
                Rates: '$12/h',
                Ratings: '* 4.5',
                path: require('../../../assets/carwash2.jpg')

            },

            {
                cleanerName: 'Kesan Forxin',
                cleanerWorkType: 'Car Wash',
                jobsCount: '45',
                Rates: '$12/h',
                Ratings: '* 2.5',
                path: require('../../../assets/carwash.jpg')

            },

            {
                cleanerName: 'Bali Tomria',
                cleanerWorkType: 'Car Wash',
                jobsCount: '45',
                Rates: '$12/h',
                Ratings: '* 1.5',
                path: require('../../../assets/carwash1.jpg')


            },
            {
                cleanerName: 'Median Lambeord',
                cleanerWorkType: 'Car Wash',
                jobsCount: '45',
                Rates: '$12/h',
                Ratings: '* 4.5',
                path: require('../../../assets/carwash2.jpg')


            },
            {
                cleanerName: 'Griks Penthon',
                cleanerWorkType: 'Car Wash',
                jobsCount: '45',
                Rates: '$12/h',
                Ratings: '* 4.5',
                path: require('../../../assets/carwash.jpg')


            },


        ];
    const purchaseCard = ({ item, index }) => {
        return (

            <View style={{ flex: 1, backgroundColor: '#fff', margin: 5, borderRadius: 10 }}>

                <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }}>
                    <Image source={item.path} style={{ width: 100, height: 100, borderRadius: 150 / 2, margin: 5 }} />
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{ flex: 5, flexDirection: 'column',justifyContent:'center',marginLeft:20 }}>
                                <Text style={{ color: '#4C9BE9', fontSize: 14, fontWeight: 'bold', }}>{item.cleanerName}</Text>

                                <Text style={{ color: '#676A6C',fontSize:12 }}>{item.cleanerWorkType}</Text>
                            </View>
                            {/* <View style={{ flex: 2, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 12,marginRight:10, justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'flex-end', color: '#4C9BE9'}}>View</Text>
                            </View> */}
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#676A6C' ,fontWeight: 'bold',}}>{item.jobsCount}</Text>
                                <Text style={{ color: '#4C9BE9', fontSize: 12, fontWeight: 'bold', }}>Jobs</Text>

                            </View>
                            <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#676A6C' ,fontWeight: 'bold',}}>{item.Rates}</Text>
                                <Text style={{ color: '#4C9BE9', fontSize: 12,  }}>Rates</Text>

                            </View>
                            <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                               
                                <Text style={{ color: '#676A6C',fontWeight: 'bold', }}>{item.Ratings}</Text>
                                <Text style={{ color: '#4C9BE9', fontSize: 12,  }}>Rating</Text>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }
    return (

        <SafeAreaView style={{ backgroundColor: '#676A6C' }}>


            <FlatList
                data={SubjectList}
                renderItem={purchaseCard}
                key={(SubjectList)}
                keyExtractor={(item, index) => index}
            // style={{ marginTop: 20 }}
            />

        </SafeAreaView>

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
export default SelectCleaner;