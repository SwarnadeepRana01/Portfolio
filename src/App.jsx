import Hero from "./Sections/Hero.jsx";
import ShowcaseSection from "./Sections/ShowcaseSection.jsx";
import NavBar from "./Components/NavBar.jsx";
import FeatureCard from "./Sections/FeatureCard.jsx";
import ExperienceSection from "./Sections/ExperienceSection.jsx";
import {TechStack} from "./Sections/TechStack.jsx";
import Contact from "./Sections/Contact.jsx";

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <ShowcaseSection/>
            <FeatureCard/>
            <ExperienceSection/>
            <TechStack/>
            <Contact/>
        </>
    )
}
export default App
