'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ClassifiedSphere() {
  const pointsRef = useRef<THREE.Points>(null)
  const ring2Ref  = useRef<THREE.Mesh>(null)

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.12
      pointsRef.current.rotation.x += delta * 0.04
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.25
    }
  })

  return (
    <group>
      {/* Dense point-cloud sphere */}
      <points ref={pointsRef}>
        <sphereGeometry args={[2.4, 96, 96]} />
        <pointsMaterial color="#00ff88" size={0.025} transparent opacity={0.55} />
      </points>

      {/* Scanning ring — tilted polar, cyan */}
      <mesh ref={ring2Ref} rotation={[0.4, 0, 0]}>
        <torusGeometry args={[3.1, 0.01, 8, 120]} />
        <meshStandardMaterial
          color="#00d4ff"
          transparent
          opacity={0.5}
          emissive="#00d4ff"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  )
}
