import { Clock, Mail, MapPin, TrainFront } from "lucide-react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";

import { Card } from "@/components/card";

export const Where = () => {
  return (
    <div id="where" className="flex w-full scroll-m-20 justify-center py-10">
      <div className="my-8 flex w-full max-w-[1200px] flex-col items-center gap-6 px-4 md:px-6">
        <h2 className="text-center">
          Our Centre <span className="text-primary">For Healing</span>
        </h2>
        <div className="max-w-2xl text-center">
          Our clinic is designed to help create a calm, relaxing environment for
          your treatment. We are located in Angel, around 5 minutes from the
          station.
        </div>
        <div className="flex w-full flex-col items-center gap-6 lg:flex-row-reverse lg:gap-4">
          <div className="h-full w-full lg:w-5/12">
            <div className="grid h-fit w-full grid-cols-12 gap-2">
              <div className="col-span-12 flex w-full justify-center">
                <div className="col-start-4 aspect-video w-full max-w-[500px] px-4">
                  <YouTubeEmbed videoid="Am_fneVx3qk" params="controls=0" />
                </div>
              </div>
              <div className="col-span-12 flex w-full items-center justify-center gap-2">
                <Image
                  width={2000}
                  height={1862}
                  alt=""
                  src="/images/room_1.png"
                  className="w-[30%] max-w-40"
                />
                <Image
                  width={2000}
                  height={1862}
                  alt="room-image-2"
                  src="/images/room_2.png"
                  className="w-[30%] max-w-40"
                />
                <Image
                  width={2000}
                  height={1862}
                  alt=""
                  src="/images/room_3.png"
                  className="w-[30%] max-w-40"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2 rounded-lg bg-secondary px-4 py-6 lg:w-7/12">
            <p className="col-span-12 mb-2 font-semibold">
              If you would like to contact us or come visit, please get in touch
            </p>
            <p className="col-span-12 mb-2">
              Find us in the heart of Angel, London - centrally located to bring
              you ease of access.
            </p>
            <Card className="col-span-12 flex items-center gap-4 bg-white px-4 py-3 sm:col-span-6">
              <div className="rounded-full bg-secondary p-2">
                <MapPin />
              </div>
              <p className="text-sm">
                384 city road, London,
                <br /> EC1V 2QA
              </p>
            </Card>
            <Card className="col-span-12 flex items-center gap-4 bg-white px-4 py-3 sm:col-span-6">
              <div className="rounded-full bg-secondary p-2">
                <TrainFront />
              </div>
              <p className="text-sm">
                {" "}
                Angel Station, <br /> 5 minutes walk
              </p>
            </Card>{" "}
            <Card className="col-span-12 flex items-center gap-4 bg-white px-4 py-3 sm:col-span-6">
              <div className="rounded-full bg-secondary p-2">
                <Clock />{" "}
              </div>
              <p className="text-sm">
                {" "}
                Mon - Fri: 08:00 - 21:00 <br /> Sat: 10:00 - 16:00{" "}
              </p>
            </Card>
            <Card className="col-span-12 flex items-center gap-4 bg-white px-4 py-3 sm:col-span-6">
              <div className="rounded-full bg-secondary p-2">
                <Mail />
              </div>
              <p className="text-sm"> info@aion-clinic.com</p>
            </Card>{" "}
            <div className="col-span-12 my-2">
              <GoogleMapsEmbed
                apiKey="AIzaSyD750W67z9joBykjtwRInnViqqBv1VEh7A"
                height={200}
                width="100%"
                mode="place"
                zoom="12"
                q="384 city road, London, EC1V 2QAY"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
