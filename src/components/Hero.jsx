import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../stores/themeSlice';
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
            {[...Array(20)].map((_,i) => {
                
            })}

        </div>
        </div>
    )
}

export default Hero
