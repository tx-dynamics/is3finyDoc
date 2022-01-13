import React,{useState,useEffect,useRef} from 'react'
import {View,Text,ImageBackground,Image,TextInput, TouchableOpacity,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Header, FAB} from 'react-native-elements';
import GradButton from '../../components/gradient_button';
import PRButton from '../../components/profile_btn';
import {dp,camra,
    edit,eback,
    paysetting,
    setting,
    logout} from '../../assets';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DocumentPicker from 'react-native-document-picker';
var RNFS = require('react-native-fs');

function profile (props){

    const [arr, setArr] = useState('')
    const [isselected, setisselected] = useState(false)
    const [image, setdp] = useState('')
    const [single, setsingle] = useState('')

    useEffect(() => {
        // console.log(listarr);

    }, [])
    
    async function onImages() {
        try {
        const res = await DocumentPicker.pickMultiple({
            type: [DocumentPicker.types.images],
        });
        let arr = [];
        res.map(item => {
            RNFS.readFile(item.uri, 'base64').then(async(res) => {
            await setsingle(`data:image/png;base64,${res}`);
            });
            // arr.push({
            // photoName: item.name,
            // photoLabel: item.name,
            // photoSize: item.size,
            // photo: url,
            // });
            setTimeout(async() => {
                await AsyncStorage.setItem('userdp',single)
                // setdp()
                // savepic()
            }, 3000);
        });
        // setismodal(false);
        // settype('photos');
        // console.log('Images', single);
        // setphotos(arr);
        } catch (err) {
        if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
        } else {
            throw err;
        }
        }
    }

    return(
     <View style={{flex:1,backgroundColor:'white'}} >
         <KeyboardAwareScrollView  >
         <Header
            backgroundColor={"transparent"}
            containerStyle={{
            alignSelf: 'center',
            // justifyContent:'center',
            marginTop:10,
            borderBottomWidth: 0,
            // borderBottomColor: '#E1E3E6',
            }}
            leftComponent={
                <TouchableOpacity style={{width:20,height:20}} onPress={()=>props.navigation.goBack()} >
                    <Image
                        source = {eback}
                        style={{width:7,height:15,marginLeft:15}}
                    />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:'black',fontFamily:'Poppins',fontSize:14,fontWeight:'500'}} >Edit Profile</Text>
            }
            
        /> 
        <View style={styles.profcont} >
            <ImageBackground
                borderRadius={100}
                source={single?{uri:single}:dp}
                style={styles.dp}
            >
                <TouchableOpacity onPress={()=>onImages()}  style={{width:91,height:91,backgroundColor:'rgba(0, 0, 0, 0.5)',borderRadius:100,justifyContent:'center'}}  >
                    <Image
                        source={camra}
                        style={{width:30,height:24.75,alignSelf:'center'}}
                    />
                </TouchableOpacity>
            </ImageBackground>
            <Text style={[styles.heading,{fontWeight:'400',fontSize:14}]} ></Text>
            
        </View>
        <View style={{marginTop:responsiveHeight(1)}} >
            <View style={[styles.inputConatiner,{borderRadius:4,borderWidth:1  ,backgroundColor:'white'   ,borderColor:'#DCDCDC'}]} >
                <TextInput
                    style={[styles.input,{fontWeight:'500',fontSize:14,alignSelf:'flex-start',marginLeft:10,width:'95%'}]}
                    placeholder='Name'
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                />
           </View>

           <View style={[styles.inputConatiner,{borderRadius:4,borderWidth:1 ,backgroundColor:'white'    ,borderColor:'#DCDCDC'}]} >
                <TextInput
                    style={[styles.input,{fontWeight:'500',fontSize:14,alignSelf:'flex-start',marginLeft:10,width:'95%'}]}
                    placeholder='Phone Number'
                    keyboardType='phone-pad'
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                />
           </View>

           <View style={[styles.inputConatiner,{borderRadius:4,borderWidth:1  ,backgroundColor:'white'   ,borderColor:'#DCDCDC'}]} >
                <TextInput
                    secureTextEntry={true}
                    style={[styles.input,{fontWeight:'500',fontSize:14,alignSelf:'flex-start',marginLeft:10,width:'95%'}]}
                    placeholder='Password'
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                />
           </View>

           <View style={[styles.inputConatiner,{borderRadius:4,borderWidth:1  ,backgroundColor:'white'   ,borderColor:'#DCDCDC'}]} >
                <TextInput
                    style={[styles.input,{fontWeight:'500',fontSize:14,alignSelf:'flex-start',marginLeft:10,width:'95%'}]}
                    placeholder='Gender'
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                />
           </View>

           <View style={[styles.inputConatiner,{borderRadius:4,borderWidth:1 ,backgroundColor:'white'    ,borderColor:'#DCDCDC'}]} >
                <TextInput
                    style={[styles.input,{fontWeight:'500',fontSize:14,alignSelf:'flex-start',marginLeft:10,width:'95%'}]}
                    placeholder='Address'
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                />
           </View>
           <View style={[styles.inputConatiner,{borderRadius:4,borderWidth:1,backgroundColor:'white' ,borderColor:'#DCDCDC'}]} >
                <TextInput
                    style={[styles.input,{fontWeight:'500',fontSize:14,alignSelf:'flex-start',marginLeft:10,width:'95%'}]}
                    placeholder='City/Religion'
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                />
           </View>
            <View style={{marginTop:responsiveHeight(5)}} >
                <GradButton style={{width:335,height:48,borderRadius:10,alignSelf:'center',justifyContent:'center'}}  txt={'Save'} />
            </View>

        </View>
        <View style={{marginBottom:responsiveHeight(10)}} />
        </KeyboardAwareScrollView>
    </View>
       
     
    )
}
export default profile;  