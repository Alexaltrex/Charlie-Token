import * as React from "react";
import style from "./Header.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {svgIcons} from "../../assets/svgIcons";
import {ButtonCustom} from "../X_Common/ButtonCustom/ButtonCustom";
import {HashLink} from 'react-router-hash-link';

export const Header = observer(() => {
    const {setBurgerMenu, setManifesto} = useStore();

    const onBurger = () => setBurgerMenu(true);
    const onManifesto = () => {
        console.log("onManifesto");
        setManifesto(true);
    };

    return (
        <header className={style.header}>
            <div className={style.inner}>

                <div className={style.logo}>
                    {svgIcons.logo_header}
                </div>

                <div className={style.links}>
                    {
                        [
                            "About",
                            //"Buy on Uniswap",
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

                <div className={style.buttons}>
                    <button className={style.manifesto}
                            onClick={onManifesto}
                    >
                        Read Manifesto
                    </button>

                    <ButtonCustom label="Buy on Uniswap"
                                  className={style.buyBtn}
                    />

                    <ButtonCustom label="Menu"
                                  onClick={onBurger}
                                  className={style.burgerBtn}
                    />
                </div>

            </div>
        </header>
    )
})
