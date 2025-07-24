import React from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Md. Mehdi Hasan",
      role: "Founder & CEO",
      image: "/Image/Mamun.jpeg",
      bio: "Visionary leader with 7+ years of experience in full-stack development and business strategy.",
      linkedin: "https://linkedin.com/in/rakib",
    },
    {
      name: "Md. Shohag Kaisar",
      role: "Co-Founder & CTO",
      image: "/Image/Shohag.jpg",
      bio: "Tech architect who leads innovation and system design at OBLIQA IT.",
      linkedin: "https://linkedin.com/in/nafis",
    },
    {
      name: "Shawon Ahmed",
      role: "Sr. Full Stack Developer",
      image: "/Image/shawon.jpg",
      bio: "MERN stack specialist with a passion for scalable and secure web apps.",
      linkedin: "https://linkedin.com/in/shawon",
    },
    {
      name: "Iftiaz Ahamed Evan",
      role: "Digital Marketing Expert",
      image: "/Image/tahmina.jpg",
      bio: "SEO & Social Media expert with a record of growing brands online.",
      linkedin: "https://linkedin.com/in/tahmina",
    },
    {
      name: "Md. Munna Miah",
      role: "Digital Marketing Expert",
      image: "/Image/mizan.jpg",
      bio: "Performance marketing and lead generation specialist.",
      linkedin: "https://linkedin.com/in/mizanur",
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Meet Our Team</h2>
        <div className="h-1 w-20 bg-[#ff6900] mx-auto mb-10 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-6xl justify-items-center px-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 text-center border-t-4 border-[#ff6900] hover:shadow-xl transition-all duration-300 w-full max-w-xs"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              variants={cardVariant}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#ff6900] shadow"
              />
              <h3 className="text-xl font-bold text-gray-800 mt-4">{member.name}</h3>
              <p className="text-[#ff6900] font-medium">{member.role}</p>
              <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
              {/* <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff6900] hover:underline mt-3 inline-block font-medium"
              >
                LinkedIn →
              </a> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
