import * as React from "react";
import NavBar from "@/app/components/Main/NavBar";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MainButton from "./components/Main/MainButton";
import Footer from "./components/Main/Footer";
import Link from "next/link";
import SocialBar from "./components/Main/SocialBar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="w-full pb-10 mb-0">
        <div className="w-[100%] h-[100%] pt-[10%] lg:pt-0">
          <div className="relative">
            <Image
              src="/stockphoto.jpg"
              alt="stock image"
              layout="responsive"
              width={100}
              height={100}
              className=""
            />
            <div className="absolute inset-0 flex items-end bottom-4 sm:bottom-44 justify-center text-center">
              <Link href="#">
                <div className="space-y-4">
                  <h1 className="text-2xl sm:text-5xl font-bold md:text-gray-300 hover:text-midblue">
                    Read GRAHAM&#39;S Story
                  </h1>

                  <p className="text-base sm:text-xl italic font-semibold md:text-gray-100 hover:text-midblue">
                    How project name helped him and his family overcome
                    Alzheimer&#39;s
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-[5%]">
            <Carousel className="w-[100%] max-w-[70%] md:max-w-[88%] m-auto">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="p-0">
                        <CardContent className="flex aspect-square items-center justify-center ">
                          <div className="relative">
                            <Image
                              src="/stockphoto.jpg"
                              alt="stock image"
                              layout="responsive"
                              width={100}
                              height={100}
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-55"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-xl text-white">
                                <h2>Learn</h2>
                                <h2>Volunteer</h2>
                                <h2>Give</h2>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {/* <Image
          src="/stockphoto.jpg"
          alt="stock image"
          layout="responsive"
          width={60}
          height={1}
        /> */}
          </div>
          <div className="w-[90%] m-auto mt-[4%] p-5 flex flex-col sm:flex-row justify-evenly items-center">
            <SocialBar />
            <div className="max-w-[70%] justify-start space-y-4 mt-[6%] sm:mt-3">
              <h3 className="italic text-center text-xl">Who are we?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                omnis esse, animi exercitationem officiis odio quidem
                consequuntur debitis atque eligendi quia harum veritatis quis ex
                laborum maiores nostrum, qui obcaecati. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Beatae accusamus eius
                dignissimos odio numquam similique, dolorum consequuntur!
                Corrupti, voluptas iure. Veritatis quod facere, at ducimus quia
                harum quis maiores molestias?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo aliquam sed nam numquam sunt architecto veritatis
                nobis, aliquid similique necessitatibus pariatur, itaque eveniet
                labore vero. Expedita magnam vitae est quae.
              </p>
              <MainButton>
                <span>Read More</span>
              </MainButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
