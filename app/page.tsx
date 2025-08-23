import HomeView from "./components/HomeView";
import Header from "./components/Header";
import ProjectsSlider from "./components/ProjectsSlider";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { getProjects } from "./lib/getProjects";

export default function Home() {
    const projects = getProjects();

    return (
        <div>
			<div className="fixed inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/home-background-no-arm.jpg')" }}></div>
            <div className="relative z-10">
            <Header />
            <HomeView />
            <ProjectsSlider projects={projects} />
            <About animate={true} />
            <Contact animate={true}/>
            <Footer />
            </div>
        </div>
    );
}
