"use client"
import { agbalumo } from "@/app/fonts"
import { Menu, X } from "lucide-react"
import { useRef, useState } from "react"

interface HeaderProps {
  sectionsRefs: {
    knowUsRef: React.RefObject<HTMLElement>;
    plansRef: React.RefObject<HTMLElement>;
  };
}

export const Header = ({ sectionsRefs }: HeaderProps) => {
  const headerRef = useRef<HTMLElement>(null)
  const [toggleMenu, setToggleMenu] = useState(false)

  const scrollPosition = (sectionRef: React.RefObject<HTMLElement>, e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setToggleMenu(false)
      if (sectionRef.current && headerRef.current) {
        const headerHeight = headerRef.current.getBoundingClientRect().height

        window.scrollTo({
          top: sectionRef.current.offsetTop - headerHeight,
          behavior: 'smooth'
        })
      }
  }

  return(
    <header ref={headerRef} className="fixed flex justify-center items-center w-full h-20 pb-2 px-12 bg-black md:px-0 md:h-28">
      <nav className="flex flex-row justify-between items-center self-center w-full xl:w-[1200px] xl:px-0 xl:h-28 lg:w-[1000px] lg:h-28 md:w-[700px]">
        <span className={`${agbalumo.className} text-white text-3xl`}>+score</span>
        <nav className="hidden md:flex items-center text-lg font-bold space-x-16">
          <button
            type="button"
            className="text-white cursor-pointer" 
            onClick={(e) => scrollPosition(sectionsRefs.knowUsRef, e)}>
            Nos conheça
          </button>
          <button 
            type="button"
            className="text-white cursor-pointer"
            onClick={(e) => scrollPosition(sectionsRefs.plansRef, e)}
            >
            Planos
          </button>
          <button type="button" className="bg-white rounded-xl w-40 h-12 text-xl">Entrar</button>
        </nav>
        {toggleMenu ? (
          <X 
            size={24} 
            className="text-white mt-2" 
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <Menu 
            size={24} 
            className="text-white mt-2 md:hidden" 
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="absolute flex flex-col w-screen top-20 left-0 font-bold text-base bg-black px-12 pb-5">
          <button
            type="button"
            className="text-white text-start" 
            onClick={(e) => scrollPosition(sectionsRefs.knowUsRef, e)}>
            Nos conheça
          </button>
            <button 
              type="button" 
              className="text-white mt-3 text-start"
              onClick={(e) => scrollPosition(sectionsRefs.plansRef, e)}>
              Planos
            </button>
            <button type="button" className="h-10 bg-white rounded-xl mt-4">Entrar</button>
          </div>
        )}
      </nav>

    </header>
  )
}