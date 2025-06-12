"use client";
import Block from "./_components/block";
import { Oxanium, Lato } from "next/font/google";

const oxanium = Oxanium({ weight: "600", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

const blocks = [
  {
    title: "AlgDat",
    subtitle: "TDT4120",
    url: "https://algdat.idi.ntnu.no/",
    icon: "board",
  },
  {
    title: "Matematikk 4D",
    subtitle: "TMA4135",
    url: "https://wiki.math.ntnu.no/tma4130/2025h/start",
    icon: "math",
  },
  {
    title: "Studentweb",
    url: "https://fsweb.no/studentweb/login.jsf?inst=FSNTNU",
    icon: "school",
  },
  {
    title: "Abakus",
    url: "https://abakus.no",
    icon: "circle",
  },
  {
    title: "Ovsys",
    url: "https://ovsys.math.ntnu.no/",
    icon: "assignment",
  },
  {
    title: "ChatGPT",
    url: "https://chatgpt.com/",
    icon: "fix",
  },
];

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-screen flex-col items-center justify-between bg-gradient-to-b from-[#533A71] to-[#26202E]">
      <div className="flex w-full flex-col items-center gap-2 pt-6">
        <h1 className={`${oxanium.className} text-5xl text-white`}>
          CYBDAT-START
        </h1>
        {/*  <h3 className={`text-md font-mono font-bold text-[#aaa]`}>
          For de som ikke finner frem
        </h3> */}
        <div
          className={`flex h-full w-[95%] max-w-[1500px] flex-row flex-wrap content-start justify-center gap-3 p-6 ${lato.className}`}
        >
          {blocks.map((b, _index) => {
            return <Block key={_index} block={b} />;
          })}
        </div>
      </div>
      {/* <div className="h-[50px] w-full bg-red-500"><h3></h3></div> */}
    </main>
  );
}
