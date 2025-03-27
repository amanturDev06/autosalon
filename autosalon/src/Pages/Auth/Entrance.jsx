import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
    //border-bottom: 1px solid #707070;
`;

const HeaderContainer = styled.header`
  height: 20px;
  width: 100%;
  border-bottom: 1px solid #707070;
  display: flex;
  align-items: center;
  //padding: 0 20px;
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  //margin-bottom: 20px;
`;

const Form = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  //box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 1140px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 10px;
  color: #333;
`;

const Input = styled.input`
  width: 585px;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 16px;
  font-size: 16px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  margin: 10px 0;
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
  width: 607px;
  padding: 12px;
  font-size: 16px;
  color: white;
  background-color: ${(props) => (props.google ? "#015454" : "#2CC295")};
  border: none;
  border-radius: 16px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const RegisterText = styled.p`
  font-size: 14px;
  margin-top: 15px;
  color: #333;
`;

function HEADER() {
    return null;
}

function h1() {
    return null;
}



const Entrance = () => {
    return (
        <Container>
            <HeaderContainer>
                <h1>LOGO</h1>
            </HeaderContainer>

            <Form>
                <Title>Войдите <br/> в учетную запись</Title>
                <Input type="email" placeholder="Электронная почта" />
                <Input type="password" placeholder="Введите пароль" />
                <CheckboxContainer>
                    <CheckboxLabel>
                        <Checkbox type="checkbox" /> Запомнить
                    </CheckboxLabel>
                    <Link href="#">Забыли пароль?</Link>
                </CheckboxContainer>
                <Button>Войти</Button>
                <Button google>Войти через Google</Button>
                <RegisterText>
                    Нет учетной записи? <Link href="#">Зарегистрируйтесь</Link>
                </RegisterText>
            </Form>
        </Container>
    );
};

export default Entrance;

