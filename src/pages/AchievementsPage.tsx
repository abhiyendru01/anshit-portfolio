
import React from "react";
import Navbar from "@/components/Navbar";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

const AchievementsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20">
        <Achievements />
      </div>
      
      <Footer />
    </div>
  );
};

export default AchievementsPage;
