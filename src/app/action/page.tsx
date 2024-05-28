"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialBar from "../components/SocialBar";
import Image from "next/image";
import Link from "next/link";
import VolunteerModal from "../components/VolunteerModal";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TakeAction() {
  const [modalState, setModalState] = useState(false);
  const showModal = () => {
    setModalState(true);
  };

  return (
    <>
      <NavBar />
      <main className="w-[100%] pb-10 mb-0 relative">
        <div className="w-[100%] h-[100%] pt-[8%] lg:pt-0 space-y-10">
          <div className="h-64 md:h-80 bg-darkblue flex items-center justify-center pt-4">
            <h1 className="text-3xl md:text-5xl text-white font-bold italic">
              What can you do?
            </h1>
          </div>
          <div className="w-[100%] py-4 px-10 space-y-8">
            <h1 className="text-4xl md:text-5xl font-semibold text-midblue">
              VOLUNTEER
            </h1>
            <div className="flex flex-col sm:flex-row justify-around lg:justify-normal">
              <div className="sm:w-[70%] flex flex-col justify-center">
                <p className="italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate aut beatae temporibus quia fugiat culpa
                  necessitatibus doloribus rerum corrupti labore fugit nesciunt
                  ut, aliquid repellat ipsum perspiciatis illum quaerat
                  distinctio. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Debitis dolores nostrum eos architecto? Fuga
                  voluptate libero fugit minima perferendis ducimus tempora
                  distinctio possimus, dolorum corporis, dicta consectetur
                  nesciunt omnis maiores.
                </p>
                <h2 className="text-midblue">
                  -
                  <Link href="#" className="hover:text-darkblue">
                    Volunteer name
                  </Link>
                  , 23
                </h2>
              </div>
              <div className="relative m-auto w-[62%] mt-5 sm:mt-0 sm:w-[25%] lg:w-[18%] md:ml-10 rounded-full">
                <Image
                  src={"/profile photo.jpg"}
                  alt=""
                  layout="responsive"
                  width={100}
                  height={100}
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>
            <Button onClick={() => setModalState(true)} className="">
              Volunteer Now
            </Button>
          </div>
          <div className="w-[80%] m-auto border-t border-midblue"></div>
          <div className="w-[100%] py-4 px-10 space-y-8">
            <h1 className="text-4xl md:text-5xl mr-3 font-semibold text-midblue text-right">
              GIVE
            </h1>
            <div className="flex flex-col sm:flex-row justify-between lg:justify-between">
              <div className="relative w-[80%] my-7 m-auto sm:mt-0 sm:w-[28%] lg:w-[20%] md:ml-10 rounded-full">
                <Image
                  src={"/stock2.jpg"}
                  alt=""
                  layout="responsive"
                  width={100}
                  height={100}
                  style={{ borderRadius: "30px" }}
                />
              </div>
              <div className="sm:w-[60%] flex flex-col justify-center items-end">
                <h2 className="text-midblue text-xl font-semibold">Project Name</h2>
                <p className="italic text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate aut beatae temporibus quia fugiat culpa
                  necessitatibus doloribus rerum corrupti labore fugit nesciunt
                  ut, aliquid repellat ipsum perspiciatis illum quaerat
                  distinctio. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Debitis dolores nostrum eos architecto? Fuga
                  voluptate libero fugit minima perferendis ducimus tempora
                  distinctio possimus, dolorum corporis, dicta consectetur
                  nesciunt omnis maiores.
                </p>
              </div>
            </div>
            <div className="w-[100%] text-end">
            <Button onClick={() => setModalState(true)} className="bg-red-600 text-right">
              Give Now
            </Button>
            </div>
          </div>
        </div>
        <div
          className={`fixed top-0 w-[100%] h-[100%] bg-gray-900 bg-opacity-90 z-50 flex flex-col justify-center items-center ${
            modalState == false ? "hidden" : "block"
          }`}
        >
          <div className="w-[100%] text-right p-3">
            <Button onClick={() => setModalState(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
          <VolunteerModal {...{ modalState, setModalState }} />
        </div>
      </main>
      <Footer />
    </>
  );
}
