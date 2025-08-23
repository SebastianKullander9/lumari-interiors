import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getProjects() {
    const projectsDir = path.join(process.cwd(), "content/projects");
    const files = fs.readdirSync(projectsDir);

    return files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
            path.join(projectsDir, filename),
            "utf-8"
        );

        const { data } = matter(markdownWithMeta);

        const slug = filename.replace(/\.md$/, '');

        return {
            name: data.name,
            textShort: data.textShort,
            textLong: data.textLong,
            location: data.location,
            imageCarousel: data.imageCarousel,
            bigImage: data.bigImage,
            smallImage: data.smallImage,
            gallery: data.gallery || [],
            slug: slug,
            bigImageUrl: `/uploads/${data.bigImage}`,
            smallImageUrl: `/uploads/${data.smallImage}`,
        };
    });
}