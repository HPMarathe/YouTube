import React from "react";

const RecVideoCard = () => {
  return (
    <div className="flex h-40 w-full p-2 m-2">
      <div className="h-full bg-slate-100 w-1/2 rounded-2xl"></div>
      <div className="w-1/2">
        <div className="py-3 m-2 w-full rounded-2xl bg-slate-100"></div>
        <div className="py-3 m-2 w-full rounded-2xl bg-slate-100"></div>
        <div className="py-3 m-2 w-3/4 rounded-2xl bg-slate-100"></div>
        <div className="py-3 m-2 w-3/4 rounded-2xl bg-slate-100"></div>
      </div>
    </div>
  );
};
const RecVideoShimmer = () => {
  return (
    <div className="flex flex-wrap justify-center pl-2">
      {Array(20)
        .fill()
        .map((val, index) => {
          return <RecVideoCard key={index} />;
        })}
    </div>
  );
};

export default RecVideoShimmer;
