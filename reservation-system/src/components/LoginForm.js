import React, { useState } from 'react';
import { Box } from '@mui/material';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(email, password);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <LoginInput
        label="メールアドレス"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <LoginInput
        label="パスワード"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton onClick={handleLogin}>ログイン</LoginButton>
    </Box>
  );
};

export default LoginForm;
