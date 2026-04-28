function Navbar() {
  return (
    <nav className="hidden desktop:block">
      <ul className="flex gap-10 items-center font-bold uppercase tracking-[1px]">
        <li><a href="#">Product</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <div className="w-1.5 aspect-square rounded-full bg-blue-950 opacity-15" />
        <li className="opacity-50"><a href="#">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;