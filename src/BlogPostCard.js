

function BlogPostCard({ blogPost }) {
    return (
        <a href={blogPost.blog_link} target='_blank' className="blog-link blog-grid-item">
            <div>
                <div id='blogs'></div>
                <p className="header-2">{blogPost.title}</p>
                <p>{blogPost.blurb}</p>
            </div>
        </a>
    )
}

export default BlogPostCard;