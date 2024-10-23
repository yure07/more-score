import Image from "next/image"
import graphImg from '@/assets/images/grafico.svg'
import { agbalumo } from "@/app/fonts"

export const Merchan = () => {
  return(
    <section className="flex flex-col items-center my-36 w-full pb-2 px-12 space-y-10 md:flex-row md:w-[700px] xl:w-[1200px] lg:w-[1000px] md:space-y-0 md:justify-between md:self-center md:p-0 md:mt-56">
      <article className="flex flex-col text-white">
        <h1 className="text-3xl font-bold w-72 xl:text-5xl xl:w-[450px] lg:text-4xl lg:w-[350px]">Reduza seus custos de operação com a</h1>
        <span className={`${agbalumo.className} text-[#FFD700] text-3xl -mt-1 xl:text-5xl lg:text-4xl`}>+score</span> 
        <p className="mt-3 text-sm w-[290px] xl:text-lg lg:text-base xl:w-[430px] lg:w-[350px]">Descubra o que seu público está dizendo em forma de sentimentos. 
          <span className="font-bold"> Reduza </span> 
          custos e <span className="font-bold">agilize</span> processos com a nossa ferramenta.
        </p>
      </article>
      <Image src={graphImg} alt="graph-example" className="w-80 md:w-[350px] lg:w-[450px]"/>
    </section>
  )
}