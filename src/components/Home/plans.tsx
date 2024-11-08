import { CircleCheck, CircleDollarSign, ClockArrowUp, Crown } from "lucide-react"
import { forwardRef } from "react"

export const Plans = forwardRef<HTMLElement>((props, ref) => {
  return(
    <section ref={ref} className="flex flex-col w-full py-6 gap-14 bg-white">
      <article className="flex flex-col items-center text-center font-bold space-y-4">
        <h2 className="text-base md:text-2xl">Come with us!</h2>
        <h1 className="text-xl w-72 md:w-auto md:text-3xl lg:text-4xl">See the plan that makes the most sense for you</h1>
      </article>
      <section className="flex flex-col items-center gap-14 text-white font-bold md:flex-row md:gap-4 md:self-center lg:gap-28 xl:gap-48">
        <div className="flex flex-col items-center w-56 h-64 rounded-xl py-7 px-5 bg-[#1E1E1E]">
          <ClockArrowUp size={38}/>
          <h1 className="text-2xl mt-4">Basic</h1>
          <div className="flex flex-row mt-4">
            <span className="font-normal text-base mt-auto">$</span>
            <span className="text-3xl ml-1">00.00</span>
            <span className="text-3xl text-[#737778] ml-1">/</span>
            <span className="text-[#737778] font-normal mt-auto -ml-1">month</span>
          </div>
          <span className="flex items-center gap-2 mt-auto text-sm">
            <CircleCheck size={16}/>  150 monthly analysis
          </span>
        </div>
        <div className="flex flex-col items-center w-56 h-64 rounded-xl py-7 px-5 bg-black"
          style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
          <CircleDollarSign size={38}/>
          <h1 className="text-2xl mt-4">Standard</h1>
          <div className="flex flex-row mt-4">
            <span className="font-normal text-base mt-auto">$</span>
            <span className="text-3xl ml-1">00.00</span>
            <span className="text-3xl text-[#737778] ml-1">/</span>
            <span className="text-[#737778] font-normal mt-auto -ml-1">monthly</span>
          </div>
          <span className="flex items-center gap-2 mt-auto text-sm">
            <CircleCheck size={16}/>  400 monthly analysis
          </span>
        </div>
        <div className="flex flex-col items-center w-56 h-64 rounded-xl py-7 px-5 bg-[#1E1E1E]">
          <Crown size={38}/>
          <h1 className="text-2xl mt-4">Premium</h1>
          <div className="flex flex-row mt-4">
            <span className="font-normal text-base mt-auto">$</span>
            <span className="text-3xl ml-1">000.00</span>
            <span className="text-3xl text-[#737778] ml-1">/</span>
            <span className="text-[#737778] font-normal mt-auto -ml-1">month</span>
          </div>
          <span className="flex items-center gap-2 mt-auto text-sm">
            <CircleCheck size={16}/>  1000 monthly analysis
          </span>
        </div>
      </section>
        <span className="text-center text-black font-normal">Log in or register to subscribe</span>
    </section>
  )
})