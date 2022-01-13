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
    back,
    add} from '../../assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

function signup (props){
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [conpass, setconpass] = useState('')


    return(
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer} >
     <ImageBackground source={patient} style={styles.bg} >
            <Header leftstyle={{width:16,height:14,marginleft:8}} backgroundColor='transparent' leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {()=>alert('coming soon')} center = {logo} right={lang} left={back}  />
            <View style={[styles.container,{marginTop:responsiveHeight(20)}]} >
                <View style={{width:335,alignSelf:'center',alignItems:'flex-start'}} >
                    <Text style={[styles.input,{textAlign:'left',fontWeight:'600',fontSize:24,marginLeft:0}]} >Reset Password</Text>
                <View style={styles.inputConatiner} >
                    <TextInput
                        value={password}
                        secureTextEntry={true}
                        placeholderTextColor={'white'}
                        placeholder={"New Password"}
                        onChangeText={value => setpassword(value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputConatiner} >
                    <TextInput
                        secureTextEntry={true}
                        value={conpass}
                        placeholderTextColor={'white'}
                        placeholder={"Confirm new password"}
                        onChangeText={value => setconpass(value)}
                        style={styles.input}
                    />
                </View>
            </View>
                
               
            </View>
            
            <View style={{marginTop:responsiveHeight(7)}} >
                <GradButton style={styles.signup}  navigation={()=>props.navigation.replace('Main')} txt = {'Reset'}/>
            </View>
           
            <View style={{height:responsiveScreenHeight(35)}}  />
     </ImageBackground>   
     </KeyboardAwareScrollView>
     
    )
}
export default signup; 