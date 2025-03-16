import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Code2, GraduationCap, Briefcase, User } from 'lucide-react';

function App() {
  const skills = [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'TypeScript' },
    { name: 'Python' },
  ];

  const projects = [
    {
      title: 'COVAXX - Vaccine Management System',
      description: 'A Full Stack Vaccine Management System for managing vaccine distribution, inventory, and appointments',
    },
    {
      title: 'HRIAY-LAYA - Cardiac Arrhythmia Prediction System using Machine Learning',
      description: 'A Machine Learning model to predict cardiac arrhythmia using ECG data',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image Background */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`, // Replace with your image URL
        }}
      >
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          {/* Big Animated Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="w-32 h-32 mx-auto mb-8 flex items-center justify-center"
          >
            <User className="w-24 h-24 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Dinesh Suthar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-xl md:text-2xl mb-8 text-white"
          >
            Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex justify-center space-x-4"
          >
            <a href="https://github.com/dinesh90040" className="hover:text-blue-200 transition-colors">
              <Github className="w-6 h-6 text-white" />
            </a>
            <a href="https://www.linkedin.com/in/dinesh-suthar-a51092318/" className="hover:text-blue-200 transition-colors">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a href="mailto:dinesh675suthar@gmail.com" className="hover:text-blue-200 transition-colors">
              <Mail className="w-6 h-6 text-white" />
            </a>
            <a href="tel:+91 9152929720" className="hover:text-blue-200 transition-colors">
              <Phone className="w-6 h-6 text-white" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold">Bachelor of Technology in Information Technology</h3>
                <p className="text-gray-600">Xavier Institute of Engineering • 2023 - 2027</p>
                <p className="mt-2">CGPA: 9.61/10 (Current)</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold">Junior College </h3>
                <p className="mt-2">Jai Hind College</p>
                <p className="text-gray-600">Science - General Science(Physics,Chemistry,Maths,Biology) </p>
                <p className="mt-2">Percentage: 83%</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold">School</h3>
                <p className="mt-2">SSC</p>
                <p className="text-gray-600">Shri Mammabai High School • 2021</p>
                <p className="mt-2">Percentage: 93.80%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <Code2 className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold">Projects</h2>
            </div>
            <div className="grid gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Dinesh Suthar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;