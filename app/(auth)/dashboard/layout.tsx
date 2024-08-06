import Link from "next/link";
import { Menu, LayoutDashboard, Heart, ShoppingCart } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const DashBoardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <div className="flex items-center gap-2 font-semibold">
              <LayoutDashboard className="h-6 w-6" />
              <span className="">Dashboard</span>
            </div>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 font-medium lg:px-4">
            
                <Link
                  href="/dashboard/cart"
                  className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Cart
                
                </Link>
              
            
                <Link
                  href="/dashboard/favorite"
                  className="flex items-center gap-3 rounded-lg  px-3 py-2  transition-all hover:text-primary"
                >
                  <Heart className="h-5 w-5" />
                  Favorites{" "}
                </Link>
            
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
       <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
       
          <div
            className="mb-8 flex items-center gap-2 text-lg font-semibold"
          >
            <LayoutDashboard className="h-6 w-6" />
            <span className="">Dashboard</span>
          </div>
 

        <SheetClose asChild>
          <Link
            href="/dashboard/cart"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 hover:text-primary"
          >
            <ShoppingCart className="h-5 w-5" />
            Cart
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/dashboard/favorite"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
          >
            <Heart className="h-5 w-5" />
            Favorites
          </Link>
        </SheetClose>
      </nav>
    </SheetContent>
  </Sheet>
</header>

        <main className="flex flex-1 flex-col gap-4 p-2 lg:gap-6 lg:p-4">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
