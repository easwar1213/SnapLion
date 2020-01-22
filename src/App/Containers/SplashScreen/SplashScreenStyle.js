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
  logoContainer:{
    flex:2,
    alignItems:'center',
    justifyContent:'center'
  },
  logoSnapLion:{
    width:wp('50%'),
    height:hp('20%'),
    resizeMode:'contain'
  }
})
