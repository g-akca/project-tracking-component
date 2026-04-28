import logo from "/images/logo.svg";
import hamburgerIcon from "/images/icon-hamburger.svg";
import Menu from "./Menu";

import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="Logo image" className="h-6" />
      <img src={hamburgerIcon} alt="Hamburger icon" />

      {isMenuOpen && 
        <Menu />
      }
    </header>
  )
}

export default Header;