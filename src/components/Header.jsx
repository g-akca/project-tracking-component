import logo from "/images/logo.svg";
import hamburgerIcon from "/images/icon-hamburger.svg";
import closeIcon from "/images/icon-close.svg";
import Menu from "./Menu";
import Navbar from "./Navbar";

import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center">
      <img src={logo} alt="" className="h-6 desktop:h-8" />
      
      <button
        type="button"
        onClick={() => setIsMenuOpen(prev => !prev)}
        className="desktop:hidden cursor-pointer"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <img
          src={isMenuOpen ? closeIcon : hamburgerIcon}
          alt=""
        />
      </button>

      <Navbar />

      {isMenuOpen && 
        <Menu />
      }
    </header>
  )
}

export default Header;