import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Accordion from '../accordion';
// import { useBungieAuth } from './hooks/useBungieAuth';

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

const Loginpage = () => {
  // const { initiateAuth } = useBungieAuth(); // Custom hook for handling Bungie authentication

  // const handleAuthButtonClick = () => {
  //   initiateAuth(); // Call the function to initiate the OAuth process
  // };
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/d2shield.png')}
      />
      <Text style={styles.textPrimary}>Permission Required!</Text>
      <Text style={styles.textSecondary}>Allow D2 Raid Tool to view your Destiny inventory and vault</Text>
      <Entypo.Button
        style={styles.button}
        name="shield"
        size={40}
        color="white"
        // onPress={handleAuthButtonClick}
      >
        Authorize with BUNGIE.NET
      </Entypo.Button>
      <Text style={styles.text}>Why do we need this?</Text>
      <Accordion
        title="Learn more  "
        content="Bungie requires third party applications (like this one) to ask you for permission to view items in your Destiny inventory and vault. With your consent, Bungie will give this application read-only access to your items. Bungie does not share any of your personal information or account credentials with this application. Nor does any third party service like XBox, Playstation, or Steam."
      />
    </View>
  )
}


export default Loginpage



      {/* <AntIcon
        size={40}
        name="swap"
        color="white"
        onPress={this.loginWithFacebook}
      />
      <Icon name="people" size={40} color="white" /> */}