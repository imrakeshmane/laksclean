import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Linking, SafeAreaView, Button, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { WebView } from 'react-native-webview';

import { InterstitialAd, RewardedAd, BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';


// const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

// const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing'],
// });
// // # Rewarded
// RewardedAd.createForAdRequest(TestIds.REWARDED);

// # Banners


// const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing'],
// });

const AddmobModal = (props) => {
  const { modalAddmob, closeAdmobMdal, approveUrl } = props

  return (

    <Modal isVisible={modalAddmob} style={{ backgroundColor: 'white' }}>
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          alignSelf:'center',
          alignItems:'center'
        }}
      >
        <BannerAd
          size={BannerAdSize.WIDE_SKYSCRAPER}

          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          unitId={'ca-app-pub-4015398899801254/5432135980'} />
      </View>
      <Button title="Ok" onPress={() => {
        closeAdmobMdal();
        //  Linking.openURL('https://focohub.in/add_payment.html');
      }} style={{ backgroundColor: '#ee8609' }} />
    </Modal>
  )
};


const styles = StyleSheet.create({

});

export default AddmobModal;

