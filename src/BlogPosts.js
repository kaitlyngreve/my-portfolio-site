import BlogPostCard from './BlogPostCard'

const blogPosts = [
    {
        title: 'CSS Grid',
        blurb: '...'
    },
    {
        title: 'useNavigate',
        blurb: '...'
    }
]

function BlogPosts() {
    return (
        <div>
            {blogPosts.map((blogPost) => {
                return <BlogPostCard blogPost={blogPost} />
            })}
        </div>
    )
}

export default BlogPosts;