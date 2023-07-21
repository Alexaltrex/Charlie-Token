import * as React from "react";
import {FC} from "react";
import style from "./ButtonCustom.module.scss"
import clsx from "clsx";

interface ButtonCustom extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label: string
    className?: string
}

export const ButtonCustom: FC<ButtonCustom> = ({
                                                   label,
                                                   className,
                                                   ...props
                                               }) => {
    return (
        <button className={clsx(
            style.buttonCustom,
            Boolean(className) && className
        )}
                {...props}
        >
            <p>{label}</p>
        </button>
    )
}
