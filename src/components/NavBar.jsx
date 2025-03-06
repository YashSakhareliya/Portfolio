import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, X, Home, User, Briefcase, Code, FileText, Mail, Moon, Sun, Zap} from 'lucide-react'
import { MotionNavLink } from './motion'
import { toggleTheme } from '../stores/themeSlice'

const navItems = [
  { name: "Home", icon: <Home className="w-5 h-5" />, href: "#home" },
  { name: "About", icon: <User className="w-5 h-5" />, href: "#about" },
  { name: "Projects", icon: <Code className="w-5 h-5" />, href: "#projects" },
  { name: "Experience", icon: <Briefcase className="w-5 h-5" />, href: "#experience" },
  { name: "Blog", icon: <FileText className="w-5 h-5" />, href: "#blog" },
  { name: "Contact", icon: <Mail className="w-5 h-5" />, href: "#contact" },
];

const Navbar = () => {

    const dispatch = useDispatch()
    const isDarkMode = useSelector((state) => state.theme.darkMode)

    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggleTheme  = () => {
      dispatch(toggleTheme());
    }

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
            to='#home'
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
                {navItems.map((item) => {
                  const isActive = activeSection === item.name.toLowerCase();
                  return (
                    <motion.a
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-colors z-10 ${
                      isActive 
                        ? 'text-white' 
                        : isDarkMode 
                          ? 'text-gray-300 hover:text-white' 
                          : 'text-gray-700 hover:text-gray-900'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={()=>{
                      setActiveSection(item.name.toLowerCase());
                    }}
                    >
                      {/* if it is active */}
                    {isActive && (
                      <motion.div
                        className={`absolute inset-0 ${
                          isDarkMode 
                            ? 'bg-web3-gradient' 
                            : 'bg-gradient-to-r from-blue-600 to-purple-600'
                        } rounded-full -z-10`}
                        layoutId="navIndicator"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    {item.icon}
                    {item.name}
                    </motion.a>
                  );
                })}

              </motion.div>

              {/* Theme Toggle */}
              <motion.button
              onClick={handleToggleTheme}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2.5 rounded-full ${
                isDarkMode 
                  ? 'bg-dark-bg-secondary/30 hover:bg-dark-bg-secondary/50' 
                  : 'bg-white/10 hover:bg-white/20'
              } backdrop-blur-lg`}
              >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
              </motion.button>
            </div>

            {/* mobile menu */}
            <div className="flex items-center gap-4 md:hidden">
            <motion.button
              onClick={handleToggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-dark-bg-secondary/30' 
                  : 'bg-white/10'
              } backdrop-blur-lg`}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </motion.button>
            
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-dark-bg-secondary/30' 
                  : 'bg-white/10'
              } backdrop-blur-lg`}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
    </motion.nav>

    {/* mobile menu when toggle */}
    <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`absolute right-0 top-0 bottom-0 w-3/4 max-w-sm ${
                isDarkMode 
                  ? 'bg-dark-bg-primary text-white' 
                  : 'bg-white'
              } shadow-xl p-6`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Menu</h2>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full ${
                    isDarkMode 
                      ? 'bg-dark-bg-secondary' 
                      : 'bg-gray-100'
                  }`}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.name.toLowerCase();
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                        isActive 
                          ? isDarkMode 
                            ? 'bg-web3-gradient text-white' 
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : isDarkMode 
                            ? 'hover:bg-dark-bg-secondary text-white' 
                            : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </motion.a>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 left-6 right-6"
              >
                <div className={`p-4 rounded-xl ${
                  isDarkMode 
                    ? 'bg-dark-bg-secondary/50' 
                    : 'bg-gradient-to-r from-blue-50 to-purple-50'
                }`}>
                  <p className={`text-sm ${
                    isDarkMode 
                      ? 'text-gray-300' 
                      : 'text-gray-600'
                  } mb-3`}>
                    Ready to start a project?
                  </p>
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full py-2.5 text-center text-white font-medium ${
                      isDarkMode 
                        ? 'bg-web3-gradient' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600'
                    } rounded-lg hover:opacity-90 transition-opacity`}
                  >
                    Get in Touch
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
