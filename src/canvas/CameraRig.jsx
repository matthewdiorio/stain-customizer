import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';
import { useSelector } from 'react-redux';

const CameraRig = ({ children }) => {
  const group = useRef();
  const isOnHomePage = useSelector((state) => state.navigation.isOnHomePage);

  const [{ position, rotation }, set] = useSpring(() => ({
    position: [-0.4, 0, 2],
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 120, friction: 26 }
  }));

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    let targetPosition = [2, 0, 3];
    if (isOnHomePage) {
      if (isBreakpoint) targetPosition = [0, 0, 3];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 4];
    }

    set({ position: targetPosition });

    set({
      rotation: [state.pointer.y / 10, -state.pointer.x / 5, 0]
    });
  });

  return (
    <a.group ref={group} position={position} rotation={rotation}>
      {children}
    </a.group>
  );
};

export default CameraRig;
