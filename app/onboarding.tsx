import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
const onboarding = () => {
  return (
    <View style={{flex: 1,}}>
      <Image
        source={require('../assets/onboarding-image-1.png')}
        style={{ width: '100%', height: '55%', borderRadius:20 }}/>
        <Text>Life is short and world is wide</Text>
    </View>
  )
}

export default onboarding

const styles = StyleSheet.create({})