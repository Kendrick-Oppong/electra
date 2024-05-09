import { X, ShoppingCart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CurrencyLanguage from "./CurrencyLanguage";
import Categories from "./Categories";
import ShopCategories from "./ShopCategories";
import ModeToggle from "./ModeToggle";

import Link from "next/link";

const NavBar = () => {
  return (
    <header>
      <div
        className="flex justify-between bg-primary items-center px-5 py-2"
        // style={{
        //   background: " linear-gradient(90deg, #DF4979 44.06%, #E36B31 50%)",
        // }}
      >
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
          <div>
            <X />
          </div>
          <div className="relative w-full flex items-center">
            <Search className="absolute left-4 top-2.5 opacity-50" />
            <Input
              type="search"
              placeholder="Search product"
              className="h-11 ring-1 pl-14 rounded-tr-none rounded-br-none"
            />
            <Button className=" h-12 px-10 rounded-tl-none rounded-bl-none rounded-tr-xl rounded-br-xl hover:bg-secondary">
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
              href=""
              className="hover:text-primary transition ease-in duration-300"
            >
              <li>Home</li>
            </Link>
            <ShopCategories />
            <Link
              href=""
              className="hover:text-primary transition ease-in duration-300"
            >
              <li>Login</li>
            </Link>
            <Link
              href=""
              className="hover:text-primary transition ease-in duration-300"
            >
              <li>Collection</li>
            </Link>
            <Link
              href=""
              className="hover:text-primary transition ease-in duration-300"
            >
              <li>About Us</li>
            </Link>
            <Link
              href=""
              className="hover:text-primary transition ease-in duration-300"
            >
              <li>FAQS</li>
            </Link>
            <Link
              href=""
              className="hover:text-primary transition ease-in duration-300"
            ></Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
