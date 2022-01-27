import React,{useState,useEffect} from 'react'
import {View,Text,ImageBackground,Modal,PermissionsAndroid,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
import RQButton from '../../components/request_button';
import {logo,lang,bullet,call,text,
    inq1,
    inq2,
    back,
    add} from '../../assets';
import styles from './styles';

function processing (props){

    const [lable, setlabel] = useState()
    const [success, setsuccess] = useState(false)
    
    useEffect(() => {
        // console.log(props.route.params.label);
        let label = props.route.params.label
        setlabel(label)
        // alert(label)
        
    }, [])
    if(lable === 'missing'){
    return(
     <View>
         <Header leftstyle={{width:16,height:14,margin:8,alignSelf:'flex-start'}} leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {props.navigation} center = {logo} right={lang} left={back}  />
          <View style={[styles.processingCont,{width:314,height:225,alignItems:'flex-start'}]} >
              <Text style={[styles.cat_txt,{fontSize:14,marginTop:20,marginLeft:10,fontWeight:'700'}]}>Missing Data</Text>
              <Text style={[styles.selectiontxt,{textAlign:'left',lineHeight:20,fontWeight:'400'}]} >Lorem ipsum dolor sit amet, sectetur adipiscing elit. Egestas ac odio uada varius aliquam tristique. Hac cursus arcu massa nulla sagittis convallis pulvinar eget. Suspendisse viverra at amet elementum.</Text>
              
        </View>
       <View style={{marginTop:responsiveHeight(3)}} >
           <GradButton style={{width:199,height:51,borderRadius:10,alignSelf:'center',justifyContent:'center'}}  navigation={()=>{
               setsuccess(true)
               setTimeout(() => {
                setsuccess(false)
                props.navigation.goBack()   
               }, 2000);
               }} txt = {'Request to Resend'}/>
       </View>
       <Modal
                animationType="slide"
                transparent={true}
                visible={success}
                // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
                onRequestClose={() => {
                    setsuccess(false);
                }}>
                <View
                    style={{
                        height: '100%',
                        backgroundColor: 'rgba(64, 77, 97, 0.5)',
                    }}>
                <View
                    style={[styles.modalcontainer,{height:332}]}>
                    
                    <Image
                        source={inq1}
                        style={{width:119,height:155,alignSelf:'center',marginTop:responsiveHeight(3)}}
                    />
                    <Text style={[styles.modaltxt,{fontSize:14,fontWeight:'500',marginTop:responsiveHeight(6)}]} >your request has been sent please wait{'\n'}for patient reply</Text>
                </View>
                </View>
            </Modal>
     </View>   
     
    )
    }else {
        return(
            <View>
            <Header leftstyle={{width:16,height:14,margin:8,alignSelf:'flex-start'}} leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {props.navigation} center = {logo} right={lang} left={back}  />
             <View style={[styles.processingCont,{width:314,height:225,alignItems:'flex-start'}]} >
                 <Text style={[styles.cat_txt,{fontSize:14,marginTop:20,marginLeft:10,fontWeight:'700'}]}>I Don’t Know the answer</Text>
                 <Text style={[styles.selectiontxt,{textAlign:'left',lineHeight:20,fontWeight:'400'}]} >Lorem ipsum dolor sit amet, sectetur adipiscing elit. Egestas ac odio uada varius aliquam tristique. Hac cursus arcu massa nulla sagittis convallis pulvinar eget. Suspendisse viverra at amet elementum.</Text>
                 
           </View>
          <View style={{marginTop:responsiveHeight(3)}} >
              <GradButton style={{width:119,height:51,borderRadius:10,alignSelf:'center',justifyContent:'center'}}  navigation={()=>{
                  setsuccess(true)
                  setTimeout(() => {
                   setsuccess(false)
                   props.navigation.goBack()   
                  }, 2000);
                  }} txt = {'Submit'}/>
          </View>
          <Modal
                   animationType="slide"
                   transparent={true}
                   visible={success}
                   // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
                   onRequestClose={() => {
                       setsuccess(false);
                   }}>
                   <View
                       style={{
                           height: '100%',
                           backgroundColor: 'rgba(64, 77, 97, 0.5)',
                       }}>
                   <View
                       style={[styles.modalcontainer,{height:332}]}>
                       
                       <Image
                           source={inq2}
                           style={{width:127,height:110,alignSelf:'center',marginTop:responsiveHeight(10)}}
                       />
                       <Text style={[styles.modaltxt,{fontSize:14,fontWeight:'500',marginTop:responsiveHeight(6)}]} >Your answer has been submited.</Text>
                   </View>
                   </View>
               </Modal>
        </View>  
            )
    }
}
export default processing; 