import React from 'react';
import InputField from '../components/InputField';
import PasswordField from '../components/PasswordField';
import LoginButton from '../components/LoginButton';
import SocialButton from '../components/SocialButton';

const Login = () => {
  return (
    <div>
      <h1>로그인</h1>
      <InputField />
      <PasswordField />
      <LoginButton />
      <p>또는</p>
      <SocialButton />
    </div>
  );
};

export default Login;
