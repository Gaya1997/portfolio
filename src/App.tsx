import VideoBackground from "@/components/VideoBackground";
import profileData from "@/data/profile.json";
import i18nKeys from "@/data/en.json";
import HeaderSection from "@/sections/Header";
import Projects from "@/sections/Projects";
import Certifications from "@/sections/Certifications";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Footer from "@/sections/Footer";
import Divider from "@/components/Divider";
import Achievements from "./sections/Achievements";

function App() {
  return (
    <>
      <HeaderSection
        {...profileData.heading}
        contact={profileData.contact}
        i18nKeys={i18nKeys}
        aboutMeId={profileData.experience.id}
      />
      <Experience {...profileData.experience} i18nKeys={i18nKeys} />
      <Projects {...profileData.projects} i18nKeys={i18nKeys} />
      <Divider className="bg-section-bg" />
      <Certifications {...profileData.certifications} i18nKeys={i18nKeys} />
      <Education {...profileData.education} i18nKeys={i18nKeys} />
      <Divider className="bg-section-bg" />
      <Achievements {...profileData.achievements} i18nKeys={i18nKeys} />
      <Divider className="bg-section-bg" />
      <Skills {...profileData.skills} i18nKeys={i18nKeys} />
      <Footer {...profileData.contact} i18nKeys={i18nKeys} />
      <VideoBackground />
    </>
  );
}

export default App;
