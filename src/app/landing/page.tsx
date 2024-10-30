"use client";
import { ModeToggle } from "@/components/dark-mode-toggle";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import {
  DollarSign,
  FileChartColumnIncreasing,
  Home,
  Speaker,
  SpeakerIcon,
  User,
  Volume,
  Volume2,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Page() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className="flex min-h-[100vh] w-[100vw] flex-col bg-slate-950 px-8">
      {/* Header */}

      <div className="fixed z-50 flex h-[10vh] w-[100vw] items-center justify-between bg-slate-950 pr-14">
        <div className="px-10">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.667 0.0981445C8.17229 0.0981445 0.181152 7.47286 0.181152 17.3065C0.181152 26.0682 6.64549 33.5351 15.4985 33.5351C17.5067 33.5351 18.9173 33.2739 19.7731 32.6953C20.5008 32.2274 20.8742 31.5696 20.975 30.8565C21.0741 30.1552 20.908 29.4215 20.6039 28.7722C20.3983 28.3333 19.9293 28.138 19.4981 28.1984C18.2857 28.3681 17.1071 28.5107 15.8988 28.5107C9.5363 28.5107 5.20555 22.9402 5.20555 17.3065C5.20555 10.8871 10.8751 5.08918 17.667 5.08918C21.0845 5.08918 23.8143 6.17454 25.6861 7.91623C27.5572 9.65733 28.5937 12.0746 28.5937 14.7875C28.5937 16.7111 28.0103 18.3946 27.1069 19.3937C26.6585 19.8897 26.1394 20.2092 25.578 20.3237C25.0832 20.4245 24.529 20.3717 23.9252 20.1048L24.9056 13.7308C25.1569 12.398 24.5549 11.0968 23.4899 10.3235L23.487 10.3215C21.7844 9.10993 19.7703 8.60838 17.7336 8.60838C12.6175 8.60838 8.9218 12.4924 8.9218 17.5514C8.9218 19.6468 9.6459 21.4665 10.9178 22.7638C12.1906 24.0619 13.9904 24.815 16.0989 24.815C17.5078 24.815 18.9897 24.5453 20.2627 23.8284C21.5876 24.6303 23.1562 24.9899 24.6728 24.9899C27.6499 24.9899 29.9025 23.8296 31.4028 21.9508C32.8944 20.0828 33.6181 17.5359 33.6181 14.7875C33.6181 5.86646 25.8469 0.0981445 17.667 0.0981445ZM16.0237 14.8777C16.4956 14.2797 17.0488 14.0045 17.7003 14.0045C18.1101 14.0045 18.5201 14.0494 18.8427 14.1918L18.3803 19.2345C18.0116 19.4714 17.5779 19.5938 17.0665 19.5938C16.4378 19.5938 16.0156 19.365 15.7416 19.0198C15.458 18.6624 15.3028 18.1407 15.3028 17.5164C15.3028 16.3019 15.5612 15.4436 16.0197 14.8826L16.0237 14.8777Z"
              fill={"white"}
            />
          </svg>
        </div>
        {/* <ul className="flex w-full max-w-80 items-center justify-between">
          <li>
            <a href="#">
              <Home />
            </a>
          </li>
          <li>
            <a href="#features">
              <FileChartColumnIncreasing />
            </a>
          </li>
          <li>
            <a href="#">
              <DollarSign />
            </a>
          </li>
          <li>
            <a href="#">
              <User />
            </a>
          </li>
        </ul> */}
        <div className="flex items-center gap-6 px-10">
          {/* <ModeToggle /> */}
          <Button>Get Started</Button>
        </div>
      </div>

      <div className="mt-[5.5rem] border-none bg-gray-200 dark:bg-slate-950">
        {/* Main Hero Content */}
        <div className="flex flex-col items-center justify-center text-center">
          <LampContainer>
            <h1 className="text-[3.5rem] font-semibold leading-tight">
              Let's Reimagine the Way <br /> You Manage Your Inbox
            </h1>
            <p className="w-[45rem] py-4 text-gray-500">
              Stay on top of your emails effortlessly with smart automation,
              personalized AI features, and all the tools you need in one sleek,
              intuitive platform. Make your inbox work for you.
            </p>
            <div className="py-4">
              <Button size={"lg"}>Get Started</Button>
            </div>
            <div className="py-3">
              <img src="/hero.png" alt="Hero Image" />
            </div>
          </LampContainer>
        </div>
        {/* Features */}
        {/* <div id="features" className="">
          Features
        </div> */}
        {/* Pricing */}
        {/* <div className="">Pricing</div> */}
        {/* Testimonials */}
        {/* <div className="">Testimonials</div> */}
        {/* CTA */}
        {/* <div className="">CTA</div> */}
        {/* Footer */}
        {/* <div className="">Footer</div> */}
      </div>
    </div>
  );
}