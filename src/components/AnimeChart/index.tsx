import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
} from 'recharts';
import { Box, Typography } from '@mui/material';

const AnimeChart = ({ data }: any) => {
  console.log(data);
  return (
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
        </linearGradient>
        <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey='year' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip
        content={({ active, payload, label }) => {
          if (active && payload && payload.length) {
            return (
              <Box
                border={1}
                borderColor='red'
                borderRadius={2}
                padding={2}
                maxWidth={200}
                textAlign='center'
                sx={{ backgroundColor: 'white' }}
              >
                <Typography fontWeight='bold'>{label}</Typography>
                <Typography>{payload[0].payload.name}</Typography>
              </Box>
            );
          }

          return null;
        }}
      />
      <Area
        type='monotone'
        dataKey='count'
        stroke='#8884d8'
        fillOpacity={1}
        fill='url(#colorUv)'
      />
    </AreaChart>
  );
};

export default AnimeChart;
