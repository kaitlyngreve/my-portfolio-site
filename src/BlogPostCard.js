

function BlogPostCard({ blogPost }) {
    return (
        <a href={blogPost.blog_link} target='_blank' className="blog-link grid-item">
            <div>
                <p className="header-2">{blogPost.title}</p>
                <p className="grid-item-content">{blogPost.blurb}</p>
            </div>
        </a>
    )
}

export default BlogPostCard;