import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Signup = () => {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[mobile,setMobile]=useState('');

  return (
    <View style={styles.Container}>
      <View style={styles.SignupContainer}>
          <Text style={styles.Txt}>REGISTER</Text>
          <TextInput 
          placeholder='Enter Name'
          style={styles.input}
          onChangeText={(value)=>setName(value)}
          value={name}
          />
          <TextInput 
          placeholder='Enter Email'
          style={styles.input}
          onChangeText={(value)=>setEmail(value)}
          value={email}
          />
          <TextInput 
          placeholder='Enter Name'
          style={styles.input}
          onChangeText={(value)=>setMobile(value)}
          value={mobile}
          />
          <TextInput 
          placeholder='Enter Name'
          style={styles.input}
          onChangeText={(value)=>setPassword(value)}
          value={password}
          />
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  Container:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#000'
  },
  SignupContainer:{
    alignItems:'center'
  },
  Txt:{
    color:'#fff'
  },
  input:{
    height:20,
    borderWidth:2,
    borderColor:'#fff'
  }
})