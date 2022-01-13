import React,{useState,useEffect} from 'react'
import {View,Text,TouchableOpacity,ImageBackground,Modal,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import LinearGradient from 'react-native-linear-gradient';
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';

import GradButton from '../../components/gradient_button';
import {logo,lang,bullet,call,text,
    back,
    patient,
    pickercon,
    add} from '../../assets';
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input'
function signup (props){
    const [ismodal, setismodal] = useState(false)
    const [resend, setresend] = useState(false)


    return(
    <KeyboardAwareScrollView style={styles.mainContainer} >
     <ImageBackground source={patient} style={styles.bg} >
            <Header leftstyle={{width:16,height:14,marginleft:8}} backgroundColor='transparent' leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {()=>alert('coming soon')} center = {logo} right={lang} left={back}  />
            <View style={[styles.container,{marginTop:responsiveHeight(20)}]} >
                <View style={{alignSelf:'center',width:355}} >
                    <Text style={[styles.input,{textAlign:'left',fontWeight:'600',fontSize:24}]} >Enter OTP</Text>
                    <Text style={[styles.input,{textAlign:'left',fontSize:12,fontWeight:'400',marginTop:responsiveHeight(2)}]} >An 4 digit code has been sent to{'\n'}+91 903552626</Text>
                
                </View>
                    <OTPInputView
                        style={{width: '65%', height: 100,marginTop:responsiveHeight(2),alignSelf:'center'}}
                        pinCount={4}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        // autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled = {(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    />
                <View style={{marginTop:responsiveHeight(3)}} >
                    <GradButton style={styles.signup}  navigation={()=>props.navigation.navigate('NewPass')} txt = {'Submit'}/>
                </View>
                <View style={{height:responsiveScreenHeight(40)}}  />
            </View>
     </ImageBackground>   
     
     </KeyboardAwareScrollView>
     
    )
}
export default signup; 