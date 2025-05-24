"use client";
import { useEffect, useState } from "react";
import Block from "./_components/block";
import Image from "next/image";
import { Oxanium, Lato } from "next/font/google";

const oxanium = Oxanium({ weight: "600", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

const blocks = [
  {
    title: "Matematikk 3",
    subtitle: "TMA4115",
    url: "https://wiki.math.ntnu.no/tma4115/2025v/start",
    icon: "math",
  },
  {
    title: "Objekt-Wiki",
    subtitle: "TDT4100",
    url: "https://www.ntnu.no/wiki/display/tdt4100",
    icon: "terminal",
  },
  {
    title: "Fysikk",
    subtitle: "TFY4125",
    url: "https://stovneng.folk.ntnu.no/TFY4125_2025/tfy4125.htm",
    icon: "science",
  },
  {
    title: "Fysikk Lab",
    subtitle: "TFY4125",
    url: "http://home.phys.ntnu.no/brukdef/undervisning/fyslab",
    icon: "lab",
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
];

function calculateCountdown() {
  const eksamenDato = new Date("2025-06-03T09:00:00").getTime();
  const nå = new Date().getTime();

  const diffMs = eksamenDato - nå;

  if (diffMs <= 0) return "Eksamen har startet eller er ferdig!";

  const sek = 1000;
  const min = sek * 60;
  const time = min * 60;
  const dag = time * 24;

  const dager = Math.floor(diffMs / dag);
  const timer = Math.floor((diffMs % dag) / time);
  const minutter = Math.floor((diffMs % time) / min);
  const sekunder = Math.floor((diffMs % min) / sek);

  return `eksamen💀: ${dager}d ${timer}t ${minutter}min ${sekunder}s`;
}

export default function Home() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    setCountdown(calculateCountdown());
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <main className="flex h-full min-h-screen w-screen flex-col items-center justify-between bg-gradient-to-b from-[#533A71] to-[#26202E]">
      <div className="flex w-full flex-col items-center gap-2 pt-6">
        <h1 className={`${oxanium.className} text-5xl text-white`}>
          CYBDAT-START
        </h1>
        {/*  <h3 className={`text-md font-mono font-bold text-[#aaa]`}>
          For de som ikke finner frem
        </h3> */}
          <div className="w-[80%] bg-white min-h-24 rounded-lg flex flex-col items-center p-4">
            <div className="flex flex-row gap-2 overflow-x-auto *:object-contain">
            <Image
              src="/9v27wo.jpg" 
              alt="Eksamen bilde"
              width={200}
              height={80}
            />
            <Image
              src="/9v291b.jpg" 
              alt="Eksamen bilde"
              width={200}
              height={100}
            />
            <Image
              src="/9v28np.jpg" 
              alt="Eksamen bilde"
              width={200}
              height={100}
            />
            <Image
              src="/9v28q5.jpg" 
              alt="Eksamen bilde"
              width={200}
              height={100}
            />
            <Image
              src="/9v28sc.jpg" 
              alt="Eksamen bilde"
              width={200}
              height={100}
            /></div>
          <p className=" p-2 font-bold border-4 border-black">{countdown}</p></div>
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
