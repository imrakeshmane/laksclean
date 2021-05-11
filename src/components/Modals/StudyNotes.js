import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, SafeAreaView, Button, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { WebView } from 'react-native-webview';
import colors from '../../utils/colors';
import RenderHTML from '../RenderHTML/viewHTML';
import ToastComponent from '../ToastComponent/Toaster'


const StudeyNotesModal = (props) => {
  const { showstudyNotesModal, closeStudyNotesModal, content } = props

  return (

    <Modal isVisible={showstudyNotesModal} style={{ backgroundColor: 'white' }}>
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: colors.black, margin: 10, fontSize: 16, fontWeight: 'bold' }}>{content.title}</Text>
        <RenderHTML content={content.matter} />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.urlBtn} onPress={() => {

            if (content.link) {
              ToastComponent.SuccessToaster('Welcome to AbhiPedia...');
              Linking.openURL(content.link).catch(err => console.error('An error occurred', err));

            } else {
              alert('ok')
            }

            //  Linking.openURL('https://focohub.in/add_payment.html');
          }}>
            <Text style={{ color: colors.primeryBtnColor, margin: 10 }}>{content.link && "URL Link"}</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.social_icn} onPress={() => {
            closeStudyNotesModal();
            //  Linking.openURL('https://focohub.in/add_payment.html');
          }}>
            <Text style={{ color: colors.black, margin: 10 }}>{'Close'}</Text>
          </TouchableOpacity> */}

          <TouchableOpacity style={[styles.months, { margin: 5 }]}
            onPress={() => {
              closeStudyNotesModal();
              // SelectedCourseAction.setSelectedCourse(data.item)

            }}
          >
            <Text style={styles.monthText}>
              Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
};


const styles = StyleSheet.create({

  social_icn: {
    borderWidth: 1,

    textAlign: 'center',
    justifyContent: 'flex-end',
    borderColor: 'lightgray',
    width: 150,
    alignItems: "center",
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 10
  },
  urlBtn: {


    textAlign: 'center',
    justifyContent: 'flex-end',

    width: 150,
    alignItems: "center",
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 5
  },
  months: {
    width: '30%',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
    borderRadius: 29,
    marginVertical: 5,
    alignSelf: 'flex-end',
    marginRight: 10
},
monthText: {
  color: colors.white,
  fontSize: 12,
  fontWeight: 'bold',
  padding: 5
},

});

export default StudeyNotesModal;

