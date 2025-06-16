import React, { useEffect } from "react";

const ParticleBackground = () => {
  useEffect(() => {
    const tryLoadParticles = () => {
      if (window.particlesJS) {
        window.particlesJS.load(
          "particles-js",
          "/particlesjs-config.json",
          () => console.log("✅ particles.js config loaded")
        );
      } else {
        setTimeout(tryLoadParticles, 100); // wait for script
      }
    };

    tryLoadParticles();
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed", // ensure behind everything
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default ParticleBackground;
