import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './SplashScreenStyle'
import { Images } from "App/Theme"

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.appFlashLogo} style={styles.logoSnapLion}></Image>
      </View>
    )
  }
}
