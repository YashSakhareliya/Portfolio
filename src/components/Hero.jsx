import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../stores/themeSlice';
import { motion } from 'framer-motion';
import { Moon, Sun, ArrowDown, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';

const socialIcons = [
    {
    icon: <Github className="w-5 h-5" />,
    url: 'https://github.com',
    },
    {
    icon: <Linkedin className="w-5 h-5" />,
    url: 'https://linkedin.com',
    },
    {
    icon: <Twitter className="w-5 h-5" />,
    url: 'https://twitter.com',
    },
]

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

        <div className='container mx-auto px-4 pt-32 pb-20'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                {/* Left content */}
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 className="lg:w-1/2 z-10"
                >
                    {/* icons */}
                    <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex gap-4 mb-8"
                    >
                        {socialIcons.map((social, index) => (
                        <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 ${
                            isDarkMode
                            ? 'bg-dark-bg-secondary/80 hover:bg-dark-bg-tertiary/80'
                            : 'bg-white/80 hover:bg-gray-100/80'
                        } rounded-full shadow-md hover:shadow-lg transition-all`}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        >
                        {social.icon}
                        </motion.a>
                        ))}
                    </motion.div>

                    {/* portfolio text */}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className={`inline-block px-4 py-1 rounded-full ${
                            isDarkMode
                            ? 'bg-dark-bg-secondary text-web3-blue-glow'
                            : 'bg-blue-100 text-blue-600'
                        } text-sm font-medium mb-4`}
                    >
                        Welcome to my portfolio
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-5xl md:text-6xl font-bold mb-4"
                        >
                        Hi, I'm{' '}
                        <span
                            className={`${
                            isDarkMode
                                ? 'bg-web3-gradient'
                                : 'bg-gradient-to-r from-blue-600 to-purple-600'
                            } bg-clip-text text-transparent`}
                        >
                            Yash Sakhareliya
                        </span>
                    </motion.h1>

                    {/* Available for Work badge */}
                    <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="mb-4"
                    >
                        <motion.div
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
                            isDarkMode
                                ? 'bg-green-900/30 text-green-400 border border-green-800/50'
                                : 'bg-green-100 text-green-700 border border-green-200'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            animate={{
                            boxShadow: [
                                isDarkMode
                                ? '0 0 0 rgba(16, 185, 129, 0)'
                                : '0 0 0 rgba(16, 185, 129, 0)',
                                isDarkMode
                                ? '0 0 8px rgba(16, 185, 129, 0.5)'
                                : '0 0 8px rgba(16, 185, 129, 0.3)',
                                isDarkMode
                                ? '0 0 0 rgba(16, 185, 129, 0)'
                                : '0 0 0 rgba(16, 185, 129, 0)',
                            ],
                            }}
                            transition={{
                            repeat: Infinity,
                            duration: 2,
                            }}
                        >
                            <CheckCircle className="w-4 h-4" />
                            <span>Available for Work</span>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
        </div>
    )
}

export default Hero
