import * as React from "react";
import style from "./AnimatedText.module.scss"
import {useLayoutEffect, useRef} from "react";
import clsx from "clsx";
import gsap from "gsap";

export const AnimatedText = () => {
    const appRef = useRef<HTMLDivElement>(null!);
    const y = -200;
    const ease = "none";
    const k = 3;
    const duration1 = 0.5 * k;
    const duration2 = 2 * k;
    const duration3 = 0.5 * k;
    const scale = 3;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.timeline({ repeat: -1 })
                .to(".text1", {
                    opacity: 0.1,
                    duration: duration1,
                    ease,
                })
                .to(".text1", {
                    y,
                    scale: 3,
                    opacity: 1,
                    duration: duration2,
                    ease,
                })
                .to(".text1", {
                    scale,
                    opacity: 0,
                    duration: duration3,
                    ease,
                });

            gsap.timeline({ repeat: -1, delay: 0.5 * k })
                .to(".text2", {
                    opacity: 0.1,
                    duration: duration1,
                    ease,
                })
                .to(".text2", {
                    y,
                    scale: 3,
                    opacity: 1,
                    duration: duration2,
                    ease,
                })
                .to(".text2", {
                    scale,
                    opacity: 0,
                    duration: duration3,
                    ease,
                });

            gsap.timeline({ repeat: -1, delay: 1 * k })
                .to(".text3", {
                    opacity: 0.1,
                    duration: duration1,
                    ease,
                })
                .to(".text3", {
                    y,
                    scale: 3,
                    opacity: 1,
                    duration: duration2,
                    ease,
                })
                .to(".text3", {
                    scale,
                    opacity: 0,
                    duration: duration3,
                    ease,
                });

            gsap.timeline({ repeat: -1, delay: 1.5 * k })
                .to(".text4", {
                    opacity: 0.1,
                    duration: duration1,
                    ease,
                })
                .to(".text4", {
                    y,
                    scale: 3,
                    opacity: 1,
                    duration: duration2,
                    ease,
                })
                .to(".text4", {
                    scale,
                    opacity: 0,
                    duration: duration3,
                    ease,
                });

            gsap.timeline({ repeat: -1, delay: 2 * k })
                .to(".text5", {
                    opacity: 0.1,
                    duration: duration1,
                    ease,
                })
                .to(".text5", {
                    y,
                    scale: 3,
                    opacity: 1,
                    duration: duration2,
                    ease,
                })
                .to(".text5", {
                    scale,
                    opacity: 0,
                    duration: duration3,
                    ease,
                });

            gsap.timeline({ repeat: -1, delay: 2.5 * k })
                .to(".text6", {
                    opacity: 0.1,
                    duration: duration1,
                    ease,
                })
                .to(".text6", {
                    y,
                    scale: 3,
                    opacity: 1,
                    duration: duration2,
                    ease,
                })
                .to(".text6", {
                    scale,
                    opacity: 0,
                    duration: duration3,
                    ease,
                });

        }, appRef);
        return () => ctx.revert();
    }, []);


    return (
        <div className={style.animatedText}
             ref={appRef}
        >
            <p className={clsx(style.text, "text1")}>Charlie</p>
            <p className={clsx(style.text, "text2")}>Charlie</p>
            <p className={clsx(style.text, "text3")}>Charlie</p>
            <p className={clsx(style.text, "text4")}>Charlie</p>
            <p className={clsx(style.text, "text5")}>Charlie</p>
            <p className={clsx(style.text, "text6")}>Charlie</p>
        </div>
    )
}
