import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Model from './Model.js'
//camera={{  position: [0, 1000, 1000] }}


export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas >
      <pointLight position={[10, 10, 10]} />
      <group position={[0, -1, 0]} rotation={[0, -1.5, 0]}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        </group>
      </Canvas>
    </div>
  )
}
