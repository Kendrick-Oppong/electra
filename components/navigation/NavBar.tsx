import {
  Categories,
  ShopCategories,
  ModeToggle,
  GlobalSearch,
  FavoriteCartIcons,
} from ".";
import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { navLinks } from "@/constants/navLinks";
import { LayoutDashboard } from "lucide-react";

const NavBar = () => {
  return (
    <header>
      <nav className="px-5 py-5">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-black">
            <Link href="/">
              <h1>
                {" "}
                <span>Elec</span>tra
              </h1>
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <Categories />
            <ul className="flex items-center justify-between gap-8 font-medium">
              <Link
                href="/"
                className="transition duration-300 ease-in hover:text-primary"
              >
                <li>Home</li>
              </Link>
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

          <div className="relative z-50 flex items-center justify-between gap-8">
            <GlobalSearch />
            <div>
              <ModeToggle />
            </div>
            <SignedOut>
              <FavoriteCartIcons />
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
                className={`flex items-center transition duration-300 ease-in hover:text-primary`}
              >
                <LayoutDashboard />
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
