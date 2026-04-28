import illustration from "/images/illustration-devices.svg";

function HeroImage() {
  return (
    <img src={illustration} alt="Devices illustration" className="max-w-none w-[132vw] tablet:w-[125vw] -translate-x-5.5 tablet:translate-x-0 mt-16 tablet:mt-[15.75] mb-21.75 tablet:mb-16" />
  )
}

export default HeroImage;