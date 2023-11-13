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
    },
  ],
};

const chartOptions: ChartOptions = {
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
  const [selectedLegends, setSelectedLegends] = useState<string[]>([]);

  const handleLegendChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.target.name;
    // Handle the selected legend item
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
        padding: 4,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography>Multi-devices</Typography>
        <Typography>M - 6 months</Typography>
      </Stack>

      <Chart
        type="line"
        data={dynamicChartData}
        width={100}
        height={20}
        options={chartOptions}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
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
