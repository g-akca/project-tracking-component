import BackgroundMask from "./components/BackgroundMask";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="relative text-base leading-base text-blue-950 pt-9.5 pb-16 px-8 tablet:px-20 overflow-hidden">
      <BackgroundMask />

      <Header />
      <HeroImage />
      <MainSection />
    </div>
  )
}

export default App
