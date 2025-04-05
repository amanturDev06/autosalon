import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
    //border-bottom: 1px solid #707070;
`;

const HeaderContainer = styled.header`
  height:20px;
  width:100vw;
  border-bottom: 1px solid #707070;
  display: flex;
  align-items: center;
    justify-content: center;
    //border: 1px solid red;
`;

const StyledTitle2= styled.h2`
  font-size: 40px;
  font-weight: bold;
    display: flex;
    justify-content:center;
    align-items: center;
    margin-bottom: 55px;
 
`;

const Form = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  width: 1140px;
  text-align: center;
`;

const Title = styled.h2`
    font-size: 48px;
    margin-bottom: 32px;
    color: #333;
`;

const Input = styled.input`
  width: 50%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 16px;
  font-size: 16px;
`;

const CheckboxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    font-size: 14px;
    margin: 20px;

`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
   
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const Link = styled.a`
  color: #015454;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  width:585px;
  padding: 12px;
  font-size: 16px;
  color: white;
  background-color: ${(props) => (props.google ? "#015454" : "#2CC295")};
  border: none;
  border-radius: 16px;
  margin-top: 10px;
  cursor: pointer;
   
  //&:hover {
  //  opacity: 0.9;
  //} 
    
    &BtnGoogle   {
       display:flex;
       align-items: center;
       justify-content: center;
    }
    
`;


const RegisterText = styled.p`
  font-size: 14px;
  margin-top: 15px;
  color: #333;
`;






const Password = () => {
    return(
        <Container>
            <HeaderContainer>
                <StyledTitle2>LOGO</StyledTitle2>
            </HeaderContainer>

            <Form>
                <Title>Создайте новый пароль</Title>
                <Input type="email" placeholder="Введите пароль" />
                <Input type="password" placeholder="Подтвердите новый пароль" />
                <CheckboxContainer>
                    <CheckboxLabel>
                        <Checkbox type="checkbox" /> Запомнить
                    </CheckboxLabel>

                </CheckboxContainer>
                <Button>Войти</Button>
            </Form>
        </Container>








    )
}
export default Password;