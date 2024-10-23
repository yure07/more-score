'use client'
import { Advantages } from "@/components/Home/advantages";
import { Apresentation } from "@/components/Home/apresentation";
import { Header } from "@/components/Home/header";
import { Merchan } from "@/components/Home/merchan";
import { Plans } from "@/components/Home/plans";
import { useRef } from "react";

export default function Home() {
  const knowUsRef = useRef<HTMLElement>(null);
  const plansRef = useRef<HTMLElement>(null)

  return (
    <div className="flex flex-col">
      <Header sectionsRefs={{ knowUsRef, plansRef }}/>
      <Merchan/>
      <Apresentation ref={knowUsRef}/>
      <Advantages/>
      <Plans ref={plansRef}/>
      <footer className="my-16 text-white text-center text-xl">
        Todos os direitos reservados
      </footer>
    </div>
  );
}
