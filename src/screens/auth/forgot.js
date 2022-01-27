import React,{useState,useEffect} from 'react'
import {View,Text,ImageBackground,TextInput,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import GradButton from '../../components/gradient_button';
import {logo,lang,bullet,call,text,
    pic,
    patient,back,
    voice,
    add} from '../../assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

function signup (props){
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [conpass, setconpass] = useState('')


    return(
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer} >
     <ImageBackground source={patient} style={styles.bg} >
            <Header leftstyle={{width:16,height:14,marginleft:8,alignSelf:'flex-start'}} backgroundColor='transparent' leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {()=>alert('coming soon')} center = {logo} right={lang} left={back}  />
            <View style={[styles.container,{marginTop:responsiveHeight(20)}]} >
                <View style={{width:335,alignSelf:'center',alignItems:'flex-start'}} >
                    <Text style={[styles.input,{textAlign:'left',fontWeight:'600',fontSize:24,marginLeft:0}]} >Forgot Password</Text>
                    <Text style={[styles.input,{textAlign:'left',fontSize:12,fontWeight:'400',marginLeft:0,marginTop:responsiveHeight(2)}]} >Don’t worry! It happens. Please enter the{'\n'}address associated with your account.</Text>
                    <View style={styles.inputConatiner} >
                        <TextInput
                            value={email}
                            placeholderTextColor={'white'}
                            placeholder={"Email"}
                            onChangeText={value => setemail(value)}
                            style={styles.input}
                        />
                    </View>
                </View>
            </View>
            
            <View style={{marginTop:responsiveHeight(7)}} >
                <GradButton style={styles.signup}  navigation={()=>props.navigation.navigate('Otp')} txt = {'Submit'}/>
            </View>
           
            <View style={{height:responsiveScreenHeight(35)}}  />
     </ImageBackground>   
     </KeyboardAwareScrollView>
     
    )
}
export default signup; 