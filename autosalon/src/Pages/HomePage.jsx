import {Graphycs} from "../components/admin/Graphycs.jsx";
import {useNavigate} from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div>
            {/*<Graphycs />*/}
            <div>
                <p onClick={() => navigate('/auth-entrance')}>Login Page</p>
            </div>
        </div>
    )
}