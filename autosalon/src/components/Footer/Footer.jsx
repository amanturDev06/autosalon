import React from "react";
// import whatsappIcon from "../../assets/whatsapp.svg";
// import telegramIcon from "../../assets/telegram.svg";
// import instagramIcon from "../../assets/instagram.svg";
// import facebookIcon from "../../assets/facebook.svg";

const Footer = () => {
    return (
        <footer className="bg-[#004D4D] text-white px-[60px] py-[40px]">
            {/* Верхняя часть: лого, навигация, соцсети */}
            <div className="flex justify-between items-start mb-[40px]">
                {/* Логотип */}
                <div className="text-[28px] font-bold">лого</div>

                {/* Навигация */}
                <nav className="flex gap-[40px] text-[14px] font-light">
                    <a href="/" className="hover:underline text-white">Главная</a>
                    <a href="/catalog" className="hover:underline">Каталог</a>
                    <a href="/about" className="hover:underline">О нас</a>
                    <a href="/reviews" className="hover:underline">Отзывы</a>
                </nav>

                {/* Соцсети */}
                <div className="flex gap-3">

                </div>
            </div>

            {/* Линия и копирайт */}
            <hr className="border-gray-400 mb-[20px]" />
            <p className="text-[12px] text-gray-300 text-center">&copy; Copyright 2025, All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
