import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatLabelInput from './FloatLabelInput';
import AppButton from './AppButton';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import SignUp from './SignUp';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    props.loginUser({ user: { username: username.toLowerCase(), password } });
  };
  return (
    <SafeAreaView>
      <FloatLabelInput
        value={username}
        setValue={setUsername}
        mainLabel="Username"
      />
      <FloatLabelInput
        value={password}
        setValue={setPassword}
        mainLabel="Password"
        secureTextEntry={true}
      />
      <AppButton onPress={handleSubmit}>Login</AppButton>

      <View>
        <Text>Don't have an account? Sign Up Below</Text>
      </View>
      <SignUp />
    </SafeAreaView>
  );
};

export default connect(null, { loginUser })(Login);

const styles = StyleSheet.create({});
