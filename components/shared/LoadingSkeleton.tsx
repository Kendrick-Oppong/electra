const arr = [1, 2, 3, 4];
const LoadingSkeleton = () => {
  return (
    <div className="grid-template gap-4 justify-center ">
      {arr.map((skeleton) => (
        <div
          key={skeleton}
          className="relative w-[289px] h-[340px] border border-gray rounded-lg p-3 text-center shadow-lg animate-pulse"
        >
          <div className="w-44 h-44 mx-auto bg-gray-300 rounded"></div>
          <div className="font-bold my-4 h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto mt-2"></div>
          <div className="flex justify-between items-center px-4 my-4">
            <p className="font-bold my-3 h-6 bg-gray-300 rounded w-20"></p>
            <div className="bg-gray-300 p-2 rounded-lg w-10 h-10"></div>
          </div>
          <div className="absolute right-4 top-5 flex flex-col gap-5">
            <div className="rounded-full border border-gray-300 p-1.5 h-6 w-6 mb-2"></div>
            <div className="rounded-full border border-gray-300 p-1.5 h-6 w-6"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
