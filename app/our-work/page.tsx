import OurWork from "../components/OurWork";
import { getProjects } from "../lib/getProjects";

export default function OurWorkPage() {
    const projects = getProjects();
    console.log(projects);

    return <OurWork projects={projects} />;
}