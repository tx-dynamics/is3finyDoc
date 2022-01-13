import React,{useState,useEffect,useRef} from 'react'
import {View,Text,TouchableOpacity,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import LinearGradient from 'react-native-linear-gradient';

import {dp,
    edit,
    paysetting,
    setting,
    logout} from '../assets';
import styles from '../screens/tab_Screens/styles';

function modalbtn ({props,txt,img,imgstyle,txtstyle,btnstyle,navigation}){


    useEffect(() => {
        // console.log(listarr);

    }, [])
    
    return(
    
            <TouchableOpacity onPress={navigation} style={btnstyle ? btnstyle:{height:62,width:'100%',justifyContent:'center'}} >
                
                <Text style={txtstyle} >{txt}</Text>

            </TouchableOpacity>
     
     
    )
}
export default modalbtn;  