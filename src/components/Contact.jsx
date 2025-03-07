import React, { useEffect, useState, useRef} from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';

const Contact = () => {
    const form = useRef()
    const isDarkMode =  useSelector((state) => state.theme.darkMode)

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [isSubmitted, setIsSubmitted] = useState(false);

      const handleChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // submit form
        emailjs
        .send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
            from_name: formState.name,
            to_name: "Yash Sakhareliya",
            from_email: formState.email,
            to_email: "sakhareliyayash@gmail.com", 
            message: formState.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormState({ name: '', email: '', subject: '', message: '' });
                // Reset success message after 3 seconds
                setTimeout(() => setIsSubmitted(false), 3000);
            }
        )
        .catch( (err) => {
            setIsSubmitting(false);
            alert("Ahh, something went wrong. Please try again.");
        })
        
    
        

      }
      
      
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
                    <form ref={form} onSubmit={handleSubmit} className='space-y-6'>
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


                            <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            >
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                // onChange={handleChange}
                                placeholder='Enter your Email'
                                required
                                className={`w-full px-4 py-2 rounded-lg border ${
                                isDarkMode 
                                    ? 'border-dark-bg-tertiary bg-dark-bg-tertiary focus:ring-web3-blue-glow' 
                                    : 'border-gray-300 bg-white focus:ring-blue-500'
                                } focus:ring-2 focus:border-transparent`}
                            />
                            </motion.div>
                        </div>

                            <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            >
                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Subject
                            </label>
                            <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            // onChange={handleChange}
                            placeholder='What is the subject?'
                            required
                            className={`w-full px-4 py-2 rounded-lg border ${
                                isDarkMode 
                                ? 'border-dark-bg-tertiary bg-dark-bg-tertiary focus:ring-web3-blue-glow' 
                                : 'border-gray-300 bg-white focus:ring-blue-500'
                            } focus:ring-2 focus:border-transparent`}
                            />
                            </motion.div>

                            <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            >
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            // onChange={handleChange}
                            required
                            placeholder='Enter your message'
                            rows={4}
                            className={`w-full px-4 py-2 rounded-lg border ${
                                isDarkMode 
                                ? 'border-dark-bg-tertiary bg-dark-bg-tertiary focus:ring-web3-blue-glow' 
                                : 'border-gray-300 bg-white focus:ring-blue-500'
                            } focus:ring-2 focus:border-transparent`}
                            />
                            </motion.div>

                            <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-4"
                            >
                            <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={isSubmitting}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                                isDarkMode 
                                ? 'bg-web3-gradient shadow-web3' 
                                : 'bg-blue-600 hover:bg-blue-700'
                            } text-white font-medium 
                                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                            {isSubmitting ? (
                                <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Sending...
                                </>
                            ) : (
                                <>
                                <Send className="w-5 h-5" />
                                Send Message
                                </>
                            )}
                            </motion.button>
                                {isSubmitted && (
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex items-center gap-2 ${
                                    isDarkMode ? 'text-green-400' : 'text-green-600'
                                    }`}
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    Message sent successfully!
                                </motion.span>
                                )}
                            </motion.div>
                    </form>

                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Contact
