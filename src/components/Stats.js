import {createRef, useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function Stats({statsData = {}, id = ""}) {
    const statsContainerRef = createRef()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(statsContainerRef.current, {
            yPercent: 50,
            opacity: 0,
            scale: 0
        }, {
            scrollTrigger: {
                trigger: statsContainerRef.current,
                // toggleActions: "restart pause reverse pause",
                toggleActions: "restart none reverse none",
                start: "-1000 center",
                end: "+=0"
            },
            yPercent: 0,
            opacity: 1,
            scale: 1,
            duration: 1
        })
    })

    return (
        <div className={"stats-container"} ref={statsContainerRef}>
            <p className={"stats-title"}>{statsData.title} + m<sup>2</sup></p>
            <div className={"stats-line"}/>
            <p className={"stats-text"}>{statsData.text}</p>
        </div>
    )
}

export default Stats