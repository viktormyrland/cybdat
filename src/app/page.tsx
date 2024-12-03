"use client";
import Block from "./_components/block";
import { Oxanium, Lato } from "next/font/google";

const oxanium = Oxanium({ weight: "600" });
const lato = Lato({ weight: "400" });

const blocks = [
  {
    title: "Studentweb",
    url: "https://fsweb.no/studentweb/login.jsf?inst=FSNTNU",
    icon: "school",
  },
  {
    title: "Matematikk 3",
    url: "https://wiki.math.ntnu.no/tma4110/2024h/start",
  },
  {
    title: "OOP",
    url: "https://ntnu.blackboard.com/ultra/courses/_46789_1/cl/outline",
    icon: "terminal",
  },
  {
    title: "Abakus",
    url: "https://abakus.no",
  },
];

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-screen flex-col items-center justify-between bg-gradient-to-b from-[#533A71] to-[#26202E]">
      <div className="flex w-full flex-col items-center gap-3 pt-6">
        <h1 className={`${oxanium.className} text-5xl text-white`}>CYBDAT</h1>
        <div
          className={`flex h-full w-[95%] max-w-[1500px] flex-row flex-wrap content-start justify-center gap-3 p-6 ${lato.className}`}
        >
          {blocks.map((b, _index) => {
            return <Block key={_index} block={b} />;
          })}
        </div>
      </div>
      <div className="h-[50px] w-full bg-red-500"></div>
    </main>
  );
}
