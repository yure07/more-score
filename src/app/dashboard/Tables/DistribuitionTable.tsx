import { useEffect, useState, useMemo } from 'react';
import { Cell, type LabelProps, Pie, PieChart, ResponsiveContainer } from 'recharts';
import type { ReportProps } from '../page';
import { ChartPie, Loader, Unlink } from 'lucide-react';

interface DistribuitionTableProps{
  gettingComments: boolean
  invalidLink: boolean
  generatingReport: boolean
  report: ReportProps[]
}

interface DataItem {
  name: string;
  value: number;
  color: string;
}

type EmotionCount = Record<string, number>

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

const fakeReport = [
  { texto: "You Amazing", emocao_prevista: ["joy", "neutral"] },
  { texto: "Keep Going", emocao_prevista: ["joy", "excited"] },
  { texto: "Stay Strong", emocao_prevista: ["neutral", "calm"] },
  { texto: "Smile More", emocao_prevista: ["happy", "joy"] },
  { texto: "Be Brave", emocao_prevista: ["neutral", "joy"] },
]

export const DistribuitionTable = ({ gettingComments, invalidLink, generatingReport, report }: DistribuitionTableProps) => {
  const [chartSize, setChartSize] = useState({ width: 150, height: 150 })
  const emotionCount = report.reduce<EmotionCount>((acc, item) => {
    // biome-ignore lint/complexity/noForEach: <explanation>
    item.emocao_prevista.forEach((emotion) => {
      acc[emotion] = (acc[emotion] || 0) + 1;
    });
    return acc;
  }, {})
  
  const getRandomColor = (): string => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`
  }

  const dataChart:DataItem[] = Object.entries(emotionCount).map(([name, value]) => ({
    name,
    value,
    color: getRandomColor(),
  }))


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

      {report.length === 0 ? (
        <tr className="flex flex-col w-full h-full">
          {invalidLink && (
            <td className="w-full flex flex-col text-[#737778] items-center gap-4 font-bold my-auto">
              <Unlink className="w-16 h-16 md:w-20 md:h-20"/>
              <span>Insert a valid link</span>
            </td>
          )}

          {gettingComments && (
            <td className="w-full flex flex-row text-[#737778] justify-center gap-4 font-bold my-auto">
              <Loader className='animate-spin'/>
              Getting comments...
            </td>
          )}

          {generatingReport && (
            <td className="w-full flex flex-row text-[#737778] justify-center gap-4 font-bold my-auto">
              <Loader className='animate-spin'/>
              Analyzing emotions...
            </td>
          )}

          {report.length <= 0 && !gettingComments && !invalidLink && !generatingReport && (
            <td className="w-full flex flex-col text-[#737778] items-center gap-4 font-bold my-auto">
              <ChartPie className="w-16 h-16 md:w-20 md:h-20"/>
              <span className="text-center w-56">Upload a video to see the distribution of emotions</span>
            </td>
          )}
        </tr>
      ) : (
        <>
          <tr className='h-full flex flex-col text-[#737778] border-r border-[#737778] w-[65%] md:w-[75%] lg:w-[80%] self-center gap-4 font-bold'> 
              <td className='flex w-full h-full pt-16 lg:pt-10'>
                <ResponsiveContainer width="100%" height="100%" className="flex justify-center">
                  <PieChart width={chartSize.width} height={chartSize.height}>
                    <Pie
                      data={dataChart}
                      dataKey="value"
                      outerRadius="100%"
                      stroke='none'
                    >
                      {dataChart.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </td>
          </tr>

          <tr className="w-[35%] text-xs py-2 text-[10px] space-y-2 md:w-[25%] md:text-xs lg:w-[20%]">
            {dataChart.map((data, index) => (
              <td key={data.color} className={`flex flex-row items-center gap-2 border-l border-[#737778] pl-2 -ml-[1px] h-7 ${index === 0 && '-mt-2'} md:h-9 md:pl-12`}>
                <div className='w-2 h-2 md:w-3 md:h-3' style={{ backgroundColor: data.color }}/>
                <span>{data.name} - {data.value}</span>
              </td>
            ))}   
          </tr>
        </>
      )}
    </tbody>
  )
}