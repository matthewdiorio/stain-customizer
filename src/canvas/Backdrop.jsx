import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();
  const opacityRef = useRef(1); // Initial opacity value

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const opacity = Math.max(1 - time * 0.1, 0); // Adjust the fading speed by changing the multiplier (0.1)

    opacityRef.current = opacity;
    shadows.current.opacity = opacity;
  });

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={0.5} // Adjust the intensity value for softer shadows
        ambient={0.9} // Adjust the ambient value for less dark shadows
        position={[10, 10, -10]} // Position the light at the top right
      />
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.14} // Adjust the intensity value for softer shadows
        ambient={1} // Adjust the ambient value for less dark shadows
        position={[1 , 10, -9]} // Position the light at the top right
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
