import * as React from "react";
import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MainButton from "./components/MainButton";
import Footer from "./components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
        <NavBar />
      <main className="w-full justify-between pb-0 mb-0">
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
            <Carousel className="w-full max-w-[70%] md:max-w-[88%] m-auto">
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
            <div className="max-h-fit flex flex-row sm:flex-col md:justify-evenly ">
              <div className="m-3 text-center">
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-10 h-10 m-auto"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                  </svg>
                </Link>
              </div>
              <div className="m-3 text-center">
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-10 h-10 m-auto"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </Link>
              </div>
              <div className="m-3 text-center">
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-10 h-10 m-auto"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </Link>
              </div>
              <div className="m-3 text-center">
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-10 h-10 m-auto"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </Link>
              </div>
            </div>
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
