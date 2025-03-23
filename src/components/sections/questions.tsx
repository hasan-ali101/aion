import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import Link from "next/link";

export const Questions = () => {
  return (
    <div className="flex w-full flex-col items-center gap-6 bg-white px-4 pb-20 pt-10 md:px-20">
      <h2 className="text-center">
        Got Questions?
        <span className="text-primary">
          <br />
          We Have Answers
        </span>
      </h2>
      <div className="flex w-full max-w-section flex-col md:flex-row md:gap-6">
        <Accordion type="single" collapsible className="w-full md:w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How does ketamine treatment work?
            </AccordionTrigger>
            <AccordionContent>
              Simply put, ketamine allows your brain to react differently and
              see past experiences in a new light, which in a clinical
              environment, paired with talking therapy from professionals, gives
              you the mental space to overcome that which has held you back. 
              <br/> <br/>
              Ketamine is understood to increase brain plasticity (flexibility) 
              and connectivity, meaning it can help a person become more adaptive 
              and open to new perspectives.
              <br/> <br/>
              On a neurochemical level, ketamine is an NMDA antagonist working
              across multiple receptors in the brain. At very high doses, it
              acts as an anaesthetic, putting you completely to sleep. At lower
              doses (as we use), it creates an altered state of consciousness
              that, when combined with psychotherapy, allows you to carry out
              effective and safe treatment.
               {" "}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is this treatment legal?</AccordionTrigger>
            <AccordionContent>
              Ketamine is a controlled substance that can be prescribed
              “off-label” in the UK for treatment of mental health and addiction. 
              This means that it can be used legally in controlled clinical
              environments for clearly defined purposes. <br/> <br/> For use in mental
              health and addiction problems, this means the patient will have a
              clinical diagnosis and have tried at least one form of treatment
              for it already (‘treatment-resistant’ condition).  
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is this treatment safe?</AccordionTrigger>
            <AccordionContent>
              Ketamine is a very safe compound; it is used every single day in
              casualty departments all over the world as a safe and effective
              anaesthetic for performing minor surgical procedures. This means
              there is a large base of evidence and knowledge in the effects of
              ketamine. <br/> <br/> Ketamine-Assisted Therapy uses significantly lower 
              doses that are tailored to the recipient, so the risk is further
              minimised. <br/> <br/> All patients are carefully screened and fully monitored
              throughout sessions by our consultant psychiatrist, lead nurse and
              trained psychotherapist. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Does it have any risks or side effects?
            </AccordionTrigger>
            <AccordionContent>
              As with any treatment, there are potential risks or side effects,
              however we use our considerable experience and expertise to help
              mitigate these. <br/> <br/> The most common psychological side effects are
              feeling disassociated, and you may experience some initial anxiety
              that will pass; our therapists are trained to help you manage
              this. <br/> <br/> Physically, you may feel lightheaded or dizzy at points;
              whilst some have described feeling nauseous or tired. Again our
              therapists are highly experienced in these sessions and will be
              able to offer immediate support if needed. Less commonly, some
              report low mood or a manic feeling immediately following
              treatment; you must immediately inform the clinical team if you
              notice these experiences so we can support you. <br/> <br/> You will be
              closely monitored throughout your treatment, and clinicians will
              use a questionnaire to monitor any side effects and how long they
              last (most typically resolve within an hour) to help us continue
              to improve your experience and the safety of our procedure. <br/> <br/>
              Our clinic has dedicated recovery space which can be used for as long
              as required.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full md:w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What happens during a ketamine session?
            </AccordionTrigger>
            <AccordionContent>
              Firstly, our nurse will take some pre-session measurements (blood
              pressure, heart rate, oxygen saturation) to ensure you are healthy
              and ready for the treatment. We will then walk you through the
              procedure, explain what to expect and how you may feel during the
              session. <br/> <br/> Our nurse will then prepare the ketamine and deliver the
              agreed dose as an injection in the top of your shoulder (similar
              to how you get vaccinated). <br/> <br/> You are then able to lie down, put on
              our weighted blanket, headphones and eye mask, getting as
              comfortable as you like; your highly experienced therapist will be
              alongside you the whole time, with our nurse and consultant
              psychiatrist on standby. <br/> <br/> Effects will likely start after five
              minutes and last for around 90 minutes. Once complete, you can
              then relax in our allocated recovery areas within our clinic for
              as long as needed before going home. <br/> <br/> You will not be able to drive
              yourself home after a drug session; we will request that you are
              accompanied home by a named individual whom you have identified in
              advance of starting the treatment. We can help with this step if
              you would rather not involve family or friends.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What will I feel during the ketamine sessions?
            </AccordionTrigger>
            <AccordionContent>
              Ketamine is a “dissociative” drug, meaning you’ll experience a
              sense of detachment. This is sometimes referred to as an ‘out of
              body’ type experience. <br/> <br/> Given the low dose we use, you are likely
              to feel a gentle sense of detachment, alongside a feeling of fresh
              perspective, enabling you to review past issues from a new angle. <br/> <br/>
              This, when combined with psychotherapy allows you to see
              psychological problems in a new light and, together with support
              from their therapist, reflect upon and address issues that may
              previously felt impossible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How much is treatment at Aion?</AccordionTrigger>
            <AccordionContent>
              Our 8-week programme costs £4000 per patient. This includes 16.5
              hours of clinical care - 8 hours of ketamine dosing, 7 hours of
              talking therapy and 1.5 hours of medical assessment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Where is the scientific evidence?
            </AccordionTrigger>
            <AccordionContent>
              Our treatment protocol is based on a deep bed of scientific
              research, taking evidence and findings generated from years of
              published literature and incorporating them into our model of
              care.{" "} <br/> <br/> 
              <Link className="text-tertiaryDark underline" href="/science">
                Find out more in our Science section.{" "}
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
