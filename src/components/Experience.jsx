import React from 'react'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';


const experiences = [
  {
    id: 1,
    type: 'education',
    title:  "Bachelor of Information Technology",
    company: 'Parul University',
    location: 'Vadodara, Gujarat',
    date: '2022 - Present',
    description: "Pursuing a Bachelor's degree in Information Technology. Learning software development, databases, and artificial intelligence.",
    skills: ["Programming", "Software Development", "Machine Learning"],
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    id: 2,
    type: "education",
    title: "Higher Secondary Education (12th)",
    school: "SSVF - Fareni",
    location: "Gujarat - Dhoraji",
    date: "2020 - 2022",
    description:
      "Completed higher secondary education with a focus on Science. Developed a strong foundation in Mathematics, Physics, and Computer Science.",
    skills: ["Mathematics", "Physics", "Computer"], 
    icon: <GraduationCap className="w-6 h-6" />,
  }
];

const Experience = () => {

  const isDarkMode = useSelector((state) => state.theme.darkMode)
  return (
    <section className={`py-20 px-4 ${isDarkMode ? 'bg-dark-bg-primary text-gray-50' : 'bg-white'}`}>
      <div className='container mx-auto'>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl font-bold mb-6">Experience & Education</h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80">
              My professional journey and educational background in technology and innovation.
            </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
