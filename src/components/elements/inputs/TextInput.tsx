import {type ChangeEventHandler } from "react";
import styles from "./TextInput.module.css";

interface IProps {
    inputName: string;
    defaultText: string;
    inputType: "text" | "password";
    labelText: string;
    changeHandler: ChangeEventHandler<HTMLInputElement>
}

export default function TextInput({ inputName, defaultText, inputType, labelText, changeHandler }: IProps) {
    return (
        <div className={styles.inputWrap}>
            <label className={styles.inputLabel} htmlFor={inputName}>
                {labelText}
            </label>
            <input
                className={styles.inp}
                placeholder={defaultText}
                name={inputName}
                type={inputType}
                onChange={changeHandler}
            />
        </div>
    );
}
