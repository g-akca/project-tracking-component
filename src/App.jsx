import BackgroundMask from "./components/BackgroundMask";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="relative text-base leading-base text-blue-950 pt-9.5 pb-16 px-8 tablet:px-20 overflow-hidden">
      <BackgroundMask />

      <div className="flex flex-col gap-16 tablet:gap-15.75 max-w-277.5 mx-auto">
        <Header />

        <div className="flex flex-col gap-21.75 tablet:gap-16">
          <HeroImage />
          <MainSection />
        </div>
      </div>
    </div>
  )
}

export default App
