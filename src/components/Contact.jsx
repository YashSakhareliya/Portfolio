import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';

const Contact = () => {
    const isDarkMode =  useSelector((state) => state.theme.darkMode)

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <section className={`py-20 px-4 ${ isDarkMode ? 'bg-dark-bg-primary text-gray-50' : ' bg-gray-50 text-gray-900'}`}>
        <div className='container mx-auto'>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            >
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80">
                Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* contact information */}
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
                >
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                        <div className={`p-3 ${
                            isDarkMode ? 'bg-dark-bg-tertiary' : 'bg-blue-100'
                        } rounded-lg`}>
                            <Mail className={`w-6 h-6 ${
                            isDarkMode ? 'text-web3-blue-light' : 'text-blue-600'
                            }`} />
                        </div>
                        <div>
                            <p className="font-medium">Email</p>
                            <a href="mailto:contact@example.com" className={`${
                            isDarkMode ? 'text-web3-blue-light hover:text-web3-blue-glow' : 'text-blue-600 hover:underline'
                            }`}>
                            sakhareliyayash.com
                            </a>
                        </div>
                        </div>
                        <div className="flex items-center gap-4">
                        <div className={`p-3 ${
                            isDarkMode ? 'bg-dark-bg-tertiary' : 'bg-blue-100'
                        } rounded-lg`}>
                            <Phone className={`w-6 h-6 ${
                            isDarkMode ? 'text-web3-blue-light' : 'text-blue-600'
                            }`} />
                        </div>
                        <div>
                            <p className="font-medium">Phone</p>
                            <a href="tel:+1234567890" className={`${
                            isDarkMode ? 'text-web3-blue-light hover:text-web3-blue-glow' : 'text-blue-600 hover:underline'
                            }`}>
                            +91 9106968615
                            </a>
                        </div>
                        </div>
                        <div className="flex items-center gap-4">
                        <div className={`p-3 ${
                            isDarkMode ? 'bg-dark-bg-tertiary' : 'bg-blue-100'
                        } rounded-lg`}>
                            <MapPin className={`w-6 h-6 ${
                            isDarkMode ? 'text-web3-blue-light' : 'text-blue-600'
                            }`} />
                        </div>
                        <div>
                            <p className="font-medium">Location</p>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Vadodara, Gujarat</p>
                        </div>
                        </div>
                    </div>
                </div>

                            {/* Contact Icons */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                    <div className="flex gap-4">
                        <motion.a
                        href="https://github.com/yashsakhareliya"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 ${
                            isDarkMode ? 'bg-dark-bg-tertiary hover:bg-dark-bg-secondary' : 'bg-gray-100 hover:bg-gray-200'
                        } rounded-lg transition-colors`}
                        >
                        <Github className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                        href="https://www.linkedin.com/in/yash-sakhareliya/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 ${
                            isDarkMode ? 'bg-dark-bg-tertiary hover:bg-dark-bg-secondary' : 'bg-gray-100 hover:bg-gray-200'
                        } rounded-lg transition-colors`}
                        >
                        <Linkedin className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                        href="https://x.com/SakhareliyaYash"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 ${
                            isDarkMode ? 'bg-dark-bg-tertiary hover:bg-dark-bg-secondary' : 'bg-gray-100 hover:bg-gray-200'
                        } rounded-lg transition-colors`}
                        >
                        <Twitter className="w-6 h-6" />
                        </motion.a>
                    </div>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                >
                {/* Contact Form */}
                    <form className='space-y-6'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                            <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            >
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                // onChange={}
                                required
                                placeholder='Enter your Good Name'
                                className={`w-full px-4 py-2 rounded-lg border ${
                                isDarkMode 
                                    ? 'border-dark-bg-tertiary bg-dark-bg-tertiary focus:ring-web3-blue-glow' 
                                    : 'border-gray-300 bg-white focus:ring-blue-500'
                                } focus:ring-2 focus:border-transparent`}
                            />
                            </motion.div>
                        </div>
                    </form>

                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Contact
