'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ClassifiedSphere from './ClassifiedSphere'

export default function ClassifiedSphereScene() {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.05} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-8, -8, -8]} intensity={2} color="#ff3366" />
        <pointLight position={[0, 0, 10]} intensity={0.4} color="#00d4ff" />
        <Suspense fallback={null}>
          <ClassifiedSphere />
        </Suspense>
      </Canvas>
    </div>
  )
}
