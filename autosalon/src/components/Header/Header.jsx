import { NavLink, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import light from "../../assets/Icon (13).svg";
import dark from "../../assets/Icon (14).svg";

const Header = () => {
    const location = useLocation();

    // Показываем хедер только на главной странице
    if (location.pathname !== "/") return null;

    return (
        <header className="flex items-center justify-between px-[60px] py-4 bg-[#F4FAFA] shadow-sm">
            {/* Логотип */}
            <div className="text-[28px] font-bold text-[#2B2B2B]">ЛОГО</div>

            {/* Навигация */}
            <nav className="flex gap-[40px]">
                {[
                    { label: "Главная", path: "/" },
                    { label: "Каталог", path: "/catalog" },
                    { label: "О нас", path: "/about" },
                    { label: "Отзывы", path: "/reviews" },
                ].map(({ label, path }) => (
                    <NavLink
                        key={path}
                        to={path}
                        style={({ isActive }) => ({
                            textDecoration: "none",
                            color: isActive ? "#5BD78E" : "#000000",
                            width: "60px",
                            height: "22px",
                            fontFamily: "Nunito, sans-serif",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                        })}
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>

            {/* Язык, тема, кнопки */}
            <div className="flex items-center gap-[16px]">
                {/* Язык */}
                <div className="flex items-center gap-[6px] text-sm font-nunito text-[#2B2B2B]">
                    <Globe className="w-[20px] h-[20px]" />
                    <span>РУ</span>
                </div>

                {/* Переключатель темы */}
                <div className="w-[76px] h-[46px] border border-gray-300 rounded-[8px] flex items-center justify-evenly mr-[20px]">
                    <div
                        className="w-[54px] h-[50px] flex items-center justify-center cursor-pointer hover:bg-[#2CC295] hover:opacity-70 border-r border-gray-300"
                        onClick={() => console.log("Сообщения")}
                    >
                        <img src={light} alt="light" className="w-[24px] h-[24px]" />
                    </div>
                    <div
                        className="w-[54px] h-[50px] flex items-center justify-center cursor-pointer hover:bg-[#2CC295] hover:opacity-70"
                        onClick={() => console.log("Уведомления")}
                    >
                        <img src={dark} alt="dark" className="w-[24px] h-[24px]" />
                    </div>
                </div>

                {/* Кнопки */}
                <button className="text-[#2B2B2B] w-[144px] h-[47px] border border-[#2B2B2B] rounded-[16px] px-[16px] py-[6px] text-sm">
                    Регистрация
                </button>
                <button className="bg-[#2CC295] w-[94px] h-[47px] border-none text-white rounded-[16px] px-[16px] py-[6px] text-sm">
                    Войти
                </button>
            </div>
        </header>
    );
};

export default Header;

