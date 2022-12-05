import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { words } = useParams();

    return (  
        <div className="blog-details">
            <h2>Blog details - { words } </h2>
        </div>
    );
}
 
export default BlogDetails;