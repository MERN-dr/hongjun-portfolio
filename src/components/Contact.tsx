import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { FaAddressBook } from "react-icons/fa";
import emailinfo from "src/content/emailjs/emailinfo";
import NoticeContainer from "./NoticeContainer";
import {useIntl} from 'react-intl';


type Notice = {
    type: "ERROR" | "SUCCESS";
    content: string;
    visible?: boolean;
};
type ProcessEnv = {
    [key: string]: string;
}


function Contact() {
    const { formatMessage: f } = useIntl();
    const [name, setName] = useState("");
    const [notice, setNotice] = useState<Notice>({
        content: "",
        type: "SUCCESS"
    })
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const resetForm = () => {
        setName("");
        setMessage("Hello ...");
        setEmail("");
        setIsLoading(false);
        setTimeout(() => {
        setVisible(false);
        }, 2000);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (name.trim() !== "" && email.trim() !== "") {
            emailjs
                .send(
                    emailinfo.SERVICE_ID,
                    emailinfo.TEMPLATE_ID,
                {
                    user_name: name,
                    user_subject: subject,
                    user_email: email,
                    message: message,
                },
                emailinfo.USER_ID
                )
                .then(() => {
                setVisible(true);
                setNotice({
                    content:
                    "Thank you for your insterrest, I will be back to you in the next few minutes",
                    type: "SUCCESS",
                    visible,
                });
                resetForm();
                })
                .catch(() => {
                setVisible(true);
                setNotice({
                    content:
                    "An error occured, please try again later",
                    type: "ERROR",
                    visible,
                });
                setTimeout(() => {
                    setVisible(false);
                }, 2000);
                setIsLoading(false);
                });
            } else {
            setVisible(true);
            setNotice({
                content:
                "Kindly put at leat your name and your email address",
                type: "ERROR",
                visible,
            });
            setTimeout(() => {
                setVisible(false);
            }, 2000);
            setIsLoading(false);
            }
        };

    return (
        <div className="con">
            <div className="con-bg" id="contact"></div>
            <div className="con-wrapper">
                <div className="con-left">
                
                    <h1 className="con-title">{f({ id: 'contact.title' })}</h1>
                    <div className="con-info">
                        <div className="con-info-item">
                            <BsFillTelephoneInboundFill/>
                            +82 10-9137-4732
                        </div>
                        <div className="con-info-item">
                            <AiTwotoneMail/>
                            mz.hisia@gmail.com
                        </div>
                        <div className="con-info-item">
                            <FaAddressBook/>
                            Busan, South Korea
                        </div>
                    </div>
                </div>
                <div className="con-right">
                    <p className="con-desc">
                    <b>{f({ id: 'contact.b' })}</b> 
                    {f({ id: 'contact.story' })}
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder={f({ id: 'contact.name' })} name="user_name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder={f({ id: 'contact.subject' })} name="user_subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                        <input  type="text" placeholder={f({ id: 'contact.email' })} name="user_email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <textarea rows={5} placeholder={f({ id: 'contact.message' })} name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                        <button type="submit" >{isLoading ? f({ id: 'contact.sending' }) : f({ id: 'contact.touch' })}</button>
                        {/* {done && "Thank you..."} */}
                        <NoticeContainer visible={visible} content={notice.content} type={notice.type} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
