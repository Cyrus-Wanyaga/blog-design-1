import {createRef, useEffect, useState} from "react";
import {gsap} from "gsap"

function Title() {
    const titleRef = createRef()
    const [email, setEmail] = useState("")

    useEffect(() => {
        gsap.fromTo(titleRef.current, {yPercent: -100}, {yPercent: 0, duration: 1})
    }, [])

    const setEmailAddress = (event) => {
        event.preventDefault()
        const emailAddress = event.target.value
        setEmail(emailAddress)
    }

    return (
        <div className={"inner-container"} ref={titleRef}>
            <div className={"left-container"}>
                <p className={"big-text"}>This is some random text that takes up this space <br/> A project by
                    Cyrus Wanyaga.</p>
                <p className={"smaller-text"}>Now this is some smaller text that takes up this bottom
                    space. <br/> Is it cold outside? I don't know.</p>
            </div>
            <div className={"middle-container"}>
                <div className={"input-container"}>
                    <input type={"email"} placeholder={"Enter your email here"} onChange={setEmailAddress}/>
                    <span className="material-symbols-outlined" onClick={() => {
                        alert("Sent to \n" + email)
                    }}>arrow_forward</span>
                </div>
            </div>
            <div className={"right-container"}/>
        </div>
    )
}

export default Title