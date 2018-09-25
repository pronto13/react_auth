import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBc-qJNEXxzlr_MhMlQDMBjQBitLdb-hEo',
      authDomain: 'react-auth-680ae.firebaseapp.com',
      databaseURL: 'https://react-auth-680ae.firebaseio.com',
      projectId: 'react-auth-680ae',
      storageBucket: 'react-auth-680ae.appspot.com',
      messagingSenderId: '30767527200'
    });

    firebase.auth().onAuthStateChanged((user) => {
     if (user) {
       this.setState({ loggedIn: true });
     } else {
       this.setState({ loggedIn: false });
     }
   });
 }

 renderContent() {
   switch (this.state.loggedIn) {
     case true:
       return (
          <Button
          onPress={() => firebase.auth().signOut()}
            style={{
            alignSelf: 'stretch',
            backgroundColor: '#fff',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff',
            marginLeft: 5,
            marginRight: 5
          }}
          >
            Log Out
          </Button>
       );
     case false:
       return <LoginForm />;
     default:
       return <Spinner size="large" />;
   }
 }

 render() {
   return (
     <View>
       <Header headerText="Authentication" />
       {this.renderContent()}
     </View>
   );
 }
}

export default App;
