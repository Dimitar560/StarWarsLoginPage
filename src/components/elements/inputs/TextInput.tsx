import { type ChangeEventHandler } from "react";
import styles from "./TextInput.module.css";

interface IProps {
	inputName: string;
	defaultText: string;
	inputType: "text" | "password";
	labelText: string;
	id: string;
	changeHandler: ChangeEventHandler<HTMLInputElement>;
	onEnterKey?: () => void;
}

export default function TextInput({
	inputName,
	defaultText,
	inputType,
	labelText,
	changeHandler,
	id,
	onEnterKey,
}: IProps) {
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
				id={id}
				onKeyDown={(e) => {
					onEnterKey && e.key === "Enter" && onEnterKey();
				}}
			/>
		</div>
	);
}
