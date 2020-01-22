import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default StyleSheet.create({
  container:{
    flex:1
  },  
  logoSnapLion:{
    width:wp('100%'),
    height:hp('100%'),
    resizeMode:'stretch'
  }
})
