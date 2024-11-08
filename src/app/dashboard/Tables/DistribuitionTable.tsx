import { useEffect, useState } from 'react';
import { Cell, type LabelProps, Pie, PieChart, ResponsiveContainer } from 'recharts';

interface DataItem {
  name: string;
  value: number;
  color: string;
}

interface CustomLabelProps extends LabelProps {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  percent?: number;
  index?: number;
}

const data: DataItem[] = [
  { name: 'remorso', value: 10, color: '#ff8601' },
  { name: 'curiosidade', value: 10, color: '#0068c9' }, 
  { name: 'raiva', value: 10, color: '#3F0000' } , 
  { name: 'neutro', value: 20, color: '#ADD8E6' },
  { name: 'amor', value: 10, color: '#F9200D' },
  { name: 'admiração', value: 10, color: '#FBA723' },
  { name: 'otimismo', value: 10, color: '#54a8c6' },
  { name: 'confusão', value: 10, color: '#000036' },
  { name: 'nervosismo', value: 10, color: '#b86d1c' },
]

const renderCustomLabel = ({ 
    cx = 0, 
    cy = 0, 
    midAngle = 0, 
    innerRadius = 0, 
    outerRadius = 0,
    index = 0
  }: CustomLabelProps) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) + 25
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const total = data.reduce((acc, item) => acc + item.value, 0);
  const percent = (data[index].value / total) * 100;

  return (
    <>
      <text x={x} y={y} fill={'#ffff'} textAnchor={x > (cx ?? 0) ? 'start' : 'end'} dominantBaseline="central" className='text-[6px] font-normal'>
        {data[index ?? 0].name} ({`${percent.toFixed(0)}%`})
      </text>
      {/* Linha com seta */}
      <line 
        x1={cx + (x - cx) * 0.5} 
        y1={cy + (y - cy) * 0.5} 
        x2={cx + (x - cx) * 0.5} 
        y2={cy + (y - cy) * 0.5} 
        markerEnd="url(#arrow)"
      />
    </>
  )
}

export const DistribuitionTable = () => {
  const [chartSize, setChartSize] = useState({ width: 150, height: 150 })

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setChartSize({ width: 150, height: 140 })
      }  else {
        setChartSize({ width: 300, height: 300 })
      }
    };

    updateSize()
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize)
  }, [])
  
  return(
    <tbody className="flex w-full h-full text-white">
      <tr className="w-[65%] h-full flex flex-col text-[#737778] border-r border-[#737778] self-center gap-4 font-bold md:w-[75%] lg:w-[80%]">
        <td className='flex w-full h-full pt-16 lg:pt-10'>
          <ResponsiveContainer width="100%" height="100%" className="flex justify-center">
            <PieChart width={chartSize.width} height={chartSize.height}>
              <Pie
                data={data}
                dataKey="value"
                outerRadius="100%"
                stroke='none'
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </td>
        {/* <td>
          <ChartPie className="w-16 h-16 md:w-20 md:h-20"/>
        </td>
        <td className="text-center w-56">Carregue um post para ver a distribuição das emoções</td> */}
      </tr>

      <tr className="w-[35%] text-xs py-2 text-[10px] md:w-[25%] md:text-xs lg:w-[20%]">
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 -mt-2 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#ADD8E6]'/>
          <span>neutro (20%)</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#FBA723]'/>
          <span>admiração (10%)</span>
        </td>
        {/* <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#FFA5C5]'/>
          <span>diversão</span>
        </td> */}
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#3F0000]'/>
          <span>raiva (10%)</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#000036]'/>
          <span>confusão (10%)</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#F9200D]'/>
          <span>amor (10%)</span>
        </td>
        {/* <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#7eefa1]'/>
          <span>surpresa</span>
        </td> */}
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#ff8601]'/>
          <span>remorso (10%)</span>
        </td>
        {/* <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#2f9bff]'/>
          <span>alegria</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#6e3fc0]'/>
          <span>medo</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#2ab09d]'/>
          <span>aprovação</span>
        </td> */}
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#0068c9]'/>
          <span>curiosidade (10%)</span>
        </td>
        {/* <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#ffd16a]'/>
          <span>alívio</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#ae5126]'/>
          <span>aperreação</span> aborrecimento 
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#269eae]'/>
          <span>gratidão</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#ae2a26]'/>
          <span>desacordo</span>  desaprovação 
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#1c1933]'/>
          <span>tristeza</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#3322b8]'/>
          <span>orgulho</span>
        </td> */}
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#b86d1c]'/>
          <span>nervosismo (10%)</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#54a8c6]'/>
          <span>otimismo (10%)</span>
        </td>
        {/* <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#a91212]'/>
          <span>excitação</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#105a21]'/>
          <span>nojo</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#5a104a]'/>
          <span>timidez</span>  constrangimento 
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#24071f]'/>
          <span>decepção</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#c0dc1e]'/>
          <span>cuidado</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#dc1ec9]'/>
          <span>desejo</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#14f741]'/>
          <span>realização</span>
        </td>
        <td className='flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 md:h-9 md:pl-12'>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-[#2a226b]'/>
          <span>pesar</span>
        </td> */}
      </tr>
    </tbody>
  )
}