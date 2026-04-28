function MainSection() {
  return (
    <main className="flex flex-col gap-8 tablet:gap-16 desktop:mt-10">
      <div className="flex flex-col gap-4 tablet:gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <span className="bg-blue-950 text-white uppercase font-bold tracking-[1px] rounded-[12.5px] w-12 h-6.25 flex justify-center items-center">New</span>
            <p className="opacity-50 uppercase tracking-[5px]">Monograph Dashboard</p>
          </div>

          <h1 className="font-bold text-[40px] leading-[100%] uppercase tablet:text-[64px]">Powerful Insights<br/>Into Your Team</h1>
        </div>

        <p className="font-barlow text-[18px] leading-[145%] opacity-75">Project planning and time tracking<br/>for agile teams</p>
      </div>

      <div className="flex gap-4 tablet:gap-6 items-center">
        <button type="button" className="bg-red-400 text-white px-6 tablet:px-8 py-2 tablet:py-4 h-10 tablet:h-12 tablet:w-46 rounded-[5px] font-bold tracking-[1px] uppercase">Schedule a Demo</button>
        <p className="opacity-50 uppercase tracking-[2.5px] tablet:tracking-[5px]">To see a preview</p>
      </div>
    </main>
  )
}

export default MainSection;