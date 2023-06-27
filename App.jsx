import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { backgroundColor } from './components/constants';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Loginpage from './components/loginpage';
import Inventorypage from './components/inventorypage';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <View style={styles.container}>
      {loggedIn ? <Inventorypage /> : <Loginpage />}
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
    color: '#fff'
  },
});


{/* <AntIcon
        size={40}
        name="swap"
        color="white"
        onPress={this.loginWithFacebook}
      />
      <Icon name="people" size={40} color="white" /> */}