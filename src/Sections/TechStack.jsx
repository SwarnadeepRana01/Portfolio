import React from 'react'
import {TitleHeader} from "../Components/TitleHeader.jsx";
import {techStackIcons, techStackImgs} from "../Constants/index.js";
import TechIcon from "../Components/Models/TechLogos/TechIcon.jsx";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

export const TechStack = () => {
    useGSAP(() => {

        gsap.fromTo(
            ".tech-card",
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );
    });
    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                title="My Toolbox"
                sub="⚡ The technologies powering my projects"
                />
                <div className="tech-grid">
                    {techStackIcons.map((icon) => (
                        <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                            {/*{icon.name}*/}
                        <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={icon}/>
                                </div>
                                <div className="padding-x w-full">
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/*{techStackImgs.map((TechIcon) => (*/}
                    {/*    <div  key={TechIcon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">*/}
                    {/*        <div className="tech-card-animated-bg"/>*/}
                    {/*        <div className="tech-card-content">*/}
                    {/*            <div className="tech-icon-wrapper">*/}
                    {/*                <img src={TechIcon.imgPath} alt="" />*/}
                    {/*            </div>*/}
                    {/*            <div className="padding-x w-full">*/}
                    {/*                <p>{TechIcon.name}</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*))}*/}
                </div>
            </div>
        </div>
    )
}
export default TechStack;