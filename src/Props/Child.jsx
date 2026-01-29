import React from "react";

export default function Child(props) {
    console.log(props)
  return (
    <div className="h-[20vh] w-[30vw] bg-gray-500 text-white m-10 text-center">
      <h1>{props.name}</h1>
    </div>
  );
}
