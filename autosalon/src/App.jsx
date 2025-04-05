import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage.jsx';
import Registration from './Pages/Auth/Registration.jsx';
import Entrance from './Pages/Auth/Entrance.jsx';
import About from "./Pages/About/About.jsx";
import Verification from "./Pages/Autorization/Verification.jsx";
import Menegers from "./Pages/SuperAdmin/Menegers.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="admin" element={<Statistics />} /> */}
                {/* <Route path="admin/reklama" element={<Statistics />} /> */}
                {/*<Route path="auth-register" element={<Registration />} />*/}
                <Route path="auth-entrance" element={<Entrance />} />
                <Route path="/about" element={<About />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/verification" element={<Verification />} />
                <Route path="menegers" element={<Menegers />} />
            </Routes>
            {/*<div>hjbasfc</div>*/}
        </>
    );
}

export default App;
