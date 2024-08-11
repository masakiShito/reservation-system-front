import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import axios from 'axios';

const ReservationForm = ({
  open,
  handleClose,
  reservation,
  fetchReservations,
}) => {
  const [name, setName] = useState(reservation ? reservation.name : '');
  const [date, setDate] = useState(reservation ? reservation.date : '');

  useEffect(() => {
    if (reservation) {
      setName(reservation.name);
      setDate(reservation.date);
    }
  }, [reservation]);

  const handleSave = async () => {
    try {
      if (reservation) {
        await axios.put(
          `http://localhost:8080/api/reservations/${reservation.id}`,
          { name, date }
        );
      } else {
        await axios.post('http://localhost:8080/api/reservations', {
          name,
          date,
        });
      }
      fetchReservations();
      handleClose();
    } catch (error) {
      console.error('予約の保存に失敗しました:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {reservation ? '予約を編集' : '新しい予約を追加'}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="名前"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="日付"
          type="date"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          キャンセル
        </Button>
        <Button onClick={handleSave} color="primary">
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReservationForm;
