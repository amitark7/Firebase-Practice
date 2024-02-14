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
          placeholder='Enter Mobile'
          style={styles.input}
          onChangeText={(value)=>setMobile(value)}
          value={mobile}
          />
          <TextInput 
          placeholder='Enter Password'
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
  },
  SignupContainer:{
    alignItems:'center',
    backgroundColor:'#00CCCD',
    paddingHorizontal:20,
    paddingVertical:20
  },
  Txt:{
    color:'#fff'
  },
  input:{
    width:180,
    borderWidth:2,
    borderColor:'#fff',
    marginVertical:10,
    borderRadius:8,
    paddingLeft:10
  }
})