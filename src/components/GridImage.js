import {createRef, useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import '../App.css'

function GridImage({imagePath = "", id}) {
    const imageRef = createRef()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        if (id === "4" || id === "5") {
            gsap.fromTo(imageRef.current, {
                scale: 0,
                yPercent: 100,
                opacity: 0
            }, {
                scrollTrigger: {
                    trigger: imageRef.current,
                    toggleActions: "restart none reverse none",
                    start: "-500 bottom",
                    end: "+=500"
                },
                scale: 1,
                yPercent: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut"
            })
        } else if (id === "1") {
            gsap.fromTo(imageRef.current, {
                scale: 0,
                xPercent: -100,
                opacity: 0
            }, {
                scale: 1,
                xPercent: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut"
            })
        } else if (id === "2") {
            gsap.fromTo(imageRef.current, {
                scale: 0,
                xPercent: 100,
                opacity: 0.5
            }, {
                scale: 1,
                xPercent: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut"
            })
        } else if (id === "3") {
            gsap.fromTo(imageRef.current, {
                scale: 0,
                xPercent: -100,
                opacity: 0.5
            }, {
                scrollTrigger: {trigger: imageRef.current, toggleActions: "play none none none", start: "-100% bottom", end: "+=500"},
                scale: 1,
                xPercent: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut"
            })
        }
    }, [])

    return (
        <div className={"grid-image-container"} ref={imageRef} id={id.toString()}>
            <img className={"grid-image"} src={imagePath} alt={""} loading={"lazy"}/>
        </div>
    )
}

export default GridImage