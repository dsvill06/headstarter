import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/landing/Hero/hero';
import Navbar from '@/components/landing/Navbar/navbar';
import Features from '@/components/landing/Features/Features';
import Footer from '@/components/landing/Footer/Footer';


export default async function FrontPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  

  return (
   <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Footer/>
   </div>
  );
}
