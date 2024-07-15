import {
  Categories,
  ShopCategories,
  ModeToggle,
  GlobalSearch,
  FavoriteCartIcons,
  MobileNavbarSheet,
} from ".";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants/navLinks";
import { LayoutDashboard, Menu } from "lucide-react";

const NavBar = () => {
  return (
    <header>
      <nav className="px-3 py-5 sm:px-5">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-black">
            <Link href="/">
              <h1>
                {" "}
                <span>Elec</span>tra
              </h1>
            </Link>
          </div>

          <div className="hidden items-center justify-between lg:flex">
            <Categories />
            <ul className="flex items-center justify-between gap-4 font-medium">
              <ShopCategories />
              <SignedOut>
                <Link
                  href="/sign-in"
                  className={`transition duration-300 ease-in hover:text-primary`}
                >
                  Sign in
                </Link>
              </SignedOut>
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

          <div className="flex items-center gap-6 sm:hidden">
            <div className="sm:hidden">
              <ModeToggle />
            </div>
           
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
           
            <MobileNavbarSheet>
              <Menu
                size={30}
                className="border-gray cursor-pointer rounded-sm shadow-xl"
              />
            </MobileNavbarSheet>
          </div>

          <div className="relative z-50 hidden items-center justify-between gap-4 sm:flex lg:gap-8">
            <GlobalSearch />
            <div>
              <ModeToggle />
            </div>
            <SignedOut>
              <FavoriteCartIcons />
              <MobileNavbarSheet>
                <Menu
                  size={30}
                  className="border-gray cursor-pointer rounded-sm shadow-xl lg:hidden"
                />
              </MobileNavbarSheet>
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
                className={`flex items-center transition duration-300 ease-in hover:text-primary`}
              >
                <LayoutDashboard />
              </Link>
              <UserButton afterSignOutUrl="/" />
              <MobileNavbarSheet>
                <Menu
                  size={30}
                  className="border-gray cursor-pointer rounded-sm shadow-xl lg:hidden"
                />
              </MobileNavbarSheet>
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
