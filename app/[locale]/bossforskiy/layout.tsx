import Footer from "@/components/Footer/Footer";
import Ft from "@/components/Footer/Ft";
import Header from "@/components/Header/Header";

export default function BossforskiyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Ft />
    </>
  );
}
