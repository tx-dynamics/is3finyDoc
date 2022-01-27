import React,{useState,useEffect} from 'react'
import {View,Text,TextInput,TouchableOpacity,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import GradButton from '../../components/gradient_button';
import DocumentPicker from 'react-native-document-picker';
import S3 from 'aws-sdk/clients/s3';
import FileViewer from 'react-native-file-viewer';

import RQButton from '../../components/request_button';
import {logo,lang,bullet,call,text,
    pic,
    upload,
    back,
    add} from '../../assets';
import styles from './styles';

const patient=[
    {
        img:require('../../assets/images/user1.png'),
        name:'Johnon sin',
        id:'ID:00322145',
        price:'$120',
        status:'Pending'
    },
    {
        img:require('../../assets/images/user2.png'),
        name:'Vijhay kumar',
        id:'ID:00312145',
        price:'$156',
        status:'Completed'
    },
    {
        img:require('../../assets/images/user3.png'),
        name:'Victorial',
        id:'ID:00232145',
        price:'$200',
        status:'Completed'
    },
    {
        img:require('../../assets/images/user4.png'),
        name:'Vijhay kumar',
        id:'ID:00312145',
        price:'$60',
        status:'Completed'
    },
    {
        img:require('../../assets/images/user5.png'),
        name:'Nik Hassan',
        id:'ID:00352145',
        price:'$100',
        status:'Completed'
    },
]

function category (props){
    const [input, setinput] = useState('')
    const [document, setdocument] = useState();

    
    return(
     <View style={{flex:1}} >
         <Header  leftstyle={{width:16,height:14,marginLeft:8,alignSelf:'flex-start'}}   leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {props.navigation} center = {logo} right={lang} left={back}  />
          <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#6CE200',width:'100%',height:54}} >
              <View style={{flex:0.6}} >
                  <Text style={[styles.cat_txt,{marginLeft:responsiveWidth(4),color:'white',fontSize:14}]} >Patients</Text>
              </View>
              <View style={{flex:0.25}} >
                  <Text style={[styles.cat_txt,{fontSize:14,color:'white',}]} >Amount</Text>
              </View>
              <View style={{flex:0.25}} >
                  <Text style={[styles.cat_txt,{fontSize:14,color:'white',}]} >Status</Text>
              </View>
          </View>
          <FlatList
                style={{ flex:1,height:'100%',width:'100%',alignSelf:'center',marginTop:responsiveHeight(3)}}
                data={patient}
                renderItem={({ item,index }) => 
                    <View style={{flexDirection:'row',alignItems:'center',width:'100%',marginVertical:5,height:54}} >
                            <View style={{flex:0.6,flexDirection:'row'}} >
                                <View style={{flex:0.2,marginLeft:responsiveWidth(8)}} >
                                    <Image
                                        source={item.img}
                                        style={{width:50,height:50,borderRadius:10,alignSelf:'center'}}
                                    />
                                </View>
                                <View style={{marginLeft:responsiveWidth(7),justifyContent:'center'}} >
                                    <Text style={[styles.cat_txt,{fontSize:14}]} >{item.name}</Text>
                                    <Text style={[styles.cat_txt,{fontSize:10}]} >{item.id}</Text>

                                </View>
                            </View>
                            <View style={{flex:0.25}} >
                                <Text style={[styles.cat_txt,{marginLeft:responsiveWidth(3),width:30,fontSize:12,textAlign:'center'}]} >{item.price}</Text>
                            </View>
                            <View style={{flex:0.25}} >
                                <Text style={[styles.cat_txt,{fontSize:10,width:60,textAlign:'center',marginLeft:responsiveWidth(3),color:item.status === 'Pending'?'#FF8585':'#6CE200'}]} >{item.status}</Text>
                            </View>
                    </View>
                }
                keyExtractor={item => item.id}
            />
     </View>   
     
    )
}
export default category; 