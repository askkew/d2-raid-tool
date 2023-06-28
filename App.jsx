import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { backgroundColor } from './components/constants';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import Loginpage from './components/loginpage';
import Inventorypage from './components/inventorypage';

export default function App() {
  const [mainLoading, setMainLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMainLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {mainLoading ? (
        <View style={styles.container}>
          <Text style={styles.text}>Welcome to D2 Raid Tool!</Text>
          <Image
            style={styles.tinyLogo}
            source={require('./assets/d2raidtooliconprimarywhite.png')}
          />
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        loggedIn ? <Inventorypage /> : <Loginpage />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(19,22,27)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 25,
  },
  tinyLogo: {
    height: 250,
    width: 250,
  },
});


{/* <AntIcon
        size={40}
        name="swap"
        color="white"
        onPress={this.loginWithFacebook}
      />
      <Icon name="people" size={40} color="white" /> */}