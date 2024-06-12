"use client";
import CountUp from "react-countup";

const StatisticsCountUp = () => {
  return (
    <ul className="w-fit mx-auto flex flex-wrap list-none justify-center gap-3 divide-x-2 rounded-lg bg-secondary p-5 shadow-lg">
      <li className="p-3">
        <p className="text-3xl font-bold text-primary">
          <CountUp start={0} end={89} duration={8} />
          K+
        </p>
        <p>Happy Customers</p>
      </li>
      <li className="p-3">
        <p className="text-3xl font-bold text-primary">
          <CountUp start={0} end={27} duration={8} />
          K+
        </p>
        <p>Products Sold</p>
      </li>
      <li className="p-3  border-l !border-l-0 sm:!border-l-2">
        <p className="text-3xl font-bold text-primary">
          <CountUp start={0} end={5} duration={8} />+
        </p>
        <p>Years of Experience</p>
      </li>
    </ul>
  );
};

export default StatisticsCountUp;
