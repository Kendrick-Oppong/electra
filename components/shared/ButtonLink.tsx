import { Button } from "@/components/ui/button";

interface ButtonLinkProps {
    children:React.ReactNode;
    className?:string
}

const ButtonLink = ({children,className}:ButtonLinkProps) => {
  return (
     <Button
            size="lg"
            className={`text-lg mt-6 border hover:bg-secondary hover:border-primary hover:text-black dark:text-white shadow-2xl ${className}`}
          >
          {children}
          </Button>
  )
}

export default ButtonLink