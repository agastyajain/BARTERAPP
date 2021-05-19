import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class DonateScreen extends Component {
  constructor() {
    super();
    this.state = {
      requestedBookList: [],
    };
  }

  getRequestedBooks = () => {
    db.collection('requested_books').onSnapShot((snapShot) => {
      var requestedBooks = snapShot.docs.map((doc) => {
        doc.data();
      });
      this.setState({ requestedBookList: requestedBooks });
    });
  };

  componentDidMount() {
    this.getRequestedBooks();
  }

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => {
            index.toString;
          }}
          data={this.state.requestedBookList}
          renderItem={({ item, index }) => {
            return (
              <ListItem
                title={item.bookName}
                subtitle={item.requestReason}
                key={index}
              />
            );
          }}
        />
      </View>
    );
  }
}
