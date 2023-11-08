import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Faq = () => {
  return (
    <div
      className="flex shrink-0 snap-center snap-always flex-col items-center justify-center bg-black/90 py-44">
      <h3
        className="relative mb-8 w-4/5 p-4 text-center text-4xl font-semibold text-white md:mb-16 md:block md:w-1/2 md:p-8">
        Frequently Asked Questions
      </h3>
      <div className={'w-4/5 rounded bg-white p-3 px-8 md:w-1/2'}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className={"text-black"}>How can I reschedule?</AccordionTrigger>
            <AccordionContent className={"text-black"}>
              If you need to cancel or reschedule, contact your customer service representative via phone or email, to make changes to your appointment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className={"text-black"}>How long does the process take?</AccordionTrigger>
            <AccordionContent className={"text-black"}>
              The 3D property capture takes about an hour for most houses, however we recommend clearing about 2 hours of time to be safe. We upload the tour as soon as possible after capture. Matterport takes around 6 hours to process it. Once complete, we email you a link to the tour.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className={"text-black"}>What type of payments do you accept?</AccordionTrigger>
            <AccordionContent className={"text-black"}>
              After taking and uploading your tour, we will send you a link to pay online through our secure payment processor Stripe where you can pay by card, or any of the other available payment methods.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className={"text-black"}>What fees or costs are there?</AccordionTrigger>
            <AccordionContent className={"text-black"}>
              None! The price you pay is the price above, no hidden fees, monthly fees, or other service fees!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
