import GalleryPage from "../../components/GalleryPage";
import { getProjects } from "../../lib/getProjects";

interface PageProps {
    params: {
        slug: string;
    };
}

export default function OurWorkPage({ params }: PageProps) {
    const projects = getProjects();
    const { slug } = params;

    return <GalleryPage projects={projects} slug={slug} />;
}