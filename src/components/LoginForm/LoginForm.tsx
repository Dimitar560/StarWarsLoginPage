import { useEffect, useState } from "react";
import SubmitButton from "../elements/buttons/SubmitButton";
import TextInput from "../elements/inputs/TextInput";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [active, setActive] = useState(false);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const simulateLogin = () => {
		const correctUsername = "admin"; // replace with actual username
		const correctPassword = "password"; // replace with actual password

		if (username === correctUsername && password === correctPassword) {
			navigate("/table");
		} else {
			setError("Invalid username or password");
		}
	};
    history.pushState(null, "", location.href);
	useEffect(() => {
		let activeBtn = false;
		if (username !== "" && password !== "") {
			activeBtn = true;
		} else {
			activeBtn = false;
		}
		setActive(activeBtn);
	}, [username, password]);

	return (
		<section className={styles.wrap}>
			<h1>Star Wars Login</h1>
			{error && <p>{error}</p>}
			<TextInput
				inputName="username"
				labelText="Username"
				inputType={"text"}
				defaultText="Start typing..."
				id="username"
				changeHandler={(e) => setUsername(e.target.value)}
				onEnterKey={() => simulateLogin()}
			/>
			<TextInput
				inputName="password"
				labelText="Password"
				inputType={"password"}
				defaultText="Start typing..."
				id="password"
				changeHandler={(e) => setPassword(e.target.value)}
				onEnterKey={() => simulateLogin()}
			/>
			<SubmitButton btnActive={active} clickHandler={simulateLogin}>
				{"Submit"}
			</SubmitButton>
		</section>
	);
}
