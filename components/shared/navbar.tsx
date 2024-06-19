

const Navbar = () => {
    return(
        <nav className="py-4 w-full">
            <div className="w-[95%] mx-auto max-w-[1450px] flex
            items-center justify-between pb-5 border-b border-primary">
                <div className="flex-1">
                    <h1 className="text-3xl font-extrabold text-tertiary">
                        Sade 
                        <span className="text-primary">J</span>
                        Away
                    </h1>
                </div>

            <ul className="flex items-center justify-center gap-16 flex-2 max-md:hidden text-tertiary">
                <h1>Home</h1>
                <h1>Posts</h1>
                <h1>About</h1>
                <h1>Contact</h1>
            </ul>
         
            </div>

        </nav>
    );
  }
  
  export default Navbar;