import React,{useState,useEffect} from 'react'
import {View,Text,ImageBackground,RefreshControl,ScrollView,Image,ActivityIndicator,FlatList,Switch} from 'react-native'
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {logo,lang,user1,call,text,
    next,
    video,
    voice,
    add} from '../../assets';
import styles from './styles';

function home (props){
    return(
     <View>
        <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:responsiveHeight(1)}} >
            <Header leftnavigation = {()=>props.navigation.navigate('ScreenStack',{screen:'Contact'})} rightnavigation = {()=>alert('coming soon')} center = {logo} right={lang} left={call}  />
            <View>
                    <View style={styles.infocard} >
                        <Image
                            source={user1}
                            style={[styles.dp,{width:100,height:100,margin:10}]}
                        />
                        <View style={{margin:15}} >
                            <Text style={[styles.cat_txt,{fontSize:18,color:'white',marginTop:responsiveHeight(0.8)}]} >Nik Hassan</Text>
                            <Text style={[styles.modaltxt,{fontSize:12,color:'white',textAlign:'left',marginTop:responsiveHeight(0.5)}]} >ID:0032145</Text>
                            <Text style={[styles.modaltxt,{fontSize:12,color:'white',textAlign:'left',marginTop:responsiveHeight(0.5)}]} >Lorem ipsum dolor sit amet,{'\n'}consectetur.</Text>
                        </View>
                        
                    </View>
                    <View style={[styles.infocard,{backgroundColor:'rgba(124, 255, 4, 0.16)',height:165,flexDirection:'column'}]} >
                        <Text style={[styles.input,{fontSize:14,marginTop:responsiveHeight(2)}]} >Your Current Credit Is</Text>
                        <View style={[styles.infocard,{width:86,height:39,borderRadius:4,justifyContent:'center'}]} >
                            <Text style={[styles.selectiontxt,{margin:0,color:'white',alignSelf:'center'}]} >000</Text>
                        </View>
                        <Text style={[styles.modaltxt,{fontSize:11,color:'#424242',textAlign:'left',marginTop:responsiveHeight(1.5),backgroundColor:'rgba(124, 255, 4, 0.16)',width:'90%',alignSelf:'center',borderRadius:10  ,height:46,padding:10}]} >Credit is allowed when it is L.E.500 we will contact you{'\n'}when you reach this limit to receive.
                        </Text>
                    </View> 
                    <Text style={[styles.rqtxt,{alignSelf:"center",width:'88%',marginTop:responsiveHeight(6),marginLeft:0}]} >Pending Inquiries</Text>
                    <View style={[styles.infocard,{flexDirection:'column',backgroundColor:'transparent',height:136,borderWidth:1,borderColor:'#6CE200',marginTop:responsiveHeight(2)}]} >
                        <Text style={styles.selectiontxt} >21 Minutes left to answer the{'\n'}Johnson’s inquirie</Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('ScreenStack',{screen:'Status'})} >
                            <Image
                                source={next}
                                style={[styles.next,{marginTop:responsiveHeight(1.5)}]}
                            />
                        </TouchableOpacity >
                    </View>
                    <View style={[styles.infocard,{flexDirection:'column',backgroundColor:'transparent',height:136,borderWidth:1,borderColor:'#6CE200',marginTop:responsiveHeight(2)}]} >
                        <Text style={styles.selectiontxt} >21 Minutes left to answer the{'\n'}Johnson’s inquirie</Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('ScreenStack',{screen:'Status'})}  >
                            <Image
                                source={next}
                                style={[styles.next,{marginTop:responsiveHeight(1.5)}]}
                            />
                        </TouchableOpacity>
                    </View>
            </View>
        </ScrollView>
     </View>   
     
    )
}
export default home; 