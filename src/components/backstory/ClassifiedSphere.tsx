'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ClassifiedSphere() {
  const pointsRef  = useRef<THREE.Points>(null)
  const wireRef    = useRef<THREE.Mesh>(null)
  const ring1Ref   = useRef<THREE.Mesh>(null)
  const ring2Ref   = useRef<THREE.Mesh>(null)

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.12
      pointsRef.current.rotation.x += delta * 0.04
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.08
      wireRef.current.rotation.z += delta * 0.03
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.35
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.25
    }
  })

  return (
    <group>
      {/* Dense point-cloud sphere — green, neural activity feel */}
      <points ref={pointsRef}>
        <sphereGeometry args={[2.4, 96, 96]} />
        <pointsMaterial color="#00ff88" size={0.025} transparent opacity={0.55} />
      </points>

      {/* Wireframe icosahedron overlay — red, classified/threat feel */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[2.8, 1]} />
        <meshStandardMaterial color="#ff3366" wireframe transparent opacity={0.18} />
      </mesh>

      {/* Scanning ring 1 — equatorial */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.1, 0.018, 8, 120]} />
        <meshStandardMaterial
          color="#ff3366"
          transparent
          opacity={0.8}
          emissive="#ff3366"
          emissiveIntensity={3}
        />
      </mesh>

      {/* Scanning ring 2 — tilted polar */}
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
