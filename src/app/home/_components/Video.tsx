"use client"
import { HOMEPAGE_VIDEO_URL } from "@fod/constants/data";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoSection() {


  return (
    <div className="relative w-full">
      <ReactPlayer
        url={HOMEPAGE_VIDEO_URL}
        playing
        loop
        muted
        width="100%"
        height="100%"
        playsinline
      />
    </div>
  );
}
