import * as React from 'react';
import { useEffect, useState } from 'react'
import { Platform, StyleSheet, Text, View, Animated, TextInput } from 'react-native';




export default function App() {

  const [blueCircleWidht, setBlueCircleWidht ] = useState(new Animated.Value(15))
  const [blueCircleHeight, setBlueCircleHeight ] = useState(new Animated.Value(40))
  const [redCircleWidth, setRedCircleWidth ] = useState(new Animated.Value(15))
  const [redCircleHeight, setRedCircleHeight ] = useState(new Animated.Value(40))
  const [greenCircleWidth, setGreenCircleWidth ] = useState(new Animated.Value(15))
  const [greenCircleHeight, setGreenCircleHeight ] = useState(new Animated.Value(40))
  
  const [blueLightIntesity , setBlueLightIntesity] = useState(500)
  const [redLightIntesity , setRedLightIntesity] = useState(100)
  const [greenLightIntesity , setGreenLightIntesity] = useState(300)

  const redColor = "rgba(255, 0, 173, 1)"
  const redLight = "rgba(255, 0, 173, 0.5)"
  const blueColor = "rgba(41, 212, 221, 1)"
  const blueLight = "rgba(41, 212, 221, 0.5)"
  const greenColor = "rgba(rgba(53, 255, 46, 1)"
  const greenLight = "rgba(rgba(53, 255, 46, 0.5)"

  //Blue circle Animation 
  Animated.loop(
    Animated.sequence([
      Animated.timing(blueCircleWidht,{toValue: 30, duration: 1000}),
      Animated.delay(blueLightIntesity),
      Animated.timing(blueCircleWidht,{toValue: 15, duration: 1000}),
    ])
  ).start()

  Animated.loop(
    Animated.sequence([
      Animated.timing(blueCircleHeight,{toValue: 60, duration: 1000}),
      Animated.delay(blueLightIntesity),
      Animated.timing(blueCircleHeight,{toValue: 0, duration: 1000,}),
    ])
  ).start()  
  //Red circle Animation 
  Animated.loop(
    Animated.sequence([
      Animated.timing(redCircleWidth,{toValue: 30, duration: 1000}),
      Animated.delay(redLightIntesity),
      Animated.timing(redCircleWidth,{toValue: 15, duration: 1000}),
    ])
  ).start()

  Animated.loop(
    Animated.sequence([
      Animated.timing(redCircleHeight,{toValue: 60, duration: 1000}),
      Animated.delay(redLightIntesity),
      Animated.timing(redCircleHeight,{toValue: 0, duration: 1000,}),
    ])
  ).start() 
  //Green circle Animation 
  Animated.loop(
    Animated.sequence([
      Animated.timing(greenCircleWidth,{toValue: 30, duration: 1000}),
      Animated.delay(greenLightIntesity),
      Animated.timing(greenCircleWidth,{toValue: 15, duration: 1000}),
    ])
  ).start()

  Animated.loop(
    Animated.sequence([
      Animated.timing(greenCircleHeight,{toValue: 60, duration: 1000}),
      Animated.delay(greenLightIntesity),
      Animated.timing(greenCircleHeight,{toValue: 0, duration: 1000,}),
    ])
  ).start()

 

  return (
    
    <View style={styles.container}>
      <View style={styles.lightsView}>
        <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: 10,}}>
          <Animated.View style={[styles.light, {height: redCircleHeight, width: redCircleWidth, backgroundColor: redLight} ]}>
            <Animated.View style={[styles.circle, {backgroundColor: redColor }]}></Animated.View>
          </Animated.View>
        </View>
        <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: -5,}}>
          <Animated.View style={[styles.light, {height: blueCircleHeight, width: blueCircleWidht, backgroundColor: blueLight} ]}>
            <Animated.View style={[styles.circle, {backgroundColor: blueColor}]}></Animated.View>
          </Animated.View>
        </View>
        <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center',}}>
          <Animated.View style={[styles.light, {height: greenCircleHeight, width: greenCircleWidth, backgroundColor: greenLight} ]}>
            <Animated.View style={[styles.circle, {backgroundColor: greenColor}]}></Animated.View>
          </Animated.View>
        </View>
        <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: 10,}}>
          <Animated.View style={[styles.light, {height: redCircleHeight, width: redCircleWidth, backgroundColor: redLight} ]}>
            <Animated.View style={[styles.circle, {backgroundColor: redColor }]}></Animated.View>
          </Animated.View>
        </View>
        <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: -5,}}>
          <Animated.View style={[styles.light, {height: blueCircleHeight, width: blueCircleWidht, backgroundColor: blueLight} ]}>
            <Animated.View style={[styles.circle, {backgroundColor: blueColor}]}></Animated.View>
          </Animated.View>
        </View>
        <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center',}}>
          <Animated.View style={[styles.light, {height: greenCircleHeight, width: greenCircleWidth, backgroundColor: greenLight} ]}>
            <Animated.View style={[styles.circle, {backgroundColor: greenColor}]}></Animated.View>
          </Animated.View>
        </View> 
        <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: 10,}}>
          <Animated.View style={[styles.light, {height: redCircleHeight, width: redCircleWidth, backgroundColor: redLight} ]}>
            <Animated.View style={[styles.circle, {backgroundColor: redColor }]}></Animated.View>
          </Animated.View>
        </View>
        <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: -5,}}>
          <Animated.View style={[styles.light, {height: blueCircleHeight, width: blueCircleWidht, backgroundColor: blueLight} ]}>
            <Animated.View style={[styles.circle, {backgroundColor: blueColor}]}></Animated.View>
          </Animated.View>
        </View>
        <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center',}}>
          <Animated.View style={[styles.light, {height: greenCircleHeight, width: greenCircleWidth, backgroundColor: greenLight} ]}>
            <Animated.View style={[styles.circle, {backgroundColor: greenColor}]}></Animated.View>
          </Animated.View>
        </View>
      </View>
      <Text style={{color: "white"}}>Choose Intensivity</Text>
      <View style={styles.inputsView}>
        <TextInput value={redLightIntesity.toString()}  keyboardType='numeric' style={[styles.input, {backgroundColor: redLight}]}></TextInput>
        <TextInput value={greenLightIntesity.toString()} keyboardType='numeric' style={[styles.input, {backgroundColor: greenLight}]}></TextInput>
        <TextInput value={blueLightIntesity.toString()} keyboardType='numeric' style={[styles.input, {backgroundColor: blueLight}]}></TextInput>
      </View>  
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  lightsView:{
    flexDirection: 'row',
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  circle: {
    backgroundColor: 'rgba(53, 255, 46, 1)',
    width: 15,
    height: 40,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 25,
   
  },
  light: {
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
      
  },
  inputsView:{
    flexDirection: 'row',
    top: 200,
  },
  input:{
    color: "white",
    borderRadius: 20,
    margin: 5,
    width: 110,
    height: 30,
    textAlign: 'center',
  }
});
