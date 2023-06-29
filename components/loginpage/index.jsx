import React from 'react'
import { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Accordion from '../accordion';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { generateRandomAsync } from 'expo-random';
import { encode } from 'base-64';


const clientId = '44802';
const clientSecret = 'bSTi7dZilNZwXKjseH0hFaU3Sd1ftci4YB5X9xj3X04';
const apiKey = 'c6de8c91c7f140c0a0488f29fff42ce5';

const Loginpage = () => {
  const [loginToken, setLoginToken] = useState('');
  const onLogin = async () => {
    const oauthUrl = 'https://www.bungie.net/en/OAuth/Authorize';
    try {
      // Open the browser and navigate to the OAuth URL
      const result = await WebBrowser.openAuthSessionAsync(oauthUrl);
  
      if (result.type === 'success' && result.url) {
        // Extract the necessary information from the callback URL
        const { queryParams } = Linking.parse(result.url);
        console.log(queryParams)
  
        // Extract the login token or other required parameters
        const loginToken = queryParams['login_token'];
  
        // Pass the login token or other data back to your app
        // You can store it in your app's state or trigger further actions
        // depending on your app's requirements
        setLoginToken(token);
        console.log('Login Token:', loginToken);
      } else {
        // Handle unsuccessful authentication
        console.log('Authentication failed');
      }
    } catch (error) {
      console.error(error);
    }
  };
  // const [loginToken, setLoginToken] = useState(null);

  // useEffect(() => {
  //   handleRedirect();
  // }, []);

  // const handleRedirect = async () => {
  //   console.log('Handling redirect...');
  //   // const redirectUrl = AuthSession.getRedirectUrl();
  //   const redirectUrl = 'd2raidtool://redirect';
  //   const authUrl = `https://www.bungie.net/en/OAuth/Authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}`;

  //   const result = await AuthSession.startAsync({
  //     authUrl: authUrl,
  //   });

  //   if (result.type === 'success' && result.params && result.params.code) {
  //     const authCode = result.params.code;
  //     const tokenUrl = 'https://www.bungie.net/Platform/App/OAuth/Token/';

  //     const response = await fetch(tokenUrl, {
  //       method: 'POST',
  //       headers: {
  //         'X-API-Key': apiKey,
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         'Authorization': `Basic ${encode(`${clientId}:${clientSecret}`)}`
  //       },
  //       body: new URLSearchParams({
  //         'client_id': clientId,
  //         'grant_type': "authorization_code",
  //         'code': authCode
  //       }).toString()
  //     });

  //     const data = await response.json();

  //     setLoginToken(data);
  //     console.log(data);
  //     console.log("test")
  //   }
  // };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/d2shield.png')}
      />
      <Text style={styles.textPrimary}>Permission Required!</Text>
      <Text style={styles.textSecondary}>
        Allow D2 Raid Tool to view your Destiny inventory and vault
      </Text>
      <Entypo.Button
        style={styles.button}
        name="shield"
        size={40}
        color="white"
        onPress={onLogin}
      >
        Authorize with BUNGIE.NET
      </Entypo.Button>
      {loginToken && (<Text style={styles.text}>Login Token: {loginToken.access_token}</Text>)}
      <Text style={styles.text}>Why do we need this?</Text>
      <Accordion
        title="Learn more  "
        content="Bungie requires third-party applications (like this one) to ask you for permission to view items in your Destiny inventory and vault. With your consent, Bungie will give this application read-only access to your items. Bungie does not share any of your personal information or account credentials with this application. Nor does any third-party service like XBox, Playstation, or Steam."
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(19,22,27)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },
  textPrimary: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textSecondary: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    // backgroundColor: 'rgb(31,34,39)', 
  },
  tinyLogo: {
    height: 150,
    width: 150,
  },
});

export default Loginpage



      {/* <AntIcon
        size={40}
        name="swap"
        color="white"
        onPress={this.loginWithFacebook}
      />
      <Icon name="people" size={40} color="white" /> */}