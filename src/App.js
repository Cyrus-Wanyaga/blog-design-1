import './App.css';
import {createRef, useEffect, useState} from "react";
import loremIpsumText from "./constants/loremipsumtext.json"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import GridImage from "./components/GridImage";
import Title from "./components/Title";
import BelowGridContainer from "./components/BelowGridContainer";
import Stats from "./components/Stats";
import InnerGridContainer from "./components/InnerGridContainer";

const imagePaths = [
    "/blue-skies.jpg",
    "/wind-up.jpg",
    "/yellow-building.jpg",
    "/green-building.jpg",
    "/yellow-building.jpg"
]

const StatsData = [
    {
        "title": "60.000",
        "text": "Abr"
    },
    {
        "title": "10.000",
        "text": "Vingrepr"
    },
    {
        "title": "20.000",
        "text": "Liasytk"
    },
    {
        "title": "30.000",
        "text": "Butakskitc"
    }
]

function App() {
    const [loremText, setLoremText] = useState(null)
    const floatingContainerRef = createRef()
    const peachContainerRef = createRef()
    const belowPeachContainerRef = createRef()

    useEffect(() => {
        document.title = "Blog Design"
        setLoremText(loremIpsumText)
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(floatingContainerRef.current, {
            yPercent: 50, opacity: 0
        }, {
            scrollTrigger: {
                trigger: floatingContainerRef.current,
                toggleActions: "restart none reverse none",
                start: "-500 bottom",
                end: "+=500",
            },
            yPercent: -50,
            opacity: 1,
            duration: 1,
        })

        gsap.fromTo(peachContainerRef.current, {
            yPercent: 50, opacity: 0
        }, {
            scrollTrigger: {
                trigger: floatingContainerRef.current,
                toggleActions: "restart none reverse none",
                start: "-500 bottom",
                end: "+=500",
            },
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut"
        })

        gsap.fromTo(belowPeachContainerRef.current, {
            yPercent: 100,
            opacity: 0,
            scale: 0,
        }, {
            scrollTrigger: {
                trigger: belowPeachContainerRef.current,
                toggleActions: "restart none reverse none",
                start: "-600 center",
                end: "+=200",
            },
            yPercent: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut"
        })
    }, [peachContainerRef, floatingContainerRef, belowPeachContainerRef])

    return (
        <div className="container">
            <Title/>
            <div className={"grid-container"}>
                {imagePaths.length > 0 && imagePaths.map((path, key) => (
                    <GridImage imagePath={path} id={(key + 1).toString()} key={key}/>
                ))}
            </div>
            <BelowGridContainer loremText={loremText}/>
            <div className={"transformed-container"}>
                <div className={"peach-container"} ref={peachContainerRef}>
                    <div className={"inner-container"}>
                        <div className={"left-container"}>
                            <p className={"big-text"}>A title that talks about something important<br/> Maybe we will
                                find out what it is</p>
                        </div>
                        <div className={"middle-container"}/>
                        <div className={"right-container"}/>
                    </div>
                    <div className={"inner-container"}>
                        <div className={"left-container"}>
                            <p className={"smaller-text"}>{loremText !== null && loremText[1].text}</p>
                        </div>
                        <div className={"middle-container"}/>
                        <div className={"right-container"}/>
                    </div>
                    <div className={"inner-container"} style={{justifyContent: "space-between", margin: "80px 0"}}>
                        {StatsData.length > 0 && StatsData.map((stats, key) => (
                            <Stats statsData={stats} id={(key + 1).toString()} key={key}/>
                        ))}
                    </div>
                    <InnerGridContainer direction={"right"} loremText={loremText}/>
                </div>
                <div className={"mid-section-container"} ref={floatingContainerRef}>
                    <div className={"mid-section-inner-container"}>
                        <div className={"title-section"}>
                            <div className={"horizontal-line"}/>
                            <p>On Demand</p>
                        </div>
                        <div className={"more-section-container"}>
                            <div className={"text-section"}>
                                <p className={"text-section-text"}>{loremText !== null && loremText[2].text.split(".")[0] + "."}</p>
                                <p>{loremText !== null && loremText[1].text.split(".")[0] + loremText[1].text.split(".")[1] + loremText[1].text.split(".")[3] + "."}</p>
                            </div>
                            <div className={"more-section"}>
                                <p className={""}>See More About This</p>
                                <span className={"material-symbols-outlined more-section-span"}>arrow_forward</span>
                            </div>
                        </div>
                        <div className={"icons-section"}>
                            <img src="/logos/apple-logo.svg" alt={""} className={"logo-image"}/>
                            <img src="/logos/tiktok-logo.svg" alt={""} className={"logo-image"}/>
                            <img src="/logos/microsoft-teams-logo.svg" alt={""} className={"logo-image"}/>
                            <img src="/logos/netflix-logo.svg" alt={""} className={"logo-image"}/>
                            <img src="/logos/windows-logo.svg" alt={""} className={"logo-image"}/>
                            <img src="/logos/google-logo.svg" alt={""} className={"logo-image"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"below-peach-container"} ref={belowPeachContainerRef}>
                <div className={"left-container"}>
                    <p className={"big-text"}>This is some random text that takes up this space <br/> A project by
                        Cyrus Wanyaga.</p>
                    <p className={"smaller-text"}>Now this is some smaller text that takes up this bottom
                        space. <br/> Is it cold outside? I don't know.</p>
                </div>
                <div className={"middle-container"} style={{width: '40%', marginRight: '0'}}>
                    <div className={"input-container"}>
                        <p className={"big-text"}>Change is coming</p>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                </div>
            </div>
            <InnerGridContainer direction={"left"} loremText={loremText}/>
        </div>
    );
}

export default App;
