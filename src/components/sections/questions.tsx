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
              How does ketamine-assisted psychotherapy work?
            </AccordionTrigger>
            <AccordionContent>
              Treatment at Aion combines Acceptance and Commitment Therapy (ACT)
              with ketamine-assisted sessions to support deep therapeutic
              change. ACT is an evidence-based approach that fosters
              psychological flexibility — the ability to be present, engage with
              painful emotions without avoidance, and act according to personal
              values.
              <br /> <br />
              The program begins with preparatory talk therapy sessions to
              clarify goals and prepare for ketamine experiences. This is
              followed by four weekly ketamine sessions, each followed the next
              day by an ACT-based integration session. These integration
              sessions help process the psychedelic experience and embed
              insights into ongoing therapy. Weekly exercises support progress
              between sessions.
              <br /> <br />
              ACT and psychedelics like ketamine work well together, both
              promoting shifts in perspective and emotional openness. When stuck
              in distress or addiction, we can develop rigid patterns to avoid
              emotional pain. ACT helps gradually shift this relationship with
              discomfort, encouraging openness and growth.
              <br /> <br />
              Ketamine, within a safe therapeutic setting, can create temporary
              but powerful perspective shifts that accelerate healing. The aim
              of the course of therapy is to provide you with the tools,
              insights, and confidence to continue your personal development,
              improve relationships, and enhance overall life experience beyond
              the program.{" "}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is this treatment legal?</AccordionTrigger>
            <AccordionContent>
              Ketamine is a licensed anaesthetic and pain-relief medication
              widely used in the UK. Due to risks associated with recreational
              misuse, it is classified as a Class B controlled substance under
              the Misuse of Drugs Act 1971. This means it is illegal to buy,
              possess, or sell ketamine without proper medical authorisation.
              <br /> <br />
              While ketamine can be legally prescribed, it is not currently
              licensed in the UK for treating mental health conditions.
              Therefore, its use in ketamine-assisted psychotherapy is
              considered off-label.
              <br /> <br />
              Prescribing any medication off-label requires the prescriber to be
              confident that:
              <ul className="ml-4 mt-2 list-inside list-disc">
                <li>
                  Licensed alternatives have been tried and found ineffective,
                </li>
                <li>
                  The off-label use is likely to better meet the patient’s
                  needs,
                </li>
                <li>
                  There is sufficient clinical evidence supporting its off-label
                  use.
                </li>
              </ul>{" "}
              <br />
              To meet these standards, Aion requires that you will have already
              attempted conventional, licensed treatments for your mental health
              condition without sufficient benefit before starting
              ketamine-assisted therapy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Is this treatment safe? Does it have any risks or side effects?
            </AccordionTrigger>
            <AccordionContent>
              Ketamine is a safe anaesthetic, even at doses much higher than
              those used in therapy. It does not suppress breathing and mildly
              stimulates the heart, making it suitable for use without advanced
              airway support. It is listed as an essential medicine by the WHO.
              <br /> <br />
              While ketamine has abuse potential, therapeutic use under medical
              supervision has a very low risk of serious side effects. Common
              side effects include nausea, headache, dizziness, or anxiety,
              which are usually temporary. Anti-nausea medication can be
              provided, and your therapist will help you prepare to manage any
              anxiety.
              <br /> <br />
              We screen for medical and psychiatric conditions that may make
              ketamine unsafe, such as uncontrolled hypertension, severe
              cardiovascular or neurological diseases, liver/kidney issues,
              psychotic or manic states, and BMI outside 16–35. If risks are
              identified, treatment may be delayed until conditions are
              stabilized.
              <br /> <br />
              During sessions, vital signs are monitored, and a nurse and
              psychiatrist are onsite for safety. Ketamine’s dissociative
              effects can feel unsettling but also offer therapeutic value. As
              with other psychedelics, mindset and setting greatly influence the
              experience. Rarely, sessions may lead to emotional discomfort or
              low mood, which we address early to ensure support is in place
              throughout therapy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What happens during a ketamine session?
            </AccordionTrigger>
            <AccordionContent>
              At the start of each ketamine session, our nurse will check your
              vitals (pulse, blood pressure) to ensure you&apos;re ready. Your
              therapist will accompany you to the therapy room, which
              you&apos;ll already know from preparatory sessions. You&apos;ll
              settle on a couch with a weighted blanket, and can choose to wear
              headphones and an eye-mask to support an inward-focused
              experience—these will have been introduced earlier. <br /> <br />
              In preparatory sessions, you&apos;ll also discuss with your
              therapist how you&apos;d like them to support you if you become
              anxious during the session. This may include reassuring physical
              contact, such as holding your hand—always guided by your
              preferences. <br /> <br />
              The nurse will prepare and administer ketamine via a single
              injection into your upper arm (like a flu jab). The initial dose
              is at the lower end of the effective range and may be adjusted
              over time in agreement with you and the clinical team, prescribed
              by our psychiatrist. <br /> <br />
              The effects begin in 3–5 minutes, lasting about 45–60 minutes.
              You&apos;ll then have time to rest and recover, with a
              post-session check-up. You must be accompanied home, as with
              hospital sedation. If needed, we can help arrange a professional
              chaperone. You must not drive or cycle until the next day.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full md:w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What will I feel during the ketamine sessions?
            </AccordionTrigger>
            <AccordionContent>
              Ketamine induces non-ordinary states of consciousness that vary
              depending on dose, mindset, and setting. In ketamine-assisted
              psychotherapy, preparatory sessions help you approach the
              experience with openness and curiosity, including strategies to
              lean into discomfort if it arises. While fear can occur, it is
              generally uncommon. <br /> <br />
              At therapeutic doses, the experience is often described as
              dreamlike, with reduced bodily awareness and a sense of journeying
              through varied, symbolic, or abstract scenarios. These may include
              sensory imagery, personal memories, or transcendental experiences,
              often marked by a feeling of movement or transformation. <br />{" "}
              <br />
              Unlike intravenous ketamine used medically for depression—where
              dissociative effects are minimized - at Aion these psychedelic
              aspects are embraced for their therapeutic value. They are more
              likely to occur with a single intramuscular injection, the method
              used in our approach. <br /> <br />
              After the session, people typically feel calm and reflective. The
              following days offer a unique period of enhanced psychological
              flexibility, allowing new insights to be integrated during
              follow-up therapy sessions. This window is considered crucial for
              deepening therapeutic progress and applying new perspectives in
              daily life.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How much is treatment at Aion?</AccordionTrigger>
            <AccordionContent>
              Our 8-week programme costs £5000 per patient. This includes an
              initial medical assessment (approximately 1.5 hours) and 11
              sessions of therapy - 4 ketamine dosing sessions (2 hours each)
              and 7 sessions of talking therapy (1 hour each).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Where is the scientific evidence?
            </AccordionTrigger>
            <AccordionContent>
              Our treatment protocol is based on a deep bed of scientific
              research, taking evidence and findings generated from years of
              published literature and incorporating them into our model of
              care. <br /> <br />
              <Link className="text-tertiaryDark underline" href="/science">
                Find out more in our Science section.{" "}
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What if I still have questions?</AccordionTrigger>
            <AccordionContent>
              We have more advice and information in our blog section, which
              contains medically verified and reviewed information for you to
              take a look through. <br /> <br />
              <Link className="text-tertiaryDark underline" href="/blog">
                Find out more in our Blog section.{" "}
              </Link>{" "}
              <br /> <br />
              If you still have questions and would like to contact us directly,
              please use the link below for our contact information. <br />{" "}
              <br />
              <Link className="text-tertiaryDark underline" href="/contact">
                Reach out directly to us on our Contact Us page.{" "}
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
