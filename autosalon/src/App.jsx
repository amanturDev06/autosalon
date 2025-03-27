import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage.jsx';
import Registration from './Pages/Auth/Registration.jsx';
import Entrance from './Pages/Auth/Entrance.jsx';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="admin" element={<Statistics />} /> */}
                {/* <Route path="admin/reklama" element={<Statistics />} /> */}
                {/*<Route path="auth-register" element={<Registration />} />*/}
                <Route path="auth-entrance" element={<Entrance />} />
            </Routes>
            {/*<div>hjbasfc</div>*/}
        </>
    );
}

export default App;
