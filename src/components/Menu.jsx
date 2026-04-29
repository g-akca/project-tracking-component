function Menu() {
  return (
    <nav className="desktop:hidden absolute z-50 -bottom-70 w-full p-6 tablet:px-11 bg-white rounded-[3px] shadow-[0_5px_10px_rgba(0,0,0,0.15)]">
      <ul className="flex flex-col gap-6 items-center font-bold text-[18px] leading-[125%] uppercase tracking-[1.2px]">
        <li><a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">Product</a></li>
        <li><a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all hover:after:w-full">Features</a></li>
        <li><a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all hover:after:w-full">Pricing</a></li>
        <hr className="text-blue-950 opacity-15 h-px w-full" />
        <li><a href="#" className="opacity-50 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-blue-950 after:opacity-50 after:transition-all hover:after:w-full">Login</a></li>
      </ul>
    </nav>
  )
}

export default Menu;