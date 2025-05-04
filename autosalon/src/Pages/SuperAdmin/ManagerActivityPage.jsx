'use client';

import { useState } from 'react';
import dayjs from 'dayjs';
import {NavLink} from "react-router-dom";
import statist from "../../assets/Icon (8).svg";
import Ads from "../../assets/Icon (7).svg";
import Offers from "../../assets/Icon (6).svg";
import menegers from "../../assets/Icon (9).svg";
import Actmenegers from "../../assets/Icon (4).svg";
import Moderation from "../../assets/Icon (3).svg";
import Clients from "../../assets/Icon (2).svg";
import Settings from "../../assets/Icon (1).svg";
import Exit from "../../assets/Icon.svg";
import Search from "../../assets/search.png";
import light from "../../assets/Icon (13).svg";
import dark from "../../assets/Icon (14).svg";
import Message from "../../assets/Icon (11).svg";
import bell from "../../assets/Icon (12).svg";

const defaultData = [
    {
        name: 'Макасбек кызы Адина',
        ads: 12,
        adsCampaigns: 14,
        proposals: 6,
        lastLogin: '11.04.2025, 14:00',
    },
    {
        name: 'Айтикеев Омунурбек',
        ads: 20,
        adsCampaigns: 13,
        proposals: 9,
        lastLogin: '10.04.2025, 16:15',
    },
    {
        name: 'Исабеков Диас',
        ads: 10,
        adsCampaigns: 8,
        proposals: 10,
        lastLogin: '04.04.2025, 12:30',
    },
    {
        name: 'Камбарлиев Искак',
        ads: 15,
        adsCampaigns: 10,
        proposals: 12,
        lastLogin: '15.03.2025, 09:45',
    },
    {
        name: 'Нестеров Владислав',
        ads: 12,
        adsCampaigns: 11,
        proposals: 8,
        lastLogin: '01.01.2025, 08:00',
    },
];

const filters = ['Все', 'Сегодня', 'Неделя', 'Месяц', 'Год'];

export default function ManagerActivityPage() {
    const [filter, setFilter] = useState('Все');

    const filterByDate = (managers) => {
        const now = dayjs();

        return managers.filter((m) => {
            const loginDate = dayjs(m.lastLogin, 'DD.MM.YYYY, HH:mm');
            if (!loginDate.isValid()) return false;

            switch (filter) {
                case 'Сегодня':
                    return loginDate.isSame(now, 'day');
                case 'Неделя':
                    return loginDate.isAfter(now.subtract(7, 'day'));
                case 'Месяц':
                    return loginDate.isAfter(now.subtract(1, 'month'));
                case 'Год':
                    return loginDate.isAfter(now.subtract(1, 'year'));
                default:
                    return true;
            }
        });
    };

    const filteredData = filterByDate(defaultData);

    return (
        <div className="flex min-h-screen bg-[#F5F5F5]">
            <aside className="w-[360px] bg-white p-5 shadow h-[604px]">
                <h2 className="text-[52px] font-semibold  mt-[0px] mb-[30px] ml-[40px]">
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
            <div className="flex-1 p-5">
                <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow mb-6">
                    <div className="relative w-[552px] ml-[70px] mt-[10px]">
                        <img
                            src={Search}
                            alt="Search"
                            className="absolute left-[540px] top-1/2 transform -translate-y-1/2 h-[24px] w-[24px]"
                        />
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

                {/* Таблица активности */}
                <div className="bg-white ml-[70px] mt-[35px] p-6 rounded-md font-Nunito shadow">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">Активность действий менеджеров</h2>
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="border-none rounded-[12px] mr-[50px]  px-4 py-2 bg-white text-sm"
                        >
                            {filters.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>


                    <div
                        className="grid grid-cols-5 bg-[#F8F8F8] px-4 py-3 rounded-t-xl text-[#A0A0A0] font-semibold text-sm">
                        {["МЕНЕДЖЕР", "ОБЪЯВЛЕНИЯ", "РЕКЛАМА", "ПРЕДЛОЖЕНИЯ", "ПОСЛЕДНИЙ ВХОД"].map((header, index) => (
                            <div key={index} className="text-left">{header}</div>
                        ))}
                    </div>

                    {/* Контент */}
                    {filteredData.map((manager, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-5 bg-[#F9F9F9] px-4 py-3 text-sm"
                        >

                            <div>{manager.name}</div>
                            <div>{manager.ads}</div>
                            <div>{manager.adsCampaigns}</div>
                            <div>{manager.proposals}</div>
                            <div>{manager.lastLogin}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


