// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Sign_in from './Sign_in';
// import Sign_up from './Sign_up';
// import Custom_Button from './Custom_Button';
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Switch_button from './Switch_button';

const Main = () => {
  return (
    <View style={styles.mainScreen}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} animated={true} />
      <KeyboardAvoidingView>
        <ScrollView bounces={false}>
          <Switch_button />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
export default Main;
