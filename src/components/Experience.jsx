import React from 'react'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { GraduationCap,  Calendar, MapPin, Briefcase, School } from 'lucide-react';


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
    location: "Dhoraji - Gujarat",
    date: "2020 - 2022",
    description:
      "Completed higher secondary education with a focus on Science. Developed a strong foundation in Mathematics, Physics, and Computer Science.",
    skills: ["Mathematics", "Physics", "Computer"], 
    icon: <School className="w-6 h-6" />,
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

        {/* Desktop timeline */}
        <div className='hidden md:block relative'>
          {/* Timeline line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${
            isDarkMode ? 'bg-dark-bg-tertiary' : 'bg-blue-200'
          }`} />

          <div className='space-y-16'> 
            {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className="w-1/2 px-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`${
                        isDarkMode ? 'bg-dark-bg-secondary' : 'bg-white'
                      } p-6 rounded-xl shadow-lg`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 ${
                          isDarkMode ? 'bg-dark-bg-tertiary' : 'bg-blue-100'
                        } rounded-lg`}>
                          {experience.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{experience.title}</h3>
                          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{experience.company}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Calendar className="w-4 h-4" />
                          <span>{experience.date}</span>
                          <MapPin className="w-4 h-4 ml-2" />
                          <span>{experience.location}</span>
                        </div>

                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {experience.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {experience.skills.map((skill) => (
                            <span
                              key={skill}
                              className={`${
                                isDarkMode 
                                  ? 'bg-dark-bg-tertiary text-web3-blue-light' 
                                  : 'bg-blue-100 text-blue-800'
                              } text-sm px-3 py-1 rounded-full`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`w-4 h-4 ${
                      isDarkMode ? 'bg-web3-blue-glow' : 'bg-blue-600'
                    } rounded-full relative z-10`}
                  />

                  {/* Empty space for the other side */}
                  <div className="w-1/2" />
                </motion.div>
              ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
