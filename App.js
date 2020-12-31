/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import Reducers from './src/reducer'

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import firebase from 'firebase';

import Banner from './src/components/Banner';
import LoginForm from './src/components/LoginForm';
import { Spinner, MyButton, Header } from './src/components/common'
import BooksList from './src/components/BooksList';

const firebaseConfig = {
  apiKey: "AIzaSyDJ3flstK1hFltrk1nZ5wFUPCnksyp1rY0",
  authDomain: "kitaplistesi-8daf8.firebaseapp.com",
  projectId: "kitaplistesi-8daf8",
  storageBucket: "kitaplistesi-8daf8.appspot.com",
  messagingSenderId: "154427379364",
  appId: "1:154427379364:web:efc7307cca742440c82031",
  measurementId: "G-9116KXC72E"
};

const App = () => {

  const [state, setState] = useState()

  React.useEffect(() => {
    console.log("firebase initializeApp", !firebase.apps.length)
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }

    firebase.auth().onAuthStateChanged((user) => {
      const loggedIn = user ? true : false;
      setState(loggedIn)
    })
  }, [])

  const renderContent = () => {

    switch (state) {
      case true:
        return (
          <>
            <ScrollView>
              <BooksList />
              <MyButton spinner={false}
                onPress={() => firebase.auth().signOut()}
                color='#E87B79'
                title='Logout' />
            </ScrollView>

          </>

        )
      case false:
        return (
          <>
            <Banner text="Authentication" />
            <LoginForm />
          </>
        )
      default:
        return (
          <Spinner />
        )
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={createStore(Reducers)}>
        <SafeAreaView style={{ backgroundColor: '#0200EB' }}>
          <Header headerText='Books List' />
        </SafeAreaView>
        {renderContent()}
      </Provider>

    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  }
});

export default App;