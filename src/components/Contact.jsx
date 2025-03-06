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
    <div>
      
    </div>
  )
}

export default Contact
