import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

function Mesh({
  modelPath,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
}) {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAnimation = Object.keys(actions)[0];
      actions[firstAnimation]?.reset().play();
    }
  }, [actions]);

  return (
    <primitive
      ref={group}
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
}

export default function MeshViewer({ modelPath }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: isMobile ? "40vh" : "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          touchAction: "none",
        }}
        camera={{
          position: isMobile ? [2.2, 0.8, 2.2] : [3.5, 1.3, 3.5],
          fov: isMobile ? 55 : 50,
          near: 0.1,
          far: 1000,
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Mesh
          modelPath={modelPath}
          position={isMobile ? [0, -1.5, 0] : [2, 0, 2]}
          scale={
            isMobile
              ? 2
              : window.innerWidth > 1200
              ? 1.1
              : window.innerWidth > 1000
              ? 0.95
              : 0.9
          }
          rotation={[0, -Math.PI / 4, 0]}
        />
      </Canvas>
    </div>
  );
}
