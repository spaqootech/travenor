import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { router } from 'expo-router'
const onboardin3 = () => {
  return (
    <View style={{flex: 1,gap:20}}>
      <Image
        source={require('../assets/onboarding-image-3.png')}
        style={{ width: '100%', height: '55%', borderRadius:20 }}/>
        <View style={{padding: 30, flex: 1}}>
          <Text style={{fontSize:35, textAlign:'center', fontWeight:700}}>Life is short and the world is 
            <View>
              <Text style={{color:'#FF7029'}}> wide</Text>
              <Image
        source={require('../assets/line.png')}
        style={{  height: 20 }}/>              
            </View>
          </Text>
          <Text style={{fontSize:18, textAlign:'center', marginTop:10, color:'#666'}}>
            At Friends tours and travel, we customize reliable and trutworthy educational tours to destinations all over the world
          </Text>

          <View style={{flexDirection:'row', justifyContent:'center', gap:5, marginTop:20}}>
            <View style={{padding:5, borderRadius:100, backgroundColor:'lightblue'}}></View>
            <View style={{padding:5, borderRadius:100, backgroundColor:'lightblue'}}></View>
            <View style={{padding:5, borderRadius:100,width:40, backgroundColor:'#0D6EFD'}}></View>
          </View>

          <Pressable onPress={()=> router.push('/signIn')} style={{marginTop:20, backgroundColor:'#0D6EFD', padding:20, borderRadius:20, alignItems:'center'}}>
          <Text style={{color:'#fff',fontSize:18}}>Get Started</Text>
        </Pressable>

        </View>
        
    </View>
  )
}

export default onboardin3

const styles = StyleSheet.create({})