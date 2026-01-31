import RightCard from "./RightCard";

export default function RightContent(props) {
  console.log("Right content")
  console.log(props.users)
  return (
    <div className="h-full w-2/3 p-6 flex gap-10 flex-nowrap overflow-x-auto">
      <RightCard />
      <RightCard/>
      <RightCard/>
      <RightCard/>
    </div>
  );
}
