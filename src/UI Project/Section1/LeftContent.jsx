import React from "react";

export default function LeftContent() {
  return (
    <div className="flex flex-col justify-between h-full w-1/3  p-5 ">
      <div>
        <h3 className="mb-7 text-6xl font-bold">
          Monduen <br /> <span className="text-gray-400">dolorsit</span> <br />
          Loreipsum
        </h3>
      </div>
      <div>
        <p className="text-lg font-medium text-gray-600 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto
          deserunt d esse tempore omnis illum quo harum nam, doloremque
          incidunt.
        </p>
        <img src="src/images/icons8-up-right-70.png" alt="icon" />
      </div>
    </div>
  );
}
