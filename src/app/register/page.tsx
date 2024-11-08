"use client"
import auth from "@/firebaseConnection"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import Image from "next/image"
import { useState } from 'react'
import { agbalumo } from "../fonts"
import { useRouter } from "next/navigation"

interface DataNewUser{
  name: string
  email: string
  password: string
}

const Register = () => {
  const router = useRouter()
  const [dataNewUser, setDataNewUser] = useState<DataNewUser>({
    name: '',
    email: '',
    password: ''
  })
  const [registiringUser, setRegistiringUser] = useState<boolean>(false)
  const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false)
  const [userAlreadyExists, setUserAlreadyExists] = useState<boolean>(false)

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(dataNewUser)
    if(dataNewUser.name === '' || !dataNewUser.email.includes('@') || !dataNewUser.email.includes('.com') || dataNewUser.password === ''){
      setInvalidCredentials(true)
      return
    }
    setRegistiringUser(true)
    await createUserWithEmailAndPassword(auth, dataNewUser.email, dataNewUser.password)
    .then(() => {
      localStorage.setItem("@name_user", dataNewUser.name)
      setRegistiringUser(false)
      setDataNewUser({
        name: '',
        email: '',
        password: ''
      })
      router.push('/plans')
    })
    .catch((error) => {
      if(error.code === 'auth/email-already-in-use'){
        setUserAlreadyExists(true)
        setDataNewUser({
          name: '',
          email: '',
          password: ''
        })
      }
      setRegistiringUser(false)
    })
  }

  return(
    <section className="h-screen flex flex-row justify-center items-center">
      <Image 
        src='artifical-intelligence.svg' 
        width={1}
        height={1}
        alt="login-image" 
        className={`hidden lg:block ${(invalidCredentials || userAlreadyExists) ? 'w-[592px]' : 'w-[570px]'}`}
      />
      <section className="flex flex-col items-center w-72 lg:w-96 lg:bg-black lg:rounded-br-xl lg:rounded-tr-xl lg:py-10">
        <article className="flex flex-col text-white font-bold gap-14">
          <h1 className={`${agbalumo.className} text-5xl text-center`}>+score</h1>
          <span className="w-72">Enter the data</span>
        </article>
        <form className="flex flex-col text-white mt-5" onSubmit={handleRegister}>
          <label htmlFor="name" className="text-xs">Name</label>
          <input 
            type="text"
            name="name"
            placeholder="Enter company name" 
            className="w-72 rounded-lg h-10 border border-[#737778] bg-[#0E0E0E] mt-2 px-4 text-xs"
            value={dataNewUser.name}
            onChange={(e) => setDataNewUser({ ...dataNewUser, name: e.target.value  })}
          />
          <label htmlFor="email" className="text-xs mt-7">Email</label>
          <input 
            type="text" 
            name="email" 
            placeholder="Digite seu email"
            className="w-72 rounded-lg h-10 border border-[#737778] bg-[#0E0E0E] mt-2 px-4 text-xs"
            value={dataNewUser.email}
            onChange={(e) => setDataNewUser({ ...dataNewUser, email: e.target.value  })}
            />
          <label htmlFor="password" className="text-xs mt-7">Password</label>
          <input 
            type='password'
            name="password" 
            placeholder="********"
            className="w-72 rounded-lg h-10 border border-[#737778] bg-[#0E0E0E] mt-2 px-4 text-xs"
            value={dataNewUser.password}
            onChange={(e) => setDataNewUser({ ...dataNewUser, password: e.target.value  })}
            />
          <button 
            type="submit"
            className={`w-72 rounded-lg bg-white text-black h-10 mt-8 text-sm ${registiringUser && 'opacity-20'}`}
            disabled={registiringUser}>
            {registiringUser ? 'Loading...' : 'Register'}
          </button>
          {invalidCredentials && (
            <span className="text-xs text-red-500 text-center mt-2">Invalid credentials!</span>
          )}
          {userAlreadyExists && (
            <span className="text-xs text-red-500 text-center mt-2">User already exist!</span>
          )}
        </form>
      </section>
    </section>
  )
}

export default Register