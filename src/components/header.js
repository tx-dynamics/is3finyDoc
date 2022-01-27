import React,{useState,useEffect} from 'react'
import {View,TouchableOpacity,Text,ImageBackground,RefreshControl,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import LinearGradient from 'react-native-linear-gradient';
import {Header, FAB} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function header({ centerstyle,backgroundColor,leftstyle,leftnavigation,rightnavigation,center,right,left }) {
    // console.log(center);
    return(
        <Header
            backgroundColor={ backgroundColor ? backgroundColor : "#2C2C2C"}
            containerStyle={{
            alignSelf: 'center',
            // justifyContent:'center',
            // marginTop:20,
            borderBottomWidth: 0,
            // borderBottomColor: '#E1E3E6',
            }}
            leftComponent={
                <TouchableOpacity 
                onPress={leftnavigation} 
                style={{justifyContent:'center',marginTop:responsiveHeight(4),height:29,width:83.69,alignItems:'center'}} >
                    <Image
                        source={left}
                        style={leftstyle?leftstyle:{width:83.69,height:29,marginLeft:8}}
                    />
                </TouchableOpacity>
            }
            centerComponent={
                <Image
                    source={center}
                    style={centerstyle?centerstyle:{width:65,height:65,alignSelf:'center'}}
                />
            }
            rightComponent={
                <TouchableOpacity 
                onPress={()=>alert('coming soon')}
                 style={{justifyContent:'center',marginTop:responsiveHeight(4.3)}} >
                    <Image
                        source={right}
                        style={{width:22,height:22,marginRight:8}}
                    />
                </TouchableOpacity>
                
            }
        /> 
    )
         
    }