"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/utils/gtag";

const gaTrackingId = "G-D0K1FGG74W";

export const Gtag = () => {
  const pathname = usePathname();

  useEffect(() => {
    pageview(pathname, gaTrackingId);
  }, [pathname]);

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
      />
      <script
        async
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaTrackingId}', {
        page_path: window.location.pathname
      });
    `,
        }}
      />
    </>
  );
};
