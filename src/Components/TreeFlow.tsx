import React from "react";
import { motion } from "framer-motion";

const Node = ({ label, delay = 0 }: { label: string; delay?: number }) => (
  <motion.div
    className="w-12 h-12 rounded-full bg-white border shadow-md flex items-center justify-center"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    {label}
  </motion.div>
);

const Edge = ({ x1, y1, x2, y2, delay = 0 }: { x1: number; y1: number; x2: number; y2: number; delay?: number }) => (
  <motion.line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke="white"
    strokeWidth="2"
    initial={{ pathLength: 0, stroke: "white" }}
    animate={{ pathLength: 1, stroke: "green" }}
    transition={{ duration: 1, delay }}
  />
);

export const TreeFlow: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center p-10">
      {/* SVG for edges */}
      <svg className="absolute w-full h-full">
        {/* Root -> Level 1 */}
        <Edge x1={300} y1={50} x2={200} y2={150} delay={0.5} />
        <Edge x1={300} y1={50} x2={300} y2={150} delay={0.7} />
        <Edge x1={300} y1={50} x2={400} y2={150} delay={0.9} />
        <Edge x1={300} y1={50} x2={500} y2={150} delay={1.1} />

        {/* Level 1 -> Level 2 */}
        <Edge x1={200} y1={150} x2={200} y2={250} delay={1.3} />
        <Edge x1={300} y1={150} x2={300} y2={250} delay={1.5} />
        <Edge x1={400} y1={150} x2={400} y2={250} delay={1.7} />
        <Edge x1={500} y1={150} x2={500} y2={250} delay={1.9} />

        {/* Level 2 -> Level 3 */}
        <Edge x1={200} y1={250} x2={200} y2={350} delay={2.1} />
        <Edge x1={300} y1={250} x2={300} y2={350} delay={2.3} />
        <Edge x1={400} y1={250} x2={400} y2={350} delay={2.5} />
        <Edge x1={500} y1={250} x2={500} y2={350} delay={2.7} />
      </svg>

      {/* Nodes */}
      <div className="flex flex-col items-center space-y-24">
        {/* Root */}
        <Node label="R" delay={0} />

        {/* Level 1 */}
        <div className="flex space-x-24 mt-20">
          <Node label="A" delay={0.6} />
          <Node label="B" delay={0.8} />
          <Node label="C" delay={1.0} />
          <Node label="D" delay={1.2} />
        </div>

        {/* Level 2 */}
        <div className="flex space-x-24 mt-20">
          <Node label="A1" delay={1.4} />
          <Node label="B1" delay={1.6} />
          <Node label="C1" delay={1.8} />
          <Node label="D1" delay={2.0} />
        </div>

        {/* Level 3 */}
        <div className="flex space-x-24 mt-20">
          <Node label="A2" delay={2.2} />
          <Node label="B2" delay={2.4} />
          <Node label="C2" delay={2.6} />
          <Node label="D2" delay={2.8} />
        </div>
      </div>
    </div>
  );
};
