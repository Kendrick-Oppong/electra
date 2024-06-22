 "use client";
 import { useRouter, useSearchParams } from "next/navigation";
 import React, { useState, useRef, useCallback, KeyboardEvent } from "react";
 import { Search, X, Loader,Lightbulb } from "lucide-react";
 import { Input } from "@/components/ui/input";
 import { ScrollArea } from "@/components/ui/scroll-area";

 import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 import { brands } from "@/constants/brands";
 import axios from "axios";
 import {
   getSearchToggleState,
   setSearchExpanded,
   toggleSearch,
 } from "@/redux/features/searchToggleSlice";
 import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import toast from "react-hot-toast";

 const baseUrl = process.env.NEXT_PUBLIC_API_DOMAIN;

const GlobalSearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const isExpanded = useAppSelector(getSearchToggleState);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<{ title: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const debounceTimeoutRef = useRef<any | null>(null);
  const cancelTokenSourceRef = useRef<ReturnType<
    typeof axios.CancelToken.source
  > | null>(null);

  // Handle brand selection
  const handleBrandSelect = (value: string) => {
    setSelectedBrand(value === "Default" ? "" : value);
    toast.success(`${value} category selected`)
    fetchSuggestions(searchQuery, value); // Trigger refetch when brand changes
  };

  // Handle search input change with debounce
  const handleGlobalSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const query = e.target.value;
    setSearchQuery(query);

    // Debounce the search
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      fetchSuggestions(query, selectedBrand);
    }, 300);
  };

  // Handle keydown event for Enter key
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateURLParams(searchQuery, selectedBrand);
      dispatch(setSearchExpanded(false));
    }
  };

  // Fetch suggestions from the API
  const fetchSuggestions = useCallback(async (query: string, brand: string) => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    setLoading(true);

    if (cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel(
        "Operation cancelled due to new request.",
      );
    }
    const cancelTokenSource = axios.CancelToken.source();
    cancelTokenSourceRef.current = cancelTokenSource;

    try {
      const response = await axios.get(
        `${baseUrl}/search?query=${query}&brand=${brand}`,
        {
          cancelToken: cancelTokenSource.token,
        },
      );
      setSuggestions(response.data.data || []);
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    dispatch(setSearchExpanded(false));
    updateURLParams(suggestion, selectedBrand); // Update URL params on suggestion click
  };

  // Update URL parameters based on search or suggestion
  const updateURLParams = (query: string, brand: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("query", query);
    params.set("brand", brand);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="relative">
      <div
        role="button"
        className="cursor-pointer"
        onClick={() => dispatch(toggleSearch())}
      >
        <Search size={30} />
      </div>
      {isExpanded && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col bg-black bg-opacity-50 backdrop-blur-md">
          <div className="w-full bg-accent px-5 py-16 shadow-md sm:px-10">
            <div
              role="button"
              className="absolute right-6 top-5 cursor-pointer"
              onClick={() => dispatch(setSearchExpanded(false))}
            >
              <X size={30} />
            </div>
            <div className="relative flex w-full flex-col items-center gap-3 md:flex-row">
              <div className="w-full md:basis-[30%]">
                <Select onValueChange={(value) => handleBrandSelect(value)}>
                  <SelectTrigger className="py-[1.3rem]">
                    <SelectValue placeholder="Search By" />
                  </SelectTrigger>
                  <SelectContent className="border-gray">
                    <SelectGroup>
                      {brands.map((searchCategory) => (
                        <SelectItem value={searchCategory} key={searchCategory}>
                          <p className="text-black dark:text-white">
                           {searchCategory === "Default" ? "Category: All ": `Category: ${searchCategory}`}
                          </p>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative w-full">
                <Search className="absolute left-4 top-2.5 opacity-50" />
                <div>
                  <Input
                    value={searchQuery}
                    onChange={(e) => handleGlobalSearch(e)}
                    onKeyDown={handleKeyDown}
                    type="search"
                    placeholder="Search Product..."
                    className="h-11 w-full rounded-md border border-primary pl-14"
                  />
                  {loading && (
                    <div className="w-full">
                      <Loader className="mx-auto animate-spin" />
                    </div>
                  )}
                  {suggestions.length > 0 ? (
                    <div className="border-gray absolute z-10 mt-1 w-full rounded-md border bg-accent shadow-lg">
                      <ScrollArea className="h-[400px]">
                        {suggestions.map((suggestion, index) => (
                          <div
                            role="button"
                            key={index}
                            className="cursor-pointer p-2 hover:bg-secondary"
                            onClick={() =>
                              handleSuggestionClick(suggestion.title)
                            }
                          >
                            {suggestion.title}
                          </div>
                        ))}
                      </ScrollArea>
                    </div>
                  ) : (
                    <div className="border-gray absolute z-10 mt-1 w-full rounded-md border p-1 shadow-lg">
                      <p className="flex justify-center items-center gap-1">
                        <Lightbulb className="text-[#ff7900]"/>
                        Try searching by product or changing category
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
