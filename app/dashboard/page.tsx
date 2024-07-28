'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getResponse } from '@/lib/chat';


export default async function FrontPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  
  const sendResponse = async () => {
    const response = await getResponse();
    console.log(response);
  }
  return (
   <div>
      <Button onClick={() => sendResponse()}>Button</Button>
   </div>
  );
}
