"use client";

import {
  FacebookShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import { usePathname } from "next/navigation";

export default function SocialShareLinks({
  productTitle,
}: {
  productTitle: string;
}) {
  const url = usePathname();

  return (
    <div className="space-x-4 flex items-center">
      <FacebookShareButton
        url={`${process.env.NEXT_PUBLIC_API_DOMAIN}${url}`}
        title={`${productTitle}\n`}
      >
        <FacebookMessengerIcon size={32} round />
      </FacebookShareButton>

      <WhatsappShareButton
        url={`${process.env.NEXT_PUBLIC_API_DOMAIN}${url}`}
        title={`${productTitle}\n`}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <TwitterShareButton
        url={`${process.env.NEXT_PUBLIC_API_DOMAIN}${url}`}
        title={`${productTitle}\n`}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <TelegramShareButton
        url={`${process.env.NEXT_PUBLIC_API_DOMAIN}${url}`}
        title={`${productTitle}\n`}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    </div>
  );
}
