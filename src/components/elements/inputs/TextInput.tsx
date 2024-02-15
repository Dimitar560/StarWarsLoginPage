import styles from "./TextInput.module.css";

interface IProps {
    inputName: string;
    defaultText: string;
    inputType: "text" | "password";
    labelText: string;
}

export default function TextInput({ inputName, defaultText, inputType, labelText }: IProps) {
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
            />
        </div>
    );
}
