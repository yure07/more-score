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
        <h2 className="text-base">Advantages</h2>
        <h1 className="text-2xl my-3 lg:text-3xl lg:w-60">Earn more with +score</h1>
        <span className="text-base font-normal w-[200px] lg:text-lg lg:w-56">Have the best tool by your side.</span>
      </article>
      <div className="flex flex-col items-center gap-12 lg:flex-row">
        <div className="flex flex-col w-64 h-96 bg-[#FFFFFFCC] rounded-xl py-12 px-5">
          <ThumbsDown size={24} className="self-center"/>
          <span className="text-center font-bold mt-5 text-base">Without +score</span>
          <ul className="text-xs font-light text-[#737778] mt-4 space-y-4">
            <li className="flex flex-row items-center gap-2">
              <Hourglass size={20}/>
              Slow results
            </li>
            <li className="flex flex-row items-center gap-2">
              <Users size={20}/>
              Largest number of employees
            </li>
            <li className="flex flex-row items-center gap-2">
              <Axe size={20}/>
              Loss of competitiveness
            </li>
            <li className="flex flex-row items-center gap-2">
              <TimerOff size={20}/>
              Lower efficiency
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-64 h-96 bg-white rounded-xl py-12 px-5">
          <CircleDollarSign size={24} className="self-center"/>
          <span className="text-center font-bold mt-5 text-base">With +score</span>
          <ul className="text-xs font-normal mt-4 space-y-4">
            <li className="flex flex-row items-center gap-2">
              <ClockArrowUp size={20}/>
              Speed ​​in decision making
            </li>
            <li className="flex flex-row items-center gap-2">
              <Workflow size={20}/>
              Process automation
            </li>
            <li className="flex flex-row items-center gap-2">
              <CircleUserRound size={20}/>
              Greater customer value
            </li>
            <li className="flex flex-row items-center gap-2">
              <ChartNoAxesCombined size={20}/>
              Cost reduction
            </li>
          </ul>
          <button 
            type="button" 
            className="mt-auto bg-black text-white font-bold h-9 rounded-xl"
            onClick={(e) => scrollPosition(plansRef, e)}>
            Plans
          </button>
        </div>
      </div>
    </section>
  )
}