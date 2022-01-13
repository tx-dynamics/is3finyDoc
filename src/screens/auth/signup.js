import React,{useState,useEffect} from 'react'
import {View,Text,ImageBackground,TextInput,TouchableOpacity,Image,FlatList,Switch} from 'react-native'
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
    caAdd,uncheck,checked,
    patient,
    voice,
    add} from '../../assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

function signup (props){
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [number, setnumber] = useState('')
    const [check1, setcheck1] = useState(false)
    const [check2, setcheck2] = useState(false)


    return(
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}  style={styles.mainContainer} >
     <ImageBackground source={patient} style={styles.bg} >
            <Header backgroundColor='transparent' leftnavigation = {()=>props.navigation.navigate('Contact')} rightnavigation = {()=>alert('coming soon')} center = {logo} right={lang} left={call}  />
            <View style={[styles.container,{marginTop:responsiveHeight(6)}]} >
                <View style={styles.inputConatiner} >
                    <TextInput
                        value={name}
                        placeholderTextColor={'white'}
                        placeholder={"Name"}
                        onChangeText={value => setname(value)}
                        style={styles.input}
                    />
                </View>
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
                        value={number}
                        keyboardType='phone-pad'                        
                        placeholderTextColor={'white'}
                        placeholder={"Phone Number"}
                        onChangeText={value => setnumber(value)}
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
               
                <TouchableOpacity onPress={()=>props.navigation.navigate('SelecField')} style={[styles.inputConatiner,{flexDirection:'row',alignItems:'center',backgroundColor:'rgba(108, 226, 0, 0.5)'}]} >
                    <Text style={[styles.input,{width:'85%'}]} >Choose Your Speciality</Text>
                        <Image
                            source={caAdd}
                            style={{width:16,height:16}}
                        />
                </TouchableOpacity>
            </View>
            <View style={[styles.inputConatiner,{marginTop:responsiveHeight(2),flexDirection:'row',backgroundColor:'transparent',height:'auto'}]} >
            <TouchableOpacity style={{width:20,height:25,alignItems:'center'}} onPress={()=>setcheck1(!check1)} >
                {check1?
                    <Image
                        source={checked}
                        style={{width:14,height:14,marginTop:5}}
                    />
                :
                    <Image
                        source={uncheck}
                        style={{width:14,height:14,marginTop:5}}
                    />
                }
            
            </TouchableOpacity>
            <Text style={[styles.input,{width:'85%',fontSize:13,fontWeight:'400'}]} >I confirm that all the info provided or will be provided is correct.</Text>
            </View>
            <View style={[styles.inputConatiner,{marginTop:responsiveHeight(2.5),flexDirection:'row',backgroundColor:'transparent',height:'auto'}]} >
            <TouchableOpacity style={{width:20,height:25,alignItems:'center'}} onPress={()=>setcheck2(!check2)} >
                {check2?
                    <Image
                        source={checked}
                        style={{width:14,height:14,marginTop:2}}
                    />
                :
                    <Image
                        source={uncheck}
                        style={{width:14,height:14,marginTop:2}}
                    />
                }
            
            </TouchableOpacity>
            <Text style={[styles.input,{width:'85%',fontSize:13,fontWeight:'400'}]} >I confirm i have valid medical registration</Text>
            </View>
            <View style={{marginTop:responsiveHeight(1)}} >
                <GradButton style={styles.signup}  navigation={()=>props.navigation.replace('Main')} txt = {'Signup'}/>
            </View>
            <View style={[styles.orCont,{marginTop:responsiveHeight(4.5)}]} >
                <View style={styles.divider} ></View>
                <Text style={[styles.input,{fontSize:12,fontWeight:'700',color:'white'}]} >or</Text>
                <View style={[styles.divider,{marginLeft:responsiveWidth(4)}]}  ></View>
            </View>
            <View style={[styles.orCont,{marginTop:responsiveHeight(4)}]} >
            <Text style={[styles.input,{fontSize:12,color:'white'}]} >Already have an account?</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Login')} style={styles.opac} >
                <Text style={[styles.input,{fontSize:12,color:'rgba(108, 226, 0, 1)',marginLeft:0}]} >  Sign in</Text>
            </TouchableOpacity>
            </View>
            <View style={{height:responsiveScreenHeight(10)}}  />
     </ImageBackground>   
     </KeyboardAwareScrollView>
     
    )
}
export default signup; 