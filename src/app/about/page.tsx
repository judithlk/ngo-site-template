import NavBar from "@/app/components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <main className="w-[100%] pb-10 mb-0">
        <div className="w-[100%] h-[100%] pt-[10%] lg:pt-0 space-y-10">
          <div className="h-64 md:h-80 bg-darkblue flex items-center justify-center pt-4">
            <h1 className="text-3xl md:text-5xl text-white font-bold italic">
              Who are we?
            </h1>
          </div>
          {/* <div className="w-[80%] m-auto flex justify-center h-[45vh]">
            <div className="relative w-[60%] h-[100%]">
              <Image src="/stockphoto.jpg" alt="stock photo" layout="fill" />
            </div>
          </div> */}
          <div className="w-[80%] m-auto space-y-3">
            <h1 className="text-2xl font-serif font-semibold">
              Mission Statement
            </h1>
            <div className="w-[80%] border-t border-midblue"></div>
            <p className="font-medium font-serif">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus vero eaque, mollitia elit odio doloribus accusamus
              placeat maiores! Eius, minus eos? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Repellendus vero eaque, mollitia
              elit odio doloribus accusamus placeat maiores! Eius, minus eos?
            </p>
          </div>

          <div className="w-[80%] m-auto space-y-3">
            <h1 className="text-2xl font-serif font-semibold text-right">
              Vision
            </h1>
            <div className="ml-[20%] w-[80%] border-t border-midblue"></div>
            <p className="font-medium font-serif justify-end text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus vero eaque, mollitia elit odio doloribus accusamus
              placeat maiores! Eius, minus eos? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Repellendus vero eaque, mollitia
              elit odio doloribus accusamus placeat maiores! Eius, minus eos?
            </p>
            <p className="font-medium font-serif justify-end text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus vero eaque, mollitia elit odio doloribus accusamus
              placeat maiores! Eius, minus eos? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Repellendus vero eaque, mollitia
              elit odio doloribus accusamus placeat maiores! Eius, minus eos?
            </p>
          </div>
          <div className="w-[80%] m-auto space-y-3">
            <h1 className="text-2xl font-serif font-semibold mr-">
              About the Founder
            </h1>
            <div className="w-[80%] border-t border-midblue"></div>
            <div className="sm:flex justify-between lg:justify-around py-4">
            <div className="relative w-[100%] p-3 sm:p-0 sm:w-[45%] lg:w-[30%]">
              <Image
                src={"/profile photo.jpg"}
                alt=""
                layout="responsive"
                style={{borderRadius: "50%"}}
                width={100}
                height={100}
              />
            </div>
            <div className="sm:w-[50%] pt-3 space-y-3">
              <p className="font-medium font-serif justify-end text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus vero eaque, mollitia elit odio doloribus accusamus
                placeat maiores! Eius, minus eos? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Repellendus vero eaque, mollitia
                elit odio doloribus accusamus placeat maiores! Eius, minus eos?
              </p>
              <p className="font-medium font-serif justify-end text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus vero eaque, mollitia elit odio doloribus accusamus
                placeat maiores! Eius, minus eos? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Repellendus vero eaque, mollitia
                elit odio doloribus accusamus placeat maiores! Eius, minus eos?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                totam possimus, doloremque laborum odit corporis. Impedit,
                deleniti natus rerum voluptatibus ea ad quas nostrum alias modi?
                Deserunt nam quas itaque!
              </p>
            </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
