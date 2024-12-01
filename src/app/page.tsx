import { HydrateClient } from "~/trpc/server";
import Block from "./_components/block";

const blocks = [
  {
    title: "Studentweb",
    url: "https://fsweb.no/studentweb/login.jsf?inst=FSNTNU",
  },
  {
    title: "Matematikk 3",
    url: "https://wiki.math.ntnu.no/tma4110/2024h/start",
  },
  {
    title: "Objektorientert Programmering",
    url: "https://ntnu.blackboard.com/ultra/courses/_46789_1/cl/outline",
  },
  {
    title: "Abakus",
    url: "https://abakus.no",
  },
];

export default async function Home() {
  return (
    <HydrateClient>
      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]"></h1>
        </div>
      </main> */}
      <main className="flex h-screen w-screen flex-col items-center bg-gradient-to-b from-[#533A71] to-[#26202E]">
        {/* <div className="h-[50px] w-full bg-red-500"></div> */}
        <div className="flex h-full w-[80%] max-w-[1200px] flex-row flex-wrap content-start justify-center gap-3 border border-white p-6">
          {[...blocks, ...blocks, ...blocks, ...blocks].map((b, _index) => {
            return <Block key={_index} block={b} />;
          })}
        </div>
        <div className="h-[50px] w-full bg-red-500"></div>
      </main>
    </HydrateClient>
  );
}
