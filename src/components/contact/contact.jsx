import "./contact.css"
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import address from "../../img/address.png"
import { useContext, useRef, useState } from "react"
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context"

function Contact() 
{
        const formRef = useRef();
        const [done, setDone] = useState(false)
        const theme = useContext(ThemeContext);
        const darkMode = theme.state.darkMode;
        const handleSubmit = (e) => {
            e.preventDefault();
            emailjs.sendForm('service_skq966d', 'template_0luazsj', formRef.current, 'user_50SNsd7inYpx8fODhjBnf')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your work
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />+91 8308282262
                        </div>
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />architbambhorikar15@gmail.com
                        </div>
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={address} alt="" className="c-icon" />Shahupuri 3rd lane , Kolhapur
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc"><b>What's your story? </b>Get in touch. Always available for work if the right project comes along me.</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor:darkMode && "#333" ,color:"White"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor:darkMode && "#333" ,color:"White"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor:darkMode && "#333" ,color:"White"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor:darkMode && "#333" ,color:"White"}} placeholder="Message" name="message" rows="5"></textarea>
                        <button>Submit</button>
                        {done && "   Thank you.."}
                </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
