import React from "react";
import styled from "styled-components";
import {
    IoBulbOutline,
    IoCreateOutline,
    IoExitOutline,
    IoGiftOutline, IoHeartCircleOutline,
    IoPeopleOutline, IoSearchOutline,
    IoSettingsOutline,
    IoStatsChartOutline
} from "react-icons/io5";
import { BiEditAlt, BiMessageDetail, BiShieldQuarter, BiTimeFive } from "react-icons/bi";
import {FiBell, FiMessageCircle, FiMoon, FiPhone, FiSun} from "react-icons/fi";
import {IoIosFlash, IoIosListBox} from "react-icons/io";

// function ThemeToggleWrapper(props) {
//     return null;
// }
//
// function ThemeButton(props) {
//     return null;
// }
//
// function IconGroupWrapper(props) {
//     return null;
// }
//
// function IconButton(props) {
//     return null;
// }

const Interaction = () => {
    return (
        <Container>
            <Sidebar>
                <Logo><svg width="142" height="42" viewBox="0 0 142 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.096 1.54102V7.53302H20.328C18.1253 7.53302 16.9493 8.61569 16.8 10.781C16.576 13.245 16.3707 15.5224 16.184 17.613C15.9973 19.6664 15.7733 21.5517 15.512 23.269C15.2507 24.9863 14.952 26.573 14.616 28.029C14.3173 29.4477 13.9253 30.7544 13.44 31.949C12.656 34.2264 11.648 36.0184 10.416 37.325C9.184 38.6317 7.74667 39.5277 6.104 40.013C4.46133 40.461 2.632 40.573 0.616 40.349L0 33.741C1.232 33.4797 2.31467 33.0877 3.248 32.565C4.18133 32.005 4.928 31.0344 5.488 29.653C5.824 28.8317 6.12267 27.973 6.384 27.077C6.64533 26.1437 6.86933 25.1357 7.056 24.053C7.28 22.933 7.46667 21.6824 7.616 20.301C7.80267 18.9197 7.97067 17.389 8.12 15.709C8.26933 13.9917 8.43733 12.069 8.624 9.94102C9.03467 4.34102 12.0213 1.54102 17.584 1.54102H33.096ZM33.936 1.54102V40.181H25.368V1.54102H33.936Z" fill="black"/>
                    <path d="M55.6235 0.896484C58.6849 0.896484 61.2796 1.23249 63.4076 1.90449C65.5356 2.53915 67.2342 3.62182 68.5035 5.15249C69.8102 6.64582 70.7622 8.69916 71.3595 11.3125C71.9569 13.8885 72.2556 17.1178 72.2556 21.0005C72.2556 24.8832 71.9569 28.1312 71.3595 30.7445C70.7622 33.3205 69.8102 35.3738 68.5035 36.9045C67.2342 38.3978 65.5356 39.4805 63.4076 40.1525C61.2796 40.7872 58.6849 41.1045 55.6235 41.1045C52.5622 41.1045 49.9675 40.7872 47.8395 40.1525C45.7115 39.4805 43.9942 38.3978 42.6875 36.9045C41.3809 35.3738 40.4289 33.3205 39.8315 30.7445C39.2342 28.1312 38.9355 24.8832 38.9355 21.0005C38.9355 17.1178 39.2342 13.8885 39.8315 11.3125C40.4289 8.69916 41.3809 6.64582 42.6875 5.15249C43.9942 3.62182 45.7115 2.53915 47.8395 1.90449C49.9675 1.23249 52.5622 0.896484 55.6235 0.896484ZM55.6235 7.67249C53.6449 7.67249 52.0955 8.06449 50.9755 8.84849C49.8929 9.63249 49.1089 10.9952 48.6235 12.9365C48.1755 14.8405 47.9515 17.5285 47.9515 21.0005C47.9515 24.4352 48.1755 27.1232 48.6235 29.0645C49.1089 31.0058 49.8929 32.3685 50.9755 33.1525C52.0955 33.9365 53.6449 34.3285 55.6235 34.3285C57.5649 34.3285 59.0769 33.9365 60.1595 33.1525C61.2795 32.3685 62.0635 31.0058 62.5115 29.0645C62.9969 27.1232 63.2396 24.4352 63.2396 21.0005C63.2396 17.5285 62.9969 14.8405 62.5115 12.9365C62.0635 10.9952 61.2795 9.63249 60.1595 8.84849C59.0769 8.06449 57.5649 7.67249 55.6235 7.67249Z" fill="black"/>
                    <path d="M85.3199 1.59668C88.2692 1.59668 91.2559 1.63401 94.2799 1.70868C97.3412 1.74601 100.16 1.91401 102.736 2.21268L102.344 8.37268H88.9039C87.8959 8.37268 87.1305 8.63401 86.6079 9.15668C86.0852 9.64201 85.8239 10.3887 85.8239 11.3967V40.4047H77.2559V9.66068C77.2559 7.27135 78.0025 5.33001 79.4959 3.83668C81.0265 2.34335 82.9679 1.59668 85.3199 1.59668Z" fill="black"/>
                    <path d="M124.424 0.896484C127.486 0.896484 130.08 1.23249 132.208 1.90449C134.336 2.53915 136.035 3.62182 137.304 5.15249C138.611 6.64582 139.563 8.69916 140.16 11.3125C140.758 13.8885 141.056 17.1178 141.056 21.0005C141.056 24.8832 140.758 28.1312 140.16 30.7445C139.563 33.3205 138.611 35.3738 137.304 36.9045C136.035 38.3978 134.336 39.4805 132.208 40.1525C130.08 40.7872 127.486 41.1045 124.424 41.1045C121.363 41.1045 118.768 40.7872 116.64 40.1525C114.512 39.4805 112.795 38.3978 111.488 36.9045C110.182 35.3738 109.23 33.3205 108.632 30.7445C108.035 28.1312 107.736 24.8832 107.736 21.0005C107.736 17.1178 108.035 13.8885 108.632 11.3125C109.23 8.69916 110.182 6.64582 111.488 5.15249C112.795 3.62182 114.512 2.53915 116.64 1.90449C118.768 1.23249 121.363 0.896484 124.424 0.896484ZM124.424 7.67249C122.446 7.67249 120.896 8.06449 119.776 8.84849C118.694 9.63249 117.91 10.9952 117.424 12.9365C116.976 14.8405 116.752 17.5285 116.752 21.0005C116.752 24.4352 116.976 27.1232 117.424 29.0645C117.91 31.0058 118.694 32.3685 119.776 33.1525C120.896 33.9365 122.446 34.3285 124.424 34.3285C126.366 34.3285 127.878 33.9365 128.96 33.1525C130.08 32.3685 130.864 31.0058 131.312 29.0645C131.798 27.1232 132.04 24.4352 132.04 21.0005C132.04 17.5285 131.798 14.8405 131.312 12.9365C130.864 10.9952 130.08 9.63249 128.96 8.84849C127.878 8.06449 126.366 7.67249 124.424 7.67249Z" fill="black"/>
                </svg>
                </Logo>
                <Nav>
                    <NavItem>
                        <IoStatsChartOutline /> Статистика
                    </NavItem>
                    <NavItem active>
                        <IoCreateOutline />Реклама
                    </NavItem>
                    <NavItem>
                        <IoIosListBox /> Предложения
                    </NavItem>
                    <NavItem>
                        <IoPeopleOutline /> Менеджеры
                    </NavItem>
                    <NavItem>
                        <IoIosFlash />Активность действий менеджеров
                    </NavItem>
                    <NavItem>
                        <IoBulbOutline /> Модерация
                    </NavItem>
                    <NavItem>
                        <IoHeartCircleOutline /> Взаимодействие с клиентами
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
                    <StyledTopBar>
                        <div style={{position: "relative", width: "300px"}}>
                            <input
                                type="text"
                                placeholder="Поиск..."
                                style={{
                                    padding: "12px 55px 12px 16px",
                                    width: "410px",
                                    borderRadius: "10px",
                                    border: "1px solid black"
                                }}
                            />
                            <IoSearchOutline
                                style={{
                                    position: "absolute",
                                    right: "-160px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "black",
                                    width: "20px",
                                    height: "20px"
                                }}
                            />
                        </div>

                        <StyledActions>

                            {/*<StyledThemeToggleWrapper>*/}
                            {/*    <StyledThemeButton active><FiSun /></StyledThemeButton>*/}
                            {/*    <StyledThemeButton><FiMoon /></StyledThemeButton>*/}
                            {/*</StyledThemeToggleWrapper>*/}

                            <StyledIconGroupWrapper>
                                <StyledIconButton><FiMessageCircle/></StyledIconButton>
                                <StyledIconButton><FiBell/></StyledIconButton>
                            </StyledIconGroupWrapper>

                            <StyledUserInfo>
                                <StyledAvatar
                                    src="https://s3-alpha-sig.figma.com/img/f5a5/1a8d/53fec6c4babe799641facc912a50ee7e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LmSpoB4dYzhebAXgAv3eed6fLigICkH0QnWBt6yEWltve9~2UKxT-SMs8LO~JyuecIBOklixtu4ELeG9ynYcOkwakXaN4mSm0i2aQNVFIfu0BzcNlSMrfOB1YQFpujAc~79xppnTZl5SLoY3KV0SqZvw103muE1uyUNkUMS7f1OvXN88vAat2GCitgDlXb~YpM7UbeYVRdI9tq8KFmL8ni5fS0pGkXiSGAllXQ9ceuNIa69fZzFbUBLUiTbC0OFqn-L5k4NUkYhTDZL2BLyCfIGy~MXDKvwH~V-JiNJYj3aA1wlZwvQKzmy3PPe1ObOpmxqVelZu1NcVTbfnfOzh7A__"
                                    alt="User"
                                />
                                <StyledNamePosition>
                                    Aidana Nurgazina
                                    <span>Суперадмин</span>
                                </StyledNamePosition>
                            </StyledUserInfo>
                        </StyledActions>
                    </StyledTopBar>
                </Header>

                <Content style={{ position: "relative" }}>
                    <Title style={{ position: "sticky" }}>
                        Взаимодействие с клиентами
                        <AddButton> Сегодня ˅ </AddButton>
                    </Title>

                    <Table>
                        <thead>
                        <tr>
                            <th>МЕНЕДЖЕР</th>
                            <th>ДАТА</th>
                            <th>ТИП ЗАПРОСА</th>
                            <th>СТАТУС</th>
                            <th>ВРЕМЯ ОТВЕТА</th>
                            <th>ПРИМЕЧАНИЕ</th>
                        </tr>
                        </thead>
                        <tbody>
                        {adsData.map((ad, index) => (
                            <tr key={index}>
                                <td>{ad.manager}</td>
                                <td>{ad.Date}</td>
                                <td>{ad.requestType}</td>
                                <td>{ad.status}</td>
                                <td>{ad.responseTime}</td>
                                <td>{ad.note}</td>

                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Content>
            </Main>
        </Container>
    );
};

const adsData = [
    { manager: "Максатбек кызы Адинай", Date: "27.02.2025", requestType: "Вопрос по автомобилю", status: "Решен", responseTime: "8 мин",note:"Ответ на вопрос клиента"},
    { manager: "Максатбек кызы Адинай", Date: "27.02.2025", requestType: "Вопрос по автомобилю", status: "Решен", responseTime: "8 мин" ,note:"Ответ на вопрос клиента" },
    { manager: "Максатбек кызы Адинай", Date: "27.02.2025", requestType: "Вопрос по автомобилю", status: "Решен", responseTime: "8 мин" ,note:"Ответ на вопрос клиента"},
    { manager: "Максатбек кызы Адинай", Date: "27.02.2025", requestType: "Вопрос по автомобилю", status: "Решен", responseTime: "8 мин",note:"Ответ на вопрос клиента" },
    { manager: "Максатбек кызы Адинай", Date: "27.02.2025", requestType: "Вопрос по автомобилю", status: "Решен", responseTime: "8 мин",note:"Ответ на вопрос клиента" },
    { manager: "Максатбек кызы Адинай", Date: "27.02.2025", requestType: "Вопрос по автомобилю", status: "Решен", responseTime: "8 мин" ,note:"Ответ на вопрос клиента"},
    { manager: "Максатбек кызы Адинай", Date: "27.02.2025", requestType: "Вопрос по автомобилю", status: "Решен", responseTime: "8 мин" ,note:"Ответ на вопрос клиента" },
    { manager: "Максатбек кызы Адинай", Date: "27.02.2025", requestType: "Вопрос по автомобилю", status: "Решен", responseTime: "8 мин" ,note:"Ответ на вопрос клиента"},
    { manager: "Максатбек кызы Адинай", Date: "27.02.2025", requestType: "Вопрос по автомобилю", status: "Решен", responseTime: "8 мин" ,note:"Ответ на вопрос клиента"},
    { manager: "Максатбек кызы Адинай", Date: "27.02.2025", requestType: "Вопрос по автомобилю", status: "Решен", responseTime: "8 мин" ,note:"Ответ на вопрос клиента"},
    { manager: "Максатбек кызы Адинай", Date: "27.02.2025", requestType: "Вопрос по автомобилю", status: "Решен", responseTime: "8 мин" ,note:"Ответ на вопрос клиента"},
    { manager: "Максатбек кызы Адинай", Date: "27.02.2025", requestType: "Вопрос по автомобилю", status: "Решен", responseTime: "8 мин" ,note:"Ответ на вопрос клиента"}
];



const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background:#F7FDFD;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border-bottom: 1px solid black;
    padding-bottom: 10px;
`;



const Sidebar = styled.div`
    width: 250px;
    padding: 20px;
`;

const Logo = styled.h1`
    font-size: 30px;
    font-weight: 400;
    text-align: center;
`;

const Nav = styled.nav`
    margin-top: 40px;
`;

const NavItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 19px;
    cursor: pointer;
        // color: ${({ active }) => (active ? "#fff" : "#333")};
        // background: ${({ active }) => (active ? "#2ecc71" : "transparent")};
    border-radius: 5px;
    margin-bottom: 5px;

    &:hover {
        background: #2CC295;
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

const StyledTopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const StyledThemeToggleWrapper = styled.div`
    display: flex;
    border: 2px solid #000;
    border-radius: 12px;
    overflow: hidden;
`;

const StyledThemeButton = styled.button`
    width: 46px;
    height: 48px;
    background: ${({active}) => (active ? "#2CC295" : "#f6fefe")};
    color: ${({active}) => (active ? "#fff" : "#000")};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    //&:not(:last-child) {
    //    border-right: 1px solid #000;
    //}
`;


const StyledIconGroupWrapper = styled.div`
  display: flex;
  border: 1px solid #000;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledIconButton = styled.button`
  width: 40px;
  height: 42px;
  background: #f6fefe;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;

`;



const StyledActions = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const StyledAvatar = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;

`;

const StyledUserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 90px;
`

const StyledNamePosition = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    color: #000;
    padding-left: 10px;

    span {
        font-size: 14px;
        color: #888;
        font-weight: 400;
        padding-top: 8px;
    }
`;



const Content = styled.div`
  margin-top: 20px;
    width: 970px;
    height: 530px;
    background: #FFFFFF;
    border-radius: 10px;
    //height: 400px;
    overflow-y: scroll;
`;

const Title = styled.h2`
    font-size: 22px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 500px;
    align-items: center;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    font-size: 14px;
    padding: 5px 10px;

    th, td {
        padding: 10px;
        text-align: left;
    }

    th {
        color: #818888;
    }
`;

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const AddButton = styled.button`
  background: #F1F7F7;
  color: #000000;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #2CC295;
  }
`;

export default Interaction;
