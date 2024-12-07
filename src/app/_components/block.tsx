import Link from "next/link";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import TerminalIcon from "@mui/icons-material/Terminal";
import CircleIcon from "@mui/icons-material/Circle";
import CalculateIcon from "@mui/icons-material/Calculate";

export interface BlockParams {
  title: string;
  url: string;
  icon?: string;
}

export default function Block(params: { block: BlockParams }) {
  let icon = undefined;
  switch (params.block.icon) {
    case "school":
      icon = <SchoolIcon style={{ width: "100%", height: "100%" }} />;
      break;
    case "terminal":
      icon = <TerminalIcon style={{ width: "100%", height: "100%" }} />;
      break;
    case "circle":
      icon = <CircleIcon style={{ width: "95%", height: "95%" }} />;
      break;
    case "math":
      icon = <CalculateIcon style={{ width: "95%", height: "95%" }} />;
  }

  return (
    <Link
      href={params.block.url}
      className="transition-transform hover:scale-105"
    >
      <div className="flex h-36 w-36 flex-col items-center gap-3 border border-[#FFDAAD] bg-[#FFF6EB] p-2">
        <h2 className="text-center">{params.block.title}</h2>
        {icon !== undefined && (
          <div className="flex w-20 items-center justify-center text-[#444]">
            {icon}
          </div>
        )}
      </div>
    </Link>
  );
}
