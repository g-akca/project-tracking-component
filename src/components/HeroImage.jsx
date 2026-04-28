import illustration from "/images/illustration-devices.svg";

function HeroImage() {
  return (
    <img src={illustration} alt="Devices illustration" className="max-w-none w-[132vw] tablet:w-[125vw] -translate-x-5.5 tablet:translate-x-0" />
  )
}

export default HeroImage;