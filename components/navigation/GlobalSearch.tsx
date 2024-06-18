"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    // Function to handle click outside search area
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false); // Close search if clicked outside
      }
    };
    // Attach event listener when search is expanded
    if (isExpanded) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isExpanded]);

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={toggleSearch}>
        <Search size={30} />
      </div>
      {isExpanded && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col bg-black bg-opacity-50 backdrop-blur-md">
          <div
            ref={searchRef}
            className="w-full bg-accent px-5 py-16 shadow-md sm:px-10"
          >
            <div
              className="absolute right-6 top-5 cursor-pointer"
              onClick={handleClose}
            >
              <X size={30} />
            </div>
            <div className="relative flex w-full items-center">
              <Search className="absolute left-4 top-2.5 opacity-50" />
              <Input
                type="search"
                placeholder="Search Product..."
                className="h-11 rounded-md border border-primary pl-14"
              />
              {/* <Input
                type="search"
                placeholder="Search product"
                className="h-11 rounded-br-none rounded-tr-none border border-primary pl-14 ring-1 focus-visible:ring-2"
              /> */}
              {/* <Button className="h-12 rounded-bl-none rounded-br-xl rounded-tl-none rounded-tr-xl px-10">
                Search
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
