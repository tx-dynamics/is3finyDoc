import React,{useState,useEffect,useRef} from 'react'
import {View,Text,TouchableOpacity,TextInput,Modal,Slider,PermissionsAndroid,Image,ImageBackground,FlatList,Switch} from 'react-native'
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
    AudioEncoderAndroidType,
    AudioSet,
    AudioSourceAndroidType,
    PlayBackType,
    RecordBackType,
  } from 'react-native-audio-recorder-player';
import {useIsFocused} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Header, FAB} from 'react-native-elements';
import GradButton from '../../components/gradient_button';
import {msgPlay,voice,attach,
    back,ratin,infoBlack,Tabbg,
    infowhite} from '../../assets';
import styles from './styles';
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import PRButton from '../../components/profile_btn';
import ModalBtn from '../../components/modalbtn';
import VideoPlayer from 'react-native-video-player'
import { ScrollView } from 'react-native-gesture-handler';

const chat = [
    {
        user_type:'doctor',
        user_pic:require('../../assets/images/user1.png'),
        msg:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisq accumsan donec suspendisse nu sagittis, purus. Faucibus et mi dictum magna aliquet dui orci ',
        media:[],

    },
    {
        user_type:'doctor',
        user_pic:require('../../assets/images/user1.png'),
        msg:'',
        media:[{
            type:'audio',
            file:require('../../assets/images/Hello.mp3')
        }],
    },
    {
        user_type:'doctor',
        user_pic:require('../../assets/images/user1.png'),
        msg:'',
        media:[
            {
                type:'image',
                file:require('../../assets/images/temp1.png')
            },
            {
                type:'image',
                file:require('../../assets/images/temp2.png')
            },
        ],
    },
    {
        user_type:'doctor',
        user_pic:require('../../assets/images/user1.png'),
        msg:'',
        media:[
            {
                type:'video',
                file:require('../../assets/images/temp1.png')
            },
        ],
    },
    {
        user_type:'patient',
        user_pic:require('../../assets/images/patientImg.png'),
        msg:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisq accumsan donec suspendisse nu sagittis, purus. Faucibus et mi dictum magna aliquet dui orci',
        media:[],
    },
    {
        user_type:'patient',
        user_pic:require('../../assets/images/patientImg.png'),
        msg:'',
        media:[{
            type:'audio',
            file:require('../../assets/images/Hello.mp3')
        }],
    },
]


function status (props){

    const audioRecorderPlayer = useRef(new AudioRecorderPlayer())
    const [video, setvideo] = useState('')
    const [chatlist, setchatlist] = useState([])
    const [isselected, setisselected] = useState(false)
    const [ismodal, setismodal] = useState(false)
    const [decmodal, setdecmodal] = useState(false)
    const [success, setsuccess] = useState(false)
    const [recordTime, setrecordTime] = useState('00:00')
    const [recording, setrecording] = useState(false)
    const [play, setplay] = useState(false)
    const [isplay, setisplay] = useState(false)
    const [recordSecs, setrecordSecs] = useState(0)
    const [duration, setduration] = useState('00:00')
    const [playtime, setplaytime] = useState('00:00')

    useEffect(() => {
        setchatlist(chat)   
    }, [])

  
    async function onStartRecord () {
        setrecording(true)
        if (Platform.OS === 'android') {
          try {
            const grants = await PermissionsAndroid.requestMultiple([
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
              PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            ]);
    
            console.log('write external stroage', grants);
    
            if (
              grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
                PermissionsAndroid.RESULTS.GRANTED &&
              grants['android.permission.READ_EXTERNAL_STORAGE'] ===
                PermissionsAndroid.RESULTS.GRANTED &&
              grants['android.permission.RECORD_AUDIO'] ===
                PermissionsAndroid.RESULTS.GRANTED
            ) {
              console.log('permissions granted');
            } else {
              console.log('All required permissions not granted');
              return;
            }
          } catch (err) {
            console.warn(err);
            return;
          }
        }
        const audioSet: AudioSet = {
            AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
            AudioSourceAndroid: AudioSourceAndroidType.MIC,
            AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
            AVNumberOfChannelsKeyIOS: 2,
            AVFormatIDKeyIOS: AVEncodingOption.aac,
          };
        const meteringEnabled = false;
    
        const result = await audioRecorderPlayer.current.startRecorder(undefined,audioSet,meteringEnabled);
        settimer()
        audioRecorderPlayer.current.addRecordBackListener((e:RecordBackType) => {
            setrecordSecs(e.currentPosition)
            setrecordTime(
                audioRecorderPlayer.current.mmss(
                Math.floor(e.currentPosition),
                )
            )
            //   this.setState({
        //     recordSecs: e.currentPosition,
        //     recordTime: this.audioRecorderPlayer.mmssss(
        //       Math.floor(e.currentPosition),
        //     ),
        //   });
          return;
        });
        // setaudio(result)
        console.log(result);
      };

      function settimer(){
        let interval;
        var secs = 0;
        const startTimer = () => {
          // console.log(recording);
          interval = setInterval(() => {
            // console.log(secs);
            secs = secs + 1;
  
            if (secs === 5) {
              console.log("calling");
              // setisdisable(false);
              // setindex(true);
              // setontimer(false);
              clearInterval(interval);
  
              // setRecording(recording);
              setTimeout(() => {
                // alert('stopped called')
                onStopRecord();
              }, 500);
            //   console.log("called");
            } else {
            //   setvideo(uri);
            }
          }, 1000);
        };
        clearInterval(interval);
        startTimer();
  
    }

      async function onStopRecord  ()  {
        const result = await audioRecorderPlayer.current.stopRecorder();
        audioRecorderPlayer.current.removeRecordBackListener();
        setrecordSecs(0)
        // audioRecorderPlayer.addPlayBackListener((e:RecordBackType) => {
        // setduration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
        // })
        // this.setState({
        //   recordSecs: 0,
        // });
        // setaudio(result)
        console.log("called here",result);
        setrecording(false)
        setplay(true)
      };
      
      async function onStartPlay ()  {
          setisplay(true)
        console.log('onStartPlay');
        const msg = await audioRecorderPlayer.current.startPlayer();
        console.log(msg);
        audioRecorderPlayer.current.addPlayBackListener((e) => {
         setplaytime(audioRecorderPlayer.current.mmss(Math.floor(e.currentPosition))),
         setduration(audioRecorderPlayer.current.mmss(Math.floor(e.duration)));
        //  this.setState({
        //     currentPositionSec: e.currentPosition,
        //     currentDurationSec: e.duration,
        //     playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        //     duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
        //   });
          return;
        });
        // if(playtime ===duration){
        //   audioRecorderPlayer.current.stopPlayer();
        //   audioRecorderPlayer.current.removePlayBackListener();
        // }
      };
      
      async function onPausePlay  ()  {
        setisplay(false)

        await audioRecorderPlayer.current.pausePlayer();

      };

   
        return(
            <View style={{flex:1}} >
               <Header
                    backgroundColor={"#2C2C2C"}
                    containerStyle={{
                    alignSelf: 'center',
                    alignItems:'center',
                    // height: ,
                    // marginTop:10,
                    height:112,
                    borderBottomWidth: 0,
                    // borderBottomColor: '#E1E3E6',
                    }}
                    leftComponent={
                        <TouchableOpacity 
                        onPress={()=>props.navigation.goBack()} 
                        style={{}} >
                            <Image
                                source={back}
                                style={{width:16,height:14,marginLeft:8,marginTop:responsiveHeight(1),tintColor:'white'}}
                            />
                        </TouchableOpacity>
                    }
                    rightComponent={
                        <TouchableOpacity 
                        onPress={()=>setismodal(true)} 
                        style={{}} >
                            <Image
                                source={infowhite}
                                style={{width:16,height:16,marginRight:8,marginTop:responsiveHeight(1),tintColor:'white'}}
                            />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={{color:'white',fontFamily:'Poppins',fontSize:18,fontWeight:'500'}} >Inquire</Text>
                    }
                    
                /> 
                <FlatList
                     style={{ width:'100%',alignSelf:'center',marginTop:responsiveHeight(3)}}
                     data={chatlist}
                     renderItem={({ item,index }) =>
                     <> 
                        {item.user_type === 'doctor' ?
                        <View style={{marginLeft:responsiveWidth(5),flexDirection:'row',alignItems:'center'}} >
                            <Image source={item.user_pic} style={{width:31,height:30,marginRight:5,borderRadius:100}} />
                            {item.media.length > 0 && item.media[0].type === 'image'?
                                 <ScrollView horizontal={true} style={{marginLeft:5,marginTop:10,marginBottom:10}} >
                                 {item.media.map((data)=>{
                                 return(
                                     <>
                                         {data.type === 'image'?
                                            <Image
                                                source={data.file}
                                                style={{width:120,height:108,marginHorizontal:5}}
                                            />
                                         :null}
                                     </>
                                 )

                                 })}
                                 </ScrollView>
                            :
                            <>
                            {item.media.length > 0 && item.media[0].type === 'video'?
                                <View style={{marginLeft:5,marginTop:10,marginBottom:10}} >
                                    {item.media.map((data)=>{
                                    return(
                                        <View style={{width:247,height:147,borderRadius:10,alignSelf:'center',margin:5}}>
                                             <VideoPlayer
                                                // video={{uri:video}}
                                                customStyles={{borderRadius:10}}
                                                video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                                                videoWidth={1600}
                                                videoHeight={900}
                                                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                                            />
                                        </View>
                                    )

                                    })}
                                </View>
                            :
                                <View style={{backgroundColor:'white',borderRadius:4,padding:10,margin:10,width:235,elevation:5,}} >
                                {item.msg != '' ?
                                    <Text style={[styles.modaltxt,{fontSize:12,textAlign:'left'}]} >{item.msg}</Text>
                                :
                                <>
                                    {item.media.length > 0?
                                        <>
                                        {item.media.map((data)=>{
                                        return(
                                            <>
                                                {data.type === 'audio'?
                                                    <View style={{flexDirection:'row'}} >
                                                        <Text style={[styles.modaltxt,{fontSize:11,alignSelf:'center'}]} >0:20</Text>
                                                        <Slider
                                                            minimumTrackTintColor={'rgba(0, 0, 0, 0.18)'}
                                                            maximumTrackTintColor={'grey'}
                                                            thumbTintColor={'transparent'}
                                                            style={{flex:1}}
                                                        />
                                                        <TouchableOpacity onPress={()=>setplay(!play)}>
                                                            <ImageBackground source={Tabbg} borderRadius={4} style={{width:25,height:23,justifyContent:'center',alignItems:'center'}} >
                                                                {!play?
                                                                <Image
                                                                    source={msgPlay}
                                                                    style={{width:10,height:12.35}}
                                                                />
                                                                :
                                                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                                                    <View style={{width:1.5,height:9,backgroundColor:'white',alignItems:'center'}} />
                                                                    <View style={{width:1.5,height:9,backgroundColor:'white',alignItems:'center',marginLeft:5}} />
                                                                </View>
                                                                }
                                                            </ImageBackground>
                                                        </TouchableOpacity>
                                                    </View>
                                                :null}
                                            </>
                                        )

                                        })}
                                        </>
                                    :
                                    null}
                                </>}
                                </View>
                            }
                            </>
                            }
                         </View>
                         :
                         <View style={{marginRight:responsiveWidth(5),alignSelf:'flex-end',flexDirection:'row',alignItems:'center'}} >
                            <LinearGradient 
                                start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#7CFF04', '#00AE55']} 
                                style={{width:235,borderRadius:4,padding:10,margin:10,elevation:5,justifyContent:'center',alignItems:'center'}}
                            >
                                {item.msg != '' ?
                                    <Text style={{color:'white'}} >{item.msg}</Text>
                                :
                                <>
                                {item.media.length > 0?
                                    <>
                                    {item.media.map((data)=>{
                                    return(
                                        <>
                                            {data.type === 'audio'?
                                                <View style={{flexDirection:'row'}} >
                                                    <Text style={[styles.modaltxt,{fontSize:11,alignSelf:'center',color:'white'}]} >0:20</Text>
                                                    <Slider
                                                        minimumTrackTintColor={'#FFFFFF'}
                                                        maximumTrackTintColor={'#F2F2F2'}
                                                        thumbTintColor={'transparent'}
                                                        style={{flex:1}}
                                                    />
                                                    <TouchableOpacity  onPress={()=>setplay(!play)}   style={{backgroundColor:'white',width:25,height:23,justifyContent:'center',alignItems:'center',borderRadius:4}} >
                                                        {!play?
                                                            <Image
                                                                source={msgPlay}
                                                                style={{width:10,height:12.35,tintColor:'#6CE200'}}
                                                            />
                                                        :
                                                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                                                <View style={{width:1.5,height:9,backgroundColor:'#6CE200',alignItems:'center'}} />
                                                                <View style={{width:1.5,height:9,backgroundColor:'#6CE200',alignItems:'center',marginLeft:5}} />
                                                            </View>
                                                        }
                                                    </TouchableOpacity>
                                                </View>
                                            :null}
                                        </>
                                    )

                                    })}
                                    </>
                                :
                                null}
                            </>}
                            </LinearGradient>
                            <Image source={item.user_pic} style={{width:31,height:30,borderRadius:100}} />

                         </View>
                        }
                    </>
                     }
                    //  keyExtractor={item => item.id}
                />
              
               <PRButton
                    txt = {'Decline'}
                    navigation={()=>setdecmodal(true)}
                    txtstyle={[styles.heading,{fontWeight:'600',fontSize:16,marginTop:0,alignSelf:'center',color:'white'}]}
                    btnstyle={{marginTop:responsiveHeight(3),alignSelf:'center',alignItems:'center',justifyContent:'center',width:'87%',height:48,borderRadius:10,backgroundColor:'#FFA0A0'}}
                />

            <View
                style={{
                    borderTopWidth: 0.3,
                    borderTopColor: '#E1E3E6',
                    // position: 'absolute',
                    bottom: 0,
                    alignSelf:'center',
                    // alignSelf: 'flex-end',
                    marginTop:responsiveHeight(3),
                    // justifyContent:'center',
                    // alignItems:'center',
                    width: '87%',
                    height: 56,
                }}>
                {/* <View style={{marginTop: responsiveScreenHeight(1.5)}}></View> */}
                <View
                    style={{
                    flexDirection: 'row',
                    }}>
                   
                    <View
                    style={{
                        // marginLeft:11,
                        // marginTop:8,
                        alignSelf: 'center',
                        // backgroundColor:'red',
                        // marginBottom:12,
                        width: '85%',
                        flexDirection:'row',
                        height: 45,
                        backgroundColor:'rgba(124, 255, 4, 0.16)',
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent:'center'
                    }}>
                        <TouchableOpacity style={{width:25,height:25,alignSelf:'center',alignItems:'center'}} >
                            <Image source={attach} style={{width:18,height:20}} />
                        </TouchableOpacity>
                    <TextInput
                        multiline
                        // value={value}
                        // onChangeText={onChangeText}
                        placeholder={'Type message...'}
                        placeholderTextColor={'black'}
                        style={
                        {
                            // backgroundColor: 'white',
                            // margin: 10,
                            paddingLeft:20,
                            width: '90%',
                            color: 'black',
                            height: 'auto',
                        }}
                    />
                    </View>
                    <TouchableOpacity
                    // disabled={value !== '' ? false : true}
                    // onPress={onPress}
                    style={{
                        width: '12%',
                        alignItems: 'center',
                        backgroundColor:'rgba(124, 255, 4, 0.16)',
                        justifyContent: 'center',
                        borderRadius:8,
                        height:45,
                        marginLeft:responsiveWidth(3)
                    }}>
                    
                        <Image source={voice} style={{width: 18, height: 24, margin: 8,tintColor:'#000000'}} />
                    </TouchableOpacity>
                </View>
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
                        style={[styles.modalcontainer,{height:237}]}>
                        
                        <Image
                            source={ratin}
                            style={{width:193,height:121,alignSelf:'center',marginTop:responsiveHeight(3)}}
                        />
                       <Text style={[styles.modaltxt,{fontSize:14,fontWeight:'500',marginTop:responsiveHeight(6)}]} >Review Successfully Submit</Text>
                    </View>
                    </View>
                </Modal>

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

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={decmodal}
                    // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
                    onRequestClose={() => {
                    setdecmodal(false);
                    }}>
                    <View
                        style={{
                            height: '100%',
                            backgroundColor: 'rgba(64, 77, 97, 0.5)',
                        }}>
                    <View
                        style={[styles.modalcontainer,{height:240,width:'68%',marginTop:'60%'}]}>
                        <View
                        style={{
                            // margin:10
                            alignItems:'center'
                            // borderBottomWidth:1,borderColor:'black'
                        }}>
                            <ModalBtn
                                txt = {'Wrong Speciality'}
                                navigation={()=>{
                                    setdecmodal(false)
                                    props.navigation.navigate('ScreenStack',{screen:'OnlyField'})
                                }}
                                txtstyle={[styles.selectiontxt,{color:'rgba(108, 226, 0, 1)'}]}
                                
                            />
                            <View style={{width:250,borderWidth:0.3,borderColor:'rgba(0, 0, 0, 0.36)'}} />
                            <ModalBtn
                                txt = {'Missing Data'}
                                navigation={()=>{
                                    setdecmodal(false)
                                    props.navigation.navigate('DeclineHandle',{label:'missing'})
                                }}
                                txtstyle={[styles.selectiontxt,{color:'rgba(108, 226, 0, 1)'}]}
                                btnstyle={{height:57,width:'100%',justifyContent:'center'}}
                                
                            />
                            <View style={{width:250,borderWidth:0.3,borderColor:'rgba(0, 0, 0, 0.36)'}} />

                            <ModalBtn
                                txt = {'I don’t know the answer'}
                                navigation={()=>{
                                    setdecmodal(false)
                                    props.navigation.navigate('DeclineHandle',{label:'other'})
                                }}
                                txtstyle={[styles.selectiontxt,{color:'rgba(108, 226, 0, 1)'}]}
                                btnstyle={{height:57,width:'100%',justifyContent:'center'}}
                                
                            />
                            <View style={{width:250,borderWidth:0.3,borderColor:'rgba(0, 0, 0, 0.36)'}} />

                            <ModalBtn
                                txt = {'Other'}
                                navigation={()=>{
                                    setdecmodal(false)
                                    props.navigation.navigate('DeclineHandle',{label:'other'})
                                }}
                                txtstyle={[styles.selectiontxt,{color:'rgba(108, 226, 0, 1)'}]}
                                btnstyle={{height:57,width:'100%',justifyContent:'center'}}
                                
                            />
                          
                        </View>
                    </View>
                </View>
                </Modal>

            </View>   
            
           )
    

    
}
export default status; 