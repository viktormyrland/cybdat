import Link from "next/link";
import React from "react";

export interface BlockParams {
  title: string;
  url: string;
}

export default function Block(params: { block: BlockParams }) {
  return (
    <Link
      href={params.block.url}
      className="transition-transform hover:scale-105"
    >
      <div className="h-36 w-36 border border-[#FFDAAD] bg-[#FFF6EB] p-2">
        <h2 className="text-center">{params.block.title}</h2>
      </div>
    </Link>
  );
}
