import React from "react";

export default function RightCard() {
  return (
    <div className="h-full w-80 border bg-red-50 relative rounded-3xl overflow-hidden">
      <img
        className="h-full w-full object-cover"
        src="src/images/man.jpg"
        alt="man"
      />
      <div className="absolute top-0 left-0 h-full w-80 p-10 flex flex-col justify-between">
        <h1 className="text-2xl font-bold text-black bg-white h-6 w-5 flex items-center justify-center p-4 rounded-full">
          1
        </h1>
        <div className="text-white bg-red-500">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            temporibus! Ipsum ut tempore libero id!
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-white text-black px-4 py-2 rounded-full mt-4">
              Enter
            </button>
            <i class="ri-arrow-right-up-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
