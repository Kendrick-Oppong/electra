"use client";
import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const FilterByPrice = () => {
  const [price, setPrice] = useState<number | string>(300);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPrice(e.target.value);
    const params = new URLSearchParams(searchParams);
    params.set("price_range", String(price));
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="flex gap-4">
        <div>
          <p className="text-sm">From</p>
          <Input
            type="number"
            min="300"
            max="9000"
            defaultValue={300}
            value={price}
            onChange={(e) => handleFilterChange(e)}
            className="w-full rounded-sm border-gray cursor-pointer"
          />
        </div>
        <div>
          <p className="text-sm">To</p>
          <Input
            type="number"
            min="300"
            max="9000"
            readOnly
            value={9000}
            className="w-full rounded-sm border-gray cursor-pointer"
          />
        </div>
      </div>
      <Input
        type="range"
        min="300"
        max="9000"
        value={price}
        defaultValue={300}
        onChange={(e) => handleFilterChange(e)}
        className="w-full rounded-sm cursor-pointer"
      />
    </>
  );
};

export default FilterByPrice;
