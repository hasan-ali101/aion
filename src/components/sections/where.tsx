import { GoogleMapsEmbed } from "@next/third-parties/google";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";
import { memo, useState } from "react";

const YOUTUBE_VIDEO_ID = "XaiAMhbPEnM";
const YOUTUBE_PARAMS = "controls=0";

const IMAGES = [
  "/images/room_4.png",
  "/images/room_5.png",
  "/images/room_6.png",
];

// Memoized map component to prevent unnecessary rerenders
const LocationMap = memo(() => (
  <div className="grid h-full w-full max-w-[500px] grid-cols-12 gap-2 rounded-lg bg-secondary px-4 py-6 lg:w-7/12 lg:max-w-none">
    <p className="col-span-12 h-full px-4 text-center font-medium lg:text-left">
      Find us at 384 City Road, Islington, London,
      <br className="lg:hidden" /> EC1V 2QA.
    </p>
    <div className="col-span-12 my-2 h-fit">
      <GoogleMapsEmbed
        apiKey="AIzaSyD750W67z9joBykjtwRInnViqqBv1VEh7A"
        height="300"
        width="100%"
        mode="place"
        zoom="15"
        q="place_id:ChIJQ6ZwUbxcvgARUheUsu-zltM"
      />
    </div>
  </div>
));
LocationMap.displayName = "LocationMap";

export const Where = () => {
  const [selectedImage, setSelectedImage] = useState(IMAGES[2]);

  const isVideoSelected = !selectedImage;

  return (
    <div
      id="where"
      className="flex w-full scroll-m-20 justify-center bg-muted/20 py-20"
    >
      <div className="flex w-full max-w-section flex-col items-center gap-10 px-4 md:px-6">
        <h2 className="text-center">
          Our Centre <span className="text-primary">For Healing</span>
        </h2>
        <div className="max-w-2xl text-center">
          Our clinic is designed to help create a calm, relaxing environment for
          your treatment. We are located in the heart of Islington, around 5
          minutes from Angel station in London.
        </div>
        <div className="flex w-full flex-col items-center gap-6 lg:flex-row-reverse lg:gap-4">
          <div className="flex h-full w-full items-center lg:w-5/12">
            <div className="grid h-fit w-full grid-cols-12 gap-2">
              <div className="col-span-12 flex w-full justify-center">
                <div className="aspect-video w-full max-w-[500px] px-4">
                  {isVideoSelected ? (
                    <div className="bg-black/10 py-4">
                      <YouTubeEmbed
                        videoid={YOUTUBE_VIDEO_ID}
                        params={YOUTUBE_PARAMS}
                      />
                    </div>
                  ) : (
                    <Image
                      width={2000}
                      height={1862}
                      alt="Clinic room"
                      src={selectedImage}
                      className="w-full"
                    />
                  )}
                </div>
              </div>

              <div className="col-span-12 flex w-full items-center justify-center gap-2">
                {IMAGES.map((image) => {
                  const isSelected = selectedImage === image;
                  return isSelected ? (
                    <div
                      key={image}
                      className="aspect-video h-full w-[30%] max-w-40 cursor-pointer bg-black py-2"
                      onClick={() => setSelectedImage("")}
                    >
                      <YouTubeEmbed
                        videoid={YOUTUBE_VIDEO_ID}
                        params={YOUTUBE_PARAMS}
                      />
                    </div>
                  ) : (
                    <Image
                      key={image}
                      width={2000}
                      height={1862}
                      alt="Clinic room thumbnail"
                      src={image}
                      className="w-[30%] max-w-40 cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Memoized map component */}
          <LocationMap />
        </div>
      </div>
    </div>
  );
};
