import { Button } from "@/components/ui/button";

interface ButtonLinkProps {
    children:React.ReactNode;
    className?:string;
    type?:"submit"| "button"| "reset"
}

const ButtonLink = ({children,className,type}:ButtonLinkProps) => {
  return (
     <Button
            size="lg"
            type={type}
            className={`text-lg mt-6 border hover:bg-secondary hover:border-primary hover:text-black dark:text-white shadow-2xl ${className}`}
          >
          {children}
          </Button>
  )
}

export default ButtonLink