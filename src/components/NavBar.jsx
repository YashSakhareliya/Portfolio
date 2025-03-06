import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Zap } from 'lucide-react'
import { MotionNavLink } from './motion'



const Navbar = () => {

    const dispatch = useDispatch()
    const isDarkMode = useSelector((state) => state.theme.darkMode)

    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home');

  return (
    <>
    {/* desktop navbar */}
    <motion.nav
    initial={{y: -100}}
    animate={{y: 0}}
    transition={{type: 'spring', stiffness: 300, damping: 30}}
    className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ?
        isDarkMode ?
                'backdrop-blur-xl bg-dark-bg-primary/80 shadow-lg shadow-black/20'
                : 'backdrop-blur-xl bg-white/80 shadow-lg'
            : 'bg-transparent'
    }`}
    >
        <div className='container mx-auto flex justify-between items-center'>
            {/* logo */}
            <MotionNavLink
            to='/home'
            className="flex items-center gap-2 text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            <motion.div
              className={`relative w-10 h-10 flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-web3-gradient shadow-web3' 
                  : 'bg-gradient-to-br from-blue-500 to-purple-600'
              } rounded-xl`}
              whileHover={{ rotate: 5 }}
            >
              <Zap className="w-6 h-6 text-white" />
              <motion.div
                className={`absolute inset-0 ${
                  isDarkMode 
                    ? 'bg-web3-gradient' 
                    : 'bg-gradient-to-br from-blue-500 to-purple-600'
                } rounded-xl opacity-40`}
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

            <span className={`${
              isDarkMode 
                ? 'bg-web3-gradient' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600'
              } bg-clip-text text-transparent`}>
              Yash
            </span>
            </MotionNavLink>

            {/* Desktop Menu */}
            <div className='hidden md:flex items-center'>
              <motion.div
              className={`relative flex items-center ${ isDarkMode ? 'bg-dark-bg-secondary/30' : 'bg-white/10'} backdrop-blur-lg rounded-full p-1.5 mr-4`}
              layout
              >

              </motion.div>

            </div>
        </div>
    </motion.nav>
    </>
  )
}

export default Navbar
