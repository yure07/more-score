import {
  Axe,
  ChartNoAxesCombined,
  CircleDollarSign,
  CircleUserRound,
  ClockArrowUp,
  Hourglass,
  ThumbsDown,
  TimerOff,
  Users,
  Workflow
} from "lucide-react";

interface AdvantageProps {
  plansRef: React.RefObject<HTMLElement>;
}

export const Advantages: React.FC<AdvantageProps> = ({ plansRef }) => {
  const scrollPosition = (sectionRef: React.RefObject<HTMLElement>, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (sectionRef.current) {

      window.scrollTo({
        top: sectionRef.current.offsetTop - 112,
        behavior: 'smooth'
      })
    }
  }
  
  return(
    <section className="flex flex-col w-full px-12 my-12 gap-14 lg:flex-row lg:w-[1000px] lg:self-center lg:px-0 lg:justify-between lg:my-32 xl:w-[1200px]">
      <article className="flex flex-col text-white font-bold">
        <h2 className="text-base">Vantagens</h2>
        <h1 className="text-2xl my-3 lg:text-3xl lg:w-60">Lucre mais com a +score</h1>
        <span className="text-base font-normal w-[200px] lg:text-lg lg:w-56">Tenha a melhor ferramenta ao seu lado.</span>
      </article>
      <div className="flex flex-col items-center gap-12 lg:flex-row">
        <div className="flex flex-col w-64 h-96 bg-[#FFFFFFCC] rounded-xl py-12 px-5">
          <ThumbsDown size={24} className="self-center"/>
          <span className="text-center font-bold mt-5 text-base">Sem +score</span>
          <ul className="text-xs font-light text-[#737778] mt-4 space-y-4">
            <li className="flex flex-row items-center gap-2">
              <Hourglass size={20}/>
              Lentidão em resultados
            </li>
            <li className="flex flex-row items-center gap-2">
              <Users size={20}/>
              Maior número de funcionários
            </li>
            <li className="flex flex-row items-center gap-2">
              <Axe size={20}/>
              Perda de competitividade
            </li>
            <li className="flex flex-row items-center gap-2">
              <TimerOff size={20}/>
              Menor eficiência
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-64 h-96 bg-white rounded-xl py-12 px-5">
          <CircleDollarSign size={24} className="self-center"/>
          <span className="text-center font-bold mt-5 text-base">Com +score</span>
          <ul className="text-xs font-normal mt-4 space-y-4">
            <li className="flex flex-row items-center gap-2">
              <ClockArrowUp size={20}/>
              Rapidez em tomada de decisão
            </li>
            <li className="flex flex-row items-center gap-2">
              <Workflow size={20}/>
              Automatização de processos
            </li>
            <li className="flex flex-row items-center gap-2">
              <CircleUserRound size={20}/>
              Maior valor de cliente
            </li>
            <li className="flex flex-row items-center gap-2">
              <ChartNoAxesCombined size={20}/>
              Redução de custos
            </li>
          </ul>
          <button 
            type="button" 
            className="mt-auto bg-black text-white font-bold h-9 rounded-xl"
            onClick={(e) => scrollPosition(plansRef, e)}>
            Planos
          </button>
        </div>
      </div>
    </section>
  )
}