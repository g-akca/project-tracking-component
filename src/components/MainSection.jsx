function MainSection() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <span>New</span>
            <p>Monograph Dashboard</p>
          </div>

          <h1>Powerful Insights Into Your Team</h1>
        </div>

        <p>Project planning and time tracking for agile teams</p>
      </div>

      <div className="flex gap-4 items-center">
        <button type="button" className="bg-red-400 text-white px-6 py-2 h-10 rounded-[5px] font-bold tracking-[1px] uppercase">Schedule a Demo</button>
        <p className="text-blue-950 opacity-50 uppercase tracking-[2.5px]">To see a preview</p>
      </div>
    </main>
  )
}

export default MainSection;