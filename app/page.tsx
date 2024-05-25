
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import invoiceData from "@/components/utils/invoiceData"
import ChatComponent from "@/components/ui/chat"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { accordionItems } from '@/components/utils/accordionData';


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="shadow-2xl">
        <Tabs defaultValue="home" className="w-[600px]">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="quick_invest">Quick Invest</TabsTrigger>
            <TabsTrigger value="magic_invest">Magic Invest</TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <Table>
              {/* <TableCaption>A list of your recent transactions.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoiceData.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell>{transaction.details}</TableCell>
                    <TableCell className="text-right">{transaction.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="quick_invest">
          <Accordion type="single" collapsible className="w-full pl-5 pr-5">
            {accordionItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="">
                  {item.option1}
                </AccordionContent>
                <AccordionContent>
                  {item.option2}
                </AccordionContent>
                <AccordionContent>
                  {item.option3}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          </TabsContent>
          <TabsContent className="" value="magic_invest"><ChatComponent /></TabsContent>
        </Tabs>
      </div>
      
    </main>
  );
}
