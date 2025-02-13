import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Heart,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";
import profilePicture from "./dinesh.jpg";
import "./animations.css";

interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  education: string[];
  hobbies: string[];
  social: {
    github: string;
    linkedin: string;
    instagram: string;
  };
  profilePicture: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const FireParticles = () => {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="fire-particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </>
  );
};

function App() {
  const currentYear = new Date().getFullYear();
  const profileData: ProfileData = {
    name: "Dinesh Suthar",
    title: "Software Developer",
    email: "dinsuthar14@gmail.com",
    phone: "+91 9004053454",
    education: [
      "Bachelor of Engineering in Information Technology (Xavier Institute OF Engineering)",
      "Higher Secondary School Certificate",
      "Secondary School Certificate",
    ],
    hobbies: ["Programming", "Reading", "Taekwondo"],
    social: {
      github: "https://github.com/dinesh90040",
      linkedin: "https://linkedin.com/in/dineshsuthar",
      instagram: "https://instagram.com/_dineshsuthar11",
    },
    profilePicture: profilePicture,
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 85 },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0] bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')]">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flare"
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      <div className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
          className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-4 border-[#ffcb05] fire-animation mb-8"
        >
          <FireParticles />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-between items-center mb-8"
          >
            <h1 className="text-4xl font-bold text-[#1b53ba]">
              {profileData.name}
            </h1>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="mb-8 relative"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-8 ring-[#ff1f1f] border-4 border-white hover:ring-[#1b53ba] transform hover:scale-105 transition-all duration-300 relative"
              >
                <FireParticles />
                <img
                  src={profileData.profilePicture}
                  alt={profileData.name}
                  className="w-full h-full object-cover relative z-10"
                />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-[#1b53ba] font-semibold"
              >
                {profileData.title}
              </motion.h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="mb-12 max-w-2xl mx-auto">
              <motion.h2
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                className="text-2xl font-semibold text-[#1b53ba] mb-6 flex items-center gap-2 justify-center"
              >
                <Code className="text-[#ffcb05]" />
                Skills
              </motion.h2>
              <div className="space-y-6">
                {profileData.skills.map((skill, index) => (
                  <motion.div key={index} className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-[#1b53ba]">
                        {skill.name}
                      </span>
                      <span className="text-[#ff1f1f]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-[#ffcb05] h-3 rounded-full relative"
                      >
                        <FireParticles />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#1b53ba] mb-4 flex items-center gap-2">
                    <Briefcase className="text-[#ffcb05]" />
                    Contact Information
                  </h2>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-[#1b53ba]">
                      <Mail className="text-[#ff1f1f]" />
                      {profileData.email}
                    </p>
                    <p className="flex items-center gap-2 text-[#1b53ba]">
                      <Phone className="text-[#ff1f1f]" />
                      {profileData.phone}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#1b53ba] mb-4 flex items-center gap-2">
                    <GraduationCap className="text-[#ffcb05]" />
                    Education
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-[#1b53ba]">
                    {profileData.education.map((edu, index) => (
                      <li key={index}>{edu}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#1b53ba] mb-4 flex items-center gap-2">
                    <Heart className="text-[#ffcb05]" />
                    Hobbies
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-[#1b53ba]">
                    {profileData.hobbies.map((hobby, index) => (
                      <li key={index}>{hobby}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-[#1b53ba] mb-4">
                    Social Media
                  </h2>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={profileData.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#1b53ba] text-white rounded-full hover:bg-[#ffcb05] transition-colors"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={profileData.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#ff1f1f] text-white rounded-full hover:bg-[#ffcb05] transition-colors"
                    >
                      <Linkedin size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={profileData.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#ffcb05] text-white rounded-full hover:bg-[#1b53ba] transition-colors"
                    >
                      <Instagram size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <footer className="w-full bg-[#1b53ba]/90 backdrop-blur-sm text-white py-6 border-t-4 border-[#ffcb05]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-lg font-semibold">{profileData.name}</p>
              <p className="text-sm text-white/80">{profileData.title}</p>
            </div>
            <div className="flex space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffcb05] transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffcb05] transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={profileData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffcb05] transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-white/80">
            <p>
              © {currentYear} {profileData.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
