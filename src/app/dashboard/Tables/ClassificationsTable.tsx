import { FileChartColumn } from "lucide-react"

export const ClassificationTable = () => {
  return(
    <tr className="w-full flex flex-col text-[#737778] items-center self-center gap-4 font-bold">
      <td>
        <FileChartColumn className="w-16 h-16 md:w-20 md:h-20"/>
      </td>
      <td className="text-center w-56">Carregue um post para ver a classificação dos comentários</td>
    </tr>
  )
}