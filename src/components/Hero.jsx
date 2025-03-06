import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../stores/themeSlice';
import { motion } from 'framer-motion';
import { Moon, Sun, ArrowDown, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import Typed from 'typed.js';

const socialIcons = [
    {
    icon: <Github className="w-5 h-5" />,
    url: 'https://github.com/Yashsakhareliya',
    },
    {
    icon: <Linkedin className="w-5 h-5" />,
    url: 'https://www.linkedin.com/in/yash-sakhareliya/',
    },
    {
    icon: <Twitter className="w-5 h-5" />,
    url: 'https://x.com/SakhareliyaYash',
    },
]

const Hero = () => {
    const isDarkMode = useSelector((state) => state.theme.darkMode)
    const dispatch = useDispatch()

    const el = useRef(null);

    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings :  ['Full Stack Developer', 'AI Enthusiast', 'Problem Solver'],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true,
            backDelay: 1000,
            startDelay: 1000,
            showCursor: true,
        })

        return () => typed.destroy();
    },[])

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

        <div className='container mx-auto px-4 lg:pt-32 pb-20 pt-24'>
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

                    {/* running text */}
                    <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-2xl mb-6"
                    >
                        I'm a{' '}
                        <span
                            ref={el}
                            className={isDarkMode ? 'text-web3-blue-glow' : 'text-blue-600'}
                        ></span>
                    </motion.h2>

                    {/* text hero */}
                    <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className={`text-lg mb-8 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    } max-w-lg`}
                    >
                    Crafting digital experiences with code and creativity.
                    Specializing in modern web applications, AI solutions, and
                    interactive user interfaces.
                    </motion.p>
                    {/* hero button */}
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-wrap gap-4"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-8 py-3 rounded-full font-medium ${
                            isDarkMode
                                ? 'bg-web3-gradient'
                                : 'bg-gradient-to-r from-blue-600 to-purple-600'
                            } text-white shadow-lg ${
                            isDarkMode ? 'shadow-web3-lg' : 'shadow-blue-500/20'
                            }`}
                        >
                            Explore My Work
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-8 py-3 rounded-full font-medium ${
                            isDarkMode
                                ? 'bg-dark-bg-secondary border-dark-bg-tertiary'
                                : 'bg-white border-gray-200'
                            } border shadow-md`}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>

                </motion.div>

                {/* right content */}

                <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="lg:w-1/2 mt-12 lg:mt-0 z-10 hidden lg:block"
                >
                    <div className="relative w-full h-[500px] flex items-center justify-center">
                    {/* Abstract animated shapes */}
                    <div className="relative w-full h-full">
                        {/* Large circle */}
                        <motion.div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full ${
                            isDarkMode ? 'bg-dark-bg-tertiary/30' : 'bg-blue-100/30'
                        }`}
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        />

                        {/* Medium circle */}
                        <motion.div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full ${
                            isDarkMode ? 'bg-web3-blue-dark/20' : 'bg-purple-100/30'
                        }`}
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, -5, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 0.5,
                        }}
                        />

                        {/* Small circle */}
                        <motion.div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full ${
                            isDarkMode ? 'bg-web3-purple-dark/20' : 'bg-blue-200/30'
                        }`}
                        animate={{
                            scale: [1, 1.15, 1],
                            rotate: [0, 10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 1,
                        }}
                        />

                        {/* Floating elements */}
                        {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-${4 + i * 2} h-${4 + i * 2} ${
                            i % 3 === 0
                                ? isDarkMode
                                ? 'bg-web3-blue-glow/30'
                                : 'bg-blue-400/30'
                                : i % 3 === 1
                                ? isDarkMode
                                ? 'bg-web3-purple-glow/30'
                                : 'bg-purple-400/30'
                                : isDarkMode
                                ? 'bg-web3-teal-glow/30'
                                : 'bg-teal-400/30'
                            } rounded-lg`}
                            style={{
                            top: `${30 + Math.random() * 40}%`,
                            left: `${30 + Math.random() * 40}%`,
                            }}
                            animate={{
                            y: [0, -20, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            rotate: [0, 360],
                            }}
                            transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.5,
                            }}
                        />
                        ))}

                        {/* Code symbols */}
                        {['<Start />', '<>', '{ }', '( )', '//', '[]', '""', ' Function success() { return "Achieve your dreams!" }'].map((symbol, i) => (
                        <motion.div
                            key={i}
                            className={`absolute text-xl font-mono ${
                            isDarkMode
                                ? 'text-web3-blue-light/70'
                                : 'text-blue-600/70'
                            }`}
                            style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                            }}
                            animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.7,
                            }}
                        >
                            {symbol}
                        </motion.div>
                        ))}

                        {/* Central glowing orb */}
                        <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
                        style={{
                            background: isDarkMode
                            ? 'radial-gradient(circle, rgba(96, 165, 250, 0.8) 0%, rgba(59, 130, 246, 0.3) 70%, rgba(37, 99, 235, 0) 100%)'
                            : 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.3) 70%, rgba(29, 78, 216, 0) 100%)',
                            boxShadow: isDarkMode
                            ? '0 0 30px rgba(96, 165, 250, 0.5)'
                            : '0 0 30px rgba(59, 130, 246, 0.5)',
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        />
                    </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-8 hidden left-1/2  transform -translate-x-1/2 sm:flex flex-col items-center"
            >
                <p
                    className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    } mb-2`}
                >
                    Scroll to explore
                </p>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <a href="#about">
                    <ArrowDown
                        className={`w-5 h-5 ${
                        isDarkMode ? 'text-web3-blue-glow' : 'text-blue-600'
                        }`}
                    />
                    </a>
                </motion.div>
            </motion.div>
        </div>
        </div>
    )
}

export default Hero
