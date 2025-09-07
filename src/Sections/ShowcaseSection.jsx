import React, {useRef} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
    const SectionRef=useRef(null)
    const Project1Ref=useRef(null)
    const Project2Ref=useRef(null)
    const Project3Ref=useRef(null)

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            SectionRef.current,
            {opacity: 0},
            {opacity: 1, duration: 1.5}
        )

    const Projects=[Project1Ref.current,Project2Ref.current,Project3Ref.current]

    Projects.forEach((card,index)=>{
        gsap.fromTo(card, {
            y:50, opacity:0
        },{
                y:0,opacity:1,duration:1,delay:0.3*(index+1),
                scrollTrigger:{
                    trigger:card,
                    start:"top bottom-=100",
                },
            }
        );
    });
    },[]);


    return (
        <section id="work" ref={SectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/*LEFT*/}
                    <div className="first-project-wrapper" ref={Project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Project 1"/>
                        </div>
                        <div className="text-content">
                            <h2>Simple to use text-modifier--TextUtils</h2>
                        </div>
                        <p className="text-white-50 md:text-xl">
                            A simple yet effective text-modifier application using only html,css and react.
                        </p>
                    </div>
                    {/*RIGHT*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="prject" ref={Project2Ref}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img alt="Comming soon"/>
                            </div>
                            <h2>Dating app</h2>
                        </div>
                        <div className="prject" ref={Project3Ref}>
                            <div className="image-wrapper bg-[#FFE7DB]">
                                <img alt="Comming soon"/>
                            </div>
                            <h2>Trailer App</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ShowcaseSection;
