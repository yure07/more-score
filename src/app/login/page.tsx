"use client"
import { EyeOff, Eye } from "lucide-react"
import { agbalumo } from "../fonts"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return(
    <section className="h-screen flex flex-row justify-center items-center">
      <Image 
        src='artifical-intelligence.svg'
        width={1}
        height={1}
        alt="login-image" 
        className="hidden lg:block w-[564px] h-[545px]"
      />
      <section className="flex flex-col items-center w-72 lg:w-96 lg:bg-black lg:rounded-br-xl lg:rounded-tr-xl lg:py-10">
        <article className="flex flex-col text-white font-bold gap-14">
          <h1 className={`${agbalumo.className} text-5xl text-center`}>+score</h1>
          <span className="w-72">Conecte-se para começar!</span>
        </article>
        <form className="flex flex-col text-white mt-5">
          <label htmlFor="email" className="text-xs">Email</label>
          <input 
            type="text" 
            name="email" 
            placeholder="Digite seu email"
            className="w-72 rounded-lg h-10 border border-[#737778] bg-[#0E0E0E] mt-2 px-4 text-xs"
          />
          <label htmlFor="password" className="text-xs mt-7">Senha</label>
          <div className="flex flex-row">
            <input 
              type={showPassword ? 'text' : 'password'} 
              name="password" 
              placeholder="********"
              className="w-72 rounded-lg h-10 border border-[#737778] bg-[#0E0E0E] mt-2 px-4 text-xs"
            />
            {showPassword ? (
              <Eye 
                size={12} 
                className="-ml-6 mt-5 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <EyeOff 
                size={12} 
                className="-ml-6 mt-5 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <button 
            type="submit"
            className="w-72 rounded-lg bg-white text-black h-10 mt-8 text-sm">
            Entrar
          </button>
        </form>
        <span className="text-[#737778] text-center my-3">ou</span>
        <Link 
          href='/register'
          className="w-72 flex items-center justify-center rounded-lg bg-black text-white h-10 text-sm lg:text-[#737778] underline">
          Cadastre-se
        </Link>
      </section>
    </section>
  )
}

export default Login