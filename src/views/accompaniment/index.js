import React, { useEffect, useState } from "react";
import { Row, Col, FloatingLabel, Form, Button } from "react-bootstrap";
import { Table } from "reactstrap";
import { Header } from "../../common/components/Header";
import { getSells } from "../../services/vendas";
import { Div, DivTable, H2, Title, FormTable, TH, TD } from "./style";

export const Accompaniment = () => {
  const [sellsList, setSellsList] = useState([])


  const fetchSells = async () => {
    const sellsList = await getSells()
    setSellsList(sellsList.data)
  }

  useEffect(() => {
    fetchSells()
  },[])

  function calc(tt) {
    let sum = 0;
    for (let i = 0; i < tt.length; i += 1) {
      sum = sum + tt[i].total
    }
    return sum
  }

  return (
    <>
      <Header />
      <Title> Acompanhamento de Vendas </Title>
      <Div>
        <FormTable>
          <Row className="g-2">
            <Col >
              <FloatingLabel controlId="floatingInputGrid" label="Nome Cliente">
                <Form.Control type="text" placeholder="Nome" />
              </FloatingLabel>
            </Col>
            <Col >
              <FloatingLabel controlId="floatingInputGrid" label="Data Inicio">
                <Form.Control type="Date" placeholder="data" />
              </FloatingLabel>
            </Col>
            <Col >
              <FloatingLabel controlId="floatingInputGrid" label="Data Fim">
                <Form.Control type="Date" placeholder="data" />
              </FloatingLabel>
            </Col>
            <Col>
              <Button type="submit" variant="outline-warning" size="lg"> Consultar </Button>
            </Col>
          </Row>
        </FormTable>
        <H2> Total: R$ {calc(sellsList)},00 </H2>
        <DivTable>
          <Table responsive>
            <thead>
              <tr>
                <TH> Nome Cliente </TH>
                <TH> Telefone Cliente </TH>
                <TH> Cod do produto </TH>
                <TH> Descrição </TH>
                <TH> ValorR$ </TH>
                <TH> Quantidade </TH>
                <TH> Tipo de Pagamento </TH>
                <TH> Data </TH>
                <TH> Total Pago  </TH>
              </tr>
            </thead>
            <tbody>
              {sellsList.map(sll => {
                return <tr key={sll.id}>
                  <TD>{sll.client_name}</TD>
                  <TD>{sll.client_phone}</TD>
                  <TD>{sll.cod}</TD>
                  <TD>{sll.description}</TD>
                  <TD>R${sll.price_sell},00</TD>
                  <TD>{sll.quantity}</TD>
                  <TD>{sll.payment}</TD>
                  <TD>{sll.sell_date}</TD>
                  <TD>R$ {sll.total},00</TD>
                </tr>
              })}
            </tbody>
          </Table>
        </DivTable>
      </Div>
    </>
  );
};
