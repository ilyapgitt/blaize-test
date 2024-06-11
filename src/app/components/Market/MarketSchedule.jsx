import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from './CustomTooltip';

const data = [
  {
    Poly: 4000,
    ETH: 2400,
    Gaming: 2400,
  },
  {
    name: 'Page B',
    Poly: 3000,
    ETH: 1398,
    Gaming: 2210,
  },
  {
    name: 'Page C',
    Poly: 2000,
    ETH: 9800,
    Gaming: 2290,
  },
  {
    name: 'Page D',
    Poly: 2780,
    ETH: 3908,
    Gaming: 2000,
  },
  {
    name: 'Page E',
    Poly: 1890,
    ETH: 4800,
    Gaming: 2181,
  },
  {
    name: 'Page F',
    Poly: 2390,
    ETH: 3800,
    Gaming: 2500,
  },
  {
    name: 'Page G',
    Poly: 3490,
    ETH: 4300,
    Gaming: 2100,
  },
];


export const MarketSchedule = () => {
  return (
    <ResponsiveContainer width={'100%'} height={250}>
      <LineChart
        width={'100%'}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 3,
          left: 3,
          bottom: 5,
        }}
      >
        <Tooltip  content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />}/>
        <Line type="monotone" dataKey="ETH" stroke="#85ACF5" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Poly" stroke="#8743FC" />
        <Line type="monotone" dataKey="Gaming" stroke="#BC0D04" />
      </LineChart>
    </ResponsiveContainer>
  )
};
