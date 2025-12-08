// app/page.tsx or app/.../page.tsx

import BlogCard from "@fod/components/ui/blog-card";
import Link from "next/link";

export default async function Page() {
    const apiKey = process.env.CMS_KEY;

    if (!apiKey) {
        console.error(" Missing CMS_KEY environment variable");
    }

    const res = await fetch("https://api.writecms.com/api/v1/projects/8c897a7d-190e-4957-bd96-e1aa7a38a5f5/posts", {
        method: "GET",
        headers: {
            "x-api-key": apiKey ?? "",
        },
        cache: "no-store",
    });

    if (!res.ok) {
        console.error("API request failed:", res.status, await res.text());
    }

    const blogs = await res.json();
    console.log(blogs.data[0].timeToRead)

    interface Blog {
        id: string;
        title: string;
        excerpt: string;
        href: string;
        author: string;
        date: string;
        category: { name: string };
        timeToRead: number;
        thumbnail: string;
    }

    return  <div className="flex flex-col gap-4 p-4">
      {blogs?.data.map((blog: Blog) => (
        <Link href={"/blog/"+blog.id} key={blog.id}>
         <BlogCard 
         title={blog.title} 
         className="mb-4"
         excerpt={blog.excerpt} 
         href={blog.href} 
         author={blog.author}
         date={blog.date}
         category={blog.category.name}
         timeToRead={blog.timeToRead}
         thumbnailLink={blog.thumbnail}
         variant="elegant"
         />
        </Link>
      ))}
    </div>;
}
