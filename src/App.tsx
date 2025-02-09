import { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Heart,
  Edit2,
  Save,
  X,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";
import profilePicture from "./dinesh.jpg";

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

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "Dinesh Suthar",
    title: "Software Developer",
    email: "dinsuthar14@gmail.com",
    phone: "+91 9004053454",
    education: [
      "Bachelor of Engineering in Information Technology",
      "Higher Secondary School Certificate",
      "Secondary School Certificate",
    ],
    hobbies: ["Programming", "Reading", "Taekwondo"],
    social: {
      github: "https://github.com/dinesh90040",
      linkedin: "https://linkedin.com/in/dineshsuthar",
      instagram: "https://instagram.com/_dinexh.11",
    },
    profilePicture: profilePicture,
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 85 },
    ],
  });

  const [editData, setEditData] = useState<ProfileData>(profileData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profileData);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(profileData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
          className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-between items-center mb-8"
          >
            {!isEditing ? (
              <>
                <h1 className="text-4xl font-bold text-gray-800">
                  {profileData.name}
                </h1>
                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Edit2 size={20} />
                  Edit Profile
                </button>
              </>
            ) : (
              <div className="flex justify-between items-center w-full">
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                  className="text-4xl font-bold text-gray-800 bg-transparent border-b-2 border-blue-500 focus:outline-none"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Save size={20} />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <X size={20} />
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="mb-8"
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
                className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-blue-500 hover:ring-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={profileData.profilePicture}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600"
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
                className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2 justify-center"
              >
                <Code className="text-blue-600" />
                Skills
              </motion.h2>
              {!isEditing ? (
                <div className="space-y-6">
                  {profileData.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-blue-600 h-3 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {editData.skills.map((skill, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => {
                          const newSkills = [...editData.skills];
                          newSkills[index].name = e.target.value;
                          setEditData({ ...editData, skills: newSkills });
                        }}
                        className="w-full p-2 border rounded"
                        placeholder="Skill name"
                      />
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={skill.level}
                        onChange={(e) => {
                          const newSkills = [...editData.skills];
                          newSkills[index].level = Number(e.target.value);
                          setEditData({ ...editData, skills: newSkills });
                        }}
                        className="w-24 p-2 border rounded"
                        placeholder="Level"
                      />
                    </div>
                  ))}
                  <div className="flex justify-center">
                    <button
                      onClick={() => {
                        const newSkills = [
                          ...editData.skills,
                          { name: "", level: 0 },
                        ];
                        setEditData({ ...editData, skills: newSkills });
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      Add Skill
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Briefcase className="text-blue-600" />
                    Contact Information
                  </h2>
                  {!isEditing ? (
                    <div className="space-y-2">
                      <p className="flex items-center gap-2">
                        <Mail className="text-blue-600" />
                        {profileData.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="text-blue-600" />
                        {profileData.phone}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) =>
                          setEditData({ ...editData, email: e.target.value })
                        }
                        className="w-full p-2 border rounded"
                      />
                      <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) =>
                          setEditData({ ...editData, phone: e.target.value })
                        }
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <GraduationCap className="text-blue-600" />
                    Education
                  </h2>
                  {!isEditing ? (
                    <ul className="list-disc list-inside space-y-2">
                      {profileData.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-2">
                      {editData.education.map((edu, index) => (
                        <input
                          key={index}
                          type="text"
                          value={edu}
                          onChange={(e) => {
                            const newEducation = [...editData.education];
                            newEducation[index] = e.target.value;
                            setEditData({
                              ...editData,
                              education: newEducation,
                            });
                          }}
                          className="w-full p-2 border rounded mb-2"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Heart className="text-blue-600" />
                    Hobbies
                  </h2>
                  {!isEditing ? (
                    <ul className="list-disc list-inside space-y-2">
                      {profileData.hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-2">
                      {editData.hobbies.map((hobby, index) => (
                        <input
                          key={index}
                          type="text"
                          value={hobby}
                          onChange={(e) => {
                            const newHobbies = [...editData.hobbies];
                            newHobbies[index] = e.target.value;
                            setEditData({ ...editData, hobbies: newHobbies });
                          }}
                          className="w-full p-2 border rounded mb-2"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Social Media
                  </h2>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={profileData.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={profileData.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={profileData.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                    >
                      <Instagram size={24} />
                    </motion.a>
                  </div>
                  {isEditing && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-2"
                    >
                      <input
                        type="url"
                        value={editData.social.github}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            social: {
                              ...editData.social,
                              github: e.target.value,
                            },
                          })
                        }
                        placeholder="GitHub URL"
                        className="w-full p-2 border rounded"
                      />
                      <input
                        type="url"
                        value={editData.social.linkedin}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            social: {
                              ...editData.social,
                              linkedin: e.target.value,
                            },
                          })
                        }
                        placeholder="LinkedIn URL"
                        className="w-full p-2 border rounded"
                      />
                      <input
                        type="url"
                        value={editData.social.instagram}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            social: {
                              ...editData.social,
                              instagram: e.target.value,
                            },
                          })
                        }
                        placeholder="Instagram URL"
                        className="w-full p-2 border rounded"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {isEditing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-2"
            >
              <input
                type="url"
                value={editData.profilePicture}
                onChange={(e) =>
                  setEditData({ ...editData, profilePicture: e.target.value })
                }
                placeholder="Profile Picture URL"
                className="w-full p-2 border rounded mt-2"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default App;
