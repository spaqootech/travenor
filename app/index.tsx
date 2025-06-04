import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push('/onboarding')} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.logo_text}>Travenor</Text>
      </Pressable>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
container:{
  backgroundColor: '#0D6EFD',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
logo_text:{
  fontSize:35,
  fontWeight: 700,
  color: '#fff',
}
})