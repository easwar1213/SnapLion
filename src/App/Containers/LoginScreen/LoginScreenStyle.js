import {StyleSheet} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default StyleSheet.create({
    container:{
        flex:1
    },
    logoContainer:{
        flex:1.5,
        alignItems:'center',
        justifyContent:'center'
    },
    appIcon:{
        width:wp('40%'),
        height:hp('10%'),
        resizeMode:'contain'
    },
    welcomeTextView:{
        flexDirection:'row',
        paddingTop:15
    },
    welcomeText:{
        fontWeight:'bold',
        fontSize:25
    },
    appNameText:{
        fontSize:20,
        paddingTop:4
    },
    phoneNumLoginView:{
        flex:1.25,
        margin:15
    },   
    countryPickerView:{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start'
    },
    textInputMaskView:{
        width:'77%',
        marginLeft: 30
    },
    socialLoginView:{
        flex:3.25,
        alignItems:'center'
    },
    socialIcon:{
        width:wp('11%'),
        height:wp('11%'),
        resizeMode:'contain',
        margin:7
    },
    socialIconView:{ 
        flexDirection: 'row', 
        alignItems: 'center' 
    }    
})