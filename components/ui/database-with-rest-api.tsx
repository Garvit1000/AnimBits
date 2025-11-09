"use client";

import React from "react";
import { motion } from "framer-motion";
import { Folder, Code2, SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DatabaseWithRestApiProps {
  className?: string;
  circleText?: string;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
  };
  title?: string;
  lightColor?: string;
}

const DatabaseWithRestApi = ({
  className,
  circleText,
  badgeTexts,
  buttonTexts,
  title,
  lightColor,
}: DatabaseWithRestApiProps) => {
  return (
    <>
      <style jsx>{`
        @keyframes db-light-1 {
          0%, 100% { cx: 31; cy: 10; }
          25% { cx: 31; cy: 25; }
          50% { cx: 90; cy: 30; }
          75% { cx: 100; cy: 35; }
        }
        @keyframes db-light-2 {
          0%, 100% { cx: 77; cy: 10; }
          25% { cx: 77; cy: 20; }
          50% { cx: 90; cy: 25; }
          75% { cx: 100; cy: 30; }
        }
        @keyframes db-light-3 {
          0%, 100% { cx: 124; cy: 10; }
          25% { cx: 124; cy: 20; }
          50% { cx: 110; cy: 25; }
          75% { cx: 100; cy: 30; }
        }
        @keyframes db-light-4 {
          0%, 100% { cx: 170; cy: 10; }
          25% { cx: 170; cy: 25; }
          50% { cx: 110; cy: 30; }
          75% { cx: 100; cy: 35; }
        }
        .db-light-1 { animation: db-light-1 3s ease-in-out infinite; }
        .db-light-2 { animation: db-light-2 3s ease-in-out infinite 0.5s; }
        .db-light-3 { animation: db-light-3 3s ease-in-out infinite 1s; }
        .db-light-4 { animation: db-light-4 3s ease-in-out infinite 1.5s; }
      `}</style>
      <div
        className={cn(
          "relative flex h-[350px] w-full max-w-[500px] flex-col items-center",
          className
        )}
      >
      {/* SVG Paths  */}
      <svg
        className="h-full sm:w-full text-muted"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
      >
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.4"
          strokeDasharray="100 100"
          pathLength="100"
        >
          <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
          <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
          <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
          {/* Animation For Path Starting */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>
        {/* Blue Lights */}
        <g mask="url(#db-mask-1)">
          <circle
            className="database db-light-1"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-2)">
          <circle
            className="database db-light-2"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-3)">
          <circle
            className="database db-light-3"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-4)">
          <circle
            className="database db-light-4"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        {/* Buttons */}
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          {/* First Button */}
          <g>
            <rect
              className="fill-white dark:fill-[#18181B]"
              x="14"
              y="5"
              width="34"
              height="10"
              rx="5"
              stroke="currentColor"
              strokeWidth="0.3"
            ></rect>
            <DatabaseIcon x="18" y="7.5" isDark={true}></DatabaseIcon>
            <text
              x="28"
              y="12"
              className="fill-neutral-900 dark:fill-white"
              stroke="none"
              fontSize="5"
              fontWeight="500"
            >
              {badgeTexts?.first || "text"}
            </text>
          </g>
          {/* Second Button */}
          <g>
            <rect
              className="fill-white dark:fill-[#18181B]"
              x="60"
              y="5"
              width="34"
              height="10"
              rx="5"
              stroke="currentColor"
              strokeWidth="0.3"
            ></rect>
            <DatabaseIcon x="64" y="7.5" isDark={true}></DatabaseIcon>
            <text
              x="74"
              y="12"
              className="fill-neutral-900 dark:fill-white"
              stroke="none"
              fontSize="5"
              fontWeight="500"
            >
              {badgeTexts?.second || "button"}
            </text>
          </g>
          {/* Third Button */}
          <g>
            <rect
              className="fill-white dark:fill-[#18181B]"
              x="108"
              y="5"
              width="34"
              height="10"
              rx="5"
              stroke="currentColor"
              strokeWidth="0.3"
            ></rect>
            <DatabaseIcon x="112" y="7.5" isDark={true}></DatabaseIcon>
            <text
              x="122"
              y="12"
              className="fill-neutral-900 dark:fill-white"
              stroke="none"
              fontSize="5"
              fontWeight="500"
            >
              {badgeTexts?.third || "card"}
            </text>
          </g>
          {/* Fourth Button */}
          <g>
            <rect
              className="fill-white dark:fill-[#18181B]"
              x="150"
              y="5"
              width="40"
              height="10"
              rx="5"
              stroke="currentColor"
              strokeWidth="0.3"
            ></rect>
            <DatabaseIcon x="154" y="7.5" isDark={true}></DatabaseIcon>
            <text
              x="165"
              y="12"
              className="fill-neutral-900 dark:fill-white"
              stroke="none"
              fontSize="5"
              fontWeight="500"
            >
              {badgeTexts?.fourth || "loader"}
            </text>
          </g>
        </g>
        <defs>
          {/* 1 -  user list */}
          <mask id="db-mask-1">
            <path
              d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 2 - task list */}
          <mask id="db-mask-2">
            <path
              d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 3 - backlogs */}
          <mask id="db-mask-3">
            <path
              d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 4 - misc */}
          <mask id="db-mask-4">
            <path
              d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* Blue Grad */}
          <radialGradient id="db-blue-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#3b82f6"} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
      {/* Main Box */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        {/* bottom shadow */}
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-accent/30" />
        {/* box title */}
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-2 py-1 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white sm:-top-4 sm:py-1.5">
          <SparklesIcon className="size-3" />
          <span className="ml-2 text-[10px]">
            {title ? title : "Animation categories connected to your components"}
          </span>
        </div>
        {/* box outter circle */}
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border border-neutral-200 bg-white font-semibold text-xs text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white">
          {circleText ? circleText : "CLI"}
        </div>
        {/* box content */}
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          {/* Badges */}
          <div className="absolute bottom-8 left-12 z-10 flex h-7 items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 text-xs text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white">
            <Code2 className="size-4" />
            <span>{buttonTexts?.first || "AnimBits"}</span>
          </div>
          <div className="absolute right-16 z-10 hidden h-7 items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 text-xs text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white sm:flex">
            <Folder className="size-4" />
            <span>{buttonTexts?.second || "registry"}</span>
          </div>
          {/* Circles */}
          <motion.div
            className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default DatabaseWithRestApi;

const DatabaseIcon = ({ x = "0", y = "0", isDark = false }: { x: string; y: string; isDark?: boolean }) => {
  return (
    <svg
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 24 24"
      fill="none"
      className="stroke-neutral-900 dark:stroke-white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
};
