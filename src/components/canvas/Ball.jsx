import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal,Float,OrbitControls,Preload,useTexture, Html } from '@react-three/drei'
import CanvasLoader from '../Loader'
const Ball = (props) => {
  const [decal]=useTexture([props.imgUrl]);
  return (
    <Float speed={4.5} rotationIntensity={3}
    floatIntensity={3}>
      <ambientLight intensity={3}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial 
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          floatingshading
          />
          <Decal position={[0,0,1]}
          rotation={[2 * Math.PI, 0, 6.3]}
          floatshading
          map={decal}
          />

      </mesh>

      
    </Float>
  )
}

const BallCanvas=({icon, name})=>{
  return (
    <Canvas
      frameloop='always'
      gl={{preserveDrawingBuffer:true}}
        dpr={[1,2]}>
        
        <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enablezoom={false}
          />
          <Ball imgUrl={icon} />

        </Suspense>
        <Preload all/>
      </Canvas>
  )
}
export default BallCanvas;