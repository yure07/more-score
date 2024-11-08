"use client"
import { Header } from "@/components/Header"
import { CircleCheck, CircleDollarSign, ClockArrowUp, Crown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const Plans = () => {
  const [nameUser, setNameUser] = useState<string>('')
  useEffect(() => {
    const userName = localStorage.getItem("@name_user")
    if(userName){
      setNameUser(userName)
    }
  }, [])

  return(
    <section className="flex flex-col items-center py-5 gap-12">
      <Header 
        planUser="No plan" 
        nameUser={nameUser}
      />
      <section className="flex flex-col items-center py-4 w-4/5 gap-10 bg-[#0E0E0E] rounded-xl border border-[#737778] md:py-8 lg:w-[900px] lg:gap-14">
        <h1 className="w-[230px] text-white font-bold text-center md:text-2xl md:w-auto">Select a plan to start generating reports</h1>
        <section className="flex flex-col items-center gap-14 text-white font-bold lg:flex-row lg:self-center lg:gap-14">
        <div className="flex flex-col items-center w-56 h-80 rounded-xl py-7 px-5 bg-[#1E1E1E]">
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
          <Link href='/dashboard' className="flex items-center justify-center w-full h-10 rounded-xl mt-auto bg-white text-black cursor-pointer hover:opacity-75">Select</Link>
        </div>
        <div className="flex flex-col items-center w-56 h-80 rounded-xl py-7 px-5 bg-black"
          style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
          <CircleDollarSign size={38}/>
          <h1 className="text-2xl mt-4">Standard</h1>
          <div className="flex flex-row mt-4">
            <span className="font-normal text-base mt-auto">$</span>
            <span className="text-3xl ml-1">00.00</span>
            <span className="text-3xl text-[#737778] ml-1">/</span>
            <span className="text-[#737778] font-normal mt-auto -ml-1">month</span>
          </div>
          <span className="flex items-center gap-2 mt-auto text-sm">
            <CircleCheck size={16}/>  400 monthly analysis
          </span>
          <Link href='/dashboard' className="flex items-center justify-center w-full h-10 rounded-xl mt-auto bg-white text-black cursor-pointer hover:opacity-75">Select</Link>
        </div>
        <div className="flex flex-col items-center w-56 h-80 rounded-xl py-7 px-5 bg-[#1E1E1E]">
          <Crown size={38}/>
          <h1 className="text-2xl mt-4">Premium</h1>
          <div className="flex flex-row mt-4">
            <span className="font-normal text-base mt-auto">$</span>
            <span className="text-3xl ml-1">000.00</span>
            <span className="text-3xl text-[#737778] ml-1">/</span>
            <span className="text-[#737778] font-normal mt-auto -ml-1">month</span>
          </div>
          <span className="flex items-center gap-2 mt-auto text-sm">
            <CircleCheck size={16}/>  1000 monthly analysiss
          </span>
          <Link href='/dashboard' className="flex items-center justify-center w-full h-10 rounded-xl mt-auto bg-white text-black cursor-pointer hover:opacity-75">Select</Link>
        </div>
      </section>
      </section>
    </section>
  )
}

export default Plans