import React from "react";
import Button from "./Buttons";
import {EventButtonTypes, MotionButtonTypes, ButtonTypes, ControlButtonTypes} from './constants'

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      {Object.keys(EventButtonTypes).map((key, index) => {
        return <Button type={ButtonTypes.EVENT} name={EventButtonTypes[key]} key={index} />
      })}
      <div className="font-bold"> {"Motion"} </div>
      {Object.keys(MotionButtonTypes).map((key, index) => {
        return <Button type={ButtonTypes.MOTION} name={MotionButtonTypes[key]} key={index}/>
      })}
      <div className="font-bold"> {"Control"} </div>
      {Object.keys(ControlButtonTypes).map((key, index) => {
        return <Button type={ButtonTypes.CONTROL} name={ControlButtonTypes[key]} key={index}/>
      })}
    </div>
  );
}
