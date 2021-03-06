import React from 'react'
import { Text, View, ImageBackground, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './SplashScreenStyle'
import { Images } from "App/Theme"

const SplashScreenData={
  "appName":"CafeEasy",
  "appSplashLogo":Images.appSplashLogo
}

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={SplashScreenData.appSplashLogo} style={styles.logoSnapLion}>
          <Image source={Images.loader}></Image>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('LoginScreen')}}>
            <ActivityIndicator size="large" color="#736F6E" />
            <Text>Login</Text>
          </TouchableOpacity>          
        </ImageBackground>       
      </View>
    )
  }
}
