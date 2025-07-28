import React from "react";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0f0f0f" },
        particles: {
          number: { value: 60 },
          size: { value: 1.5 },
          move: { enable: true, speed: 0.2 },
          links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.1,
            width: 1,
          },
        },
      }}
    />
  );
}


