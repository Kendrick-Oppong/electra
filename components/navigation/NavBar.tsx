import {
  Categories,
  ShopCategories,
  ModeToggle,
  GlobalSearch,
  FavoriteCartIcons,
} from ".";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";

const NavBar = () => {
  return (
    <header>
      <div className="flex items-center justify-between bg-primary px-5 py-2 text-white">
        <p>Call us: +233 5521 99556</p>
        <p>email:Electra@gmail.com</p>
      </div>
      <nav className="my-5 px-5">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-black">
            <Link href="/">
              <h1>
                {" "}
                <span>Elec</span>tra
              </h1>
            </Link>
          </div>

          <div className="relative flex items-center justify-between gap-8 z-50">
            <GlobalSearch />
            <div>
              <ModeToggle />
            </div>
            <FavoriteCartIcons/>
          </div>
        </div>
        <div className="my-6 flex items-center justify-between">
          <Categories />
          <ul className="flex items-center justify-between gap-8 font-medium">
            <Link
              href="/"
              className="transition duration-300 ease-in hover:text-primary"
            >
              <li>Home</li>
            </Link>
            <ShopCategories />
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition duration-300 ease-in hover:text-primary`}
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
