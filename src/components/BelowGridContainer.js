import {createRef, useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function BelowGridContainer({loremText}) {
    const parentContainerRef = createRef()
    const leftContainerRef = createRef()
    const midContainerRef = createRef()
    const rightContainerRef = createRef()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(parentContainerRef.current, {
            scrollTrigger: {trigger: parentContainerRef.current},
            yPercent: 100,
            opacity: 0,
            scale: 0,
        }, {
            scrollTrigger: {trigger: parentContainerRef.current, toggleActions: "play none reverse none", start: "-200 bottom", end: "+=0"},
            yPercent: 0,
            opacity: 1,
            scale: 1,
            duration: 1
        })
    }, [])

    return (
        <div className={"inner-container"} style={{alignItems: 'flex-start'}} ref={parentContainerRef}>
            <div className={"left-container"} ref={leftContainerRef}>
                <p className={"big-text"}>Perfect layout for your items, <br/> showrooms, messes, drives
                    & <br/> conferences</p>
            </div>
            <div className={"middle-container middle-container-mobile"} ref={midContainerRef}>
                <p>{loremText !== null ? loremText[0].text : null}</p>
            </div>
            <div className={"right-container right-container-mobile"} ref={rightContainerRef}>
                <span>01/05</span>
                <span className={"material-symbols-outlined"}>arrow_back</span>
                <span className={"material-symbols-outlined"}>arrow_forward</span>
            </div>
        </div>
    )
}

export default BelowGridContainer