import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    //const [name, setName] = useState('mario');

    //The hook below is used every time the website renders something.
    useEffect(() => {
        //console.log('use effect ran')
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
            })
        }, 1000)
    }, []);

    return ( 
        <div className="home">
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}

            {/*<button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p>*/}

            {/*<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" />*/}
        </div>
     );
}
 
export default Home;