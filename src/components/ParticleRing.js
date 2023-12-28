import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";

const ParticleRing = () => {
  const canvasRef = useRef(null);
  const [scrollTransform, setScrollTransform] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;

    const handleWheel = (event) => {
      setScrollTransform(event.deltaY > 0 ? -100 : 100);
    };

    const handleMouseUp = () => {
      setScrollTransform(0);
    };

    canvas.addEventListener("wheel", handleWheel);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("wheel", handleWheel);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
          rotation: [0, 0, 0], // Set initial rotation to [0, 0, 0]
        }}
        style={{
          height: "100vh",
          transform: `translateZ(${scrollTransform}px)`,
          pointerEvents: scrollTransform !== 0 ? "none" : "auto",
        }}
        className="bg-slate-900"
        ref={canvasRef}
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
      <div>
        <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-7xl pointer-events-none">
          JSCOP 6.0
        </h1>
        <p className="absolute top-[57%] left-[50%] -translate-x-[50%] -translate-y-[50%]  text-slate-200">
          JIIT STUDENT CONFERENCE FOR OPTICS AND PHOTONICS
        </p>
        <button className="absolute top-[61%] left-[50%] -translate-x-[50%] -translate-y-[50%]  text-slate-200 border-s-white ">
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.3; // Rotate along X-axis
      ref.current.rotation.y = clock.getElapsedTime() * 0.2; // Rotate along Y-axis
      ref.current.rotation.z = clock.getElapsedTime() * 0.1; // Rotate along Z-axis
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
