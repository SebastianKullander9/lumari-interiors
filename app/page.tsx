import Header from "./components/Header";
import { getProjects } from "./lib/getProjects";
import HomeViewHandler from "./components/HomeViewHandler";

export default function Home() {
    const projects = getProjects();
    console.log(projects)

    return (
        <div>
            <div className="relative z-10">
            <Header />
            <HomeViewHandler />
            </div>
        </div>
    );
}
