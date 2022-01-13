import React,{useState,useEffect,useRef} from 'react'
import {View,Text,Modal,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
import {Header, FAB} from 'react-native-elements';
import GradButton from '../../components/gradient_button';
import RQButton from '../../components/request_button';
import {logo,editblack,galblack,pic,text,video,voice,
    info,infoBlack,
    back,
    } from '../../assets';
import styles from './styles';
import Inquiry from '../../components/inquiry'
const data = [
    {
        date:'Mon,11,2022',
        inquiry_method:[
            {
                type:'txt',
                img:editblack
            },
            {
                type:'pic',
                img:galblack
            }
        ]
    },
   
]

function inquires (props){

    const [arr, setArr] = useState([])
    const [isselected, setisselected] = useState(false)
    const [ismodal, setismodal] = useState(false)

    useEffect(() => {
        // console.log(listarr);
        setArr(data)

    }, [])
    
    return(
     <View style={{flex:1}} >
         <Header
            backgroundColor={"transparent"}
            containerStyle={{
            alignSelf: 'center',
            // height: ,
            marginTop:10,
            borderBottomWidth: 0,
            // borderBottomColor: '#E1E3E6',
            }}
            rightComponent={
                <TouchableOpacity 
                onPress={()=>setismodal(true)} 
                style={{}} >
                    <Image
                        source={infoBlack}
                        style={{width:22,height:22,marginLeft:8,tintColor:'black'}}
                    />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:'black',fontFamily:'Poppins',fontSize:14,fontWeight:'500'}} >Inquiries</Text>
            }
            
        /> 

        <FlatList
            style={{ height:'50%',width:'100%' ,flex:1,alignSelf:'center',marginTop:responsiveHeight(3)}}
            data={data}
            renderItem={({ item,index }) => 
               <Inquiry  item = {item} navigation={()=>props.navigation.navigate('ScreenStack',{screen:'Status'})}  />
            }
            keyExtractor={item => item.id}
        />
        <Modal
                animationType="slide"
                transparent={true}
                visible={ismodal}
                // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
                onRequestClose={() => {
                setismodal(false);
                }}>
                <View
                    style={{
                        height: '100%',
                        backgroundColor: 'rgba(64, 77, 97, 0.5)',
                    }}>
                <View
                    style={[styles.modalcontainer,{height:298}]}>
                    <View
                    style={{
                        margin:10
                        // borderBottomWidth:1,borderColor:'black'
                    }}>
                        <View style={{margin:18,alignSelf:'center',alignItems:'center'}} >
                            <View style={{flexDirection:'row'}} >
                                <Image
                                    source={infoBlack}
                                    style={{width:20,height:20,margin:5}}
                                />
                                <View style={{width:'90%'}} >
                                    <Text style={[styles.modaltxt,{textAlign:'left',marginLeft:10,marginTop:5}]} >To keep your reviews, up especially for labs</Text>
                                    <Text style={[styles.modaltxt,{textAlign:'left',marginLeft:10,marginTop:5}]} >& radiology use this template in patient</Text>
                                    <Text style={[styles.modaltxt,{textAlign:'left',marginLeft:10,marginTop:5}]} >own language: (Name or the patient,</Text>
                                    <Text style={[styles.modaltxt,{textAlign:'left',marginLeft:10,marginTop:5}]} >name of the investigation, normal/</Text>
                                    <Text style={[styles.modaltxt,{textAlign:'left',marginLeft:10,marginTop:5}]} >abnormal , emergency/or not, then your</Text>
                                    <Text style={[styles.modaltxt,{textAlign:'left',marginLeft:10,marginTop:5}]} >interpretation</Text>
                                </View>
                                
                            </View>
                            <View style={{marginTop:responsiveHeight(4)}} />                            
                            <GradButton
                                style={{width:105,height:51,alignSelf:'center',justifyContent:'center',borderRadius:10}}
                                navigation={()=>{
                                // props.navigation.replace('Main')
                                setismodal(false)
                                }} txt = {'Close'}/>
                        </View>
                    </View>
                </View>
                </View>
        </Modal>
    </View>
       
     
    )
}
export default inquires;  