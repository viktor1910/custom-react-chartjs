import React, { useState, ChangeEvent } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import {
  Card,
  Checkbox,
  Stack,
  Typography,
  FormControlLabel,
  checkboxClasses,
  Box,
} from '@mui/material';
import annotationPlugin from 'chartjs-plugin-annotation';
import SquareShape from '../assets/SquareShape';
import SquareShapeFilled from '../assets/SquareShapeFilled';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  annotationPlugin
);

const chartData: ChartData = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Dataset 1',
      borderColor: 'black',
      borderWidth: 2,
      fill: false,
      data: labels.map(
        () => Math.floor(Math.random() * (1000 + 1000) + 1) - 1000
      ),
      yAxisID: 'y',
    },
    {
      type: 'line' as const,
      label: 'Dataset 2',
      borderColor: 'green',
      borderWidth: 2,
      fill: false,
      data: labels.map(
        () => Math.floor(Math.random() * (1000 + 1000) + 1) - 1000
      ),
      yAxisID: 'y1',
    },
  ],
};

const chartOptions: ChartOptions = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: 'black',
      },
      border: {
        dash: [5, 5],
      },
    },
    y: {
      ticks: {
        stepSize: 1000,
      },
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    annotation: {
      annotations: {
        maxLine: {
          type: 'line',
          yMin: 500,
          yMax: 500,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
        },
        minLine: {
          type: 'line',
          yMin: -500,
          yMax: -500,
          borderColor: 'blue',
          borderWidth: 2,
        },
      },
    },
  },
};

const ChartComponent: React.FC = () => {
  const [selectedLegends, setSelectedLegends] = useState<string[]>(
    chartData.datasets.map(dataset => dataset.label!)
  );

  const handleLegendChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.target.name;

    const updatedSelection = selectedLegends.includes(selectedOption)
      ? selectedLegends.filter(legend => legend !== selectedOption)
      : [...selectedLegends, selectedOption];
    setSelectedLegends(updatedSelection);
  };

  const dynamicChartData: ChartData = {
    labels: chartData.labels,
    datasets: chartData.datasets.filter(dataset =>
      selectedLegends.includes(dataset.label!)
    ),
  };

  return (
    <Card
      sx={{
        padding: 2,
        width: '100%',
        height: '100%',
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography>Multi-devices</Typography>
        <Typography>M - 6 months</Typography>
      </Stack>
      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">unit 1</Typography>
          <Typography variant="body2">unit 2</Typography>
        </Stack>
        <Chart type="line" data={dynamicChartData} options={chartOptions} />
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          marginTop: 4,
        }}
      >
        <Typography>Unit (I1)</Typography>
        <div>
          {chartData.datasets.map(dataset => (
            <FormControlLabel
              key={dataset.label}
              control={
                <Checkbox
                  checked={selectedLegends.includes(dataset.label!)}
                  onChange={handleLegendChange}
                  name={dataset.label}
                  icon={<SquareShape />}
                  checkedIcon={<SquareShapeFilled />}
                  sx={{
                    borderRadius: 8,
                    [`&, &.${checkboxClasses.checked}`]: {
                      color: dataset.borderColor,
                    },
                  }}
                />
              }
              label={dataset.label}
            />
          ))}
        </div>
      </Stack>
    </Card>
  );
};

export default ChartComponent;
