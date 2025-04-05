import Entrance from "./Pages/Auth/Entrance.jsx";
import {HomePage} from "./Pages/HomePage.jsx";
import Registration from "./Pages/Auth/Registration.jsx";
import About from "./Pages/About/About.jsx";
import Verification from "./Pages/Autorization/Verification.jsx";
import Password from "./Pages/Auth/Password.jsx";
import Advertising from "./Pages/Auth/Advertising.jsx";
import {Route, Routes} from "react-router-dom";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="auth-entrance" element={<Entrance />} />
                <Route path="/about" element={<About />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/verification" element={<Verification />} />
                <Route path="menegers" element={<Menegers />} />
                <Route path="auth-password" element={<Password />} />
                <Route path="auth-advertising" element={<Advertising />} />
            </Routes>
        </>
    );
}

export default App;
