import * as React from "react";
import style from "./Faq.module.scss";
import {items} from "./items";
import {Item} from "./Item/Item";

export const FaqComponent = () => {
    return (
        <div className={style.faq} id="FAQs">
            <h2 className={style.title}>FAQ</h2>

            <div className={style.items}>
                <div className={style.inner}>
                    {
                        items.map((item, key) => (
                            <Item key={key} {...item}/>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
