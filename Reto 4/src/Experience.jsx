import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Box from './myBox'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper, } from 'three'
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

export default function Experience() {
  const directionalLightRef = useRef();
  const hemisphereLightRef = useRef();
  const pointLightRef = useRef();
  const spotLightRef = useRef();
  const rectAreaLightRef = useRef();

  useHelper(directionalLightRef, DirectionalLightHelper, 1);
  useHelper(hemisphereLightRef, HemisphereLightHelper, 1);
  useHelper(pointLightRef, PointLightHelper, 0.5);
  useHelper(spotLightRef, SpotLightHelper, 'red');
  useHelper(rectAreaLightRef, RectAreaLightHelper, 'red');
  
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        {/* <directionalLight ref={directionalLightRef} position={[0, 5, -6]} intensity={10.5} castShadow/> */}
        {/* <hemisphereLight ref={hemisphereLightRef} intensity={4} position={[0, 4, 0]} castShadow color={"lightblue"}/> */}
        {/* <pointLight ref={pointLightRef} position={[1, 5, -3]} intensity={6} castShadow={true} shadowMap /> */}
        {/* <rectAreaLight ref={rectAreaLightRef} position={[0, 1, 6]} intensity={50} height={2} width={2} power={1000} /> */}
        <spotLight ref={spotLightRef} castShadow position={[0, 5, -6]} intensity={1.5} /> 
        {/* <ambientLight intensity={0.5} /> */}

        <Box/>
        <Floor/>
    </>
}