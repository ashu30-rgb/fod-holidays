import { SpeedInsights } from "@vercel/speed-insights/next";
import HomePage from "./home/page"

export default function Home() {
  return (
    <div role="main" id="main">
      <HomePage />
      <SpeedInsights/>
    </div>
  );
}
