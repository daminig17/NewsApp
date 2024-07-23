import React from 'react'

const NewItems = (props) => {
    let { urlToImage, title, description, url, author, date } = props;
    return (
        <>
            <div className="card" style={{ height: "26rem", borderRadius: "10px" }}>
                <img src={urlToImage} style={{ height: "11rem", borderRadius: "10px" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="footer my-3">
                        <small className="text-info">By {author ? author : "Unknown"} and {new Date(date).toGMTString()}</small>
                    </div>
                    <a href={url} target="blank" className="btn btn-sm btn-success">Read More</a>
                </div>
            </div>

        </>
    )
}
export default NewItems