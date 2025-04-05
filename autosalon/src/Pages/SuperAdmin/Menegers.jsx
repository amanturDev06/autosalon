import { useEffect, useState } from "react";

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
            <aside className="w-[250px] bg-white p-5 shadow h-screen">
                <h2 className="text-2xl font-bold mb-5 ml-2">ЛОГО</h2>
                <ul className="space-y-2 text-[16px]">
                    {[
                        "📊 Статистика",
                        "📢 Реклама",
                        "📋 Предложения",
                        "👤 Менеджеры",
                        "⚡ Активность менеджеров",
                        "🛠 Модерация",
                        "💬 Взаимодействие с клиентами",
                        "⚙️ Настройки",
                        "🚪 Выйти",
                    ].map((item, index) => (
                        <li
                            key={index}
                            className={`px-4 py-3 rounded-lg cursor-pointer ${
                                item.includes("Менеджеры")
                                    ? "bg-[#2DA57A] text-white font-bold"
                                    : "hover:bg-green-100"
                            }`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Content */}
            <div className="flex-1 p-5">
                {/* Header */}
                <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow mb-6">
                    <input
                        type="text"
                        placeholder="🔍 Поиск"
                        className="px-4 py-2 border rounded-lg w-64"
                    />
                    <div className="flex items-center space-x-4">
                        <button>🌙</button>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-300" />
                            <div className="ml-2">
                                <span className="block">Aidana Nurgazina</span>
                                <small className="text-gray-500">Суперадмин</small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Менеджеры</h2>
                    <button
                        className="bg-[#2DA57A] text-white px-4 py-2 rounded-lg"
                        onClick={() => setIsModalOpen(true)}
                    >
                        + Добавить
                    </button>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow p-4">
                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="bg-[#f8f8f8]">
                            {[
                                "ФИО",
                                "Почта",
                                "Номер телефона",
                                "Дата найма",
                                "Статус",
                                "Действия",
                            ].map((header, index) => (
                                <th key={index} className="text-left px-4 py-3 font-semibold">
                                    {header}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {managers.map((manager) => (
                            <tr key={manager.id} className="border-b">
                                <td className="px-4 py-3">{manager.name}</td>
                                <td className="px-4 py-3">{manager.email}</td>
                                <td className="px-4 py-3">{manager.phone}</td>
                                <td className="px-4 py-3">{manager.hireDate}</td>
                                <td className="px-4 py-3">{manager.status}</td>
                                <td className="px-4 py-3 text-right space-x-2">
                                    <button className="text-[#2DA57A] text-xl">✏️</button>
                                    <button className="text-[#D9534F] text-xl">🗑️</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-xl shadow-xl w-[400px]">
                            <h3 className="text-lg font-bold mb-4">Добавить менеджера</h3>
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="ФИО"
                                    value={newManager.name}
                                    onChange={handleInputChange}
                                    className="w-full border px-3 py-2 rounded-lg"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Почта"
                                    value={newManager.email}
                                    onChange={handleInputChange}
                                    className="w-full border px-3 py-2 rounded-lg"
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Телефон"
                                    value={newManager.phone}
                                    onChange={handleInputChange}
                                    className="w-full border px-3 py-2 rounded-lg"
                                />
                                <input
                                    type="date"
                                    name="hireDate"
                                    value={newManager.hireDate}
                                    onChange={handleInputChange}
                                    className="w-full border px-3 py-2 rounded-lg"
                                />
                                <select
                                    name="status"
                                    value={newManager.status}
                                    onChange={handleInputChange}
                                    className="w-full border px-3 py-2 rounded-lg"
                                >
                                    <option value="Онлайн">Онлайн</option>
                                    <option value="Офлайн">Офлайн</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
                                >
                                    Отмена
                                </button>
                                <button
                                    onClick={handleAddManager}
                                    className="bg-[#2DA57A] text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                >
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
