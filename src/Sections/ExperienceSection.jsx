import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import {TitleHeader} from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    useGSAP(() => {
        // Animate each timeline card
        gsap.utils.toArray(".timeline-card").forEach((card) => {
            gsap.fromTo(
                card,
                { xPercent: -100, opacity: 0 },
                {
                    xPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 95%", // animate earlier so last card also triggers
                        toggleActions: "play none none none", // make sure it runs once
                    },
                }
            );
        });



        // Animate timeline height
        gsap.to(".timeline", {
            transformOrigin: "bottom bottom",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".timeline",
                start: "top center",
                end: "70% center",
                onUpdate: (self) => {
                    gsap.to(".timeline", {
                        scaleY: 1 - self.progress,
                    });
                },
            },
        });

        // Animate expText blocks
        gsap.utils.toArray(".expText").forEach((text) => {
            gsap.from(text, {
                opacity: 0,
                xPercent: 0,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: text,
                    start: "top 60%",
                },
            });
        });
    }, []);

    return (
        <section
            id="experience"
            className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
        >
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Academic Experience"
                    sub="💼 My Journey"
                />
                <div className="mt-32 relative min-h-screen">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {console.log("expCards:", expCards.length)}

                        {expCards.map((card) => (
                            <div key={card.title} className="exp-card-wrapper timeline-card mb-32">
                                <div className="xl:w-2/6">
                                    <div className="rounded-2xl shadow-lg bg-zinc-900 p-5">
                                        <img src={card.imgPath} alt="exp-img" />
                                    </div>
                                </div>
                                <div className="xl:w-4/6">
                                    <div className="flex items-start">
                                        <div className="timeline-wrapper">
                                            <div className="timeline" />
                                            <div className="gradient-line w-1 h-full" />
                                        </div>
                                        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                            <div className="timeline-logo">
                                                <img src={card.logoPath} alt="logo" />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-3xl">{card.title}</h1>
                                                <p className="my-5 text-white-50">
                                                    🗓️&nbsp;{card.date}
                                                </p>
                                                <p className="text-[#839CB5] italic">Higlights</p>
                                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                    {card.highlights.map((highlights, index) => (
                                                        <li key={index} className="text-lg">
                                                            {highlights}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
