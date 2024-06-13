import { ShoppingCart,Heart } from "lucide-react";
import Categories from "./Categories";
import ShopCategories from "./ShopCategories";
import ModeToggle from "./ModeToggle";
import GlobalSearch from "./GlobalSearch";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";


const NavBar = () => {

  return (
    <header>
      <div className="flex justify-between bg-primary items-center px-5 py-2 text-white">
          <p>Call us: +233 5521 99556</p>
          <p>email:Electra@gmail.com</p>
      </div>
      <nav className="px-5 my-5">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-black">
            <Link href="/">
              <h1>
                {" "}
                <span>Elec</span>tra
              </h1>
            </Link>
          </div>

          <div className="flex justify-between items-center gap-8">
              <GlobalSearch/>
              <div>
                <ModeToggle />
              </div>
              <div>
                <Heart className="" size={32} />
              </div>
              <div>
                <ShoppingCart className="" size={32} />
              </div>
          </div>
        </div>
        <div className="flex justify-between items-center  my-6 ">
          <Categories />
          <ul className="flex justify-between items-center font-medium gap-8">
            <Link
              href="/"
              className="hover:text-primary transition ease-in duration-300"
            >
              <li>Home</li>
            </Link>
            <ShopCategories />
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`hover:text-primary transition ease-in duration-300`}
              >
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
