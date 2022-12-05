import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState();
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added');
            setIsPending(false);
            //The following would basically make the user move back to the previous thing they had open before hitting submit => history.go(-1)
            history.push('/');
        })

        
    }

    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                
                <label>Blog title:</label>
                
                <input type="text" 
                placeholder="Input Text Here"
                required 
                value={title}
                onChange={ (e) => setTitle(e.target.value)}
                />
                
                <label>Blog body:</label>
                
                <textarea
                placeholder="Input Text Here" 
                required
                value={body}
                onChange={ (e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog author:</label>
                
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button>Adding blog...</button>}
                {/* <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p> */}
            </form>
        </div>
    );
}
 
export default Create;