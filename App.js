import * as React from 'react';
import { useEffect, useState } from 'react'
import { Platform, StyleSheet, Text, View, Animated } from 'react-native';




export default function App() {

  const [width, setWidth ] = useState(new Animated.Value(15))
  const [height, setHeight ] = useState(new Animated.Value(40))
  const [animatedValue, setAnimatedValue ] = useState(new Animated.Value(0))

 
  Animated.loop(
    Animated.sequence([
      Animated.timing(
        width,{
          toValue: 30,      
          duration: 1000,
        }),
      Animated.delay(300),
      Animated.timing(
        width,{
          toValue: 15,      
          duration: 1000,
        }),
    ])
  ).start()
  Animated.loop(
    Animated.sequence([
      Animated.timing(
        height,{
          toValue: 60,      
          duration: 1000,
        }),
  Animated.delay(300),
      Animated.timing(
        height,{
          toValue: 0,      
          duration: 1000,
        }),
    ])
  ).start() 

 

  return (
    
    <View style={styles.container}>

      <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center',}}>
        <Animated.View style={[styles.light, {height: height, width: width} ]}>
          <Animated.View style={[styles.circle, {}]}></Animated.View>
        </Animated.View>
      </View>
      <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: 10,}}>
        <Animated.View style={[styles.light, {height: height, width: width, backgroundColor: " rgba(255, 0, 173, 0.5)"} ]}>
          <Animated.View style={[styles.circle, {backgroundColor: " rgba(255, 0, 173, 1)"}]}></Animated.View>
        </Animated.View>
      </View>
      <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: -5,}}>
        <Animated.View style={[styles.light, {height: height, width: width, backgroundColor: "rgba(41, 212, 221, 0.5)"} ]}>
          <Animated.View style={[styles.circle, {backgroundColor: "rgba(41, 212, 221, 1)"}]}></Animated.View>
        </Animated.View>
      </View>
      <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center',}}>
        <Animated.View style={[styles.light, {height: height, width: width} ]}>
          <Animated.View style={[styles.circle, {}]}></Animated.View>
        </Animated.View>
      </View>
      <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: 10,}}>
        <Animated.View style={[styles.light, {height: height, width: width, backgroundColor: " rgba(255, 0, 173, 0.5)"} ]}>
          <Animated.View style={[styles.circle, {backgroundColor: " rgba(255, 0, 173, 1)"}]}></Animated.View>
        </Animated.View>
      </View>
      <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: -5,}}>
        <Animated.View style={[styles.light, {height: height, width: width, backgroundColor: "rgba(41, 212, 221, 0.5)"} ]}>
          <Animated.View style={[styles.circle, {backgroundColor: "rgba(41, 212, 221, 1)"}]}></Animated.View>
        </Animated.View>
      </View>
      <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center',}}>
        <Animated.View style={[styles.light, {height: height, width: width} ]}>
          <Animated.View style={[styles.circle, {}]}></Animated.View>
        </Animated.View>
      </View>
      <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: 10,}}>
        <Animated.View style={[styles.light, {height: height, width: width, backgroundColor: " rgba(255, 0, 173, 0.5)"} ]}>
          <Animated.View style={[styles.circle, {backgroundColor: " rgba(255, 0, 173, 1)"}]}></Animated.View>
        </Animated.View>
      </View>
      <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: -5,}}>
        <Animated.View style={[styles.light, {height: height, width: width, backgroundColor: "rgba(41, 212, 221, 0.5)"} ]}>
          <Animated.View style={[styles.circle, {backgroundColor: "rgba(41, 212, 221, 1)"}]}></Animated.View>
        </Animated.View>
      </View>
      <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center',}}>
        <Animated.View style={[styles.light, {height: height, width: width} ]}>
          <Animated.View style={[styles.circle, {}]}></Animated.View>
        </Animated.View>
      </View>
      <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: 10,}}>
        <Animated.View style={[styles.light, {height: height, width: width, backgroundColor: " rgba(255, 0, 173, 0.5)"} ]}>
          <Animated.View style={[styles.circle, {backgroundColor: " rgba(255, 0, 173, 1)"}]}></Animated.View>
        </Animated.View>
      </View>
      <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', top: -5,}}>
        <Animated.View style={[styles.light, {height: height, width: width, backgroundColor: "rgba(41, 212, 221, 0.5)"} ]}>
          <Animated.View style={[styles.circle, {backgroundColor: "rgba(41, 212, 221, 1)"}]}></Animated.View>
        </Animated.View>
      </View>
      
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
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
    backgroundColor: "rgba(rgba(53, 255, 46, 0.5)",
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
      
  },
});
