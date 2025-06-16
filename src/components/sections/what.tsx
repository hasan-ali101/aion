import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { CheckBullet } from "@/components/check-bullet";
import ImageCardCollapsible from "@/components/image-card-collapsible";
import { GetStartedButton } from "@/components/get-started-button";
import { cn } from "@/utils";

const MainCard = ({ className }: { className?: string }) => {
  return (
    <Card
      className={cn(
        className,
        "relative h-fit w-full min-w-64 max-w-96 flex-1 flex-col overflow-clip bg-primary font-medium text-white",
      )}
    >
      <Image
        alt="alt"
        width={1200}
        height={1000}
        src={"/images/circles.jpg"}
        className="pointer-events-none absolute min-h-full min-w-[800px] select-none opacity-20"
      />
      <CardHeader>
        <CardTitle>Ketamine-Assisted Treatment Programme</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 pb-10 text-sm">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-4">
            <CheckBullet>Comprehensive medical assessment</CheckBullet>
            <CheckBullet>8 week course</CheckBullet>
            <CheckBullet>15 hours of treatment</CheckBullet>
          </div>
          <div className="flex min-h-24 min-w-24 flex-col justify-center rounded-full bg-white text-center text-primary">
            <p className="font-bold">£5000</p>
            <p className="text-xs">per patient</p>
          </div>
        </div>
        <p>
          We use ketamine dosing sessions to augment and accelerate progress
          made in talking therapy to deliver tangible results within 8 weeks for
          those most in need.
        </p>
      </CardContent>
      <CardFooter className="flex h-full flex-col items-center justify-center gap-3 pb-10 lg:flex-row">
        <GetStartedButton variant="inverted" />
        <Link href="#programme" className="text-sm text-white underline">
          See Treatment Plan
        </Link>
      </CardFooter>
    </Card>
  );
};

export const What = () => {
  return (
    <div
      id="what"
      className="flex h-full w-full cursor-pointer scroll-mt-10 flex-col items-center gap-6 bg-white px-3 py-20 md:px-10"
    >
      <h2 className="text-center text-3xl font-semibold">
        What<span className="text-primary"> We Do</span>
      </h2>
      <p className="max-w-[600px] text-center">
        We deliver an 8-week treatment programme, providing transformative
        experiences through our evidence-based protocol.
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <MainCard className="lg:hidden" />
        <div className="flex flex-col gap-4 lg:flex-row">
          <ImageCardCollapsible
            title="Talking Therapy"
            description={
              <CheckBullet>7 sessions included in treatment</CheckBullet>
            }
            content={
              <div className="flex flex-col gap-y-4 p-2 text-sm">
                <p>
                  We use Acceptance and Commitment Therapy (ACT) as the framework
                  for our therapeutic intervention.
                </p>
                <p>ACT is an evidence-based thesey madel which focuses on:</p>
                <ol className="flex list-decimal flex-col gap-2 pl-2">
                  <li>
                    Identifying your core values to help focus life around what
                    is truly important and meaningful to you
                  </li>
                  <li>
                    Equipping you with the psychological tools to more effectively
                    manage painful and stressful experiences
                  </li>
                </ol>
                <CheckBullet>
                  In-person or remote session with your allocated therapist
                </CheckBullet>
                <CheckBullet>
                  Personalised, collaboratively designed therapy plan for you
                </CheckBullet>
              </div>
            }
            backgroundImage="/images/therapist_3.png"
          />

          <MainCard className="hidden lg:flex" />
          <ImageCardCollapsible
            title="Ketamine Sessions"
            description={
              <CheckBullet>4 sessions included in treatment</CheckBullet>
            }
            content={
              <div className="flex flex-col gap-y-4 p-2 text-sm">
                <p>
                  We use precise intramuscular doses to help you step out of
                  your default reactions and help you form new, more positive
                  perspectives.
                </p>
                <p>
                  Scientific research has shown that ketamine, at controlled
                  doses, can increase plasticity in the brain.
                </p>
                <p>
                  Simply put, ketamine can make the brain more responsive and
                  adaptive to change.
                </p>
                <CheckBullet>
                  2 hour in-person session with your expert therapist{" "}
                </CheckBullet>
                <CheckBullet>
                  Clinical team in attendance (nurse, consultant
                  psychiatrist){" "}
                </CheckBullet>
                <CheckBullet>
                  Individually tailored intramuscular ketamine doses collaboratively 
                  agreed with clinical team{" "}
                </CheckBullet>
              </div>
            }
            backgroundImage="/images/therapist_4.png"
          />
        </div>
      </div>
    </div>
  );
};
