import { forwardRef } from "react"

export const Apresentation = forwardRef<HTMLElement>((props, ref) => {
  return(
    <section ref={ref} className="flex flex-col w-full bg-white px-12 py-8">
      <article className="flex flex-col self-center gap-6 font-bold w-80 md:text-center md:w-auto">
        <h1 className="md:text-2xl">Quem somos nós</h1>
        <p className="text-2xl w-72 md:w-[700px] md:text-4xl">Um produto que agiliza seus processos de gestão de mídias sociais</p>
      </article>
      <div className="flex items-center justify-center w-full h-80 bg-slate-500 my-10 xl:w-[1200px] self-center">
        <h1 className="text-3xl">alguma demo/video</h1>
      </div>
      <p className="text-xs md:text-center md:text-xl lg:w-[800px] lg:self-center">Utilizamos de Inteligência Artificial para ajudar sua empresa a reduzir custos e agilizar processos de forma única.</p>
    </section>
  )
})