// src/components/R3FBackground.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function R3FBackground() {
  const count = 5000;
  const positions = new Float32Array(count * 3).map(() => THREE.MathUtils.randFloatSpread(10));

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <OrbitControls enableZoom={false} enablePan={false} />
      <Points positions={positions}>
        <PointMaterial
          transparent
          color="#ffff55"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </Canvas>
  );
}
