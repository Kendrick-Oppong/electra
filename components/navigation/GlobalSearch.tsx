import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";

const GlobalSearch = ()=> {
 return(
    <div>
        <Search size={32}/>
     {/* <div className="relative w-full flex items-center">
            <Search className="absolute left-4 top-2.5 opacity-50" />
            <Input
              type="search"
              placeholder="Search product"
              className="h-11 ring-1 pl-14  border border-primary focus-visible:ring-2 rounded-tr-none rounded-br-none"
              />
            <Button className="h-12 px-10 rounded-tl-none rounded-bl-none rounded-tr-xl rounded-br-xl ">
              Search
            </Button>
          </div> */}
 </div>
 )
}

export default GlobalSearch