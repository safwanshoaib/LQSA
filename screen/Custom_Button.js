import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export const screenWidth = Dimensions.get('window').width;
let componentWidth = screenWidth;

const TransportMethod = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = () => {
    if (activeIndex === 0) {
      slideRight();
      setActiveIndex(1);
    } else {
      slideLeft();
      setActiveIndex(0);
    }
  };

  const handleViewRef = useRef(null);

  const slideRight = () =>
    handleViewRef.current.animate({
      0: {
        translateX: 0,
      },
      0.5: {
        translateX: 100,
      },
      1: {
        translateX: componentWidth / 2 - 5,
      },
    });

  const slideLeft = () =>
    handleViewRef.current.animate({
      0: {
        translateX: componentWidth / 2 - 5,
      },
      0.5: {
        translateX: componentWidth / 4,
      },
      1: {
        translateX: 0,
      },
    });

  return (
    <TouchableWithoutFeedback onPress={updateIndex}>
      <View
        style={styles.backgroundSwitch}
        onLayout={event => {
          componentWidth = event.nativeEvent.layout.width;
        }}
      >
        <Animatable.View
          duration={500}
          style={styles.buttonSwitch}
          ref={handleViewRef}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={[styles.textOption]}>Sign up</Text>
          <Text style={[styles.textOption]}>Sign in</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
    
  );
};

const styles = StyleSheet.create({
  backgroundSwitch: {
    backgroundColor: '#B2B2B2',
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
  },
  textOption: {
    width: '50%',
    textAlign: 'center',
    color:'#0B0B0B',
  },
  buttonSwitch: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '80%',
    width: '48%',
    borderRadius: 100,
    left: '2%',
    right: '2%',
  },
});

export default TransportMethod;

{/* <View style={{padding:20,backgroundColor:'#F2F2F2',marginTop:140,marginLeft:25,marginRight:25}}>
        <Custom_Button />
      </View>  */}