import * as React from "react";
import style from "./BurgerMenu.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import clsx from "clsx";
import {HashLink} from "react-router-hash-link";
import {ButtonCustom} from "../X_Common/ButtonCustom/ButtonCustom";
import {SocialLinks} from "../X_Common/SocialLinks/SocialLinks";

export const BurgerMenu = observer(() => {
    const {burgerMenu, setBurgerMenu, setManifesto } = useStore();
    const onClose = () => setBurgerMenu(false);
    const onManifesto = () => {
        setBurgerMenu(false);
        setManifesto(true);
    };
    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_open]: burgerMenu,
        })}>
            <button className={style.closeBtn}
                    onClick={onClose}
            >
                <span>X</span>
            </button>

            <div className={style.top}>

                <div className={style.links}>
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
                                      onClick={onClose}
                            >
                                {link}
                            </HashLink>
                        ))
                    }
                </div>

                <ButtonCustom label="Buy on Uniswap"
                              className={style.buyBtn}
                />

                <button className={style.manifesto}
                        onClick={onManifesto}
                >
                    Read Manifesto
                </button>

            </div>

            <div className={style.bottom}>
                <div className={style.left}>
                    <p>© 2023 by Charlie Token</p>
                    <p>All Rights Reserved</p>
                </div>

                <SocialLinks/>
            </div>


        </div>
    )
})
