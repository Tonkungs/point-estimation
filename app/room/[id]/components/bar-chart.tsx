// components/BarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { ESTIMATION_POINT } from '@/constants/point';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IProps {
  className?: string,
  Points: number[],
  PointMax: number,
}
export default function BarChart(props: IProps) {
  const data: ChartData<'bar'> = {
    labels: ESTIMATION_POINT,
    datasets: [
      {
        label: 'Point',
        data: props.Points,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Estimation Point',
      },
    },
    scales: {
      x: {
        grid: {
          offset: true
        }
      }
    }
    // scales: {
    //   x: {
    //     beginAtZero: true,
    //     max: props.PointMax, // Set the maximum value for the y-axis
    //     offset: false,
    //   },
    // },
  };

  return <Bar className={props.className} data={data} options={options} />;
};

