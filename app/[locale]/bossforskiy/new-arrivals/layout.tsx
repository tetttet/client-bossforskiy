import { Gtag } from "@/components/gtag";

export default function ArrivalsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Gtag />
      {children}
    </>
  );
}
