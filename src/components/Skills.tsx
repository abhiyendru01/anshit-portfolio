
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    skills: ["C++", "JavaScript", "Vyper", "Move", "Solidity"]
  },
  {
    id: "frameworks",
    name: "Frameworks",
    skills: ["NodeJS", "React", "Tailwind CSS", "Rust"]
  },
  {
    id: "tools",
    name: "Tools",
    skills: ["MySQL", "MongoDB", "Docker", "Git", "AWS"]
  },
  {
    id: "blockchain",
    name: "Blockchain",
    skills: ["Node Operation", "Validator Programming", "Web3.js"]
  },
  {
    id: "soft",
    name: "Soft Skills",
    skills: ["Problem Solving", "Teamwork", "Communication"]
  }
];

const SkillCard = ({ skill }: { skill: string }) => (
  <div className="bg-white/5 rounded-lg p-2 text-center transition-all duration-300 hover:border-neon hover:bg-neon/10 group">
    <span className="text-sm group-hover:text-neon transition-colors">{skill}</span>
  </div>
);

const Skills = () => {
  return (
    <div>
      <Tabs defaultValue="languages" className="w-full">
        <TabsList className="w-full grid grid-cols-3 mb-4">
          <TabsTrigger value="languages">Languages</TabsTrigger>
          <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>
        
        {skillCategories.slice(0, 3).map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-2">
            <div className="grid grid-cols-2 gap-2">
              {category.skills.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <h3 className="text-sm font-medium mb-2">Other Skills</h3>
        <div className="grid grid-cols-2 gap-2">
          {[...skillCategories[3].skills, ...skillCategories[4].skills.slice(0, 3)].map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
