/*
    ログインボタンのコンポーネント
*/
import React from 'react';
import { Button } from '@mui/material';

const LoginButton = ({ onClick, children }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={onClick}
      style={{
        marginTop: '20px',
        fontFamily: 'Poppins, sans-serif',
        padding: '10px 0',
        backgroundColor: '#4CAF50', // シンプルな緑色
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '30px',
        color: 'white',
        transition: 'background-color 0.3s ease', // ホバーのトランジション
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#388E3C')} // ホバー時に濃い緑色に変更
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')} // 元の緑色に戻す
    >
      {children}
    </Button>
  );
};

export default LoginButton;
