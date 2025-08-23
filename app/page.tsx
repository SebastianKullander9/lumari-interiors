import HomeView from "./components/HomeView";
import Header from "./components/Header";
import ProjectsSlider from "./components/ProjectsSlider";
import About from "./components/About";
import Footer from "./components/Footer";
import LineBreakHeader from "./components/LineBreakHeader";
import Contact from "./components/Contact";
import NoSpace from "./components/NoSpace";

export default function Home() {
    return (
        <div>
			<div className="fixed inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/home-background-no-arm.jpg')" }}></div>
            <div className="relative z-10">
            <Header />
            <HomeView />
            <ProjectsSlider />
            <About animate={true} />
            <Contact animate={true}/>
            <Footer />
            </div>
        </div>
    );
}
