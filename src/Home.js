import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    //const [name, setName] = useState('mario');

    //The hook below is used every time the website renders something.
    useEffect(() => {
        //console.log('use effect ran')
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data)
            })
    }, []);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}

            {/*<button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p>*/}

            {/*<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" />*/}
        </div>
     );
}
 
export default Home;