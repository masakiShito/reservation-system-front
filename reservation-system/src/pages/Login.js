import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // axiosのインポート

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/login',
        new URLSearchParams({
          username: email,
          password: password,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (response.data === 'ログイン成功') {
        console.log('Navigating to dashboard'); // ここでログを出力
        onLoginSuccess(); // ログイン成功時にonLoginSuccessを呼び出す
        navigate('/dashboard');
      } else {
        alert('ログインに失敗しました。');
      }
    } catch (error) {
      console.error('ログインエラー:', error);
      alert('ログインに失敗しました。');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      style={{
        backgroundColor: '#f5f5f5', // シンプルな背景色
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <Container
        maxWidth="xs"
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          style={{ fontWeight: 600 }}
        >
          ログイン
        </Typography>
        <LoginForm onLogin={handleLogin} />
      </Container>
    </Box>
  );
};

export default Login;
