import { useState } from "react";

function NewPost()
{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    return(
        <>
            <div className="post_container">
                <div className="post-title-div">
                    <input type="text" className="post-title" value={title}></input>
                </div>
                <div className="post-price-div">
                    <input type="text" className="post-price" value={price}></input>
                </div>
                <div className="post-description-div">
                    <input type="text" className="post-description" value={description}></input>
                </div>
                <div className='send-post'>
                    <button className='send-post-button'>send</button>
                </div>
            </div>
        </>
    );
}
export default NewPost;