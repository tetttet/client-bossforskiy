import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* images.unsplash.com */
  images: {
    domains: ["images.unsplash.com", "placekitten.com", "plus.unsplash.com", "www.chanel.com"],
  },
};

export default withNextIntl(nextConfig);
