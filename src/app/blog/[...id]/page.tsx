import BlogDetail from '@fod/components/ui/blog-detail'
import React from 'react'

async function page({ params }: { params: { id: string } }) {
    const apiKey = process.env.CMS_KEY;

    if (!apiKey) {
        console.error(" Missing CMS_KEY environment variable");
    }

    const res = await fetch("https://api.writecms.com/api/v1/projects/8c897a7d-190e-4957-bd96-e1aa7a38a5f5/posts/"+params.id, {
        method: "GET",
        headers: {
            "x-api-key": apiKey ?? "",
        },
        cache: "no-store",
    });

    if (!res.ok) {
        console.error("API request failed:", res.status, await res.text());
    }

    const blo = await res.json();
    const blog = blo.data
    return (
        <BlogDetail
            thumbnail={blog.thumbnail}
            title={blog.title}
            author={blog.author}
            date={new Date(blog.updatedAt).toLocaleDateString()}
            isUpdated={blog.isUpdated}
            tableOfContents={false}
            content={blog.content}
            timeToRead={4}
            shareButtons={{
                url: "https://www.google.com/search?q=" + blog.slug,
                title: blog.title,
            }}
            // breadcrumb={{
            //     homeLabel: "Home",
            //     categoryLabel: blog.category.name,
            //     categoryHref: "/blog/" + blog.category.slug,
            //     titleLable: blog.title,
            // }}
        />
    )
}

export default page