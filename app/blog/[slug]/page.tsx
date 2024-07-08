import { getPostBySlug, getAllPosts, PostItem } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

type Props = {
    params: {
        slug: string;
    };
};

export default async function PostPage({ params }: Props) {
    const post: PostItem = getPostBySlug(params.slug, [
        "title",
        "date",
        "content",
        "tags",
    ]);
    const processedContent = await remark()
        .use(html)
        .process(post.content || "");
    const contentHtml = processedContent.toString();

    return (
        <main className="">
            <div id="main">
                <div className="lg:text-center w-full">
                    <div>
                        <Link href="/blog">
                            <span className="text-sky-500">Back to Blog</span>
                        </Link>
                    </div>
                    <h1 className="lg:text-6xl text-5xl capitalize font-semibold">
                        {post.title}
                    </h1>
                    <div className="text-gray-600 mb-2">{post.date}</div>
                    <div className="lg:mx-auto inline-block">
                        <div className="tags mb-4 flex gap-2">
                            {post.tags &&
                                post.tags.map(tag => (
                                    <Badge variant="secondary" key={tag}>
                                        {tag}
                                    </Badge>
                                ))}
                        </div>
                    </div>
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                    className="prose prose-invert lg:prose-xl xl:max-w-4xl mx-auto"
                />
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    const posts = getAllPosts(["slug"]);
    return posts.map(post => ({
        slug: post.slug,
    }));
}
