import Image from "next/image";
import ButtonLink from "./ButtonLink";

const CookieAnnouncement = () => {
  return (
    <div className="">
      <section className="fixed z-[100] bottom-4 left-0 right-0 my-0 mx-auto flex w-full max-w-4xl gap-3 rounded-lg bg-accent p-6 shadow-lg">
        <div className="flex-1">
          <div className="mb-4 flex items-center gap-2">
            <Image
              src="/cookies-svgrepo-com.svg"
              width={40}
              height={40}
              alt=""
            />
            <h1 className="font-bold text-primary text-xl">We use cookie files</h1>
          </div>
          <p className="font-medium">
            We activate cookies by default to ensure proper functioning of this
            website
          </p>
        </div>

        <div className="space-y-2">
          <div>
            <ButtonLink className="w-full bg-destructive mt-0 hover:bg-popover">Necessary Cookies</ButtonLink>
          </div>
          <div>
            <ButtonLink className="w-full mt-0">Accept All</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookieAnnouncement;
