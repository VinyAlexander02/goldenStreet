import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Input } from "reactstrap";
import { Header } from "../../common/components/Header";
import { createSells, getSells } from "../../services/vendas";
import { Div, ButtonVender, RowInput, Title, Labels } from "./style";

export const Sells = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [produt, setProdut] = useState('')
  const [description, setDescription] = useState('')
  const [sellValue, setSellValue] = useState('')
  const [quantity, setQuantity] = useState('')
  const [payment, setPayment] = useState('')
  const [date, setDate] = useState('')
  const [total, setTotal] = useState('')
  const [sellsList, setSellsList] = useState([])

  const handleSubmit = async () => {
    if (name === '') {
      alert('Campo Nome Cliente precisa ser preenchido ')
      return
    }

    if ((phone === '')) {
      alert('Campo telefone precisa ser preenchido ')
      return
    }

    if (produt === '') {
      alert('Campo Código Produto precisa ser resolvido')
    }

    if (description === '') {
      alert('Campo descrição precisa ser resolvido')
    }

    if (sellValue === '') {
      alert('Campo valor precisa ser resolvido')
    }

    if (quantity === '') {
      alert('Campo valor precisa ser resolvido')
    }

    if (payment === '') {
      alert('Campo pagamento precisa ser preenchido ')
      return
    }

    if (date === '') {
      alert('Campo data precisa ser preenchido ')
      return
    }

    if (total === '') {
      alert('Campo total precisa ser preenchido ')
      return
    }

    await createSells({
      client_name: name,
      client_phone: phone,
      cod: produt,
      description: description,
      price_sell: sellValue,
      quantity: quantity,
      payment: payment,
      sell_date: date,
      total: total,
    })

    setName('')
    setPhone('')
    setProdut('')
    setDescription('')
    setSellValue('')
    setQuantity('')
    setPayment('')
    setDate('')
    setTotal('')

    await fetchSells()

  }

  const fetchSells = async () => {
    const sellsList = await getSells()
    setSellsList(sellsList.data)
  }

  useEffect(() => {
    fetchSells()
  }, [])

  return (
    <>
      <Header />
      <Title>Vendas</Title>
      <Div>
        <RowInput>
          <Row>
            <Col>
              <Labels htmlFor=""> Nome Cliente</Labels>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Col>
            <Col>
              <Labels htmlFor=""> Telefone Cliente </Labels>
              <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Col>
          </Row>
        </RowInput>
        <RowInput>
          <Row>
            <Col>
              <Labels htmlFor=""> Cod. Produto </Labels>
              <Input type="text" value={produt} onChange={(e) => setProdut(e.target.value)} />
            </Col>
            <Col>
              <Labels htmlFor=""> Descrição </Labels>
              <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Col>
            <Col>
              <Labels htmlFor=""> Valor R$</Labels>
              <Input type="number" value={sellValue} onChange={(e) => setSellValue(e.target.value)} />
            </Col>
          </Row>
        </RowInput>
        <RowInput>
          <Row>
            <Col>
              <Labels htmlFor=""> Quantidade </Labels>
              <Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </Col>
            <Col>
              <Labels htmlFor=""> Pagamento </Labels>
              <Input type="text" value={payment} onChange={(e) => setPayment(e.target.value)} />
            </Col>
            <Col>
              <Labels htmlFor=""> Data </Labels>
              <Input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
            </Col>
            <Col>
              <Labels htmlFor=""> Total </Labels>
              <Input type="number" value={total} onChange={(e) => setTotal(e.target.value)} />
            </Col>
          </Row>
        </RowInput>
        <ButtonVender>
          <Button variant="outline-warning" onClick={() => handleSubmit()} type='submit' > Vender </Button>
        </ButtonVender>
      </Div>
    </>
  );
};
