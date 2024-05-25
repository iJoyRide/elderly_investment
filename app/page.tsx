
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import invoiceData from "@/components/utils/invoiceData"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
          <TabsContent className="h-[144px]" value="quick_invest">
            <Accordion className=" p-5" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent className="h-[144px]" value="magic_invest">Prompt engineering here</TabsContent>
        </Tabs>
      </div>
      
    </main>
  );
}
