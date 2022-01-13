import React,{useState,useEffect,useRef} from 'react'
import {View,Text,ImageBackground,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {logo,lang,notific,
    info,pending,
    back,
    } from '../assets';


function notification ({props,item}){

    
    return(
            <>
               {item.date?
                    <Text style={{fontFamily:'Poppins',fontWeight:'500',fontSize:14,color:'black',marginLeft:20,marginTop:10,marginBottom:10}} >{item.date}</Text> 
               :
                    <View style={{width:'90%',height:61,flexDirection:'row',alignSelf:'center',marginTop:responsiveHeight(2)}} >
                        <View style={{flex:0.1}} >
                            <Image
                                source={item.status === 'Appointment alarm' ?pending:notific}
                                style={{width:item.status === 'Appointment alarm' ?19.25:21,height:21}}
                            />
                        </View>
                        <View style={{flex:1,}} >
                            <Text style={{fontFamily:'Poppins',fontWeight:'500',fontSize:14,color:'black'}} >{item.status}</Text>
                            <Text style={{fontFamily:'Roboto',fontWeight:'300',width:'85%',fontSize:10,color:'rgba(0, 0, 0, 0.5)'}} >{item.messgae}</Text>
                        </View>
                    </View>
               }
            </>
           
       
     
    )
}
export default notification;  