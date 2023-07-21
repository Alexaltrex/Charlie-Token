import {Modal} from "@mui/material";
import * as React from "react";
import {observer} from "mobx-react-lite";
import style from "./Disclaimer.module.scss";
import {useStore} from "../../store/useStore";
import {svgIcons} from "../../assets/svgIcons";


export const Disclaimer = observer(() => {
    const { disclaimer, setDisclaimer } = useStore();
    const onClose = () => setDisclaimer(false);

    return (
        <Modal
            sx={{
                '& .MuiBackdrop-root': {
                    //backgroundColor: 'green',
                },
            }}
            open={disclaimer}
            onClose={onClose}
            className={style.disclaimer}
        >

            <div className={style.card}>

                    <button className={style.closeBtn}
                            onClick={onClose}
                    >
                        <span>x</span>
                    </button>

                    <p className={style.label}>
                        Disclaimer:
                    </p>
                    <p className={style.text}>
                        Charlie Token investment can cause bursts of hysterical laughter
                        and the urgent need to share cryptocurrency jokes at social
                        gatherings.
                    </p>


                </div>

        </Modal>
    )
})
