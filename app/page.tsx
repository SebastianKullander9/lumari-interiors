import HomeView from "./components/HomeView";
import Header from "./components/Header";
import ProjectsSliderMobile from "./components/ProjectsSliderMobile";
import ProjectSliderDesktop from "./components/ProjectSliderDesktop";
import Footer from "./components/Footer";
import { getProjects } from "./lib/getProjects";

const tempProjects = [
    {
        name: "project lili",
        textShort: "A luxury villa built entirely from scratch",
        image: "/testImages/1.jpeg"
    },
    {
        name: "project lili",
        textShort: "A real estate office designed with premium furnishings.",
        image: "/testImages/9.jpeg"
    },
    {
        name: "project s",
        textShort: "An apartment in the heart of stockholm.",
        image: "/testImages/project-r-5.jpeg"
    }
]


export default function Home() {
    const projects = getProjects();
    console.log(projects)

    return (
        <div>
			<div className="fixed inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/home-background-no-arm.jpg')" }}></div>
            <div className="relative z-10">
            <Header />
            <HomeView />
            <div className="hidden md:block">
                <ProjectSliderDesktop projects={projects}/>
            </div>
            <div className="block md:hidden">
                <ProjectsSliderMobile projects={tempProjects} />
            </div>
            <Footer />
            </div>
        </div>
    );
}
