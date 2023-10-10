import React from "react";
import { motion, useScroll } from "framer-motion";

const TimelineIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "center start"],
  });

  return (
    <figure className="absolute left-1 xl:left-11 stroke-black ">
      <svg width="75" height="75" viewBox="0 0 100 100" className="-rotate-90">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-yellow-300 stroke-[3px] fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[3px] fill-none"
          style={{ pathLength: scrollYProgress }}
        />

        <circle
          cx="75"
          cy="50"
          r="10"
          className=" stroke-0 fill-orange-600 animate-pulse"
        />
      </svg>
    </figure>
  );
};

export default TimelineIcon;
