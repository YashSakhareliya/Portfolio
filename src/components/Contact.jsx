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
        </div>
    </section>
  )
}

export default Contact
