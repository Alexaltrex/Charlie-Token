import * as React from "react";
import style from "./Item.module.scss";
import {IFaqItem} from "../items";
import {FC, useState} from "react";
import arrow_down from "../../../assets/png/arrow_down.png";
import {Collapse} from "@mui/material";
import clsx from "clsx";

interface IItem extends IFaqItem {

}

export const Item: FC<IItem> = ({question, answer}) => {
    const [open, setOpen] = useState(false)
    const onClick = () => setOpen(!open);

    return (
        <div className={clsx({
            [style.item]: true,
            [style.item_open]: open,
        })}
             onClick={onClick}
        >
            <div className={style.top}>
                <p className={style.question}>{question}</p>
                <img src={arrow_down} alt="" className={style.arrow}/>
            </div>


            <Collapse in={open}>
                <p className={style.answer}>{answer}</p>
            </Collapse>

        </div>
    )
}
