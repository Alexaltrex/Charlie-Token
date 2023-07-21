import * as React from "react";
import style from "./Tokenomics.module.scss";
import diagram from "../../assets/png/diagram.png";
import {svgIcons} from "../../assets/svgIcons";
import {items} from "./items";

export const Tokenomics = () => {
    return (
        <div className={style.tokenomics} id="Tokenomics">

            <h2 className={style.title}>
                Tokenomics
            </h2>

            <p className={style.description}>
                Charlie Token's goal is to create a vibrant community and accelerate development through thoughtful
                marketing, airdrops, exchange listings, and a well-planned distribution of tokens for liquidity.
            </p>

            <div className={style.properties}>
                {
                    [
                        {label: "Total Supply", value: "100T"},
                        {label: "Transaction Tax", value: "1%"},
                        {label: "Liquidity Lock", value: "1 Year"},
                    ].map(({label, value}, key) => (
                        <div className={style.item} key={key}>
                            <span>{`${label} - ${value}`}</span>
                            {/*<span> - </span>*/}
                            {/*<span>{value}</span>*/}
                        </div>
                    ))
                }
            </div>

            <div className={style.bottomBlock}>
                <img src={diagram} alt="" className={style.diagram}/>
                <div className={style.items}>
                    {
                        items.map(({ value, label }, key) => (
                            <div className={style.item} key={key}>
                                {svgIcons.charlie_head}
                                <div className={style.texts}>
                                    <p className={style.value}>{value}</p>
                                    <p className={style.label}>{label}</p>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}
