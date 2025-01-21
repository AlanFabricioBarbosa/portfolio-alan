import { AnimatedBackground } from "animated-backgrounds";

export default function Home() {
  return (
    <div>
      <AnimatedBackground
        animationName="particleNetwork"
        blendMode="hard-light"
        style={{ opacity: 2 }}
      />
    </div>
  );
}
