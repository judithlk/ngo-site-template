import NavBar from "@/app/components/Main/NavBar";
import Footer from "../components/Main/Footer";
import Aside from "../components/Main/Aside";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <main className="w-[100%] pb-10 mb-0">
        <div className="w-[100%] h-[100%] pt-[8%] lg:pt-0 space-y-24">
          <div className="h-64 md:h-80 bg-darkblue flex items-center justify-center pt-4">
            <h1 className="text-3xl md:text-5xl text-white font-bold italic">
              Who are we?
            </h1>
          </div>
          
          <div className="w-[100%] flex flex-col md:flex-row justify-evenly">
            <div className="md:w-[65%] space-y-10">
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
                  elit odio doloribus accusamus placeat maiores! Eius, minus
                  eos?
                </p>
              </div>

              <div className="w-[80%] m-auto space-y-3 text-justify">
                <h1 className="text-2xl font-serif font-semibold text-right">
                  Vision
                </h1>
                <div className="ml-[20%] w-[80%] border-t border-midblue"></div>
                <p className="font-medium font-serif">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus vero eaque, mollitia elit odio doloribus accusamus
                  placeat maiores! Eius, minus eos? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Repellendus vero eaque, mollitia
                  elit odio doloribus accusamus placeat maiores! Eius, minus
                  eos?
                </p>
                <p className="font-medium font-serif">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus vero eaque, mollitia elit odio doloribus accusamus
                  placeat maiores! Eius, minus eos? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Repellendus vero eaque, mollitia
                  elit odio doloribus accusamus placeat maiores! Eius, minus
                  eos?
                </p>
              </div>
              <div className="w-[80%] m-auto space-y-3">
                <h1 className="text-2xl font-serif font-semibold mr-">
                  About the Founder
                </h1>
                <div className="w-[80%] border-t border-midblue"></div>
                <div className="sm:flex justify-between lg:justify-around py-4">
                  <div className="relative w-[80%] m-auto p-3 sm:p-0 sm:w-[45%] lg:w-[30%]">
                    <Image
                      src={"/profile photo.jpg"}
                      alt=""
                      layout="responsive"
                      style={{ borderRadius: "50%" }}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="sm:w-[50%] pt-3 space-y-3">
                    <p className="font-medium font-serif justify-end text-left">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repellendus vero eaque, mollitia elit odio doloribus
                      accusamus placeat maiores! Eius, minus eos? Lorem ipsum
                      dolor sit, amet consectetur adipisicing elit. Repellendus
                      vero eaque, mollitia elit odio doloribus accusamus placeat
                      maiores! Eius, minus eos?
                    </p>
                    <p className="font-medium font-serif justify-end text-left">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repellendus vero eaque, mollitia elit odio doloribus
                      accusamus placeat maiores! Eius, minus eos? Lorem ipsum
                      dolor sit, amet consectetur adipisicing elit. Repellendus
                      vero eaque, mollitia elit odio doloribus accusamus placeat
                      maiores! Eius, minus eos? Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Sed totam possimus,
                      doloremque laborum odit corporis. Impedit, deleniti natus
                      rerum voluptatibus ea ad quas nostrum alias modi? Deserunt
                      nam quas itaque!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Aside />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
