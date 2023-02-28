import { useState } from "react";

const Create = () => {

const [title, setTitle] =useState('');
const [body, setBody] =useState('');
const [author, setAuthor] =useState('mario');

const handleSubmit = (e) =>{
    e.preventDefault();
    const blog = { title , body ,author};

    console.log(blog);
} 
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog Title:
                    <input 
                    type="text"
                    required
                    value={title}
                    onChange = {(e)=>setTitle(e.target.value)}
                     />
                </label>
                <label> Blog Body:
                    <textarea
                        required
                        value={body}
                    onChange = {(e)=>setBody(e.target.value)}
                    ></textarea>
                </label>
                
                <label> Blog Author:
                    <select
                    value={author}
                    onChange = {(e)=>setAuthor(e.target.value)}
                    >
                        <option value="mario"></option>
                        <option value="Hassam"></option>
                        <option value="yoshi"></option>
                    </select>
                </label>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;