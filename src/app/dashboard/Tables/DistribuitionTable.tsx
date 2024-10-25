import { ChartPie } from "lucide-react"

export const DistribuitionTable = () => {
  return(
    <tbody className="flex w-full h-full text-white">
      <tr className="w-full flex flex-col text-[#737778] items-center self-center gap-4 font-bold">
        <td>
          <ChartPie className="w-16 h-16 md:w-20 md:h-20"/>
        </td>
        <td className="text-center w-56">Carregue um post para ver a distribuição das emoções</td>
      </tr>
    </tbody>
  )
}