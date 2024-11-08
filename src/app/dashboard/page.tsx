"use client"
import { Header } from "@/components/Header"
import { useEffect, useState } from "react"
import { ClassificationTable } from "./Tables/ClassificationsTable"
import { DistribuitionTable } from "./Tables/DistribuitionTable"

const Dashboard = () => {
  const [tableActive, setTableActive] = useState<number>(1)
  const [nameUser, setNameUser] = useState<string>('')
  useEffect(() => {
    const userName = localStorage.getItem("@name_user")
    if(userName){
      setNameUser(userName)
    }
  }, [])

  return(
    <section className="flex flex-col items-center py-5 gap-12 h-screen">
      <Header 
        planUser="Premium"
        nameUser={nameUser}
      />
      <section className="flex flex-col w-4/5 h-4/5 lg:w-[900px]">
        <form className="flex flex-row md:gap-2">
          <div className="flex flex-col w-2/3 md:w-full">
            <label htmlFor="url" className="text-white font-bold text-sm md:text-base">Instagram post URL</label>
            <input 
              type="text" 
              name="url"
              className="bg-[#0E0E0E] w-full h-10 rounded-xl border border-[#737778] mt-1 text-xs px-3 text-white placeholder:text-[#737778] md:h-14"
              placeholder="Past here post URL"
            />
          </div>
          <button 
            type="submit"
            className="bg-white h-10 self-end ml-auto rounded-xl text-xs w-[30%] md:w-48 md:h-14 md:text-base font-bold">
            Generate report
          </button>
        </form>
        <div className="w-full h-[80%] mt-7 rounded-xl border border-[#737778] overflow-y-auto">
          <table className="flex flex-col min-w-full h-full table-auto">
            <thead className='flex w-full justify-center items-center'>
              <tr className='flex items-center w-full border-b border-[#737778] h-10 text-white text-xs px-5 gap-5 md:h-14'>
                <th className={`${tableActive === 1 ? 'border-b-2 rounded-sm' : 'text-[#737778]'} md:text-sm`}>
                  <button type="button" onClick={() => setTableActive(1)}>
                    Classification
                  </button>
                </th>
                <th className={`${tableActive === 2 ? 'border-b-2 rounded-sm' : 'text-[#737778]'} md:text-sm`}>
                  <button type="button" onClick={() => setTableActive(2)}>
                    Distribuition
                  </button>
                </th>
              </tr>
            </thead>

            <thead className='flex w-full justify-center items-center'>
              <tr className='flex items-center w-full border-b border-[#737778] h-10 text-white text-xs'>
                <th className="flex items-center justify-center w-[65%] h-full border-r border-[#737778] md:text-sm md:w-[75%] lg:w-[80%]">
                  {tableActive === 1 ? 'Coment' : 'Distribuition'} 
                </th>
                <th className="w-[35%] mx-auto text-center md:text-sm md:w-[25%] lg:w-[15%]">
                  {tableActive === 1 ? 'Emotion' : 'Caption'}
                </th>
              </tr>
            </thead>

            {tableActive === 1 ? (
              <ClassificationTable/>
            ) : (
              <DistribuitionTable/>
            )}
              
          </table>
        </div>
      </section>
    </section>
  )
}

export default Dashboard