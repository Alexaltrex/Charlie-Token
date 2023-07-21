import * as React from "react";
import style from "./CharlieToken.module.scss";
import {ButtonCustom} from "../X_Common/ButtonCustom/ButtonCustom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import charlie from "../../assets/gif/charlie.gif";

export const CharlieToken = observer(() => {
    const {setManifesto } = useStore();
    const onManifesto = () => setManifesto(true);
    // mobile
    // 90 x 231
    // h = 231 + 16 + 211

    // desktop
    // 220 x 565
    // 565 + 85 + 140

    return (
        <div className={style.charlieToken}>
            <div className={style.inner}>

                {/*<h1 className={style.title}>Charlie Token</h1>*/}
                <div className={style.imgs}>
                    <img src={charlie} alt="" className={style.img}/>
                    <img src={charlie} alt="" className={style.img}/>
                    <img src={charlie} alt="" className={style.img}/>
                </div>


                <div className={style.buttons}>
                    <ButtonCustom label="Buy on Uniswap"
                                  className={style.buyBtn}
                    />

                    <button className={style.manifesto}
                            onClick={onManifesto}
                    >
                        Read Manifesto
                    </button>
                </div>

            </div>
        </div>
    )
})
