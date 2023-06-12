import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { ColorTabs, TextureTabs  } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion';
import { Tab } from '../components';

const Customizer = () => {

  const isOnHomePage = useSelector((state) => state.navigation.isOnHomePage);
  const dispatch = useDispatch();


  return (
    <AnimatePresence>
      {!isOnHomePage && (
        <>
          <motion.div
            className="absolute z-10 top-5 left-5"
            {...fadeAnimation}
          >
          <h1 className="text-black text-2xl">Visualizer</h1>


          </motion.div>

          <motion.div
            className='absolute z-10 right-5 top-0 bottom-0 w-full flex flex-col justify-center items-end flex-wrap gap-4'
            {...slideAnimation('up')}
          >
            {TextureTabs.map((tab) => (
              <Tab
                key={tab.name + "_texture"}
                tab={tab}
                isTextureTab
                handleClick={() => { }}
              />
            ))}
          </motion.div>
          <motion.div
            className='absolute z-10 bottom-5 right-0 left-0 w-full flex justify-center items-center flex-wrap gap-4'
            {...slideAnimation('up')}
          >
            {ColorTabs.map((tab) => (
              <Tab
                key={tab.name + "_color"}
                tab={tab}
                isColorTab
             
                handleClick={() => { }}
              />
            ))}
          </motion.div>

        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer