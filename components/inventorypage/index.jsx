import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Accordion from '../accordion';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Vault from 'react-native-vector-icons/FontAwesome';
import Mail from 'react-native-vector-icons/MaterialCommunityIcons';

const Inventorypage = () => {

  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Vault.Button style={styles.button} name="bank" size={30} color="white" backgroundColor="rgb(31,34,39)">
          Vault
        </Vault.Button>
        <Mail.Button style={styles.button} name="post" size={30} color="white" backgroundColor="rgb(31,34,39)">
          Postmaster
        </Mail.Button>
      </View>
      <Text style={styles.text}>
        <AntIcon
          size={40}
          name="swap"
          color="white"
          onPress={this.loginWithFacebook}
        />
        <Icon name="people" size={40} color="white" />
      </Text>
      <View style={styles.navigator}>
        <Fontisto
          size={35}
          name="favorite"
          color="white"
          onPress={this.loginWithFacebook}
        />
        <Image
          style={styles.vaultIcon}
          source={require('../../assets/emblemtemp.jpg')}
        />
        <Image
          style={styles.vaultIcon}
          source={require('../../assets/emblemtemp.jpg')}
        />
        <Image
          style={styles.vaultIcon}
          source={require('../../assets/emblemtemp.jpg')}
        />
        <Image
          style={styles.vaultIcon}
          source={require('../../assets/vaulticon.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(19,22,27)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 15,
    marginTop: 10,
  },
  imagecontainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 65,
    gap: 15,
  },
  tinyLogo: {
    height: 100,
    width: 100,
  },
  button: {
    // width: '50%',
  },
  navigator: {
    width: '100%',
    height: '10%',
    backgroundColor: 'rgb(31,34,39)',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  vaultIcon: {
    height: 50,
    width: 50,
  }
});

export default Inventorypage