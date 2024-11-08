"use client"
import auth from "@/firebaseConnection"
import { EyeOff, Eye } from "lucide-react"
import { agbalumo } from "../fonts"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"

interface DataLoginUser{
  email: string
  password: string
}

const Login = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [dataLoginUser, setDataLoginUser] = useState<DataLoginUser>({
    email: '',
    password: ''
  })
  const [loggingUser, setLoggingUser] = useState<boolean>(false)
  const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false)

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoggingUser(true)
    await signInWithEmailAndPassword(auth, dataLoginUser.email, dataLoginUser.password)
    .then(() => {
      setLoggingUser(false)
      router.push('/plans')
    })
    .catch((error) => {
      if(error.code === 'auth/invalid-email' || error.code === 'auth/invalid-credential'){
        setInvalidCredentials(true)
        setDataLoginUser({
          email: '',
          password: ''
        })
      }
      console.log(error.code)
      setLoggingUser(false)
    })
  }

  return(
    <section className="h-screen flex flex-row justify-center items-center">
      <Image 
        src='artifical-intelligence.svg'
        width={1}
        height={1}
        alt="login-image" 
        className={`hidden lg:block h-[545px] ${invalidCredentials ? 'w-[588px] h-[570px]' : 'w-[564px]'}`}
      />
      <section className="flex flex-col items-center w-72 lg:w-96 lg:bg-black lg:rounded-br-xl lg:rounded-tr-xl lg:py-10">
        <article className="flex flex-col text-white font-bold gap-14">
          <h1 className={`${agbalumo.className} text-5xl text-center`}>+score</h1>
          <span className="w-72">Log in to get started!</span>
        </article>
        <form className="flex flex-col text-white mt-5" onSubmit={handleLogin}>
          <label htmlFor="email" className="text-xs">Email</label>
          <input 
            type="text" 
            name="email" 
            placeholder="Enter your email"
            className="w-72 rounded-lg h-10 border border-[#737778] bg-[#0E0E0E] mt-2 px-4 text-xs"
            value={dataLoginUser.email}
            onChange={(e) => setDataLoginUser({
              ...dataLoginUser,
              email: e.target.value
            })}
          />
          <label htmlFor="password" className="text-xs mt-7">Password</label>
          <div className="flex flex-row">
            <input 
              type={showPassword ? 'text' : 'password'} 
              name="password" 
              placeholder="********"
              className="w-72 rounded-lg h-10 border border-[#737778] bg-[#0E0E0E] mt-2 px-4 text-xs"
              value={dataLoginUser.password}
              onChange={(e) => setDataLoginUser({
                ...dataLoginUser,
                password: e.target.value
              })}
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
            className={`w-72 rounded-lg bg-white text-black h-10 mt-8 text-sm ${loggingUser && 'opacity-20'} `}
            disabled={loggingUser}>
            {loggingUser ? 'Loading...' : 'Login'}
          </button>
          {invalidCredentials && (
            <span className="text-xs text-red-500 text-center mt-2">Invalid credentials!</span>
          )}
        </form>
        <span className="text-[#737778] text-center my-3">or</span>
        <Link 
          href='/register'
          className="w-72 flex items-center justify-center rounded-lg bg-black text-white h-10 text-sm lg:text-[#737778] underline">
          Register
        </Link>
      </section>
    </section>
  )
}

export default Login