import { FileChartColumn } from "lucide-react"

export const ClassificationTable = () => {
  return(
    <tbody className="flex w-full h-full text-white ">
      <tr className="flex flex-col w-[65%] h-full border-r border-[#737778] md:w-[75%] lg:w-[80%]">

        {/* <td className="w-full flex flex-col text-[#737778] items-center self-center gap-4 font-bold">
          <FileChartColumn className="w-16 h-16 md:w-20 md:h-20"/>
          <span className="text-center w-56">Carregue um post para ver a classificação dos comentários</span>
        </td> */}

        {Array(10).fill(null).map((_, index) => (
          <td key={index} className={`flex items-center min-h-10 ${index !== 9 && 'border-b border-[#737778]'} text-xs px-3`}>
            <span className="w-full truncate text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit
            </span> 
          </td>
        ))}
        
      </tr>

      <tr className="w-[35%] text-xs md:w-[25%] lg:w-[20%]">
      {Array(10).fill(null).map((_, index) => (
          <td key={index} className={`flex items-center h-10 ${index !== 9 && 'border-b border-[#737778]'} text-xs px-3`}>
            <span className="w-full truncate text-center">
              curiosity
            </span> 
          </td>
        ))}
      </tr>
    </tbody>
  )
}