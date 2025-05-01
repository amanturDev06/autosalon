// // import React from "react";
// // import styled from "styled-components";
// // import {Input} from "postcss";
// // import { CiCalendar } from "react-icons/ci";
// // import { FaAngleDown } from "react-icons/fa6";
// //
// // const ModalWrapper = styled.div`
// //   position: fixed;
// //   inset: 0;
// //   background: rgba(0, 0, 0, 0.3);
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   z-index: 999;
// // `;
// //
// // const ModalContent = styled.div`
// //   background: white;
// //   padding: 30px;
// //   border-radius: 16px;
// //   width: 500px;
// //   display: flex;
// //   flex-direction: column;
// //   gap: 20px;
// // `;
// //
// // const Title = styled.h2`
// //   font-size: 30px;
// //   font-weight: 400;
// //     color:black;
// //     display: flex;
// //     justify-content: center;
// //     margin:40px 0 40px 0;
// // `;
// //
// // const StyledFieldRow = styled.div`
// //   display: flex;
// //   align-items: center;
// //   margin-bottom: 10px;
// //     position: relative;
// //     width: 100%;
// // `;
// //
// // const StyledLabel = styled.label`
// //   width: 390px;
// //   margin-right: 50px;
// //   font-weight: 400;
// //   color: #818888;
// // `;
// //
// // const StyledInput = styled.input`
// //     width: 100%;
// //     padding: 12px 40px 12px 16px; /* отступ справа под иконку */
// //     border: 1px solid #ccc;
// //     border-radius: 8px;
// //     font-size: 16px;
// //     color: #000;
// //
// //     &::placeholder {
// //         color: #000000;
// //         opacity: 1;
// //     }
// // `;
// //
// // const StyledCiCalendar = styled(CiCalendar)`
// //     position: absolute;
// //     top: 50%;
// //     right: 12px;
// //     transform: translateY(-50%);
// //     color: black;
// //     font-size: 20px;
// //     pointer-events: none;
// // `;
// //
// // const StyledFaAngleDown=styled(FaAngleDown)`
// //     position: absolute;
// //     top: 50%;
// //     right: 12px;
// //     transform: translateY(-50%);
// //     color: black;
// //     font-size: 19px;
// //     pointer-events: none;
// // `;
// //
// //
// // const ButtonGroup = styled.div`
// //   display: flex;
// //   justify-content: flex-end;
// //   gap: 10px;
// // `;
// //
// // const Button = styled.button`
// //   padding: 15px 20px;
// //   border-radius: 10px;
// //   border: 1px solid black;
// //   font-size: 14px;
// //   cursor: pointer;
// //   background: ${props => (props.cancel ? "#f0f0f0" : "#2CC295")};
// //   color: ${props => (props.cancel ? "#000" : "#fff")};
// // `;
// //
// // function FieldRow() {
// //     return null;
// // }
// //
// // function Label(props) {
// //     return null;
// // }
// //
// // const EditingModalWindow = ({ onClose }) => {
// //     return (
// //         <ModalWrapper>
// //             <ModalContent>
// //                 <Title>Редактировать рекламу</Title>
// //                 <StyledFieldRow>
// //                     <StyledLabel>НАЗВАНИЕ</StyledLabel>
// //                     <StyledInput placeholder="Весенний апгрейд"  />
// //                 </StyledFieldRow>
// //
// //                 <StyledFieldRow>
// //                     <StyledLabel>ДАТА НАЧАЛА</StyledLabel>
// //                     <StyledInput placeholder="26.02.2025" />
// //                     <StyledCiCalendar />
// //                 </StyledFieldRow>
// //
// //                 <StyledFieldRow>
// //                     <StyledLabel>ДАТА КОНЦА</StyledLabel>
// //                     <StyledInput placeholder="30.06.2025" />
// //                     <StyledCiCalendar />
// //
// //                 </StyledFieldRow>
// //
// //                 <StyledFieldRow>
// //                     <StyledLabel>СТАТУС</StyledLabel>
// //                     <StyledInput placeholder="Активно" />
// //                     <StyledFaAngleDown />
// //                 </StyledFieldRow>
// //
// //                 <StyledFieldRow>
// //                     <StyledLabel>ТИП РЕКЛАМЫ</StyledLabel>
// //                     <StyledInput placeholder="Текстовый блок" />
// //                     <StyledFaAngleDown />
// //                 </StyledFieldRow>
// //
// //
// //                 <ButtonGroup>
// //                     <Button cancel onClick={onClose}>Отмена</Button>
// //                     <Button>Сохранить</Button>
// //                 </ButtonGroup>
// //             </ModalContent>
// //         </ModalWrapper>
// //     );
// // };
// //
// // export default EditingModalWindow;
//
//
//
//
// //fnk
//
//
// import React, {useState} from "react";
// import styled from "styled-components";
//
// function Label() {
//     return null;
// }
//
// function FormRow() {
//     return null;
// }
//
// function Tittle(props) {
//     return null;
// }
//
// const EditingModalWindow = ({onClose, onSave}) => {
//     const [formData, setFormData] = useState({
//         title: "",
//         startDate: "",
//         endDate: "",
//         status: "Активно",
//         type: "Текстовый блок",
//     });
//
//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setFormData((prev) => ({...prev, [name]: value}));
//     };
//
//     const handleSubmit = () => {
//         if (!formData.title || !formData.startDate || !formData.endDate) {
//             alert("Пожалуйста, заполните все поля.");
//             return;
//         }
//
//         onSave(formData);
//     };
//
//     return (
//         <ModalOverlay>
//             <ModalContainer>
//                 <StyledTittle>Добавить рекламу</StyledTittle>
//                 <StyledFormRow>
//                     <StyledLabel>НАЗВАНИЕ</StyledLabel>
//                     <Input
//                         name="title"
//                         placeholder="Весенний апгрейд"
//                         value={formData.title}
//                         onChange={handleChange}
//                     />
//                 </StyledFormRow>
//
//                 <StyledFormRow>
//                     <StyledLabel>ДАТА НАЧАЛА</StyledLabel>
//                     <Input
//                         type="date"
//                         name="startDate"
//                         value={formData.startDate}
//                         onChange={handleChange}
//                     />
//                 </StyledFormRow>
//
//                 <StyledFormRow>
//                     <StyledLabel>ДАТА КОНЦА</StyledLabel>
//                     <Input
//                         type="date"
//                         name="endDate"
//                         value={formData.endDate}
//                         onChange={handleChange}
//                     />
//                 </StyledFormRow>
//
//                 <StyledFormRow>
//                     <StyledLabel>СТАТУС</StyledLabel>
//                     <Select name="status" value={formData.status} onChange={handleChange}>
//                         <option value="Активно">Активно</option>
//                         <option value="Архив">Архив</option>
//                     </Select>
//                 </StyledFormRow>
//
//                 <StyledFormRow>
//                     <StyledLabel>ТИП РЕКЛАМЫ</StyledLabel>
//                     <Select name="type" value={formData.type} onChange={handleChange}>
//                         <option value="Текстовый блок">Текстовый блок</option>
//                         <option value="Карусель">Карусель</option>
//                         <option value="Баннер">Баннер</option>
//                         <option value="Мультиформат">Мультиформат</option>
//                     </Select>
//                 </StyledFormRow>
//
//                 <ButtonRow>
//                     <CancelButton onClick={onClose}>Отмена</CancelButton>
//                     <SaveButton onClick={handleSubmit}>Сохранить</SaveButton>
//                 </ButtonRow>
//             </ModalContainer>
//         </ModalOverlay>
//     );
// };
//
// export default EditingModalWindow;
//
// // Стили
// const ModalOverlay = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.4);
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;
//
// const ModalContainer = styled.div`
//     background: white;
//     padding: 30px;
//     border-radius: 15px;
//     width: 400px;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     gap: 15px;
//
//
// `;
//
//
// const StyledTittle  = styled.h2`
//     font-weight: 400;
//     font-size: 32px;
//     text-align: center;
//    margin: 25px;
//
// `;
// const StyledFormRow = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;
//
// const StyledLabel = styled.label`
//     width: 150px;
//     //margin-right: 50px;
//     font-weight: 400;
//     color: #818888;
// `;
//
// const Input = styled.input`
//     padding: 10px;
//     border-radius: 10px;
//     border: 1px solid #ccc;
//     flex: 1;
//
// `;
//
// const Select = styled.select`
//     padding: 10px;
//     border-radius: 10px;
//     border: 1px solid #ccc;
//     flex: 1;
// `;
//
// const ButtonRow = styled.div`
//     display: flex;
//     justify-content: flex-end;
//   gap: 10px;
//     margin-top: 10px;
// `;
//
// const SaveButton = styled.button`
//     padding: 18px 20px;
//     background: #2cc295;
//     color: white;
//     border: none;
//     border-radius: 16px;
//     cursor: pointer;
// `;
//
// const CancelButton = styled.button`
//     padding: 10px 20px;
//     background: white;
//     color: black;
//     border: 1px solid black;
//     border-radius: 16px;
//     cursor: pointer;
// `;
//
//
//












//new

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const EditingModalWindow = ({ onClose, onSave, ad }) => {
    const [formData, setFormData] = useState({
        title: "",
        startDate: "",
        endDate: "",
        status: "Активно",
        type: "Текстовый блок",
    });

    useEffect(() => {
        if (ad) {
            setFormData({
                title: ad.title || "",
                startDate: ad.startDate || "",
                endDate: ad.endDate || "",
                status: ad.status || "",
                type: ad.type || "",
            });
        }
    }, [ad]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (!formData.title || !formData.startDate || !formData.endDate) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        onSave({ ...formData, id: ad?.id });
    };

    return (
        <ModalOverlay>
            <ModalContainer>
                <StyledTitle>Редактировать рекламу</StyledTitle>

                <StyledFormRow>
                    <StyledLabel>НАЗВАНИЕ</StyledLabel>
                    <Input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Название"
                    />
                </StyledFormRow>

                <StyledFormRow>
                    <StyledLabel>ДАТА НАЧАЛА</StyledLabel>
                    <Input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                </StyledFormRow>

                <StyledFormRow>
                    <StyledLabel>ДАТА КОНЦА</StyledLabel>
                    <Input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                </StyledFormRow>

                <StyledFormRow>
                    <StyledLabel>СТАТУС</StyledLabel>
                    <Select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="Активно">Активно</option>
                        <option value="Архив">Архив</option>
                    </Select>
                </StyledFormRow>

                <StyledFormRow>
                    <StyledLabel>ТИП РЕКЛАМЫ</StyledLabel>
                    <Select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="Текстовый блок">Текстовый блок</option>
                        <option value="Карусель">Карусель</option>
                        <option value="Баннер">Баннер</option>
                        <option value="Мультиформат">Мультиформат</option>
                    </Select>
                </StyledFormRow>

                <ButtonRow>
                    <CancelButton onClick={onClose}>Отмена</CancelButton>
                    <SaveButton onClick={handleSubmit}>Сохранить</SaveButton>
                </ButtonRow>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default EditingModalWindow;

// СТИЛИ

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
  text-align: center;
  margin: 10px 0 25px;
`;

const StyledFormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledLabel = styled.label`
  width: 140px;
  font-weight: 400;
  color: #818888;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  flex: 1;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  flex: 1;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
`;

const SaveButton = styled.button`
  padding: 12px 20px;
  background: #2cc295;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 12px 20px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 12px;
  cursor: pointer;
`;
