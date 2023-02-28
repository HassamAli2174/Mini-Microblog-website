import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, Error , IsPending } = useFetch('http://localhost:9000/blogs/' + id);

    return ( 
        <div className="blog-details">
            { IsPending && <div>Loading...</div>}
            { Error && <div>{ Error }</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;