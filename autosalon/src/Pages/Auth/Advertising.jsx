// import React from "react";
// import styled from "styled-components";
// // import superAdminImg from "../../components/superAdminImg.jsx";
//
// const SidebarContainer = styled.div`
//     width: 250px;
//     height: 100vh;
//     background: #f3f4f6;
//     padding: 20px;
// `;
//
// const SidebarItem = styled.li`
//     padding: 10px;
//     cursor: pointer;
//     border-radius: 5px;
//
//     &:hover {
//         background: #e5e7eb;
//     }
// `;
//
// const HeaderContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 15px;
//     border-bottom: 1px solid #ddd;
// `;
//
// const SearchInput = styled.input`
//     border: 1px solid #ccc;
//     padding: 8px;
//     border-radius: 5px;
//     width: 30%;
// `;
//
// const Table = styled.table`
//     width: 100%;
//     border-collapse: collapse;
//     border: 1px solid #ddd;
// `;
//
// const TableHeader = styled.th`
//     background: #e5e7eb;
//     text-align: left;
//     padding: 10px;
//     border: 1px solid #ddd;
// `;
//
// const TableRow = styled.tr`
//     &:hover {
//         background: #f9fafb;
//     }
// `;
//
// const TableCell = styled.td`
//     padding: 10px;
//     border: 1px solid #ddd;
// `;
//
// const AddButton = styled.button`
//     margin-top: 10px;
//     padding: 10px;
//     background: #10b981;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//
//     &:hover {
//         background: red;
//     }
// `;
//
// const Sidebar = () => (
//     <SidebarContainer>
//         <h1>ЛОГО</h1>
//         <ul>
//             {["Статистика", "Реклама", "Предложения", "Менеджеры", "Активность действий менеджеров", "Модерация", "Взаимодействие с клиентами", "Настройки", "Выйти"].map((item) => (
//                 <SidebarItem key={item}>{item}</SidebarItem>
//             ))}
//         </ul>
//     </SidebarContainer>
// );
//
// const Header = () => (
//     <HeaderContainer>
//         <SearchInput type="text" placeholder="Поиск"/>
//         <div>
//             <button>⚙️</button>
//             <superAdminImg/>
//             <span>Айдана Нургазина</span>
//         </div>
//     </HeaderContainer>
// );
//
// const AdvertisingTable = () => {
//     const data = [
//         ["Весенний апрель", "26.02.2025", "30.06.2025", "Активно", "Текстовый блок"],
//         ["Выгодный Trade-In", "23.02.2025", "27.05.2025", "Активно", "Текстовый блок"],
//         ["Премиальный комфорт", "20.02.2025", "07.05.2025", "Активно", "Мультиформат"],
//         ["Лучшие бренды", "15.02.2025", "24.04.2025", "Активно", "Карусель"],
//     ];
//
//     return (
//         <div>
//             <h2>Редактирование рекламы</h2>
//             <Table>
//                 <thead>
//                 <tr>
//                     {["НАЗВАНИЕ", "ДАТА НАЧАЛА", "ДАТА КОНЦА", "СТАТУС", "ТИП РЕКЛАМЫ"].map((head) => (
//                         <TableHeader key={head}>{head}</TableHeader>
//                     ))}
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {data.map((row, i) => (
//                     <TableRow key={i}>
//                         {row.map((cell, j) => (
//                             <TableCell key={j}>{cell}</TableCell>
//                         ))}
//                     </TableRow>
//                 ))}
//                 </tbody>
//             </Table>
//             <AddButton>+ Добавить</AddButton>
//         </div>
//     );
// };
//
// const Dashboard = () => (
//     <div style={{display: "flex"}}>
//         <Sidebar/>
//         <div style={{flex: 1}}>
//             <Header/>
//             <AdvertisingTable/>
//         </div>
//     </div>
// );
//
// export default Dashboard;


import React from "react";
import styled from "styled-components";
import {
    IoStatsChartOutline,
    IoPeopleOutline,
    IoFlashOutline,
    IoConstructOutline,
    IoExitOutline,
    IoSettingsOutline, IoGiftOutline
} from "react-icons/io5";
import {BiEdit, BiSpreadsheet, BiBulb, BiHeart, BiMessageDetail, BiShieldQuarter, BiTimeFive} from "react-icons/bi";

function BiBullhorn() {
    return null;
}

function SettingsButton(props) {
    return null;
}

function UserAvatar(props) {
    return null;
}

function HeaderRight(props) {
    return null;
}

const Advertising = () => {
    return (
        <Container>
            <Sidebar>
                <Logo>ЛОГО</Logo>
                <Nav>
                    <NavItem>
                        <IoStatsChartOutline /> Статистика
                    </NavItem>
                    <NavItem active>
                        <BiBullhorn /> Реклама
                    </NavItem>
                    <NavItem>
                        <IoGiftOutline /> Предложения
                    </NavItem>
                    <NavItem>
                        <IoPeopleOutline /> Менеджеры
                    </NavItem>
                    <NavItem>
                        <BiTimeFive /> Активность действий менеджеров
                    </NavItem>
                    <NavItem>
                        <BiShieldQuarter /> Модерация
                    </NavItem>
                    <NavItem>
                        <BiMessageDetail /> Взаимодействие с клиентами
                    </NavItem>
                    <NavItem>
                        <IoSettingsOutline /> Настройки
                    </NavItem>
                    <NavItem>
                        <IoExitOutline /> Выйти
                    </NavItem>
                </Nav>
            </Sidebar>


            <Main>
                <Header>
                    <SearchBar placeholder="Поиск" />
                    <HeaderRight>
                        <SettingsButton>
                            <IoSettingsOutline />
                        </SettingsButton>
                        <UserAvatar src="https://via.placeholder.com/40" alt="Профиль" />
                    </HeaderRight>
                </Header>

                <Content>
                    <Title>Редактирование рекламы</Title>
                    <AddButton>+ Добавить</AddButton>
                    <Table>
                        <thead>
                        <tr>
                            <th>Название</th>
                            <th>Дата начала</th>
                            <th>Дата конца</th>
                            <th>Статус</th>
                            <th>Тип рекламы</th>
                            <th>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {adsData.map((ad, index) => (
                            <tr key={index}>
                                <td>{ad.title}</td>
                                <td>{ad.startDate}</td>
                                <td>{ad.endDate}</td>
                                <td>{ad.status}</td>
                                <td>{ad.type}</td>
                                <td>
                                    <EditButton>
                                        <BiEdit />
                                    </EditButton>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>

                </Content>
            </Main>
        </Container>
    );
};



const Container = styled.div`
  display: flex;
  height: 100vh;
    width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #f8f8f8;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Nav = styled.nav`
  margin-top: 20px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#fff" : "#333")};
  background: ${({ active }) => (active ? "#2ecc71" : "transparent")};
  border-radius: 5px;
  margin-bottom: 5px;

  &:hover {
    background: #2ecc71;
    color: #fff;
  }

  svg {
    margin-right: 10px;
  }
`;

const Main = styled.div`
  flex: 1;
  padding: 20px;
`;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: 1px solid #ddd;
//   padding-bottom: 10px;
// `;
//
// const HeaderRight = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
// `;

const SearchBar = styled.input`
  width: 300px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const UserProfile = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    //border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  th {
    color:#818888;
  }
`;

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const AddButton = styled.button`
  background: #2CC295;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #2CC295;
  }
`;

// ДАННЫЕ РЕКЛАМЫ (МОЖНО ПОДКЛЮЧИТЬ API)
const adsData = [
    { title: "Весенний апрель", startDate: "26.02.2025", endDate: "30.06.2025", status: "Активно", type: "Текстовый блок" },
    { title: "Выгодный Trade-In", startDate: "23.02.2025", endDate: "27.05.2025", status: "Активно", type: "Текстовый блок" },
    { title: "Премиальный комфорт", startDate: "20.02.2025", endDate: "15.05.2025", status: "Активно", type: "Мультиформат" },
    { title: "Лучшие бренды", startDate: "15.02.2025", endDate: "24.04.2025", status: "Активно", type: "Карусель" }
];

export default Advertising;




