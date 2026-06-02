"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MedalScene() {
  const ref = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.6;
  });

  return (
    <group ref={ref}>
      <mesh>
        <cylinderGeometry args={[1.3, 1.3, 0.2, 80]} />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} />
      </mesh>

      <mesh position={[0, 0, 0.11]}>
        <torusGeometry args={[0.85, 0.06, 32, 120]} />
        <meshStandardMaterial color="#ffd86b" metalness={1} roughness={0.25} />
      </mesh>

      <mesh position={[0, 0, 0.13]}>
        <circleGeometry args={[0.55, 64]} />
        <meshStandardMaterial color="#fff2b0" metalness={0.9} roughness={0.25} />
      </mesh>

      <mesh position={[0, 0, -0.1]}>
        <cylinderGeometry args={[1.35, 1.35, 0.05, 80]} />
        <meshStandardMaterial
          color="#b8860b"
          emissive="#ffcc55"
          emissiveIntensity={0.35}
          metalness={1}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export default function MedalCanvas() {
  return (
    <div className="h-[360px] w-[360px]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={2} />
        <pointLight position={[-3, -3, -3]} intensity={1} />
        <Environment preset="sunset" />

        <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
          <MedalScene />
        </Float>
      </Canvas>
    </div>
  );
}