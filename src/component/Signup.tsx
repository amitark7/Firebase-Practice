import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  const ButtonHandle = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        return (
          <View>
            <Text>{`Welcome ${name}`}</Text>
          </View>
        );
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.Container}>
      <View style={styles.SignupContainer}>
        <Text style={styles.Txt}>REGISTER</Text>
        <TextInput
          placeholder="Enter Name"
          style={styles.input}
          onChangeText={value => setName(value)}
          value={name}
        />
        <TextInput
          placeholder="Enter Email"
          style={styles.input}
          onChangeText={value => setEmail(value)}
          value={email}
        />
        <TextInput
          placeholder="Enter Mobile"
          style={styles.input}
          onChangeText={value => setMobile(value)}
          value={mobile}
        />
        <TextInput
          placeholder="Enter Password"
          style={styles.input}
          onChangeText={value => setPassword(value)}
          value={password}
        />
        <TouchableOpacity style={styles.Btn} onPress={ButtonHandle}>
          <Text style={styles.BtnTxt}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  Container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignupContainer: {
    alignItems: 'center',
    backgroundColor: '#EAF0F1',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
  },
  Txt: {
    color: '#00CCCD',
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    borderBottomWidth: 2,
    borderColor: '#00CCCD',
    marginVertical: 6,
  },
  Btn: {
    width: 130,
    backgroundColor: '#00CCCD',
    borderRadius: 8,
    marginTop: 10,
  },
  BtnTxt: {
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#fff',
    fontWeight: '900',
  },
});
