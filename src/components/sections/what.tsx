import { CircleCheckBig } from "lucide-react";
import ImageCardCollapsible from "../image-card-collapsible";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { GetStartedButton } from "../get-started-button";
import Link from "next/link";
import { cn } from "@/utils";
import Image from "next/image";

const MainCard = ({ className }: { className?: string }) => {
  return (
    <Card
      className={cn(
        className,
        "bg-primary flex-1 flex-col text-white relative min-w-64 overflow-clip font-medium w-full max-w-96 h-fit"
      )}
    >
      <Image
        alt="alt"
        width={1200}
        height={1000}
        src={"/images/circles.jpg"}
        className="opacity-20 min-h-full min-w-[800px] absolute select-none pointer-events-none"
      />
      <CardHeader>
        <CardTitle>Ketamine-Assisted Treatment Programme</CardTitle>
      </CardHeader>
      <CardContent className=" text-sm pb-10 flex flex-col gap-6 ">
        <div className="flex gap-2 justify-between items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <CircleCheckBig className="min-w-4 w-4 h-4 min-h-4" />
              <p>15 hours of treatment </p>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheckBig className="min-w-4 w-4 h-4 min-h-4" />
              <p>8 week course</p>
            </div>
          </div>
          <div className="flex flex-col justify-center min-h-24 min-w-24 bg-white  text-primary text-center rounded-full">
            <p className="font-bold ">£4,000</p>
            <p className="text-xs">per patient</p>
          </div>
        </div>
        <p>
          We use ketamine dosing sessions to augment and accelerate progress
          made in talking therapy to deliver tangible results within 8 weeks for
          those most in need.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center pb-10 flex-col lg:flex-row items-center gap-3 h-full">
        <GetStartedButton variant="inverted" />
        <Link href="#what" className="text-white text-sm underline">
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
      className="w-full cursor-pointer h-full bg-white scroll-mt-10 px-3 md:px-10 flex flex-col py-20 items-center gap-6"
    >
      <h2 className="font-semibold text-3xl text-center">
        What<span className="text-primary"> We Do</span>
      </h2>
      <p className="text-center max-w-[600px]">
        We deliver an 8-week treatment programme, providing transformative
        experiences through our evidence-based protocol.
      </p>
      <div className="flex gap-4  flex-col w-full justify-center items-center">
        <MainCard className="lg:hidden" />
        <div className="flex gap-4 flex-col md:flex-row">
          <ImageCardCollapsible
            title="Individual therapy"
            description={
              <div className="flex items-center gap-2">
                <CircleCheckBig className="min-w-4 w-4 h-4 min-h-4" />
                <p>7 hours included in treatment</p>
              </div>
            }
            content={
              <div className="flex flex-col text-sm gap-y-4 p-2">
                <p>
                  We use Acceptance and Commitment Therapy (ACT) our framework
                  for our therapeutic intervention.
                </p>
                <p>ACT is an evidence-based thesey madel which focuses on:</p>
                <ol className="list-decimal flex flex-col pl-2 gap-2">
                  <li>
                    Identifying your core values to help focus life around what
                    is truly important and meaningful to you
                  </li>
                  <li>
                    Equip you with the psychological tools to more effectively
                    manage painful and stressful moments
                  </li>
                </ol>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="min-w-4 w-4 h-4 min-h-4" />
                  <p>
                    In-person or remote session with your allocated therapist
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="min-w-4 w-4 h-4 min-h-4" />
                  <p>
                    Clinical team on stand-by (nurse, consultant psychiatrist)
                  </p>
                </div>
              </div>
            }
            backgroundImage="/images/therapist_1.png"
          />

          <MainCard className="lg:flex hidden" />
          <ImageCardCollapsible
            title="Ketamine Sessions"
            description={
              <div className="flex items-center gap-2">
                <CircleCheckBig className="min-w-4 w-4 h-4 min-h-4" />
                <p>7 hours included in treatment</p>
              </div>
            }
            content={
              <div className="flex flex-col text-sm gap-y-4 p-2">
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
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="min-w-4 w-4 h-4 min-h-4" />
                  <p>In-person session with your allocated expert therapist </p>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="min-w-4 w-4 h-4 min-h-4" />
                  <p>
                    Clinical team on stand-by (nurse, consultant psychiatrist){" "}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="min-w-4 w-4 h-4 min-h-4" />
                  <p>Intramuscular, collaboratively agreed doses </p>
                </div>
              </div>
            }
            backgroundImage="/images/therapist_2.png"
          />
        </div>
      </div>
    </div>
  );
};
