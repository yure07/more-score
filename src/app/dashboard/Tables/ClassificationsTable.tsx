import { FileChartColumn, Loader, Unlink } from "lucide-react"
import type { ReportProps } from "../page"

interface ClassificationTableProps{
  gettingComments: boolean
  invalidLink: boolean
  generatingReport: boolean
  report: ReportProps[]
}

export const ClassificationTable = ({ gettingComments, invalidLink, generatingReport, report }: ClassificationTableProps) => {
  const uniqueEmotions = new Set();
  const filteredData = report.filter(item => {
    const firstEmotion = item.emocao_prevista[0];
    if (!uniqueEmotions.has(firstEmotion)) {
      uniqueEmotions.add(firstEmotion);
      return true;
    }
    return false;
  })

  return(
    <tbody className="flex w-full h-full text-white ">

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

          {!gettingComments && !invalidLink && !generatingReport && (
            <td className="w-full flex flex-col text-[#737778] items-center gap-4 font-bold my-auto">
              <FileChartColumn className="w-16 h-16 md:w-20 md:h-20"/>
              <span className="text-center w-56">Upload a video to see the comment rating</span>
            </td>
          )}
        </tr>
      ) : (
        <>
          <tr className='flex flex-col border-r border-[#737778] w-[65%] md:w-[75%] lg:w-[80%]'>
            {filteredData.map((classification, index) => (
              <td key={classification.texto} className={`flex items-center min-h-10 ${index !== 9 && 'border-b border-[#737778]'} text-xs px-3`}>
                <span className="w-full truncate text-center">
                  {classification.texto}
                </span> 
              </td>
            ))}
          </tr>
          <tr className="w-[35%] text-xs md:w-[25%] lg:w-[20%]">
          {filteredData.map((classification, index) => (
              <td key={classification.texto} className={`flex items-center h-10 ${index !== 9 && 'border-b border-[#737778]'} text-xs px-3`}>
                <span className="w-full truncate text-center">
                  {classification.emocao_prevista.length === 0 ? 'neutral' : classification.emocao_prevista[0]}
                </span> 
              </td>
            ))}
          </tr>
        </>
      )}
      
    </tbody>
  )
}