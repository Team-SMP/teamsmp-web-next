import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/blog/posts");

export type PostItem = {
    slug?: string;
    title?: string;
    date?: string;
    content?: string;
    tags?: string[];
    desc?: string;
    [key: string]: any; // for any additional metadata fields
};

export function getPostSlugs(): string[] {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []): PostItem {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items: PostItem = {};

    fields.forEach(field => {
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = content;
        }
        if (data[field]) {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(fields: string[] = []): PostItem[] {
    const slugs = getPostSlugs();
    const posts = slugs.map(slug => getPostBySlug(slug, fields));
    return posts;
}
