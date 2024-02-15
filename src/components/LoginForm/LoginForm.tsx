import TextInput from "../inputs/TextInput";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
    return (
        <section className={styles.wrap}>
            <h1>Star Wars Login</h1>
            <TextInput
                inputName="username"
                labelText="Username"
                inputType={"text"}
                defaultText="Start typing..."
            />
            <TextInput
                inputName="password"
                labelText="Password"
                inputType={"password"}
                defaultText="Start typing..."
            />
        </section>
    );
}
