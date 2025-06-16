import { GoogleMapsEmbed } from "@next/third-parties/google";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";
import { useState } from "react";

export const Where = () => {
  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    "/images/room_4.png",
    "/images/room_5.png",
    "/images/room_6.png",
  ];

  return (
    <div
      id="where"
      className="flex w-full scroll-m-20 justify-center bg-white/95 py-10"
    >
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
          <div className="flex h-full w-full items-center lg:w-5/12">
            <div className="grid h-fit w-full grid-cols-12 gap-2">
              <div className="col-span-12 flex w-full justify-center">
                {selectedImage ? (
                  <div className="col-start-4 aspect-video w-full max-w-[500px] px-4">
                    <Image
                      width={2000}
                      height={1862}
                      alt=""
                      src={selectedImage}
                      className="w-full"
                    />
                  </div>
                ) : (
                  <div className="col-start-4 aspect-video w-full max-w-[500px] bg-black/10 py-4">
                    <YouTubeEmbed videoid="XaiAMhbPEnM" params="controls=0" />
                  </div>
                )}
              </div>
              <div className="col-span-12 flex w-full items-center justify-center gap-2">
                {images.map((image) => {
                  return selectedImage === image ? (
                    <div
                      className="aspect-video h-full w-[30%] max-w-40 bg-black py-2"
                      onClick={() => {
                        setSelectedImage("");
                      }}
                    >
                      <YouTubeEmbed videoid="XaiAMhbPEnM" params="controls=0" />
                    </div>
                  ) : (
                    <Image
                      width={2000}
                      height={1862}
                      alt=""
                      src={image}
                      className="w-[30%] max-w-40"
                      onClick={() => {
                        setSelectedImage(image);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid h-full w-full max-w-[500px] grid-cols-12 gap-2 rounded-lg bg-secondary px-4 py-6 lg:w-7/12 lg:max-w-none">
            <p className="col-span-12 h-full px-4 text-center font-medium lg:text-left">
              Find us at 384 City Road, London,
              <br className="lg:hidden" /> EC1V 2QA.
            </p>
            <div className="col-span-12 my-2 h-fit">
              <GoogleMapsEmbed
                apiKey="AIzaSyD750W67z9joBykjtwRInnViqqBv1VEh7A"
                height="300"
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
