import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import { useSelector } from 'react-redux';

import Shelf from './Shelf';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  const color = useSelector((state) => state.stain.color);
  const isOnHomePage = useSelector((state) => state.navigation.isOnHomePage);

  return (
    <>
      {!isOnHomePage && (
        <Canvas
          shadows
          className="w-full max-w-full h-full transition-all ease-in"
        >
          <ambientLight intensity={0.5} />
          <Environment preset="apartment" />

          <CameraRig>
            <Center>
              <Shelf />
            </Center>
          </CameraRig>
        </Canvas>
      )}

    </>

  );
};

export default CanvasModel;
