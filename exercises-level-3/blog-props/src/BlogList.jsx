import React from "react"
import BlogPost from "./BlogPost.jsx"
import data from "./data.jsx"

export default function BlogList() {
    const blogPosts = data.map(blog =>
        <BlogPost 
            key={blog.id} 
            {...blog}
        />
    )
    return (
        <section>
            <div className="blog--list">
                {blogPosts}
                <div className="button--container">
                    <button className="button">OLDER POSTS</button>
                </div>
            </div>
        </section>
    )
}