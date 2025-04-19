import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/queries";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import {
  ArrowBigRight,
  ArrowRight,
  Clock,
  Heart,
  Plus,
  StopCircle,
} from "lucide-react";
import Image from "next/image";

export default function IndexPage({ posts }: { posts: SanityDocument[] }) {
  console.log(posts);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mt-20 flex min-h-screen flex-col items-center bg-white pb-6">
      <div className="flex w-full flex-col items-center border bg-beige px-6 py-8">
        <Carousel
          className="w-full max-w-[700px] lg:max-w-[900px]"
          setApi={setApi}
        >
          <CarouselContent>
            {posts.map((post, index) => {
              if (index > 3) {
                return;
              }
              return (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      className="h-40 w-full max-w-96 object-cover md:h-64"
                    />
                    <div className="flex w-full max-w-96 flex-col gap-6">
                      <h2>{post.title}</h2>
                      <p>{post.description}</p>
                      <Button className="w-full" variant="inverted">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          {/* <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" /> */}
          <div className="flex w-full justify-center">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                className={`mx-2 mt-6 h-2 w-2 rounded-full ${
                  index === current - 1 ? "bg-primary/70" : "bg-gray-300"
                }`}
                onClick={() => {
                  api?.scrollTo(index);
                }}
              />
            ))}
          </div>
        </Carousel>
      </div>
      <div className="flex w-full max-w-section flex-col items-center gap-8 p-6 lg:w-fit">
        <div className="flex w-full flex-col gap-6 overflow-auto">
          <div className="flex w-full flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-fit w-fit rounded-full bg-red-100 p-1">
                <Heart className="fill-red-300" />
              </div>
              <h2>Popular</h2>
            </div>
            <div className="flex w-full gap-4 overflow-x-scroll pb-4">
              {posts.map((post, index) => {
                return (
                  <Card className="w-64 min-w-64 bg-secondary p-5">
                    <div className="flex flex-col items-start gap-3">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.title}
                        className="h-32 max-h-32 w-full object-cover"
                      />
                      <div className="flex w-full flex-col gap-2">
                        <p className="font-semibold md:text-lg">{post.title}</p>
                        <p className="text-xs md:text-sm">
                          Written by {post.author.name}
                        </p>
                        <p className="line-clamp-2 text-xs md:text-sm">
                          {post.description}
                        </p>
                      </div>
                      <Button className="rounder-full m-0 h-fit w-fit border border-primary bg-transparent p-1">
                        <ArrowRight className="text-primary" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-fit w-fit rounded-full bg-secondary p-1">
                <Clock className="fill-primary text-white" />
              </div>
              <h2>Most Recent</h2>
            </div>
            <div className="flex w-full gap-4 overflow-x-scroll pb-4">
              {posts.map((post, index) => {
                return (
                  <Card className="w-64 min-w-64 bg-secondary p-5">
                    <div className="flex flex-col items-start gap-3">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.title}
                        className="h-32 max-h-32 w-full object-cover"
                      />
                      <div className="flex w-full flex-col gap-2">
                        <p className="font-semibold md:text-lg">{post.title}</p>
                        <p className="text-xs md:text-sm">
                          Written by {post.author.name}
                        </p>
                        <p className="line-clamp-2 text-xs md:text-sm">
                          {post.description}
                        </p>
                      </div>
                      <Button className="rounder-full m-0 h-fit w-fit border border-primary bg-transparent p-1">
                        <ArrowRight className="text-primary" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end text-right">
          <div className="flex h-fit w-fit flex-col justify-center gap-6 rounded-md border bg-tertiary/10 p-6">
            <h2>Our Review Process</h2>
            <p>
              We take to ensure all of our articles are medically accurate and
              valid.
            </p>
            <div className="flex items-center justify-end gap-3">
              <p className="max-w-96 text-xs sm:text-sm">
                Our internal team of healthcare professionals research and write
                blog drafts in aread of interest
              </p>
              <div className="relative h-20 min-h-20 w-20 min-w-20 rounded-full bg-primary p-2">
                <Image
                  fill={true}
                  alt=""
                  src="/images/hero_2.png"
                  className="rounded-full p-1"
                />
              </div>
            </div>
            <div className="mr-5 flex items-center justify-end gap-3">
              <p className="max-w-96 text-xs sm:text-sm">
                Every article is medically reviews and verified by a medical
                doctor before being released.
              </p>
              <div className="relative h-20 min-h-20 w-20 min-w-20 rounded-full bg-primary p-2">
                <Image
                  fill={true}
                  alt=""
                  src="/images/hero_2.png"
                  className="rounded-full p-1"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3">
              <p className="max-w-96 text-xs sm:text-sm">
                Information is regularly updated to reflect the latest
                information avaliable.
              </p>
              <div className="relative h-20 min-h-20 w-20 min-w-20 rounded-full bg-primary p-2">
                <Image
                  fill={true}
                  alt=""
                  src="/images/hero_2.png"
                  className="rounded-full p-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h2>More...</h2>
          <div className="flex w-full gap-4 overflow-x-scroll pb-4">
            {posts.map((post, index) => {
              return (
                <Card className="w-64 min-w-64 bg-secondary p-5">
                  <div className="flex flex-col items-start gap-3">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      className="h-32 max-h-32 w-full object-cover"
                    />
                    <div className="flex w-full flex-col gap-2">
                      <p className="font-semibold md:text-lg">{post.title}</p>
                      <p className="text-xs md:text-sm">
                        Written by {post.author.name}
                      </p>
                      <p className="line-clamp-2 text-xs md:text-sm">
                        {post.description}
                      </p>
                    </div>
                    <Button className="rounder-full m-0 h-fit w-fit border border-primary bg-transparent p-1">
                      <ArrowRight className="text-primary" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Button className="w-fit">More Articles</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(POSTS_QUERY);

  return {
    props: {
      posts,
    },
  };
}
