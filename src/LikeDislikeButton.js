import React, {useState} from 'react';





function LikeDislikeButton() {

    const [ like, setLike ] = useState(0);
    const [ dislike, setDislike ] = useState(0);

    const handleClick=() => setLike(like +1);
     const handleClick=()=> setDislike( dislike +1)



    return (
        <div>

            <h3>Click to Like or Dislike my post</h3>
            <button onClick={handleClick}>Like</button>
             <button onClick={handleClick}>Dislike</button>
            

            <div>
                className="like"
            </div>

            <div>
                className="dislike"
            </div>
            
        </div>
    )
}

export default LikeDislikeButton






     




