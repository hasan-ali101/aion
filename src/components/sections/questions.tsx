import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";

export const Questions = () => {
  return (
    <div className="flex flex-col items-center gap-6 px-10 py-20 md:px-20">
      <h2 className="text-center">
        Got Questions?
        <span className="text-primary">
          <br />
          We Have Answers
        </span>
      </h2>
      <div className="max-w-section flex w-full flex-col md:flex-row md:gap-6">
        <Accordion type="single" collapsible className="w-full md:w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does the treatment work?</AccordionTrigger>
            <AccordionContent>
              Donec auctor eget odio vel mattis. Etiam non tristique elit.
              Curabitur pellentesque sodales ipsum ut blandit. Suspendisse
              lectus eros, pellentesque ac dui vitae, dapibus imperdiet nisl.
              Vivamus at leo mauris. Fusce vel ligula at eros efficitur laoreet.
              Duis vulputate ullamcorper commodo. Nulla facilisi. Donec at
              congue mauris. Maecenas euismod tempor molestie.  {" "}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Does this therapy have any side effects or risks?
            </AccordionTrigger>
            <AccordionContent>
              Donec auctor eget odio vel mattis. Etiam non tristique elit.
              Curabitur pellentesque sodales ipsum ut blandit. Suspendisse
              lectus eros, pellentesque ac dui vitae, dapibus imperdiet nisl.
              Vivamus at leo mauris. Fusce vel ligula at eros efficitur laoreet.
              Duis vulputate ullamcorper commodo. Nulla facilisi. Donec at
              congue mauris. Maecenas euismod tempor molestie.  
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Where is the scientific evidence that this is safe and works?
            </AccordionTrigger>
            <AccordionContent>
              Donec auctor eget odio vel mattis. Etiam non tristique elit.
              Curabitur pellentesque sodales ipsum ut blandit. Suspendisse
              lectus eros, pellentesque ac dui vitae, dapibus imperdiet nisl.
              Vivamus at leo mauris. Fusce vel ligula at eros efficitur laoreet.
              Duis vulputate ullamcorper commodo. Nulla facilisi. Donec at
              congue mauris. Maecenas euismod tempor molestie.  
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full md:w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it legal?</AccordionTrigger>
            <AccordionContent>
              Donec auctor eget odio vel mattis. Etiam non tristique elit.
              Curabitur pellentesque sodales ipsum ut blandit. Suspendisse
              lectus eros, pellentesque ac dui vitae, dapibus imperdiet nisl.
              Vivamus at leo mauris. Fusce vel ligula at eros efficitur laoreet.
              Duis vulputate ullamcorper commodo. Nulla facilisi. Donec at
              congue mauris. Maecenas euismod tempor molestie.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Do I need a referral? How can I get a referral from my GP?
            </AccordionTrigger>
            <AccordionContent>
              Donec auctor eget odio vel mattis. Etiam non tristique elit.
              Curabitur pellentesque sodales ipsum ut blandit. Suspendisse
              lectus eros, pellentesque ac dui vitae, dapibus imperdiet nisl.
              Vivamus at leo mauris. Fusce vel ligula at eros efficitur laoreet.
              Duis vulputate ullamcorper commodo. Nulla facilisi. Donec at
              congue mauris. Maecenas euismod tempor molestie.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How much is treatment at Aion?</AccordionTrigger>
            <AccordionContent>
              Donec auctor eget odio vel mattis. Etiam non tristique elit.
              Curabitur pellentesque sodales ipsum ut blandit. Suspendisse
              lectus eros, pellentesque ac dui vitae, dapibus imperdiet nisl.
              Vivamus at leo mauris. Fusce vel ligula at eros efficitur laoreet.
              Duis vulputate ullamcorper commodo. Nulla facilisi. Donec at
              congue mauris. Maecenas euismod tempor molestie.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
