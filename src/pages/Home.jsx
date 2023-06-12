import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import { CustomButton } from '../components';
import { setOnHomePage } from '../slices/navigationSlice'; 

const Home = () => {
    const isOnHomePage = useSelector((state) => state.navigation.isOnHomePage);
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(setOnHomePage(false)); 
    };
    return (
        <AnimatePresence>
            {isOnHomePage && (
                <motion.section className="w-fit xl:h-full flex xl:justify-between justify-start items-start flex-col xl:py-8 xl:px-36 sm:p-8 p-6 max-xl:gap-7 absolute left-1/2 top-1/2 !transform -translate-x-1/2 -translate-y-1/2 text-center z-10" {...slideAnimation('left')}>
                    <motion.div className="flex-1 xl:justify-center justify-start flex flex-col " {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='text-[3rem] font-black text-black'>
                                Stain Visualizer
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className="flex flex-col gap-10 items-center ">
                            <p className="max-w-md text-center mx-auto font-normal text-gray-600">
Built with React, Three.js, and Redux-Toolkit. Apply different wood textures and stain colors.</p>
                            <CustomButton 
                                type="filled"
                                title="Let's Start"
                                handleClick={handleButtonClick} 
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>

    )
}

export default Home