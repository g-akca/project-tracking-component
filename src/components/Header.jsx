import logo from "/images/logo.svg";
import hamburgerIcon from "/images/icon-hamburger.svg";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="Logo image" className="h-6" />
      <img src={hamburgerIcon} alt="Hamburger icon" />
    </header>
  )
}

export default Header;