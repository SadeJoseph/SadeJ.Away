"use client"
import Link from "next/link";
import Button from "../ui/Button";
import Route from "../ui/Route"
import { navLinks } from "@/constants";


const Navbar = () => {
  return (
    <nav className="py-4 w-full ">
      <div
        className="w-[95%] mx-auto max-w-[1450px] flex
            items-center justify-between pb-5 border-b border-primary ">
        <div className="flex-1">
          <Link href={"/"}>
            <h1 className="text-3xl font-extrabold text-tertiary">
              Sade
              <span className="text-primary">J</span>
              Away
            </h1>
          </Link>
        </div>

        <ul className="flex items-center justify-center gap-16 flex-2 max-md:hidden text-tertiary">
            {navLinks.map((link, index) => (
              <li key={index}> 
                 <Route  
                  route={link.route}
                  label={link.label}/>

              </li>
            ))}
        </ul>
        <div className="flex gap-5 flex-1 justify-end max-md:hidden" >
            <Button 
            text="Login" 
            onClick ={() => null}
            />
            <Button 
            text="Sign Up" 
            onClick ={() => null}
            />

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
