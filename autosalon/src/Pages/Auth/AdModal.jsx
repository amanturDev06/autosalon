
import React, {useState} from "react";
import styled from "styled-components";

function Label() {
    return null;
}

function FormRow() {
    return null;
}

function Tittle(props) {
    return null;
}

const AdModal = ({onClose, onSave}) => {
    const [formData, setFormData] = useState({
        title: "",
        startDate: "",
        endDate: "",
        status: "Активно",
        type: "Текстовый блок",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = () => {
        if (!formData.title || !formData.startDate || !formData.endDate) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        onSave(formData);
    };

    return (
        <ModalOverlay>
            <ModalContainer>
                <StyledTittle>Добавить рекламу</StyledTittle>
                <StyledFormRow>
                    <StyledLabel>НАЗВАНИЕ</StyledLabel>
                    <Input
                        name="title"
                        placeholder="Весенний апгрейд"
                        value={formData.title}
                        onChange={handleChange}
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
                    <Select name="status" value={formData.status} onChange={handleChange}>
                        <option value="Активно">Активно</option>
                        <option value="Архив">Архив</option>
                    </Select>
                </StyledFormRow>

                <StyledFormRow>
                    <StyledLabel>ТИП РЕКЛАМЫ</StyledLabel>
                    <Select name="type" value={formData.type} onChange={handleChange}>
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

export default AdModal;

// Стили
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    background: white;
    padding: 30px;
    border-radius: 15px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 15px;


`;


const StyledTittle  = styled.h2`
    font-weight: 400;
    font-size: 32px;
    text-align: center;
   margin: 25px;

`;
const StyledFormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
    width: 150px;
    //margin-right: 50px;
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
    margin-top: 10px;
`;

const SaveButton = styled.button`
    padding: 18px 20px;
    background: #2cc295;
    color: white;
    border: none;
    border-radius: 16px;
    cursor: pointer;
`;

const CancelButton = styled.button`
    padding: 10px 20px;
    background: white;
    color: black;
    border: 1px solid black;
    border-radius: 16px;
    cursor: pointer;
`;



