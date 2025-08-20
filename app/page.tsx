import HomeView from "./components/HomeView";
import Header from "./components/Header";
import ProjectsSlider from "./components/ProjectsSlider";

export default function Home() {
    return (
        <div>
			<Header />
            <HomeView />
			<ProjectsSlider />
        </div>
    );
}
