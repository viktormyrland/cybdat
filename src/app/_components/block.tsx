import Link from "next/link";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import TerminalIcon from "@mui/icons-material/Terminal";
import CircleIcon from "@mui/icons-material/Circle";
import CalculateIcon from "@mui/icons-material/Calculate";
import ScienceIcon from "@mui/icons-material/Science";
import BiotechIcon from "@mui/icons-material/Biotech";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DataArrayIcon from '@mui/icons-material/DataArray';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

export interface BlockParams {
  title: string;
  url: string;
  icon?: string;
  subtitle?: string;
  titleClasses?: string;
}

export default function Block(params: { block: BlockParams }) {
  let icon = undefined;
  switch (params.block.icon) {
    case "school":
      icon = (
        <SchoolIcon
          className="text-[#874600]"
          style={{ width: "100%", height: "100%" }}
        />
      );
      break;
    case "board":
      icon = (
        <DeveloperBoardIcon
          className="text-[#33333]"
          style={{ width: "100%", height: "100%" }}
        />
      );
      break;
    case "fix":
      icon = (
        <AutoFixHighIcon
          className="text-[#33333]"
          style={{ width: "90%", height: "90%" }}
        />
      );
      break;
    case "terminal":
      icon = (
        <TerminalIcon
          className="text-[#33333]"
          style={{ width: "100%", height: "100%" }}
        />
      );
      break;
    case "circle":
      icon = (
        <CircleIcon
          className="text-[#cc0000]"
          style={{ width: "95%", height: "95%" }}
        />
      );
      break;
    case "math":
      icon = (
        <CalculateIcon
          className="text-[#2d1896]"
          style={{ width: "95%", height: "95%" }}
        />
      );
      break;
    case "science":
      icon = (
        <ScienceIcon
          className="text-[#44ab4d]"
          style={{ width: "95%", height: "95%" }}
        />
      );
      break;
    case "lab":
      icon = (
        <BiotechIcon
          className="text-[#44ab4d]"
          style={{ width: "95%", height: "95%" }}
        />
      );
      break;
    case "assignment":
      icon = (
        <AssignmentIcon
          className="text-[#118099]"
          style={{ width: "95%", height: "95%" }}
        />
      );
      break;
      
  }

  return (
    <Link
      href={params.block.url}
      className="transition-transform hover:scale-105"
    >
      <div className="flex h-36 w-36 flex-col items-center rounded-md border border-[#888] bg-[#FFF6EB] p-2">
        <div>
          <h2 className={`text-center ${params.block.titleClasses ?? ""}`}>
            {params.block.title}
          </h2>
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
