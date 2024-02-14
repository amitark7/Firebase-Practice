import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Signup from './component/Signup'

const App = () => {
  return (
    <View style={styles.Container}>
      <Signup/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  Container:{
    flex:1
  }
})