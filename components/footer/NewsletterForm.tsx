import { Input } from "@/components/ui/input";
import { ButtonLink } from "@/components/shared";

const NewsletterForm = ({ handleClose }:{handleClose?: () => void}) => {
  return (
    <>
    <Input
      type="email"
      required
      placeholder="Enter email address"
      className="h-12 border border-primary focus-visible:ring-1"
    />
        <ButtonLink onClick={handleClose} type="submit" className="absolute -top-[22px] right-0.5">
          Subscribe
        </ButtonLink>
        </>
  );
};

export default NewsletterForm;
