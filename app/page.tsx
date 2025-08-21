import HomeView from "./components/HomeView";
import Header from "./components/Header";
import ProjectsSlider from "./components/ProjectsSlider";
import About from "./components/About";
import Footer from "./components/Footer";
import LineBreakHeader from "./components/LineBreakHeader";

export default function Home() {
    return (
        <div>
			<Header />
            <HomeView />
            <LineBreakHeader title="our work"/>
			<ProjectsSlider />
			<About />
			<Footer />
        </div>
    );
}
