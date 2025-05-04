    import { Route, Routes } from "react-router-dom";
    import HomePage from "./pages/HomePage.jsx"; // если он тоже есть
    import Entrance from "./Pages/Auth/Entrance.jsx";
    import Registration from "./Pages/Auth/Registration.jsx";
    import Password from "./Pages/Auth/Password.jsx";
    import Advertising from "./Pages/Auth/Advertising.jsx";
    import Verification from "./Pages/Autorization/Verification.jsx";
    import About from "./Pages/About/About.jsx";
    import Menegers from "./Pages/SuperAdmin/Menegers.jsx";
    import ManagerActivityPage from "./Pages/SuperAdmin/ManagerActivityPage.jsx";
    import Header from "./components/Header/Header.jsx";
    import Footer from "./components/Footer/Footer.jsx"


    function App() {
        return (
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth-entrance" element={<Entrance />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/verification" element={<Verification />} />
                    <Route path="/menegers" element={<Menegers />} />
                    <Route path="/auth-password" element={<Password />} />
                    <Route path="/auth-advertising" element={<Advertising />} />
                    <Route path="/ActevitiManegers" element={<ManagerActivityPage />} />
                </Routes>
                <Footer />
            </>
        );
    }


    export default App;