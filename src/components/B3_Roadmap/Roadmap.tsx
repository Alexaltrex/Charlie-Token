import * as React from "react";
import style from "./Roadmap.module.scss";
import roadmap_mobile_top from "../../assets/jpeg/roadmap_mobile_top.jpg";
import roadmap_desktop_top from "../../assets/jpeg/roadmap_desktop_top.jpg";
import {items} from "./items";

export const Roadmap = () => {
    return (
        <div className={style.roadmap} id="Roadmap">

            <img src={roadmap_mobile_top} alt="" className={style.roadmap_mobile_top}/>
            <img src={roadmap_desktop_top} alt="" className={style.roadmap_desktop_top}/>

            <h2 className={style.title}>
                Roadmap
            </h2>

            <p className={style.text}>
                Charlie Token embarks on a journey to foster diversity and inclusion, cultivating an environment where
                investment and meme culture thrive in the crypto realm. With a focus on building a resilient community,
                we embrace the power of memes to drive our success.
            </p>

            <div className={style.items}>
                {
                    items.map(({label, texts}, key) => (
                        <div className={style.item} key={key}>
                            <p className={style.label}>{label}</p>
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
    )
}
