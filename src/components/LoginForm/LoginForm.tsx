import { useEffect, useState } from "react";
import SubmitButton from "../elements/buttons/SubmitButton";
import TextInput from "../elements/inputs/TextInput";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [active, setActive] = useState(false);

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
            <TextInput
                inputName="username"
                labelText="Username"
                inputType={"text"}
                defaultText="Start typing..."
                changeHandler={(e) => setUsername(e.target.value)}
            />
            <TextInput
                inputName="password"
                labelText="Password"
                inputType={"password"}
                defaultText="Start typing..."
                changeHandler={(e) => setPassword(e.target.value)}
            />
            <SubmitButton btnActive={active} clickHandler={() => console.log("Click")}>
                {"Submit"}
            </SubmitButton>
        </section>
    );
}
