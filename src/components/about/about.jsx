import "./about.css"

function about() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card"> 
                <img
                     src="https://images.pexels.com/photos/5935788/pexels-photo-5935788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                     alt="" 
                     className="a-img" /></div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                Paragraphs Demo
                </p>
                <p className="a-sub">
                The Paragraphs module in Drupal provides editors with a component driven architecture for building pages. Morpht has been developing Paragraph approaches to site building since 2015. This case study captures some of the content from a Drupal 7 "Paragraphs Demo" site which was built to showcase what could be done with Paragraphs.
                </p>
            </div>
        </div>
    )
}

export default about
