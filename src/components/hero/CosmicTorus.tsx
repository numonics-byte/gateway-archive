'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Props {
  speed: number;
  isWireframe: boolean;
}

export default function CosmicTorus({ speed, isWireframe }: Props) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.z += delta * speed * 0.2;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * speed;
      pointsRef.current.rotation.z += delta * speed * 0.2;
    }
  });

  return (
    <group>
      {isWireframe ? (
        <mesh ref={meshRef}>
          <torusGeometry args={[4, 1.2, 48, 128]} />
          <meshStandardMaterial
            color="#00ff88"
            wireframe
            transparent
            opacity={0.55}
          />
        </mesh>
      ) : (
        <points ref={pointsRef}>
          <torusGeometry args={[4, 1.2, 64, 200]} />
          <pointsMaterial
            color="#00ff88"
            size={0.04}
            transparent
            opacity={0.75}
          />
        </points>
      )}
    </group>
  );
}
