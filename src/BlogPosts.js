import BlogPostCard from './BlogPostCard'


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

const blogPosts = [
    {
        title: 'CSS Grid - Step by Step',
        blurb: 'Whether you are new to CSS grid or simply need a refresher with some easy to follow steps — you have clicked on the right post! My hope for you is that by the end of reading this post you have confidence in implementing a CSS grid in your project...',
        blog_link: 'https://medium.com/towardsdev/css-grid-step-by-step-aad05ec91f4b',
        img: ''
    },
    {
        title: 'useHistory => useNavigate',
        blurb: 'With ReactRouter updating from version 5 to version 6, there have been a few changes. One of which is the replacement of the useHistory() hook to useNavigate()...',
        blog_link: 'https://medium.com/@kgreve14/usehistory-usenavigate-5b383160adba',
        img: ''
    },
    {
        title: 'CSS Flexbox',
        blurb: 'CSS can be intimidating. Not because it is overly complicated or causes errors, (actually … part of why CSS can be tricky is because it does not cause errors 😅), but because it can do so many things!...',
        blog_link: 'https://medium.com/@kgreve14/css-flexbox-28d11dc42891',
        img: ''
    },
    {
        title: 'Knowing Linked Lists for JavaScript Developers',
        blurd: 'Considered a “core” data structure, linked lists may seem a little cumbersome to a JavaScript developer...',
        blog_link: 'https://medium.com/towardsdev/knowing-linked-lists-for-javascript-developers-87adfdb87838',
        img: ''
    }
]