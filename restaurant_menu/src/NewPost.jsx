function NewPost()
{
    return(
        <>
            <div className="post_container">
                <div className="post-title-div">
                    <input type="text" className="post-title"></input>
                </div>
                <div className="post-price-div">
                    <input type="text" className="post-price"></input>
                </div>
                <div className="post-description-div">
                    <input type="text" className="post-description"></input>
                </div>
                <div className='send-post'>
                    <button className='send-post-button'>send</button>
                </div>
            </div>
        </>
    );
}
export default NewPost;