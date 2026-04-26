import BackgroundMask from "./components/BackgroundMask";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="relative text-base leading-base">
      <BackgroundMask />

      <Header />
      
      <HeroImage />

      <MainSection />
    </div>
  )
}

export default App
