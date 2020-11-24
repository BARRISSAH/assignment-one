import React, {useState,} from 'react'
import {v1 as uuid } from "uuid";

function WritePost() {

      const [title, setTitle] = useState("")
      const [author, setAuthor] = useState("")
      const [content, setContent] = useState("")
      const [date, setDate] = useState("")
      const [post, setPost] = useState([]);

      const handleTitle =(event) =>{
          setTitle(event.target.value);
      }
      const handleAuthor =(event) =>{
          setAuthor(event.target.value);
      }
      const handleContent =(event) =>{
          setContent(event.target.value);
      }
      const handleDate =(event) =>{
          setDate(event.target.value);
      }

      const handlePost =(event) =>{
          event.preventDefault();
          setPost([
              ...post,
              {
                  id: uuid(),
                  title: title,
                  author: author,
                  content: content,
                  date: date, 
              }
          ]);
          setAuthor("");
          setTitle("");
          setContent("");
          setDate("");
      };

      




    return (
        <div>
            <h1>NewPost</h1>
            
            <form className= "blogForm">
            <label>Title</label>
            <input valu={title} onChange={handleTitle}/>
             <br></br>

             <label>Author</label>
            <input value={author} onChange={(e) => handleAuthor(e)}/>

            <label>Content</label>
            <input
            className="content--input" 
            value={content}
             onChange={(e) => handleContent(e)}/>
            
            
             <label>Date</label>
            <input value={date} onChage={(e) => handleDate(e)}/>

            <input className="submit--button" type="submit" onClick={handlePost}/>
            
            
             </form>
             <ul> 
                {post.map((post) => (

                <li className="post--item" key={post.id}>
                    {post.title} {post.author} {post.content} {post.date}
                </li>

                ))

                }
            </ul>

            

            
        </div>
    );

    }

export default WritePost;
