import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import useCart from '../../../../hooks/useCart';

import { MdLocalOffer } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMoneyCheck } from "react-icons/fa6";
import { RiContactsBook2Fill } from "react-icons/ri";


import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

// second chart


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


 
 


const UserHome = () => {
    const {user} = useContext(AuthContext);
    const [cart] = useCart();


    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = (_, index) => {
      setActiveIndex(index);
    };
    
 

    return (
        <div className='w-full my-16'>
            <h2 className="text-center text-4xl my-10">Welcome {user.displayName}</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mx-4 md:mx-10'>
                <div className='border flex items-center justify-center gap-3 h-[130px]'>
                    <span className='text-5xl'><MdLocalOffer /></span>
                    <h3 className='text-3xl text-center'>Offers</h3>
                </div>
                <div className='border flex items-center justify-center gap-3 h-[130px]'>
                    <span className='text-5xl'><TbTruckDelivery /></span>
                    <h3 className='text-3xl  text-center'>Orders: {cart.length}</h3>
                </div>
                <div className='border flex items-center justify-center gap-3 h-[130px]'>
                    <span className='text-5xl'><FaMoneyCheck /></span>
                    <h3 className='text-3xl  text-center'>Payment: 1</h3>
                </div>
                <div className='border flex items-center justify-center gap-3 h-[130px]'>
                    <span className='text-5xl'><RiContactsBook2Fill /></span>
                    <div>
                        <h3 className='text-3xl   text-center'>Contact </h3>
                        <p>01567825462</p>
                    </div>
                </div>
               

                <div className='md:col-span-2 border h-[350px] md:h-[400px]'>
                <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
              />
            </PieChart>
          </ResponsiveContainer>
                </div>

                {/* second chart */}
                <div className='md:col-span-2 flex justify-center items-center border h-[400px]'>
                    <BarChart
                    width={500}
                    height={300}
                    data={data2}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data2.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                    </BarChart>
                </div>


            </div>
        </div>
    );
};

export default UserHome;