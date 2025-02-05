"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select,SelectLabel,SelectContent,SelectTrigger,SelectValue, SelectItem } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "khushdeep.jain@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Sector 6 Gurugram, Haryana, India",
  },

];

import { motion } from "framer-motion";
import { SelectGroup } from "@radix-ui/react-select";
const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{
      opacity: 1, transition: {
        delay: 2.4,
        duration: 0.4,
        ease:"easeIn"
      }
    }} 
      className="py-6"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*   Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-accent text-4xl">Let's Work Together!</h3>
              <p className="text-white/60">Loren Impum Here</p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="email" placeholder="Email Address" />
              </div>
              {  /* Select */}
              <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="est"> Web Development</SelectItem>
                  <SelectItem value="cst"> UI/UX Design</SelectItem>
                  <SelectItem value="mst"> Logo Design</SelectItem>
                  <SelectItem value="gst"> Extensions</SelectItem>
                </SelectGroup>
                </SelectContent>
              </Select>
              
              {/* Text Area Here */}
              <Textarea
                className="h-[200px] placeholder='Type Your message here.' "></Textarea>
              <Button size="md" className="max-4-40 ">Send Message</Button>
            </form>
          </div>
          {/*   Info */}
          <div className="flex-1 flex items-center xl:justify-end xl:order-none order-1 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <l1 key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded--md flex items-center justify-center">
                    <div className="text-[28px]">{ item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{ item.description}</h3>
                  </div>
                </l1>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact