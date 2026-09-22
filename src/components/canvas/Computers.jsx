import { Suspense,useEffect,useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
const Computers = (ismobile) => {
  // import the model
    const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    // for uploading Gltf, start by creating light
    <mesh>
      <hemisphereLight intensity={3.25}
       groundColor='black'/>
      {/* light up the desk and computer */}
      <pointLight intensity={3.25}/>
      <spotLight
        position={[-50,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapsize={1024}/>
      <primitive
        object={computer.scene}
        scale={ismobile ? 0.7 : 0.75}
         position={ismobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        // position={[-8, -5.5, -2.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas=()=>{
  const [ismobile, setIsmobile]=useState(false);

  useEffect(()=>{
    const mediaQuery=window.matchMedia('(max-width:500px)');


    const  handleMediaQueryChange=(event)=>{setIsmobile(event.matches);

    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }

  },[])
  // upload the 3d module to the page to the dash
  return(
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20,3,5], fov:25 }}
      gl={{ preserveDrawingBuffer: true }}
      >

        {/* allows us to have a loader while our model is loading */}
      <Suspense fallback={ <CanvasLoader/> }>
      <OrbitControls
      enableZoom={ false }
      // enable us to turn the image but not all the way arounf
      maxPolarAngle={ Math.PI / 2 }
      minPolarAngle={ Math.PI / 2 }/>
      <Computers ismobile={ismobile}/>
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}


export default ComputersCanvas;