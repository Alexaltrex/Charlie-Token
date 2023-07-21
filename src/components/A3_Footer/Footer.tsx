import * as React from "react";
import style from "./Footer.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import {HashLink} from "react-router-hash-link";
import {SocialLinks} from "../X_Common/SocialLinks/SocialLinks";

const text = "Charlie Token is not associated with any corporation and the token was made in part to show our love and support for public domain works. Please be aware that $CHARLIE is a meme token with no intrinsic value or expectation of financial return. It has been created out of love for the community and for entertainment purposes only."

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.inner}>

                <div className={style.topBlock}>

                    <div className={style.topBlock_logo}>
                        <div className={style.logo}>
                            {svgIcons.logo_footer}
                        </div>
                        <div className={style.socialIcons}>
                            <SocialLinks/>
                        </div>
                    </div>

                    <div className={style.topBlock_links}>
                        {
                            [
                                "About",
                                "How to buy",
                                "Tokenomics",
                                "Roadmap",
                                "FAQs",
                            ].map((link, key) => (
                                <HashLink to={`/#${link}`}
                                          className={style.link}
                                          key={key}
                                          smooth={true}
                                >
                                    {link}
                                </HashLink>
                            ))
                        }
                    </div>

                    <div className={style.topBlock_text}>
                        <p className={style.text}>{text}</p>
                        <div className={style.socialIcons}>
                            <SocialLinks/>
                        </div>
                    </div>

                </div>

                <div className={style.bottomBlock}>
                    <p>© 2023 by Charlie Token</p>
                    <p>All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
