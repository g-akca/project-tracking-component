import logo from "/images/logo.svg";
import hamburgerIcon from "/images/icon-hamburger.svg";
import closeIcon from "/images/icon-close.svg";
import Menu from "./Menu";

import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center">
      <img src={logo} alt="Logo image" className="h-6" />
      {!isMenuOpen ? (
        <button type="button" onClick={() => setIsMenuOpen(true)}>
          <img src={hamburgerIcon} alt="Hamburger icon" />
        </button>
      ) : (
        <button type="button" onClick={() => setIsMenuOpen(false)}>
          <img src={closeIcon} alt="Close icon" />
        </button>
      )}

      {isMenuOpen && 
        <Menu />
      }
    </header>
  )
}

export default Header;