import "./intro.css"
import me from "../../img/me.png"

function intro() {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Archit Bambhorikar</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Cyber Security</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Gamer</div>
                            <div className="i-title-item">Content Creator</div>
                            <div className="i-title-item">Dancer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                    “Everything should be made as simple as possible, but no simpler.” ~Albert Einstein
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default intro
