import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState,useRef} from 'react';
import Phone from '../assets/icons/Phone.svg';
import Lock from '../assets/icons/Lock.svg';
import Google from '../assets/icons/Google.svg';
import Facebook from '../assets/icons/Facebook.svg';
import EyeOff from '../assets/icons/EyeOff.svg';
import Eye from '../assets/icons/Eye.svg';

const Sign_up = () => {

  const [showPassword, setShowPassword] = useState(true);
  const phoneInput = useRef(null);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    Alert.alert(
      `Welcome, ${phone}! Confirmation phone number has been sent to ${password}`,
    );
  };

  return (
    <View>
      <View style={styles.inputView}>
        <Text style={styles.textName}>Phone Number</Text>
        <View style={styles.textInputView}>
          <View style={{opacity: 0.5}}>
            <Phone width={24} height={24}/>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your number"
            placeholderTextColor={'grey'}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={text => setPhone(text)}
            returnKeyType="next"
            onSubmitEditing={() => phoneInput.current.focus()}
            blurOnSubmit={false}
          />
        </View>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.textName}>Password</Text>
        <View style={styles.textInputView}>
          <View style={{opacity: 0.5,marginRight:10}}>
            <Lock width={24} height={24}/>
          </View>
          <TextInput
            style={[styles.textInput, {width: '75%'}]}
            placeholder="Enter your password"
            placeholderTextColor={'grey'}
            secureTextEntry={showPassword}
            value={password}
            onChangeText={text => setPassword(text)}
            ref={phoneInput}
            returnKeyType="send"
            onSubmitEditing={submit}
            blurOnSubmit={true}
          />
          <View style={{marginRight: 10}}>
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff width={24} height={24} opacity={0.5} />
              ) : (
                <Eye width={24} height={24} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
        <TouchableOpacity style={{marginTop:20}}>
          <Text
            style={{
              color: '#0b0b0b',
              fontSize: 14,
              fontWeight: '400',
              textDecorationLine: 'underline',
            }}>
            Forget Password ?
          </Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.signupView} onPress={()=>submit()}>
        <Text style={styles.signupText}>Sign In</Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 30,
          borderBottomWidth: 2,
          borderBottomColor: '#F3F3F3',
        }}></View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 30,
        }}>
        <Text
          style={{
            color: '#0b0b0b',
            opacity: 0.5,
            fontSize: 14,
            fontWeight: '400',
          }}>
          Or Sign In With
        </Text>
        <TouchableOpacity style={styles.touchableOpacityStyle}>
          <Google width={24} height={24}/>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '900',
              marginLeft: 24,
            }}>
            Sign In With Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchableOpacityStyle, {marginTop: 15}]}>
            <Facebook width={24} height={24}/>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '900',
              marginLeft: 24,
            }}>
            Sign In With Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '85%',
    fontSize: 15,
    color: '#0b0b0b',
  },
  inputView: {
    marginTop: 35,
  },
  textName: {
    color: '#0b0b0b',
    fontSize: 14,
    fontWeight: 900,
    marginBottom: 5,
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 15,
    borderColor: '#f3f3f3',
    backgroundColor: 'white',
  },
  signupView: {
    width: '100%',
    height: 56,
    marginTop: 40,
    backgroundColor: '#0b0b0b',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '900',
    fontFamily: 'Avenir Regular',
  },
  touchableOpacityStyle: {
    width: '100%',
    height: 56,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#A7A9B7',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 90,
    elevation: 10,
    flexDirection: 'row',
    backfaceVisibility:'hidden',
  },
});

export default Sign_up;
