import Link from "next/link";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import TerminalIcon from "@mui/icons-material/Terminal";
import CircleIcon from "@mui/icons-material/Circle";
import CalculateIcon from "@mui/icons-material/Calculate";
import ScienceIcon from "@mui/icons-material/Science";
import BiotechIcon from "@mui/icons-material/Biotech";
import AssignmentIcon from "@mui/icons-material/Assignment";

export interface BlockParams {
  title: string;
  url: string;
  icon?: string;
  subtitle?: string;
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
      break;
    case "science":
      icon = <ScienceIcon style={{ width: "95%", height: "95%" }} />;
      break;
    case "lab":
      icon = <BiotechIcon style={{ width: "95%", height: "95%" }} />;
      break;
    case "assignment":
      icon = <AssignmentIcon style={{ width: "95%", height: "95%" }} />;
      break;
  }

  return (
    <Link
      href={params.block.url}
      className="transition-transform hover:scale-105"
    >
      <div className="flex h-36 w-36 flex-col items-center border border-[#FFDAAD] bg-[#FFF6EB] p-2">
        <div>
          <h2 className="text-center">{params.block.title}</h2>
          {params.block.subtitle ? (
            <h2 className="m-0 p-0 text-center text-sm text-[#777]">
              {params.block.subtitle}
            </h2>
          ) : (
            <div className="mt-5" />
          )}
        </div>
        {icon !== undefined && (
          <div className="flex w-20 items-center justify-center text-[#444]">
            {icon}
          </div>
        )}
      </div>
    </Link>
  );
}
