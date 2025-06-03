import Footer from "@/components/Footer/Footer";
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
    </>
  );
}
