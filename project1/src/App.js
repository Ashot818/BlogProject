import { Route, Routes } from "react-router-dom";
import "./App.css";
import CurrentBlog from "./components/CurrentBlog/CurrentBlog";
import LoginForm from "./components/Login/LoginForm";
import Main from "./components/Main/Main";
import Wrapper from "./pages/wrapper/Wrapper";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<Main />} />
        <Route path="/blog/:id" element={<CurrentBlog />} />
      </Route>
      <Route path="login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
