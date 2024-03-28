import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import TablePage from "./components/TablePage/TablePage";
import About from "./components/About/About";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LoginForm />} />
				<Route path="/table" element={<TablePage />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
