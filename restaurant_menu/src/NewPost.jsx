import { useState } from "react";

function NewPost()
{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const handlechange = (e) => {
        const [value] = e.target;
        set
    }

    return(
        <>
            <div className="post_container">
                <div className="post-title-div">
                    <input 
                        type="text" 
                        className="post-title"
                        name="post-title"
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div className="post-price-div">
                    <input 
                        type="text" 
                        className="post-price" 
                        name="post-price"
                        value={price} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div className="post-description-div">
                    <input 
                        type="text" 
                        className="post-description" 
                        name="post-description"
                        value={description} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div className='send-post'>
                    <button className='send-post-button'>send</button>
                </div>
            </div>
        </>
    );
}
export default NewPost;