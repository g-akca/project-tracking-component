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

      <div className="flex gap-4">
        <button type="button">Schedule a Demo</button>
        <p>To see a preview</p>
      </div>
    </main>
  )
}

export default MainSection;