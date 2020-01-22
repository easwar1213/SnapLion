import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './SplashScreenStyle'
import { Images } from "App/Theme"

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>          
          <Image source={Images.logo} style={styles.logoSnapLion}></Image>
        </View>
      </View>
    )
  }
}
