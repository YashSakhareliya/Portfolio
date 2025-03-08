import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {

    const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <footer className={`py-12 px-4 ${isDarkMode ? 'bg-dark-bg-primary border-t border-dark-bg-tertiary text-gray-50' : 'bg-gray-100 border-t border-gray-200'}`}>
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center mb-2'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-6 md:mb-0"
            >
                <h3 className="text-2xl font-bold mb-2">Yash Sakhareliya</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Full Stack Developer & AI Enthusiast</p>
            </motion.div>

            {/* links */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
            >
                <motion.a
                href="https://github.com/Yashsakhareliya"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 ${
                    isDarkMode ? 'bg-dark-bg-secondary hover:shadow-web3' : 'bg-white hover:shadow-lg'
                } rounded-full shadow-md transition-all`}
                >
                <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                href="https://www.linkedin.com/in/yash-sakhareliya/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 ${
                    isDarkMode ? 'bg-dark-bg-secondary hover:shadow-web3' : 'bg-white hover:shadow-lg'
                } rounded-full shadow-md transition-all`}
                >
                <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                href="https://x.com/SakhareliyaYash"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 ${
                    isDarkMode ? 'bg-dark-bg-secondary hover:shadow-web3' : 'bg-white hover:shadow-lg'
                } rounded-full shadow-md transition-all`}
                >
                <Twitter className="w-5 h-5" />
                </motion.a>
            </motion.div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
