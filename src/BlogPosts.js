import BlogPostCard from './BlogPostCard'


function BlogPosts() {
    return (
        <div className="section-container container-wide" id="blogs">
            <div className="container">
                <h4 className='header-1'>Things I've Written</h4>
                <div className='blog-info-container'>
                    <p className='blog-info'>
                        Writing blog posts about new learning ventures have proved profoundly helpful in cementing all I've learned.
                        There is something about using my own words to deep dive into tech topics that improve my understanding!
                    </p>
                    <p className='blog-info'>
                        My tech blog is hosted through
                        <a className="link" href='https://medium.com/@kgreve14' target='_blank' rel="noreferrer"> Medium</a>
                        , which I add to regularly. I am also a writer for the Medium publication,
                        <a className="link" href='https://towardsdev.com/' target='_blank' rel="noreferrer"> TowardsDev</a>.
                    </p>
                </div>
            </div>
            <div className="blog-grid-wrapper">
                {blogPosts.map((blogPost) => {
                    return <BlogPostCard blogPost={blogPost} key={blogPost.title} />
                })}
            </div>
        </div>
    )
}

export default BlogPosts;

const blogPosts = [
    {
        title: 'CSS Grid - Step by Step',
        blurb: 'Learn how to use CSS Grid in a practical, approachable way. Perfect for those new to CSS entirely or if you just haven’t tried out grid yet!',
        blog_link: 'https://medium.com/towardsdev/css-grid-step-by-step-aad05ec91f4b',
        img: ''
    },
    {
        title: 'Error Handling in Rails',
        blurb: 'An step by step guide to catching errors on the backend, and rendering them to the frontend.',
        blog_link: 'https://medium.com/towardsdev/error-handling-in-rails-17cf6ef7c870',
        img: ''
    },
    {
        title: 'CSS Flexbox',
        blurb: 'Looking to increase your CSS skillset? Learn from scratch or deepen your understanding of CSS Flexbox in an easy to follow way.',
        blog_link: 'https://medium.com/@kgreve14/css-flexbox-28d11dc42891',
        img: ''
    },
    {
        title: 'Ruby\'s Binding.pry',
        blurb: 'In this simple to follow guide, learn the importance and ease of interacting with your code in a pry environment.',
        blog_link: 'https://medium.com/towardsdev/rubys-binding-pry-15e670be0131',
        img: ''
    },
    {
        title: 'Using localStorage in React',
        blurb: 'Learn how to implement and utilize the API mechanism - localStorage - with React hooks to persist frontend data.',
        blog_link: 'https://medium.com/towardsdev/using-localstorage-in-react-99115822e940',
        img: ''
    },
    {
        title: 'And More!',
        blurb: 'Want to read more? I post regularly to Medium, so defo check it out!',
        blog_link: 'https://medium.com/@kgreve14',
        img: ''
    }
]