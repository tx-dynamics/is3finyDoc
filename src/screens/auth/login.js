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
            <Header backgroundColor='transparent' leftnavigation = {()=>props.navigation.navigate('Contact')} rightnavigation = {()=>alert('coming soon')} center = {logo} right={lang} left={call}  />
            <View style={styles.container} >
                
                <View style={styles.inputConatiner} >
                    <TextInput
                        value={email}
                        placeholderTextColor={'white'}
                        placeholder={"Email"}
                        onChangeText={value => setemail(value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputConatiner} >
                    <TextInput
                        value={password}
                        secureTextEntry={true}
                        placeholderTextColor={'white'}
                        placeholder={"Password"}
                        onChangeText={value => setpassword(value)}
                        style={styles.input}
                    />
                </View>
               
            </View>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Forgot')} style={styles.forgot} >
                <Text style={[styles.input,{fontSize:10,color:'white'}]} >Forgot Password?</Text>
            </TouchableOpacity>
            <View style={{marginTop:responsiveHeight(7)}} >
                <GradButton style={styles.signup}  navigation={()=>props.navigation.replace('Main')} txt = {'LOGIN'}/>
            </View>
            <View style={styles.orCont} >
                <View style={styles.divider} ></View>
                <Text style={[styles.input,{fontSize:12,fontWeight:'700',color:'white'}]} >or</Text>
                <View style={[styles.divider,{marginLeft:responsiveWidth(4)}]}  ></View>
            </View>
            <View style={styles.orCont} >
            <Text style={[styles.input,{fontSize:12,color:'white'}]} >Don't have an account?</Text>
            <TouchableOpacity onPress={()=>props.navigation.replace('Signup')} style={styles.opac} >
                <Text style={[styles.input,{fontSize:12,color:'rgba(108, 226, 0, 1)',marginLeft:0}]} >  Sign up</Text>
            </TouchableOpacity>
            </View>
            <View style={{height:responsiveScreenHeight(28)}}  />
     </ImageBackground>   
     </KeyboardAwareScrollView>
     
    )
}
export default signup; 