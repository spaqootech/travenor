import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { router } from 'expo-router'

const signIn = () => {
  return (
    <View style={{flex : 1,justifyContent:'flex-start', paddingVertical:40, paddingHorizontal: 20}}>
    
    <View style={{backgroundColor:'rgba(0,0,0,0.07)', padding:10, borderRadius:'100%', height:45, width:45, alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../assets/left-black.png')} style={{height:15, width:7}}/>
    </View>
    
    <Text style={{fontSize:30, fontWeight:600, textAlign:'center', marginTop:30}}>Sign in now</Text>
    <Text style={{ textAlign:'center', fontSize:17, color:'gray', marginTop:10}}>Please sign in to continue our app</Text>
      <TextInput
        placeholder='Email'
        style={{
          backgroundColor: 'rgba(0,0,0,0.07)',
          padding: 17,
          borderRadius: 10,
          marginTop: 40,

        }}/>

    <View style={{position:'relative'}}>
      <TextInput
        placeholder='*******'
        style={{
          backgroundColor: 'rgba(0,0,0,0.07)',
          padding: 17,
          borderRadius: 10,
          marginTop: 20,paddingRight:50
        }}/>
      <Image source={require('../assets/eye-close.png')} style={{height:17, width:25, position:'absolute',top:35, right:20}}/>

    </View>
    <Text>Forget Password?</Text>

    
              <Pressable onPress={()=> router.push('/signIn')} style={{marginTop:20, backgroundColor:'#0D6EFD', padding:20, borderRadius:20, alignItems:'center'}}>
              <Text style={{color:'#fff',fontSize:18}}>Sign In</Text>
            </Pressable>

    <Text>Forget Password?</Text>
    <Text>Forget Password?</Text>


<View>
      <Image source={require('../assets/facebook.png')} style={{height:40, width:40}}/>
      <Image source={require('../assets/instagram.png')} style={{height:40, width:40}}/>
      <Image source={require('../assets/tweeter.png')} style={{height:40, width:40}}/>

</View>
    </View>
  )
}

export default signIn

const styles = StyleSheet.create({})