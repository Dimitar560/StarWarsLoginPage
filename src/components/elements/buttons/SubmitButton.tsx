import { type ReactNode } from "react";
import styles from "./SubmitButton.module.css";

interface IProps {
    children: ReactNode;
}

export default function SubmitButton({ children }: IProps) {
    return <button className={styles.btn}>{children}</button>;
}
