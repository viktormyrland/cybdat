"use client";
import Block from "./_components/block";
import { Oxanium, Lato } from "next/font/google";

const oxanium = Oxanium({ weight: "600", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

const blocks = [
  {
    title: "Matematikk 3",
    url: "https://wiki.math.ntnu.no/tma4115/2025v/start",
    icon: "math",
  },
  {
    title: "Objektorientert",
    url: "https://www.ntnu.no/wiki/display/tdt4100",
    icon: "terminal",
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
    title: "Fysikk",
    url: "http://web.phys.ntnu.no/~stovneng/TFY4125_2024/tfy4125.htm",
    icon: "science",
  },
  {
    title: "Fysikk Lab",
    url: "http://home.phys.ntnu.no/brukdef/undervisning/fyslab",
    icon: "lab",
  },
  {
    title: "Ovsys",
    url: "https://ovsys.math.ntnu.no/",
    icon: "assignment",
  },
];

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-screen flex-col items-center justify-between bg-gradient-to-b from-[#533A71] to-[#26202E]">
      <div className="flex w-full flex-col items-center gap-2 pt-6">
        <h1 className={`${oxanium.className} text-5xl text-white`}>CYBDAT</h1>
        <h3 className={`text-md font-[Consolas] font-bold text-[#aaa]`}>
          Cybersikkerhet og Datakommunikasjon ved NTNU
        </h3>
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
