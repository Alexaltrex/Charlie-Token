import * as React from "react";
import style from "./About.module.scss";
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {items} from "./items";
import about_mobile_top from "../../assets/jpeg/about_mobile_top.jpg";
import about_desktop_top from "../../assets/jpeg/about_desktop_top.jpg";
import about_desktop_bottom from "../../assets/jpeg/about_desktop_bottom.jpg";
import {AnimatedText} from "./AnimatedText/AnimatedText";
import gradient from "../../assets/jpeg/roadmap_mobile_top.jpg";
import left1 from "../../assets/png/about_left_1.png";
import right1 from "../../assets/png/about_right_1.png";
import right2 from "../../assets/png/about_right_2.png";
import {useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap";
import clsx from "clsx";
import disclaimerSrc from "../../assets/png/disclaimer.png"
import {styled} from '@mui/material/styles';
import {svgIcons} from "../../assets/svgIcons";
import {Tooltip, tooltipClasses, TooltipProps} from "@mui/material";
import Fade from "@mui/material/Fade";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import back from "../../assets/png/square_btn.png";
import arrow from "../../assets/png/btn_arrow_right.png";

//========= TOOLTIP CUSTOM =========//
const TooltipCustom = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {},
}));

//=============== ABOUT ===============//
export const About = observer(() => {
    const {disclaimer, setDisclaimer} = useStore();

    const appRef = useRef<HTMLDivElement>(null!);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.to(".left1", {
                y: -100,
                duration: 9,
                ease: "none",
                repeat: -1,
                yoyo: true,
            })

            gsap.to(".right1", {
                y: 100,
                duration: 9,
                ease: "none",
                repeat: -1,
                yoyo: true,
                delay: 0,
            })

            gsap.to(".right2", {
                y: -100,
                duration: 9,
                ease: "none",
                repeat: -1,
                yoyo: true,
                delay: 0,
            })

            gsap.timeline({repeat: -1})
                .to(".heads_inner:nth-child(1)", {
                    yPercent: 100,
                    duration: 20,
                    ease: "none",
                })
                .set(".heads_inner:nth-child(1)", {
                    yPercent: -100,
                })
                .to(".heads_inner:nth-child(1)", {
                    yPercent: 0,
                    duration: 20,
                    ease: "none",
                });

            gsap.timeline({repeat: -1})
                .set(".heads_inner:nth-child(2)", {
                    yPercent: -100,
                })
                .to(".heads_inner:nth-child(2)", {
                    yPercent: 0,
                    duration: 20,
                    ease: "none",
                })

                .to(".heads_inner:nth-child(2)", {
                    yPercent: 100,
                    duration: 20,
                    ease: "none",
                });

        }, appRef);
        return () => ctx.revert();
    }, []);

    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [index, setIndex] = useState(0);
    const onSlidePrev = () => swiper?.slidePrev();
    const onSlideNext = () => swiper?.slideNext();

    return (
        <div className={style.about}
             ref={appRef}
             id="About"
        >

            <img src={about_desktop_top} alt="" className={style.gradient_top}/>
            <img src={about_desktop_bottom} alt="" className={style.gradient_bottom}/>

            <div className={style.top}>

                <img src={about_mobile_top} alt="" className={style.about_mobile_top}/>

                {/*<div className={style.sliderButtons}>*/}
                {/*    <button className={clsx(style.btn, style.btn_left)}*/}
                {/*            onClick={onSlidePrev}*/}
                {/*            disabled={index === 0}*/}
                {/*    >*/}
                {/*        <img src={back} alt="" className={style.back}/>*/}
                {/*        <img src={arrow} alt="" className={style.arrow}/>*/}
                {/*    </button>*/}

                {/*    <button className={clsx(style.btn, style.btn_right)}*/}
                {/*            onClick={onSlideNext}*/}
                {/*            disabled={index === items.length - 1}*/}
                {/*    >*/}
                {/*        <img src={back} alt="" className={style.back}/>*/}
                {/*        <img src={arrow} alt="" className={style.arrow}/>*/}
                {/*    </button>*/}
                {/*</div>*/}

                <Swiper slidesPerView={1}
                        className={style.swiper}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        onSlideChange={swiper => setIndex(swiper.realIndex)}
                >
                    {
                        items.map(({label, texts}, key) => (
                            <SwiperSlide key={key} className={style.slide}>
                                <p className={style.label}>
                                    <span>{label}</span>
                                    {
                                        key === 0 && (
                                            <button className={style.disclaimer}
                                                    onClick={() => setDisclaimer(true)}
                                            >
                                                <img src={disclaimerSrc} alt=""/>
                                            </button>
                                        )
                                    }
                                </p>
                                <div className={style.texts}>
                                    {
                                        texts.map((text, key) => (
                                            <p key={key}>{text}</p>
                                        ))
                                    }
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>


                <div className={style.navigation}>
                    <div className={style.base}/>

                    <div>
                        {
                            [0, 1, 2].map(index => (
                                <div className={style.dot}
                                     key={index}
                                />
                            ))
                        }
                    </div>

                    <div>
                        {
                            [0, 1, 2].map(index => (
                                <div className={style.btn}
                                     key={index}
                                     onClick={() => {
                                         swiper?.slideTo(index);
                                     }}
                                />
                            ))
                        }
                    </div>

                    <div className={style.line}
                         style={{
                             width: `${60 + index * 100}px`
                         }}
                    />

                    <div className={style.ball}
                         style={{
                             left: `${60 + index * 100}px`
                         }}
                    >
                    </div>

                </div>

                <div className={style.items}>
                    {
                        items.map(({label, texts}, key) => (
                            <div key={key} className={style.item}>
                                <p className={style.label}>
                                    <span>{label}</span>
                                    {
                                        key === 0 && (
                                            <TooltipCustom title={
                                                <div className={style.tooltipContent}>
                                                    <p className={style.tooltipContent_label}>
                                                        Disclaimer:
                                                    </p>
                                                    <p className={style.tooltipContent_text}>
                                                        Charlie Token investment can cause bursts of hysterical laughter
                                                        and the urgent need to share cryptocurrency jokes at social
                                                        gatherings.
                                                    </p>
                                                </div>
                                            }
                                                           sx={{
                                                               '& .MuiTooltip-tooltip': {
                                                                   backgroundColor: 'transparent',
                                                                   padding: 0,
                                                                   maxWidth: "none"
                                                               },
                                                           }}
                                                           placement='top'
                                                           TransitionComponent={Fade}
                                                //open={true}
                                            >
                                                <button className={style.disclaimer}>
                                                    <img src={disclaimerSrc} alt=""/>
                                                </button>
                                            </TooltipCustom>


                                        )
                                    }
                                </p>
                                <div className={style.texts}>
                                    {
                                        texts.map((text, key) => (
                                            <p key={key}>{text}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className={style.bottom}>
                <img src={gradient} alt="" className={style.gradient}/>
                <AnimatedText/>
                <img src={left1} alt="" className={clsx(style.left1, "left1")}/>
                <img src={right1} alt="" className={clsx(style.right1, "right1")}/>
                <img src={right2} alt="" className={clsx(style.right2, "right2")}/>

                <div className={style.heads}>
                    <div className={clsx(style.heads_inner, "heads_inner")}>
                        {svgIcons.animatedHead}
                        {svgIcons.animatedHead}
                        {svgIcons.animatedHead}
                        {svgIcons.animatedHead}
                        {svgIcons.animatedHead}
                        {svgIcons.animatedHead}
                    </div>
                    <div className={clsx(style.heads_inner, "heads_inner")}>
                        {svgIcons.animatedHead}
                        {svgIcons.animatedHead}
                        {svgIcons.animatedHead}
                        {svgIcons.animatedHead}
                        {svgIcons.animatedHead}
                        {svgIcons.animatedHead}
                    </div>
                </div>
            </div>

        </div>
    )
})
