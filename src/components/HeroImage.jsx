import illustration from "/images/illustration-devices.svg";

function HeroImage() {
  return (
    <img 
      src={illustration} 
      alt="" 
      className="max-w-none w-[132vw] tablet:w-[125vw] desktop:w-232 -translate-x-5.5 tablet:translate-x-0 desktop:absolute desktop:-right-59" 
    />
  )
}

export default HeroImage;