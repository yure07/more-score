"use client"
import { api } from "@/api"
import { Header } from "@/components/Header"
import { useEffect, useState } from "react"
import { ClassificationTable } from "./Tables/ClassificationsTable"
import { DistribuitionTable } from "./Tables/DistribuitionTable"

export interface ReportProps{
  emocao_prevista: string[]
  texto: string
}

const Dashboard = () => {
  const [tableActive, setTableActive] = useState<number>(1)
  const [nameUser, setNameUser] = useState<string>('')
  const [videoUrl, setVideoUrl] = useState<string>('')
  const [gettingComments, setGettingComments] = useState<boolean>(false)
  const [generatingReport, setGeneratingReport] = useState<boolean>(false)
  const [invalidLink, setInvalidLink] = useState<boolean>(false)
  const [report, setReport] = useState<ReportProps[]>([])

  useEffect(() => {
    const userName = localStorage.getItem("@name_user")
    if(userName){
      setNameUser(userName)
    }
  }, [])

  const comments = ['Programming is making ape noises and saying &quot;im a programmer&quot; every 10 min', 'This way of TDD is pretty bad. You can end up with…sult in adding an element outside the array size.', '30 minutes to implement a stack with a gigantic memoryleak.<br><br>Dude sucks.', 'Good one', 'Nice explanation', 'This exercise looks a lot how AI tries to write code for me 😂', 'Rewarding at work. Spend 3 to 4 times the amount o…ng in your future or your company going bankrupt.', 'Amazing!', 'I hate TDD if anyone who I hire ever suggest it it… people getting paid by the line or hour in code.', 'This methodology seems so unfun and draining 🤔', 'Only 3 concepts: Parameters, Subject and Informational Individual! This is the future in software!', 'Stack, Stack and Stack .... but the future in soft…re is Universal Software Model! Much more simple.', 'Very fun!']

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const videoId = videoUrl.split("v=")[1]
    if(!videoId){
      setInvalidLink(true)
      return
    }
    try {
      setInvalidLink(false)
      setGettingComments(true)
      const videoComments = await api.post('/get_comments', {
        api_key: process.env.NEXT_PUBLIC_API_KEY_YT,
        video_id: videoId 
      })
      await new Promise(resolve => setTimeout(resolve, 2000))
      setGettingComments(false)

      setGeneratingReport(true)
      const reports = await api.post('/analyze_emotions', {
        texts: videoComments.data.comentarios
      })
      setGeneratingReport(false)
      setReport(reports.data.analise_emocional)
    } catch (error) {
      setGeneratingReport(false)
      console.error(error);
    }
  }

  return(
    <section className="flex flex-col items-center py-5 gap-12 h-screen">
      <Header 
        planUser="Premium"
        nameUser={nameUser}
      />
      <section className="flex flex-col w-4/5 h-4/5 lg:w-[900px]">
        <form className="flex flex-row md:gap-2" onSubmit={handleSubmit}>
          <div className="flex flex-col w-2/3 md:w-full">
            <label htmlFor="url" className="text-white font-bold text-sm md:text-base">Youtube video URL</label>
            <input 
              type="text" 
              name="url"
              className="bg-[#0E0E0E] w-full h-10 rounded-xl border border-[#737778] mt-1 text-xs px-3 text-white placeholder:text-[#737778] md:h-14"
              placeholder="Past here video URL"
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>
          <button 
            type="submit"
            className={`bg-white h-10 self-end ml-auto rounded-xl text-xs w-[30%] md:w-48 md:h-14 md:text-base font-bold ${(gettingComments || generatingReport) && 'opacity-20'}`}
            disabled={gettingComments || generatingReport}>
            {generatingReport ? 'Generating' : 'Generate report'}
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
              {report.length > 1 && (
                <tr className='flex items-center w-full border-b border-[#737778] h-10 text-white text-xs'>
                  <th className="flex items-center justify-center w-[65%] h-full border-r border-[#737778] md:text-sm md:w-[75%] lg:w-[80%]">
                    {tableActive === 1 ? 'Coment' : 'Distribuition'} 
                  </th>
                  <th className="w-[35%] mx-auto text-center md:text-sm md:w-[25%] lg:w-[15%]">
                    {tableActive === 1 ? 'Emotion' : 'Caption'}
                  </th>
                </tr>
              )}
            </thead>

            {tableActive === 1 ? (
              <ClassificationTable 
                gettingComments={gettingComments} 
                invalidLink={invalidLink} 
                generatingReport={generatingReport}
                report={report}
              />
            ) : (
              <DistribuitionTable
                gettingComments={gettingComments}
                invalidLink={invalidLink} 
                generatingReport={generatingReport}
                report={report}
              />
            )}
              
          </table>
        </div>
      </section>
    </section>
  )
}

export default Dashboard