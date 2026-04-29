function Navbar() {
  return (
    <nav className="hidden desktop:block">
      <ul className="flex gap-10 items-center font-bold uppercase tracking-[1px]">
        <li><a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all hover:after:w-full">Product</a></li>
        <li><a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all hover:after:w-full">Features</a></li>
        <li><a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-blue-950 after:transition-all hover:after:w-full">Pricing</a></li>
        <div className="w-1.5 aspect-square rounded-full bg-blue-950 opacity-15" />
        <li><a href="#" className="opacity-50 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-blue-950 after:opacity-50 after:transition-all hover:after:w-full">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;