import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../stores/themeSlice';
import { motion } from 'framer-motion';
import { Moon, Sun, ArrowDown, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';


const Hero = () => {
    const isDarkMode = useSelector((state) => state.theme.darkMode)
    const dispatch = useDispatch()

    return (
        <div
        className={`min-h-screen relative overflow-hidden ${isDarkMode 
            ? 'bg-dark-bg-primary text-white' 
            : 'bg-gray-50 text-gray-900'}
            `}
        >
        {/* Background gradient image */}
        <div
        className={`absolute inset-0 ${
          isDarkMode
            ? 'bg-dark-radial'
            : 'bg-gradient-to-br from-blue-50/30 to-purple-50/30'
        }`}
        />  

        {/* background particals */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            {[...Array(30)].map((_,i) => (
            <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${isDarkMode 
                    ? 'bg-web3-blue-glow/30' : 'bg-dark-bg-tertiary'
                }`}
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                }}
                animate={{
                    y: [0, Math.random() * -100 - 50],
                    x: [0, (Math.random() - 0.5) * 50],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0.5],
                }}
                transition={{
                    duration: 5 + Math.random() * 10,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                }}
            />  
            ))}

        </div>
        </div>
    )
}

export default Hero
