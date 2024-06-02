import { ShoppingCart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CurrencyLanguage from "./CurrencyLanguage";
import Categories from "./Categories";
import ShopCategories from "./ShopCategories";
import ModeToggle from "./ModeToggle";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";


const NavBar = () => {


  return (
    <header>
      <div className="flex justify-between bg-primary items-center px-5 py-2">
        <div className="flex justify-between gap-4 text-white">
          <p>Call us: +233 5521 99556</p>
          <p> or email:Electra@gmail.com</p>
        </div>
        <div className="flex justify-between gap-4">
          <CurrencyLanguage />
        </div>
      </div>
      <nav className="px-5 my-5">
        <div className="flex justify-between items-center gap-4">
          <div className="text-4xl font-black">
            <Link href="/">
              <h1>
                {" "}
                <span>Elec</span>tra
              </h1>
            </Link>
          </div>
          <div className="relative w-full flex items-center">
            <Search className="absolute left-4 top-2.5 opacity-50" />
            <Input
              type="search"
              placeholder="Search product"
              className="h-11 ring-1 pl-14  border border-primary focus-visible:ring-2  rounded-tr-none rounded-br-none"
            />
            <Button className=" h-12 px-10 rounded-tl-none rounded-bl-none rounded-tr-xl rounded-br-xl ">
              Search
            </Button>
          </div>
          <div>
            <ModeToggle />
          </div>
          <div>
            <ShoppingCart className="" size={32} />
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
