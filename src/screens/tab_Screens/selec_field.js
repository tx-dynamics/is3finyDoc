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



function category (props){
    const [input, setinput] = useState('')
    const [document, setdocument] = useState();

    async function viewFile(img) {
      console.log(img);
     const localFile = `${
       RNFS.DownloadDirectoryPath
     }/${new Date().toISOString()}.docx`.replace(/:/g, '-');
     const options = {
       fromUrl: img.documentURL,
       toFile: localFile,
     };
     RNFS.downloadFile(options)
       .promise.then(() =>
       console.log('downloaded',localFile),
       // Snackbar.show({
       //   text: `File is downloaded at ${localFile}`,
       // })
         FileViewer.open(localFile, { showOpenWithDialog: true })
               .then(() => {
                 // this.setState({pic: false});
                 console.log('Image show');
               })
               .catch(error => {
                 // error
                 console.log(error);
               }),
       )
       .catch(error => {
        console.log(error)
         // error
       });
   
    
     }

    async function ondocs() {
        try {
          const res = await DocumentPicker.pickSingle({
            type: [DocumentPicker.types.pdf],
          });
          var timestamp = new Date().getTime();
          const sz=Math.round( res.size / 1024);
          const file = {
            uri:res.uri,
            name:timestamp.toString(),
            type: res.type,
            nam:res.name,
            size:sz,
        }
        uploadDocsOnS3(file);
        //   settype('document');
        //   setismodal(false);
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
          } else {
            throw err;
          }
        }
      }

      const uploadDocsOnS3 = async file => {
        const s3bucket = new S3({
          accessKeyId: 'AKIASZNJEHHU4DBRBPIS',
          secretAccessKey: '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',
          Bucket: 'try-s3-upload-plz',
          signatureVersion: 'v4',
        });
        let contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        let contentDeposition = 'inline;filename="' + file.name + '"';
        const base64 = await fs.readFile(file.uri, 'base64');
        const arrayBuffer = decode(base64);
        s3bucket.createBucket(() => {
          const params = {
            Bucket: 'try-s3-upload-plz',
            Key: file.name,
            Body: arrayBuffer,
            ContentDisposition: contentDeposition,
            ContentType: contentType,
          };
          s3bucket.upload(params, (err, data) => {
            if (err) {
              console.log('error in callback',err.message);
            }
            console.log('success');
            console.log('Respomse URL : ' + data.Location);
            setdocument({uri:data.Location,Name:file.nam,size:file.size});
            // onUpdate(data.Location);
          });
        });
      };

    return(
     <View>
         <Header  leftstyle={{width:16,height:14,marginLeft:8,alignSelf:'flex-start'}}   leftnavigation = {()=>props.navigation.goBack()} rightnavigation = {props.navigation} center = {logo} right={lang} left={back}  />
          <KeyboardAwareScrollView style={{marginBottom:responsiveHeight(15)}} >
          <View style={[styles.cat_con,{marginTop:responsiveHeight(5)}]} >
             <TouchableOpacity onPress={()=>props.navigation.navigate('FieldList')} style={styles.cat} >
                 <Text style={styles.cat_txt} >Medicine</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>props.navigation.navigate('FieldList')} style={styles.cat} >
                 <Text style={styles.cat_txt} >Surgery</Text>
             </TouchableOpacity>
        </View>
        <View style={[styles.cat_con,{marginTop:responsiveHeight(4)}]} >
             <TouchableOpacity onPress={()=>props.navigation.navigate('FieldList')} style={styles.cat} >
                 <Text style={styles.cat_txt} >Pediatrics</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>props.navigation.navigate('FieldList')} style={styles.cat} >
                 <Text style={[styles.cat_txt,{textAlign:'center'}]} >Obs. and{'\n'}Gyn</Text>
             </TouchableOpacity>
        </View>
        <Text style={[styles.selectiontxt,{marginTop:responsiveHeight(12),marginBottom:0,textAlign:'left',alignSelf:'center'}]} >Upload a  proof of your specialization for{'\n'}review</Text>
        <Text style={[styles.selectiontxt,{fontSize:10,marginTop:0,marginBottom:0}]} >(the highest earned scientific degree or your qualification)</Text>
        <FlatList
            style={{ alignSelf:'center' }}
            numColumns={2}
            // showsVerticalScrollIndicator={false}
            data={[{},{}]}
            renderItem={({ item, index }) =>
            <>
                <TouchableOpacity onPress={ondocs} style={{width:100,height:88,borderRadius:10,backgroundColor:'rgba(108, 226, 0, 0.1)',borderWidth:0.3,borderColor:'#DCDCDC',justifyContent:'center',alignItems:'center',marginHorizontal:responsiveWidth(5),marginTop:responsiveHeight(5)}} >
                    <Image
                        source={upload}
                        style={{width:75,height:56,alignSelf:'center'}}
                    />
                </TouchableOpacity>
            </>
        }/>
        <View style={{marginTop:responsiveHeight(4)}} >
           <GradButton navigation={()=>props.navigation.goBack()} txt = {'Next'}/>
       </View>
       </KeyboardAwareScrollView>
     </View>   
     
    )
}
export default category; 