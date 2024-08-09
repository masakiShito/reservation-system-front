import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ログアウト処理（例えば、認証トークンの削除など）
    // ログアウト後、ログイン画面にリダイレクト
    navigate('/login');
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h3" component="h1" gutterBottom>
          ダッシュボード
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          ようこそ、ユーザーさん！
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert('予約一覧を表示します')}
            style={{ marginRight: '10px' }}
          >
            予約一覧
          </Button>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            ログアウト
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
