import { useEffect, useState } from "react";
import {NavLink} from "react-router-dom";
import Search from "../../assets/search.png"
import Exit from "../../assets/Icon.svg"
import Settings from "../../assets/Icon (1).svg"
import Clients from "../../assets/Icon (2).svg"
import Moderation from "../../assets/Icon (3).svg"
import Actmenegers from "../../assets/Icon (4).svg"
import menegers from "../../assets/Icon (9).svg"
import Offers from "../../assets/Icon (6).svg"
import Ads from "../../assets/Icon (7).svg"
import statist from "../../assets/Icon (8).svg"
import DeleteIcon from "../../assets/Icon.svg";
import EditIcon from "../../assets/Icon (10).svg";
import Message from "../../assets/Icon (11).svg";
import bell from "../../assets/Icon (12).svg";
import light from "../../assets/Icon (13).svg";
import dark from "../../assets/Icon (14).svg";
const initialManagers = [
    {
        id: 1,
        name: "Максатбек казы Адний",
        email: "ace@gmail.com",
        phone: "+996900000001",
        hireDate: "2023-01-11",
        status: "Офлайн",
    },
    {
        id: 2,
        name: "Айтикеев Омурбек",
        email: "aitkeev_2310@gmail.com",
        phone: "+996900000001",
        hireDate: "2023-05-05",
        status: "Онлайн",
    },
];

export default function Managers() {
    const [managers, setManagers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newManager, setNewManager] = useState({
        name: "",
        email: "",
        phone: "",
        hireDate: "",
        status: "Онлайн",
    });

    useEffect(() => {
        const stored = localStorage.getItem("managers");
        if (stored) {
            setManagers(JSON.parse(stored));
        } else {
            setManagers(initialManagers);
            localStorage.setItem("managers", JSON.stringify(initialManagers));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("managers", JSON.stringify(managers));
    }, [managers]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewManager((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddManager = () => {
        const newId = Date.now();
        const newEntry = { id: newId, ...newManager };
        setManagers((prev) => [...prev, newEntry]);
        setNewManager({
            name: "",
            email: "",
            phone: "",
            hireDate: "",
            status: "Онлайн",
        });
        setIsModalOpen(false);
    };




    return (
        <div className="flex bg-[#EEF3F6] min-h-screen">
            {/* Sidebar */}
            <aside className="w-[360px] bg-white p-5 shadow h-[604px]">
                <h2 className="text-[52px] font-bold font-manrope mt-[0px] mb-[30px] ml-[40px]">
                    лого
                </h2>
                <ul className="space-y-2 text-[16px]">
                    {[
                        {icon: statist, label: "Статистика", path: "/statistics"},
                        {icon: Ads, label: "Реклама", path: "/ads"},
                        {icon: Offers, label: "Предложения", path: "/offers"},
                        {icon: menegers, label: "Менеджеры", path: "/Menegers"},
                        {icon: Actmenegers, label: "Активность менеджеров", path: "/ActevitiManegers"},
                        {icon: Moderation, label: "Модерация", path: "/moderation"},
                        {icon: Clients, label: "Взаимодействие с клиентами", path: "/clients"},
                        {icon: Settings, label: "Настройки", path: "/settings"},
                        {icon: Exit, label: "Выйти", path: "/logout"},
                    ].map(({icon, label, path}) => (
                        <li key={path} className="list-none">
                            <NavLink
                                to={path}
                                end
                                className={({isActive}) =>
                                    `sidebar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <img src={icon} alt={label} className="sidebar-icon"/>
                                <span>{label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>


            {/* Content */}
            <div className="flex-1 p-5">
                {/* Header */}
                <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow mb-6">
                    <div className="relative w-[552px] ml-[70px] mt-[10px]">
                        {/* Иконка поиска */}
                        <img
                            src={Search}
                            alt="Search"
                            className="absolute left-[540px] top-1/2 transform -translate-y-1/2 h-[24px] w-[24px]"
                        />
                        {/* Поле ввода */}
                        <input
                            type="text"
                            placeholder="Поиск"
                            className="pl-[24px] pr-4 w-full py-2 border rounded-[10px] h-[47px] text-[16px]"
                        />
                    </div>

                    <div className="flex items-center mt-[15px]">
                        <div
                            className="w-[76px] h-[46px] border border-gray-300 rounded-[8px] flex items-center justify-evenly mr-[20px]">
                            <div
                                className="w-[50%] h-full flex items-center justify-center cursor-pointer hover:bg-[#2CC295] hover:opacity-70 border-r border-gray-300"
                                onClick={() => console.log('Сообщения')}
                            >
                                <img
                                    src={light}
                                    alt="light"
                                    className="w-[24px] h-[24px]"
                                />
                            </div>
                            <div
                                className="w-[50%] h-full flex items-center justify-center cursor-pointer hover:bg-[#2CC295] hover:opacity-70"
                                onClick={() => console.log('Уведомления')}
                            >
                                <img
                                    src={dark}
                                    alt="dark"
                                    className="w-[24px] h-[24px]"
                                />
                            </div>
                        </div>

                        <div
                            className="w-[76px] h-[46px] border border-gray-300 rounded-[8px] flex items-center justify-evenly mr-[50px]">
                            <img
                                src={Message}
                                alt="Сообщения"
                                className="w-[24px] h-[24px] cursor-pointer hover:opacity-70"
                                onClick={() => console.log('Сообщения')}
                            />
                            <img
                                src={bell}
                                alt="Уведомления"
                                className="w-[24px] h-[24px] cursor-pointer hover:opacity-70"
                                onClick={() => console.log('Уведомления')}
                            />
                        </div>


                        {/* Блок профиля */}
                        <div className="flex items-center mr-[40px]">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600 font-medium text-sm">AN</span>
                            </div>
                            <div className="ml-2">
                                <span className="block text-[16px]">Aidana Nurgazina</span>
                                <small className="text-gray-500 text-[14px]">Суперадмин</small>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Section header */}
                <div className="bg-emerald w-[1082px] h-full mt-[40px] ml-[70px]">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Менеджеры</h2>
                        <button
                            className="bg-[#2DA57A] w-[135px] h-[42px] border-none px-4 py-2 mr-[50px] rounded-[16px]"
                            onClick={() => setIsModalOpen(true)}
                        >
                            + Добавить
                        </button>
                    </div>
                    <div className="bg-white rounded-2xl shadow p-4">
                        <div className="grid grid-cols-6 bg-[#f8f8f8] px-4 py-3 rounded-t-xl">
                        {["ФИО", "ПОЧТА", "НОМЕР ТЕЛЕФОНА", "ДАТА НАЙМА ", "СТАТУС"].map((header, index) => (
                                <div key={index} className="text-left text-[#A0A0A0]">
                                    {header}
                                </div>
                            ))}
                        </div>

                        <div className="overflow-x-auto">
                            <div className="mt-[20px] space-y-[15px]">
                                {managers.map((manager) => (
                                    <div
                                        key={manager.id}
                                        className="grid grid-cols-6 min-w-[600px] bg-white rounded-xl shadow px-4 py-3 items-center"
                                    >
                                        <div>{manager.name}</div>
                                        <div>{manager.email}</div>
                                        <div>{manager.phone}</div>
                                        <div>{manager.hireDate}</div>
                                        <div>{manager.status}</div>
                                        <div className="text-right mr-[50px] space-x-[5px]">
                                            <button className="hover:scale-110  transition rounded-[8px] h-[44px] w-[44px]">
                                                <img src={DeleteIcon} alt="Delete" className="w-[24px] h-[24px]"/>
                                            </button>
                                            <button className="hover:scale-110 transition rounded-[8px]  h-[44px] w-[44px]">
                                                <img src={EditIcon} alt="Edit" className="w-[24px] h-[24px]"/>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xl flex justify-center items-center">
                    <div
                        className="w-[650px] rounded-[20px] px-[60px] py-[50px] shadow-lg transform translate-x-[55%] translate-y-[15%]">
                        <h2 className="text-center text-[36px] font-normal mb-[60px]">Данные менеджера</h2>

                        <div className="space-y-[30px]">
                            {/* ФИО */}
                            <div className="flex items-center">
                                <label className="text-[#7B8E98] text-[20px] font-normal mr-[90px] w-[200px]">
                                    ФИО
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newManager.name}
                                    onChange={handleInputChange}
                                    className="w-[332px] h-[52px] border border-[#C4C4C4] rounded-[10px] px-[16px] text-[18px] font-normal focus:outline-none"
                                />
                            </div>

                            {/* ПОЧТА */}
                            <div className="flex items-center">
                                <label className="text-[#7B8E98] text-[20px] font-normal mr-[90px] w-[200px]">
                                    ПОЧТА
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={newManager.email}
                                    onChange={handleInputChange}
                                    className="w-[332px] h-[52px] border border-[#C4C4C4] rounded-[10px] px-[16px] text-[18px] font-normal focus:outline-none"
                                />
                            </div>

                            {/* НОМЕР ТЕЛЕФОНА */}
                            <div className="flex items-center">
                                <label className="text-[#7B8E98] text-[20px] font-normal mr-[90px] w-[200px]">
                                    НОМЕР ТЕЛЕФОНА
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={newManager.phone}
                                    onChange={handleInputChange}
                                    className="w-[332px] h-[52px] border border-[#C4C4C4] rounded-[10px] px-[16px] text-[18px] font-normal focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end mt-[40px] space-x-[20px]">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-[130px] h-[54px] rounded-[16px] border border-black text-[18px] hover:bg-[#e5e5e5] transition"
                            >
                                Отмена
                            </button>
                            <button
                                onClick={handleAddManager}
                                className="w-[130px] h-[54px] rounded-[16px] border-none bg-[#2DA57A] text-white text-[18px] hover:bg-[#21956E] transition"
                            >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
