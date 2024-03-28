import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Sign_up from './Sign_up';
import Sign_in from './Sign_in';

const Switch_button = () => {
  const [selectTab, setSelectTab] = useState(0);

  return (
    <View style={{flex: 1, marginLeft: 25, marginRight: 25, marginTop: 140}}>
      <View
        style={{
          alignSelf: 'center',
          width: 340,
          height: 50,
          borderRadius: 100,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: '#b2b2b2',
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: '80%',
            backgroundColor: selectTab == 0 ? 'white' : '#b2b2b2',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectTab(0);
          }}>
          <Text style={{color: selectTab == 0 ? '#000' : '#fff', fontSize: 15, fontWeight:'500'}}>
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '50%',
            height: '80%',
            backgroundColor: selectTab == 1 ? 'white' : '#b2b2b2',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectTab(1);
          }}>
          <Text style={{color: selectTab == 1 ? '#000' : '#fff', fontSize: 15, fontWeight:'500'}}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      {selectTab == 0 ? (
        <View>
          <Sign_up />
        </View>
      ) : (
        <View>
          <Sign_in />
        </View>
      )}
    </View>
  );
};

export default Switch_button;
