import React from "react";
import { motion } from "motion/react";

const OrgBox = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`border-2 border-brand-dark p-2 text-center font-bold text-[10px] md:text-xs uppercase tracking-tight bg-white shadow-sm hover:shadow-md transition-shadow relative z-10 ${className}`}>
    {children}
  </div>
);

const Line = ({ className = "" }: { className?: string }) => (
  <div className={`bg-brand-dark absolute ${className}`} />
);

const Arrow = ({ direction = "down", className = "" }: { direction?: "down" | "left" | "right"; className?: string }) => {
  const arrowClass = {
    down: "border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-brand-dark bottom-0 left-1/2 -translate-x-1/2",
    left: "border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[6px] border-r-brand-dark left-0 top-1/2 -translate-y-1/2",
    right: "border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-brand-dark right-0 top-1/2 -translate-y-1/2",
  }[direction];

  return (
    <div className={`absolute w-0 h-0 ${arrowClass} ${className}`} />
  );
};

export default function OrgChart() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-red-600 uppercase tracking-tighter mb-2">
            acieR building technology
          </h2>
          <p className="text-xl font-bold text-brand-dark uppercase tracking-widest">
            Organization chart.
          </p>
        </div>

        {/* Chart Container */}
        <div className="max-w-5xl mx-auto relative min-h-[850px] p-4 bg-white">
          
          {/* Level 1: MD */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <OrgBox className="w-64 py-4">Managing Director / CEO</OrgBox>
            {/* Vertical line down from MD */}
            <Line className="w-[1px] h-12 left-1/2 -translate-x-1/2 top-full" />
            <Arrow className="top-[calc(100%+12px)]" />
          </div>

          {/* Level 2 Horizontal Line */}
          <Line className="top-[120px] left-[15%] right-[15%] h-[1px]" />

          {/* Level 2 Boxes */}
          {/* Legal Advisor */}
          <div className="absolute top-[160px] left-[15%] -translate-x-1/2">
            <Line className="w-[1px] h-10 -top-10 left-1/2 -translate-x-1/2" />
            <OrgBox className="w-48">Legal Advisor & COO</OrgBox>
            <Line className="w-[1px] h-12 left-1/2 -translate-x-1/2 top-full" />
            <Arrow className="top-[calc(100%+12px)]" />
          </div>

          {/* Architect */}
          <div className="absolute top-[160px] left-1/2 -translate-x-1/2">
            <Line className="w-[1px] h-10 -top-10 left-1/2 -translate-x-1/2" />
            <OrgBox className="w-48">Architect</OrgBox>
            <Line className="w-[1px] h-12 left-1/2 -translate-x-1/2 top-full" />
            <Arrow className="top-[calc(100%+12px)]" />
          </div>

          {/* Director of Finance */}
          <div className="absolute top-[160px] left-[85%] -translate-x-1/2">
            <Line className="w-[1px] h-10 -top-10 left-1/2 -translate-x-1/2" />
            <OrgBox className="w-48">Director of Finance.</OrgBox>
            {/* Long line to Accounts Manager */}
            <Line className="w-[1px] h-[300px] left-1/2 -translate-x-1/2 top-full" />
            <Line className="top-[calc(100%+300px)] right-1/2 w-[450px] h-[1px]" />
            <Arrow direction="left" className="top-[calc(100%+300px)] right-[calc(50%+450px)]" />
          </div>

          {/* Level 3 Boxes */}
          {/* Executive Director */}
          <div className="absolute top-[260px] left-[15%] -translate-x-1/2">
            <OrgBox className="w-48">Executive Director</OrgBox>
            {/* Lines to sub-roles */}
            <Line className="w-[1px] h-12 left-1/2 -translate-x-1/2 top-full" />
            <Line className="top-[calc(100%+12px)] left-0 right-0 h-[1px]" />
            <Line className="top-[calc(100%+12px)] left-0 w-[1px] h-10" />
            <Line className="top-[calc(100%+12px)] right-0 w-[1px] h-10" />
            <Arrow className="top-[calc(100%+22px)] left-0" />
            <Arrow className="top-[calc(100%+22px)] right-0" />
          </div>

          {/* Structure Engineer */}
          <div className="absolute top-[260px] left-1/2 -translate-x-1/2">
            <OrgBox className="w-48">Structure Engineer.</OrgBox>
            {/* Horizontal Arrow to Executive Director */}
            <Line className="h-[1px] w-[120px] right-full top-1/2 -translate-y-1/2" />
            <Arrow direction="left" className="right-[calc(100%+120px)] top-1/2" />
            {/* Horizontal Arrow to Estimator */}
            <Line className="h-[1px] w-[120px] left-full top-1/2 -translate-y-1/2" />
            <Arrow direction="right" className="left-[calc(100%+120px)] top-1/2" />
          </div>

          {/* Estimator */}
          <div className="absolute top-[260px] left-[calc(50%+240px)] -translate-x-1/2">
            <OrgBox className="w-32">Estimator</OrgBox>
          </div>

          {/* Level 4 Boxes */}
          {/* Purchases Officer */}
          <div className="absolute top-[360px] left-[calc(15%-60px)] -translate-x-1/2">
            <OrgBox className="w-32">Purchases Officer</OrgBox>
            <Line className="w-[1px] h-12 left-1/2 -translate-x-1/2 top-full" />
            <Arrow className="top-[calc(100%+12px)]" />
          </div>

          {/* Accounts Manager */}
          <div className="absolute top-[360px] left-[calc(15%+60px)] -translate-x-1/2">
            <OrgBox className="w-32">Accounts Manager</OrgBox>
          </div>

          {/* Level 5 Boxes */}
          {/* Site Engineer */}
          <div className="absolute top-[460px] left-[calc(15%-60px)] -translate-x-1/2">
            <OrgBox className="w-32">Site Engineer.</OrgBox>
            {/* Line to Site Supervisor */}
            <Line className="w-[1px] h-12 left-1/2 -translate-x-1/2 top-full" />
            <Arrow className="top-[calc(100%+12px)]" />
            {/* Line to Electric Supervisor */}
            <Line className="h-[1px] w-12 left-full top-1/2 -translate-y-1/2" />
          </div>

          {/* Electric Supervisor */}
          <div className="absolute top-[460px] left-[calc(15%+60px)] -translate-x-1/2">
            <OrgBox className="w-32">Electric Supervisor.</OrgBox>
          </div>

          {/* Level 6 Boxes */}
          {/* Site Supervisor */}
          <div className="absolute top-[560px] left-[calc(15%-60px)] -translate-x-1/2">
            <OrgBox className="w-32">Site Supervisor.</OrgBox>
          </div>

          {/* Plumber */}
          <div className="absolute top-[640px] left-[15%] -translate-x-1/2">
            {/* Line from between Site Engineer and Electric Supervisor */}
            <Line className="w-[1px] h-[180px] left-1/2 -translate-x-1/2 -top-[180px]" />
            <OrgBox className="w-32">Plumber</OrgBox>
          </div>

        </div>
      </div>
    </section>
  );
}



