import NavBar from "@/components/ui/navbar/NavBar";
import Section from "@/components/ui/section/Section";
import { Footer } from "@/components/ui/footer/Footer";


export default function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="min-h-screen">

      <NavBar />
      
      <Section />

      <div className="px-0 sm:px-10">
        { children }

      </div>
      <Footer />

    
    </main>
  );
}