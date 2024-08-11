import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import axios from 'axios';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import ReservationForm from '../components/ReservationForm';

const Dashboard = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/reservations'
      );
      setReservations(response.data);
      setLoading(false);
    } catch (error) {
      console.error('予約の取得に失敗しました:', error);
      setLoading(false);
    }
  };

  const deleteReservation = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/reservations/${id}`);
      fetchReservations();
    } catch (error) {
      console.error('予約の削除に失敗しました:', error);
    }
  };

  const openForm = (reservation = null) => {
    setSelectedReservation(reservation);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedReservation(null);
  };

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
        mb={4}
      >
        <Typography variant="h4">ダッシュボード</Typography>
        <Button variant="contained" color="primary" onClick={() => openForm()}>
          予約を追加
        </Button>
      </Box>
      {loading ? (
        <Typography>読み込み中...</Typography>
      ) : (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>名前</TableCell>
                <TableCell>日付</TableCell>
                <TableCell>アクション</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reservations.map((reservation) => (
                <TableRow key={reservation.id}>
                  <TableCell>{reservation.id}</TableCell>
                  <TableCell>{reservation.name}</TableCell>
                  <TableCell>{reservation.date}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => openForm(reservation)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => deleteReservation(reservation.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
      <ReservationForm
        open={isFormOpen}
        handleClose={closeForm}
        reservation={selectedReservation}
        fetchReservations={fetchReservations}
      />
    </Container>
  );
};

export default Dashboard;
