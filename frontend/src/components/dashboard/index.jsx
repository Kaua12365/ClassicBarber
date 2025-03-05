import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';
import axios from 'axios';
import './index.scss';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

function Dashboard() {
  const [totalAgendamentos, setTotalAgendamentos] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3002/agendar')
      .then(resp => {
        setTotalAgendamentos(resp.data.total_agendamentos); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar agendamentos:', error);
        setLoading(false);
      });
  }, []);

  const data = {
    labels: ['Agendamentos Realizados', 'Espaço Livre'],
    datasets: [
      {
        label: 'Agendamentos',
        data: [totalAgendamentos, 100 - totalAgendamentos],
        backgroundColor: ['#4caf50', '#e0e0e0'],
        borderColor: ['#388e3c', '#9e9e9e'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          fontColor: 'black',
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    animation: {
      animateRotate: true,
    },
    layout: {
      padding: 0,
    },
    backgroundColor: 'transparent',
  };

  return (
    <Box className="dashboard-container">
      <Grid className="grid-container" container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Card className="card">
            <CardContent className="card-content">
              {loading ? (
                <Typography className="card-value">Carregando...</Typography>
              ) : (
                <div className="chart-container">
                  <Pie data={data} options={options} />
                </div>
              )}
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
}

export default Dashboard;
