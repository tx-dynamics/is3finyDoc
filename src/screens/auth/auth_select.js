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
import {logo,lang,support,call,text,
    pic,
    patient,
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
            <Header backgroundColor='transparent' leftnavigation = {()=>props.navigation.navigate('Contact')} rightnavigation = {()=>alert('coming soon')} center = {logo} right={lang} left={support}  />
            
            <View style={{marginTop:responsiveHeight(30)}} >
                <GradButton style={styles.signup}  navigation={()=>props.navigation.navigate('Login')} txt = {'Log In'}/>
            </View>
            <View style={{marginTop:responsiveHeight(5)}} >
                <GradButton style={styles.signup}  navigation={()=>props.navigation.navigate('Signup')} txt = {'Sign Up'}/>
            </View>
            <View style={{marginTop:responsiveHeight(5)}} >
                <TouchableOpacity onPress={()=>props.navigation.navigate('Forgot')} style={[styles.signup,{backgroundColor:'rgba(108, 226, 0, 0.1)',borderRadius:4,borderWidth:1,borderColor:'rgba(108, 226, 0, 1)'}]} >
                    <Text style={[styles.input,{color:'rgba(108, 226, 0, 1)'}]}  >Forget Your Login Info</Text>
                </TouchableOpacity>
            </View>
            <View style={{height:responsiveScreenHeight(30)}}  />
     </ImageBackground>   
     </KeyboardAwareScrollView>
     
    )
}
export default signup; 