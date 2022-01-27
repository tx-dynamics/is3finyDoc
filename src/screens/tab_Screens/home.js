import React,{useState,useEffect} from 'react'
import {View,Text,ImageBackground,Modal,ScrollView,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
import GradButton from '../../components/gradient_button';
import Header from '../../components/header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {logo,lang,user1,call,text,
    next,support,
    pickercon,
    infodoc,
    infoBlack} from '../../assets';
import styles from './styles';

function home (props){

    const [ismodal, setismodal] = useState(false)


    return(
     <View>
        <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:responsiveHeight(1)}} >
            <Header leftnavigation = {()=>props.navigation.navigate('ScreenStack',{screen:'Contact'})} rightnavigation = {()=>alert('coming soon')} center = {logo} right={lang} left={support}  />
            <View>
                    <View style={styles.infocard} >
                        <Image
                            source={user1}
                            style={[styles.dp,{width:100,height:100,margin:10}]}
                        />
                        <View style={{margin:15}} >
                            <Text style={[styles.cat_txt,{fontSize:18,color:'white',marginTop:responsiveHeight(0.8)}]} >Nik Hassan</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}} >
                                <Text style={[styles.modaltxt,{fontSize:12,color:'white',textAlign:'left',marginTop:responsiveHeight(0.5)}]} >ID:0032145</Text>
                                <TouchableOpacity onPress={()=>setismodal(true)} >
                                    <Image
                                        source={infodoc}
                                        style={{width:15,height:15,marginLeft:responsiveWidth(2)}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={[styles.modaltxt,{fontSize:12,color:'white',textAlign:'left',marginTop:responsiveHeight(0.5)}]} >Lorem ipsum dolor sit amet,{'\n'}consectetur.</Text>
                        </View>
                        
                    </View>
                    <View style={[styles.infocard,{backgroundColor:'rgba(124, 255, 4, 0.16)',height:165,flexDirection:'column'}]} >
                        <Text style={[styles.input,{fontSize:14,marginTop:responsiveHeight(2)}]} >Your Current Credit Is</Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('ScreenStack',{screen:'PatientList'})} style={[styles.infocard,{width:86,height:39,borderRadius:4,justifyContent:'center'}]} >
                            <Text style={[styles.selectiontxt,{margin:0,color:'white',alignSelf:'center'}]} >000</Text>
                            <Image source={pickercon} style={{width:8.33,height:4.7,marginLeft:responsiveWidth(3),marginTop:responsiveHeight(2.3)}} />
                        </TouchableOpacity>
                        <Text style={[styles.modaltxt,{fontSize:11,color:'#424242',textAlign:'left',marginTop:responsiveHeight(1.5),backgroundColor:'rgba(124, 255, 4, 0.16)',width:'95%',alignSelf:'center',borderRadius:10  ,height:46,padding:10}]} >Credit is allowed when it is L.E.500 we will contact you{'\n'}when you reach this limit to receive.
                        </Text>
                    </View> 
                    <Text style={[styles.rqtxt,{alignSelf:"center",width:'88%',marginTop:responsiveHeight(6),marginLeft:0}]} >Pending Inquiries</Text>
                    <View style={[styles.infocard,{flexDirection:'column',backgroundColor:'transparent',height:136,borderWidth:1,borderColor:'#6CE200',marginTop:responsiveHeight(2)}]} >
                        <Text style={styles.selectiontxt} >You have pending request to{'\n'}answer</Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('ScreenStack',{screen:'Status'})} >
                            <Image
                                source={next}
                                style={[styles.next,{marginTop:responsiveHeight(1.5)}]}
                            />
                        </TouchableOpacity >
                    </View>
                    <View style={[styles.infocard,{flexDirection:'column',backgroundColor:'transparent',height:168,borderWidth:1,borderColor:'#6CE200',marginTop:responsiveHeight(2)}]} >
                        <Text style={styles.selectiontxt} >Your request will expire in less than 15{'\n'}minutes{'\n'}Check the app/doctor portal to assign</Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('ScreenStack',{screen:'Status'})}  >
                            <Image
                                source={next}
                                style={[styles.next,{marginTop:responsiveHeight(3.5)}]}
                            />
                        </TouchableOpacity>
                    </View>
            </View>
        </ScrollView>
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
                style={[styles.modalcontainer,{height:186}]}>
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
                                <Text style={[styles.modaltxt,{textAlign:'left',marginLeft:10,marginTop:5}]} >Give your I.D. to your patients to contact</Text>
                                <Text style={[styles.modaltxt,{textAlign:'left',marginLeft:10,marginTop:5}]} >you directly</Text>
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
export default home; 