import { forwardRef } from "react"

export const Apresentation = forwardRef<HTMLElement>((props, ref) => {
  return(
    <section ref={ref} className="flex flex-col w-full bg-white px-12 py-8">
      <article className="flex flex-col self-center gap-6 font-bold w-80 md:text-center md:w-auto">
        <h1 className="md:text-2xl">Who are we?</h1>
        <p className="text-2xl w-72 md:w-[700px] md:text-4xl">A product that streamlines your social media management processes</p>
      </article>
      <div className="flex items-center justify-center self-center my-8 py-5 img-bg rounded-lg md:hidden">
        <img src="/comments-mobile.png" alt="comments-img" />
      </div>
      <div className="hidden md:flex items-center justify-center self-center my-8 py-5 bg-black img-bg rounded-lg">
        <img 
          src='/chart-desktop.png' 
          alt='chart-img'
          className="w-[750px]"
        />
      </div>
      <p className="text-xs md:text-center md:text-xl lg:w-[800px] lg:self-center">We use Artificial Intelligence to help your company reduce costs and streamline processes in a unique way.</p>
    </section>
  )
})