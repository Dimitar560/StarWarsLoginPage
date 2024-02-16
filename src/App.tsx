import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import TablePage from "./components/TablePage/TablePage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/table" element={<TablePage />} />
            </Routes>
        </>
    );
}

export default App;
