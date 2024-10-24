import { agbalumo } from "@/app/fonts"

interface HeaderProps{
  planUser: string
  credits?: undefined | string
}

export const Header = ({ planUser, credits }: HeaderProps) => {
  return(
      <header className="flex flex-row items-center justify-between w-4/5 h-16 px-4 bg-[#0E0E0E] rounded-xl border border-[#737778] md:h-20 md:px-9 lg:w-[900px]">
        <span className={`${agbalumo.className} text-white -mt-2 md:text-2xl`}>+score</span>
        <div className="flex flex-row items-center w-36 h-10 rounded-3xl bg-white text-xs md:w-44 md:h-12">
          {credits ? (
            <div className="flex flex-col items-center ml-auto">
              <span>{planUser}</span>
              <span>{credits}</span>
            </div>
          ) : (
            <span className="ml-auto">
              {planUser}
            </span>
          )}
          <div className="flex items-center justify-center w-10 h-10 bg-[#737778] rounded-full ml-5 md:w-12 md:h-12 md:text-lg md:font-bold md:ml-7 text-white">Y</div>
        </div>
      </header>
  )
}