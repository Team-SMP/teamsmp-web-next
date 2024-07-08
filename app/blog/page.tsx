import Link from "next/link";
import { getAllPosts, PostItem } from "@/lib/posts";
import { cn } from "@/lib/utils";
import { archivo } from "../layout";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
    const posts: PostItem[] = getAllPosts(["slug", "title", "date", "tags"]);

    return (
        <article className="">
            <h1
                className={cn([
                    archivo.className,
                    "xl:text-[14rem] overflow-clip md:text-6xl text-4xl lg:text-center block xl:mt-36",
                ])}
            >
                <span className="gradient-text">
                    <i>BLOG</i>
                </span>
            </h1>
            <div
                id="main"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
                {posts.map(post => (
                    <Card key={post.slug}>
                        <CardHeader>
                            <CardTitle className="text-3xl font-light">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="hover:underline"
                                >
                                    {post.title}
                                </Link>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <small className="block text-gray-600 mb-2">
                                {post.date}
                            </small>
                            <div className="tags flex gap-2">
                                {post.tags &&
                                    post.tags.map(tag => (
                                        <Badge variant="secondary" key={tag}>
                                            {tag}
                                        </Badge>
                                    ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </article>
    );
}
