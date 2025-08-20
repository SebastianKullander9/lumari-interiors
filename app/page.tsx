import HomeView from "./components/HomeView";
import Header from "./components/Header";
import ProjectsSlider from "./components/ProjectsSlider";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div>
			<Header />
            <HomeView />
			<ProjectsSlider />
			<About />
			<Footer />
        </div>
    );
}
