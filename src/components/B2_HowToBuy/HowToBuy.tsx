import * as React from "react";
import style from "./HowToBuy.module.scss";
// import clsx from "clsx";
// import back from "../../assets/png/square_btn.png";
// import arrow from "../../assets/png/btn_arrow_right.png";
// import roadmap_item from "../../assets/jpeg/roadmap_item.jpg";
// import {items} from "./items";
// import lineDesktop from "../../assets/png/howToBuy_line_desktop.png";
// import lineMobile from "../../assets/png/howToBuy_line_mobile.png";
// import {Swiper, SwiperSlide, SwiperClass} from 'swiper/react';
import 'swiper/css';
import {svgIcons} from "../../assets/svgIcons";
import {useState} from "react";
import src0 from "../../assets/jpeg/buy_0.jpg";
import src1 from "../../assets/jpeg/buy_1.jpg";
import src2 from "../../assets/jpeg/buy_2.jpg";
import {ButtonCustom} from "../X_Common/ButtonCustom/ButtonCustom";

export const HowToBuy = () => {
    // const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    // const onSlidePrev = () => swiper?.slidePrev();
    // const onSlideNext = () => swiper?.slideNext();
    // const [index, setIndex] = useState(0);

    const [copied, setCopied] = useState(false);
    const address = "To Be Announced"
    const onCopyHandler = () => {
        if (!copied) {
            setCopied(true);
            navigator.clipboard.writeText(address);
            setTimeout(() => {
                setCopied(false);
            }, 2000)
        }
    }


    return (
        <div className={style.howToBuy} id="Buy on Uniswap">

            <div className={style.inner}>

                <h2 className={style.title}>
                    Buy on Uniswap
                </h2>

                <div className={style.contract}>
                    <p className={style.label}>Contract:</p>
                    <div className={style.addressRow}>
                        <p className={style.address}>{address}</p>
                        <button className={style.copyBtn}
                                onClick={onCopyHandler}
                        >
                            {copied ? svgIcons.checked : svgIcons.copy}
                        </button>
                    </div>
                </div>

                <p className={style.description}>
                    Recommended Slippage - 2 to 3%
                </p>

                <div className={style.icons}>
                    {
                        [src0, src1, src2].map((src, key) => (
                            <img src={src} alt="" key={key} className={style.icon}/>
                        ))
                    }
                </div>

                <ButtonCustom label="Buy on Uniswap" className={style.btn}/>



            </div>

            {/*<div className={style.top}>*/}
            {/*    <div className={style.inner}>*/}
            {/*        <button className={clsx(style.btn, style.btn_left)}*/}
            {/*                onClick={onSlidePrev}*/}
            {/*                disabled={index === 0}*/}
            {/*        >*/}
            {/*            <img src={back} alt="" className={style.back}/>*/}
            {/*            <img src={arrow} alt="" className={style.arrow}/>*/}
            {/*        </button>*/}

            {/*        <button className={clsx(style.btn, style.btn_right)}*/}
            {/*                onClick={onSlideNext}*/}
            {/*                disabled={index === 8}*/}
            {/*        >*/}
            {/*            <img src={back} alt="" className={style.back}/>*/}
            {/*            <img src={arrow} alt="" className={style.arrow}/>*/}
            {/*        </button>*/}

            {/*        <p className={style.text}>*/}
            {/*            Here's a step-by-step guide on how to buy Charlie Token ($CHARLIE) on the Ethereum network using*/}
            {/*            Uniswap:*/}
            {/*        </p>*/}

            {/*        <p className={style.prerequisites}>*/}
            {/*            <span>Prerequisites</span>: An Ethereum wallet (e.g., MetaMask/Trust Wallet) with ETH in it.*/}
            {/*            Ensure that your*/}
            {/*            wallet is connected to the Ethereum mainet.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<Swiper className={style.sliderMobile}*/}
            {/*        slidesPerView="auto"*/}
            {/*>*/}
            {/*    {*/}
            {/*        items.map(({step, label, text}, key) => (*/}
            {/*            <SwiperSlide key={key}*/}
            {/*                         className={style.slide}*/}
            {/*            >*/}
            {/*                <img src={lineMobile} alt="" className={style.line}/>*/}

            {/*                <div className={style.step}>*/}
            {/*                    <img src={roadmap_item} alt="" className={style.back}/>*/}
            {/*                    <p>{step}</p>*/}
            {/*                </div>*/}

            {/*                <p className={style.label}>{label}</p>*/}
            {/*                <p className={style.text}>{text}</p>*/}
            {/*            </SwiperSlide>*/}
            {/*        ))*/}
            {/*    }*/}

            {/*</Swiper>*/}

            {/*<Swiper className={style.sliderDesktop}*/}
            {/*        slidesPerView={3}*/}
            {/*        allowTouchMove={false}*/}
            {/*        onSwiper={(swiper) => setSwiper(swiper)}*/}
            {/*        onSlideChange={swiper => setIndex(swiper.realIndex)}*/}
            {/*>*/}

            {/*    /!*<img src={lineDesktop} alt="" className={style.line}/>*!/*/}

            {/*    {*/}
            {/*        items.map(({step, label, text}, key) => (*/}
            {/*            <SwiperSlide key={key}*/}
            {/*                         className={style.item}*/}
            {/*            >*/}
            {/*                <img src={lineMobile} alt="" className={style.line}/>*/}

            {/*                <div className={style.step}>*/}
            {/*                    <img src={roadmap_item} alt="" className={style.back}/>*/}
            {/*                    <p>{step}</p>*/}
            {/*                </div>*/}

            {/*                <p className={style.label}>{label}</p>*/}
            {/*                <p className={style.text}>{text}</p>*/}
            {/*            </SwiperSlide>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</Swiper>*/}


        </div>
    )
}
