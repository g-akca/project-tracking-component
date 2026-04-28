function Menu() {
  return (
    <nav className="absolute z-50 -bottom-70 w-full p-6 bg-white rounded-[3px] shadow-[0_5px_10px_rgba(0,0,0,0.15)]">
      <ul className="flex flex-col gap-6 items-center font-bold text-[18px] leading-[125%] uppercase tracking-[1.2px]">
        <li><a href="#">Product</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <hr className="text-blue-950 opacity-15 h-px w-full" />
        <li className="opacity-50"><a href="#">Login</a></li>
      </ul>
    </nav>
  )
}

export default Menu;