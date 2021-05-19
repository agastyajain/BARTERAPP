import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class RequestScreen extends Component {
  constructor() {
    super();
    this.state = {
      bookName: '',
      requestReason: '',
      userId:firebase.auth().currentUser.email,
    };
  }

  addRequest=(bookName,requestReason,userId)=>{
    var requestID=Math.random().toString(36);
    db.collection('requested_books').add({
      'bookName': bookName,
      'request' : requestReason,
      'requestId' : requestID,
      'userId': userId
    });
    this.setState({
      bookName:'',
      requestReason:'',
    });
    return Alert.alert("Book requested successfully");
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          placeholder="Enter Book Name"
          value={this.state.bookName}
          onChangeText={(text) => {
            this.setState({ bookName: text });
          }}
          style={styles.formTextInput}
        />
        <TextInput
          placeholder="Enter the request reason"
          value={this.state.requestReason}
          onChangeText={(text) => {
            this.setState({ requestReason: text });
          }}
          style={[styles.formTextInput, { height: 150 }]}
          numberOfLines={8}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.addRequest(this.state.bookName, this.state.requestReason,this.state.userId);
          }}>
          <Text style={styles.buttonText}>Request Book</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: '#ffab91',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#ff9800',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10,
  },
  buttonText: {
    color: '#ffff',
    fontWeight: '200',
    fontSize: 20,
  },
});
