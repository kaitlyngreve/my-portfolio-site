import BlogPostCard from './BlogPostCard'


function BlogPosts() {
    return (
        <div id="blogs">
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
        blurb: 'Learn how to use CSS Grid in a practical, approachable way. Perfect for those new to CSS entirely or if you just haven\'t tries out grid yet!',
        blog_link: 'https://medium.com/towardsdev/css-grid-step-by-step-aad05ec91f4b',
        img: ''
    },
    {
        title: 'Knowing Linked Lists for JavaScript Developers',
        blurb: 'Considered a “core” data structure, linked lists may seem a little cumbersome to a JavaScript developer...',
        blog_link: 'https://medium.com/towardsdev/knowing-linked-lists-for-javascript-developers-87adfdb87838',
        img: ''
    },
    {
        title: 'Error Handling in Rails',
        blurb: 'As developers, we are taught how to interpret errors in our code. Sometimes debugging takes longer than we\'d like...',
        blog_link: 'https://medium.com/towardsdev/error-handling-in-rails-17cf6ef7c870',
        img: ''
    },
    {
        title: 'Ruby\'s Binding.pry',
        blurb: 'Learning a new programming language comes with learning new ways of debugging...',
        blog_link: 'https://medium.com/towardsdev/rubys-binding-pry-15e670be0131',
        img: ''
    },
    {
        title: 'Using localStorage in React',
        blurb: 'For this project, I used localStorage with React Hooks. One of two web storage API mechanisms, localStorage allows data to be stored as key-value pairs for later use...',
        blog_link: 'https://medium.com/towardsdev/using-localstorage-in-react-99115822e940',
        img: ''
    },
    {
        title: 'And More!',
        blurb: 'Check ouy my blog dood',
        blog_link: 'https://medium.com/@kgreve14',
        img: ''
    }
]