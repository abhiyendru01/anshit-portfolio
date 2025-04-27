
import React from "react";

const experiences = [
  {
    id: 1,
    title: "Solana Superteam",
    role: "Freelancer",
    period: "April 2024 - Present",
    description: "Working on various Solana blockchain projects, contributing to ecosystem growth, and developing decentralized applications."
  },
  {
    id: 2,
    title: "Altava",
    role: "SDE Intern",
    period: "December 2023",
    description: "Developed blockchain solutions focused on digital fashion and virtual experiences. Worked with smart contracts and Web3 technologies."
  }
];

const Experience = () => {
  return (
    <div>
      {experiences.map((exp, index) => (
        <div 
          key={exp.id} 
          className={`relative pl-6 ${index !== experiences.length - 1 ? 'pb-6 border-l border-border' : ''}`}
        >
          {/* Timeline dot */}
          <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neon"></div>
          
          <h3 className="text-lg font-semibold mb-1 text-neon">{exp.title}</h3>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm">{exp.role}</h4>
            <p className="text-xs text-muted-foreground">{exp.period}</p>
          </div>
          <p className="text-sm text-muted-foreground">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
