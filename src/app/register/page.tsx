import { agbalumo } from "../fonts"
import Image from "next/image"

const Register = () => {
  return(
    <section className="h-screen flex flex-row justify-center items-center">
      <Image 
        src='artifical-intelligence.svg' 
        width={1}
        height={1}
        alt="login-image" 
        className="hidden lg:block w-[570px]"
      />
      <section className="flex flex-col items-center w-72 lg:w-96 lg:bg-black lg:rounded-br-xl lg:rounded-tr-xl lg:py-10">
        <article className="flex flex-col text-white font-bold gap-14">
          <h1 className={`${agbalumo.className} text-5xl text-center`}>+score</h1>
          <span className="w-72">Insira os dados</span>
        </article>
        <form className="flex flex-col text-white mt-5">
          <label htmlFor="name" className="text-xs">Nome</label>
          <input 
            type="text"
            name="name"
            placeholder="Digite o nome da empresa" 
            className="w-72 rounded-lg h-10 border border-[#737778] bg-[#0E0E0E] mt-2 px-4 text-xs"
          />
          <label htmlFor="email" className="text-xs mt-7">Email</label>
          <input 
            type="text" 
            name="email" 
            placeholder="Digite seu email"
            className="w-72 rounded-lg h-10 border border-[#737778] bg-[#0E0E0E] mt-2 px-4 text-xs"
          />
          <label htmlFor="password" className="text-xs mt-7">Senha</label>
          <input 
            type='password'
            name="password" 
            placeholder="********"
            className="w-72 rounded-lg h-10 border border-[#737778] bg-[#0E0E0E] mt-2 px-4 text-xs"
          />
          <button 
            type="submit"
            className="w-72 rounded-lg bg-white text-black h-10 mt-8 text-sm">
            Cadastrar
          </button>
        </form>
      </section>
    </section>
  )
}

export default Register