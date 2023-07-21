import * as React from "react";
import style from "./SocialLinks.module.scss"
import twitter from "../../../assets/png/twitter.png";
import telegram from "../../../assets/png/telegram.png";

export const SocialLinks = () => {
    return (
        <div className={style.socialLinks}>
            {
                [
                    {src: telegram, href: "https://t.me/charlietoken"},
                    {src: twitter, href: "https://twitter.com/CharlieTokenETH"},
                ].map(({src, href}, key) => (
                    <a href={href}
                       className={style.link}
                       target="_blank"
                       rel="noopener noreferrer nofollow"
                       key={key}
                    >
                        <img src={src} alt=""/>
                    </a>
                ))
            }
        </div>
    )
}
