import React, { useContext, useState } from "react";
import { Col, Input, Label, Row } from "reactstrap";
import { Button } from "react-bootstrap";
import { Div, Title, Login, RowInput, ButtonEntrar } from "./style";
import { login } from "../../services/login";
import { Context } from "../../common/context/context";
import { useHistory } from "react-router-dom"

export const Home = () => {
  const [user, setUser] = useState({ name: '', password: '' })
  const [userError, setUserError] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const {setAuth} = useContext(Context);
  const history = useHistory() 

  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value })
  }

  const handleSubmit = async () => {
    // const {name, password} = user;
    // let isValid = true

    if (userError === '') {
      alert('Campo usuário precisa ser preenchido')
      return
    }
    if (passwordError === '') {
      alert('Campo senha precisa ser preenchido')
      return
    }

    const response = await login(user)

    setAuth(response.data)

    history.push('/registration')


  }

  return (
    <>
      <Title> Golden Street </Title>
      <Div>
        <Login> Login </Login>
        <RowInput>
          <Row>
            <Col>
              <Label htmlFor="" style={{ color: 'white' }}> Usuário </Label>
              <Input type="text" value={user.name} onChange={(e) => {
                handleChange('name', e.target.value);
                setUserError(e.target.value)
              }} />
            </Col>
            <Col>
              <Label htmlFor="" style={{ color: 'white' }}> Senha </Label>
              <Input type="password" value={user.password}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                onChange={(e) => {
                  handleChange('password', e.target.value);
                  setPasswordError(e.target.value)
                }} />
            </Col>
          </Row>
        </RowInput>
        <ButtonEntrar>
          <Button variant="outline-warning" onClick={() => handleSubmit()}> Entrar </Button>
        </ButtonEntrar>
      </Div>
    </>
  );
};
