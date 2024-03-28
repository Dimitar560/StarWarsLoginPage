import { type MouseEventHandler, type ReactNode } from "react";
import styles from "./SubmitButton.module.css";

interface IProps {
    children: ReactNode;
    btnActive: boolean;
    clickHandler?: MouseEventHandler<HTMLButtonElement>;
}

export default function SubmitButton({ children, btnActive, clickHandler }: IProps) {
    return (
        <>
            {btnActive && (
                <button className={styles.btn} onClick={clickHandler}>
                    {children}
                </button>
            )}
            {!btnActive && (
                <button className={`${styles.btn} ${styles.disabled}`} disabled={true}>{children}</button>
            )}
        </>
    );
}
