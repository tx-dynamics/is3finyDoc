import React, {Component} from 'react';
import {View, StatusBar, ImageBackground,PermissionsAndroid,Image} from 'react-native';
import {splash,loader} from '../../assets';
import styles from './styles';
import {connect} from 'react-redux';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { ActivityIndicator } from 'react-native-paper';


class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader:false,
      loadingPage: 'OnBoarding',
      idAddress:'',
      Fcmtoken:''
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({loader:true})
    }, 1000);
    
      this.validateLogin()
    
  };

  validateLogin (){
    setTimeout(() => {
      // this.props.navigation.replace(this.props.isLoggedIn ? 'Main' : 'Signin');
      this.props.navigation.replace('AuthSelect');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar hidden={true} />
        <Image
          source={splash}
          style={[styles.splashStyle,{width:268,height:268}]}
        >
        </Image>

        {this.state.loader &&
          <Image
            source={loader}
            style={{alignSelf:'center',marginTop:responsiveScreenHeight(2),width:102,height:102}}
          />
        } 
      </View>
    );
  }
}
// const mapStateToProps = state => {
//   const {isLoggedIn,userData} = state.auth;
//   // const {connect} = state.connectionCheck;
//   return {isLoggedIn,userData};
// };

// export default connect(mapStateToProps, {togglePlayer})(Splash);
export default (Splash);
