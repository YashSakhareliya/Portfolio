import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Yash } from '../assets';

const Preloader = ({ onComplete}) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const isDarkMode = useSelector((state) => state.theme.darkMode)


    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
          setProgress(prev => {
            const newProgress = prev + Math.random() * 15;
            return newProgress >= 100 ? 100 : newProgress;
          });
        }, 200);
    
        return () => clearInterval(interval);
    }, []);
    
    useEffect(() => {
        if (progress === 100) {
          // Add a small delay before completing the animation
          const timeout = setTimeout(() => {
            setIsComplete(true);
            // Add another delay before calling onComplete to allow exit animation to play
            setTimeout(onComplete, 1000);
          }, 500);
          
          return () => clearTimeout(timeout);
        }
    }, [progress, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
            isDarkMode ? 'bg-dark-bg-primary' : 'bg-white'
          }`}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] }
          }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo animation */}
            <motion.div
              className={`relative w-24 h-24 flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-web3-gradient shadow-web3' 
                  : 'bg-gradient-to-br from-blue-500 to-purple-600'
              } rounded-2xl mb-8`}
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ 
                scale: [0.8, 1.1, 1],
                rotate: [-5, 5, 0]
              }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut"
              }}
            >
              <Yash className="w-12 h-12 text-white" />
              
              {/* Pulse effect */}
              <motion.div
                className={`absolute inset-0 ${
                  isDarkMode 
                    ? 'bg-web3-gradient' 
                    : 'bg-gradient-to-br from-blue-500 to-purple-600'
                } rounded-2xl opacity-60`}
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </motion.div>
            
            {/* Name reveal */}
            <motion.div
              className="overflow-hidden h-12 mb-8"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                ease: [0.65, 0, 0.35, 1]
              }}
            >
              <motion.h1 
                className={`text-3xl font-bold whitespace-nowrap ${
                  isDarkMode 
                    ? 'bg-web3-gradient' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600'
                } bg-clip-text text-transparent`}
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Yash Sakhareliya
              </motion.h1>
            </motion.div>
            
            {/* Progress bar */}
            <div className="w-64 h-1 bg-gray-200 dark:bg-dark-bg-tertiary rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${
                  isDarkMode 
                    ? 'bg-web3-gradient' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Loading text */}
            <motion.p
              className={`mt-4 text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {progress < 100 ? 'Loading...' : 'Welcome!'}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
