import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text above photo goes here */}
          <div className="text-center xl:text-left order-2 xl:order:1"> 
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Khushdeep Jain</span></h1>
            <p className="max-w-[500pz] mb-9 text-white/80 ">I excel at crafting elegant digital experience and I am proficient in various programming languages and technologies</p>
            {/* Buttons and social handles goes here */}
            <div className="flex flex-col xl-flex-row items-center gap-8">
            <Button
              variant='outline'
              size='lg'
              className="uppercase flex items-center gap-2"
            >
              <span> Download CV</span>
              <FiDownload className="text-xl"/>
            </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex flex-row gap-6"
                  iconStyles="w-9 h-9 border bordre-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duraion-500"
                />
              </div>
            </div>
            </div>
          <div className="order-1 xl:order-2 mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home;
