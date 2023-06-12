import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStainColor } from '../slices/stainSlice';
import { setTexture } from '../slices/textureSlice'; // Import setTexture action from textureSlice

const Tab = ({ tab, isActiveTab, isColorTab }) => {
  const dispatch = useDispatch();
  const [showTooltip, setShowTooltip] = useState(false);
  console.log(tab.name)
  const handleClick = () => {
    console.log('clicked')
    if (isColorTab) {
      dispatch(setStainColor({ color: tab.color, name: tab.name }));
    } else {
      dispatch(setTexture({ name: tab.name, texture: tab.texture }));
    }
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        className={`tab rounded-full h-12 w-12`}
        style={isColorTab ? { backgroundColor: tab.color } : { backgroundImage: `url(${tab.texture})` }}
        onClick={handleClick}
      ></div>
      {showTooltip && (
        <div className = {`tooltip bg-white shadow text-black px-2 py-1 rounded absolute top-0 left-0 ${isColorTab ? "-mt-10" : "-ml-16 mt-2"} left-1/2 transform -translate-x-1/2`}>
      {tab.name}
    </div>
  )
}
    </div >
  );
};

export default Tab;
