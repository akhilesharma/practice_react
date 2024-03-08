import React from "react";
import Toggle from "./Toggle";
import FramerMotion from "./FramerMotion";
import Loading from "./Loading";

export default function Home() {
  return (
    <div>
      <Toggle />
      <FramerMotion />
      <Loading />
    </div>
  );
}
