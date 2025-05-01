import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage.jsx';
import Registration from './Pages/Auth/Registration.jsx';
import Entrance from './Pages/Auth/Entrance.jsx';
import Password from "./Pages/Auth/Password.jsx";
import Advertising from "./Pages/Auth/Advertising.jsx";
import Interaction from "./Pages/Auth/Interaction.jsx"
import Settings from "./Pages/Auth/Settings.jsx";




function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="admin" element={<Statistics />} /> */}
                {/* <Route path="admin/reklama" element={<Statistics />} /> */}
                {/*<Route path="auth-register" element={<Registration />} />*/}
                <Route path="auth-entrance" element={<Entrance />} />
                <Route path="auth-password" element={<Password />} />
                <Route path="auth-advertising" element={<Advertising />} />
                <Route path="auth-interaction" element={<Interaction />} />
                <Route path="auth-settings" element={<Settings />} />

            </Routes>
        </>
    );
}

export default App;
