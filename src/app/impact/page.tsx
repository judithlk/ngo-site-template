import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Aside from "../components/Aside"
import ProjectModule from "../components/ProjectModule"
import Image from "next/image"

export default function ImpactPage() {
    const projects = ['Project 1', 'Project 2', 'Project 3']
    return(
        <>
        <NavBar />
        <main className="w-[100%] pb-10 mb-0">
        <div className="w-[100%] h-[100%] pt-[8%] lg:pt-0 space-y-24">
          <div className="h-64 md:h-80 bg-darkblue flex items-center justify-center pt-4">
            <h1 className="text-3xl md:text-5xl text-white font-bold italic">
              What do we do?
            </h1>
          </div>
          
          <div className="w-[100%] flex flex-col md:flex-row justify-evenly">
            <div className="md:w-[65%] space-y-10">
              {projects.map((project, index) => (
                <ProjectModule title={project} />
              ))}
            </div>
            <Aside />
          </div>
        </div>
      </main>
        <Footer />
        </>
    )
}