import { Button } from "@/components/ui/button";

interface ButtonLinkProps {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;

}

const ButtonLink = ({
  children,
  className,
  type,
  onClick,
  disabled,
}: ButtonLinkProps) => {
  return (
    <Button
      size="lg"
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`text-lg mt-6 border hover:bg-secondary hover:border-primary hover:text-black dark:text-white shadow-2xl ${className}`}
    >
      {children}
    </Button>
  );
};

export default ButtonLink;
