import "./product.css"

function product({img,link}) {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-cirle"></div>
                <div className="p-cirle"></div>
                <div className="p-cirle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}

export default product
