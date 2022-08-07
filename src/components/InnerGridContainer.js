import "../App.css"
import {useEffect, createRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function InnerGridContainer({direction = "", loremText = []}) {
    const leftImageRef = createRef()
    const rightImageRef = createRef()
    const textSectionRef = createRef()
    const lastLeftImageRef = createRef()
    const lastRightImageRef = createRef()
    const lastTextSectionRef = createRef()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        console.log(rightImageRef)
        if (direction === "right") {
            gsap.fromTo(leftImageRef.current, {
                xPercent: -100,
                opacity: 0,
                scale: 0,
            }, {
                scrollTrigger: {
                    trigger: leftImageRef.current,
                    toggleActions: "restart none reverse none",
                    start: "-1000 center",
                    end: "+=200",
                },
                xPercent: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
            })

            gsap.fromTo(rightImageRef.current, {
                xPercent: 100,
                opacity: 0,
                scale: 0,
            }, {
                scrollTrigger: {
                    trigger: leftImageRef.current,
                    toggleActions: "restart none reverse none",
                    start: "-1000 center",
                    end: "+=200",
                },
                xPercent: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
            })

            gsap.fromTo(textSectionRef.current, {
                xPercent: -100,
                opacity: 0,
                scale: 0,
            }, {
                scrollTrigger: {
                    trigger: textSectionRef.current,
                    toggleActions: "restart none reverse none",
                    start: "-1000 center",
                    end: "+=200",
                },
                xPercent: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
            })
        } else if (direction === "left") {
            gsap.fromTo(lastLeftImageRef.current, {
                xPercent: -100,
                opacity: 0,
                scale: 0,
            }, {
                scrollTrigger: {
                    trigger: lastLeftImageRef.current,
                    toggleActions: "restart none reverse none",
                    start: "top bottom",
                    end: "+=0",
                },
                xPercent: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
            })

            gsap.fromTo(lastRightImageRef.current, {
                xPercent: 100,
                opacity: 0,
                scale: 0,
            }, {
                scrollTrigger: {
                    trigger: lastRightImageRef.current,
                    toggleActions: "restart none reverse none",
                    start: "top bottom",
                    end: "+=0",
                },
                xPercent: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
            })

            gsap.fromTo(lastTextSectionRef.current, {
                xPercent: 100,
                opacity: 0,
                scale: 0,
            }, {
                scrollTrigger: {
                    trigger: lastTextSectionRef.current,
                    toggleActions: "restart none reverse none",
                    start: "top bottom",
                    end: "+=0",
                },
                xPercent: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
            })
        }
    }, [])

    if (direction === "left") {
        return (
            <div className={"last-section-grid"}>
                <div className={"last-section-grid-image-container"} ref={lastLeftImageRef}>
                    <img className={"peach-grid-image"} src="/green-building.jpg" alt={""} loading={"lazy"}/></div>
                <div className={"last-section-grid-image-container"} ref={lastRightImageRef}><img className={"peach-grid-image"}
                                                                          src="/yellow-building.jpg" alt={""}
                                                                          loading={"lazy"}/></div>
                <div className={"last-section-grid-image-container"} ref={lastTextSectionRef}><p className={"big-text"}>A strange new
                    & <br/> world</p><p className={""}
                                        style={{maxWidth: "80%"}}>{loremText !== null && loremText[0].text + " " + loremText[0].text}</p>
                </div>
            </div>
        )
    } else if (direction === "right") {
        return (
            <div className={"peach-grid-container"}>
                <div className={"peach-grid-image-container"} ref={leftImageRef}>
                    <img className={"peach-grid-image"} src="/green-building.jpg" alt={""}/></div>
                <div className={"peach-grid-image-container"} ref={rightImageRef}><img className={"peach-grid-image"}
                                                                                       src="/yellow-building.jpg"
                                                                                       alt={""}/></div>
                <div className={"peach-grid-image-container"} ref={textSectionRef}><p className={"big-text"}>A strange
                    new
                    & <br/> world</p><p className={""}
                                        style={{maxWidth: "80%"}}>{loremText !== null && loremText[0].text + " " + loremText[0].text}</p>
                </div>
            </div>
        )
    }
}

export default InnerGridContainer