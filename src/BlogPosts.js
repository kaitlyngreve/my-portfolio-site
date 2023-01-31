import BlogPostCard from './BlogPostCard'


function BlogPosts() {
    return (
        <div>
            <div>
                {blogPosts.map((blogPost) => {
                    return <BlogPostCard blogPost={blogPost} />
                })}
            </div>
            <a href='https://medium.com/@kgreve14' target='_blank'>See all my blog posts</a>
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
        blurb: 'Considered a “core” data structure, linked lists may seem a little cumbersome to a JavaScript developer...',
        blog_link: 'https://medium.com/towardsdev/knowing-linked-lists-for-javascript-developers-87adfdb87838',
        img: ''
    },
    {
        title: 'Error Handling in Rails',
        blurb: 'As developers, we are taught how to interpret errors in our code. Sometimes debugging takes longer than we\d like...',
        blog_link: 'https://medium.com/towardsdev/error-handling-in-rails-17cf6ef7c870',
        img: ''
    },
    {
        title: 'Ruby\s Binding.pry',
        blurb: 'Learning a new programming language comes with learning new ways of debugging...',
        blog_link: 'https://medium.com/towardsdev/rubys-binding-pry-15e670be0131',
        img: ''
    },
    {
        title: 'Drag & Drop - With React DnD',
        blurb: 'Drag and drop is a super fun feature to implement into your next app or project. While there are several ways to implement drag and drop, this article is focusing on how to implement with React Dnd...',
        blog_link: 'https://medium.com/towardsdev/a-christmas-drag-drop-with-react-dnd-39d34e358c4',
        img: ''
    },
    {
        title: 'Using localStorage in React',
        blurb: 'For this project, I used localStorage with React Hooks. One of two web storage API mechanisms, localStorage allows data to be stored as key-value pairs for later use...',
        blog_link: 'https://medium.com/towardsdev/using-localstorage-in-react-99115822e940',
        img: ''
    }
]