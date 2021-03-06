import React, {useState} from 'react'
import {v1 as uuid} from "uuid"

function NewPost() {


    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [date, setDate] = useState("")
    const [view, setView] = useState("true")

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

    const handleView =(event) =>{
        event.preventDefault("true");
        setView([
            ...view,
            {
                id: uuid(),
                title: title,
                author: author,
                content: content,
                date: date, 
            }
        ]);
        setAuthor("true");
        setTitle("true");
        setContent("true");
        setDate("true");
    };

    






    return (
        <div>
            <h1>NewPost</h1>
            <form>
                <label>
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
            
            <input className="view--button" type="view" onClick={handleView}/>
            



                </label>
            </form>
            
        </div>
    )
}

export default NewPost
