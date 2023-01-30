import React, { useEffect, useState } from "react";
import { Div, DivButton, DivTable, Title, RowInput, TH, TD, Labels } from "./style";
import { Col, Input, Table } from "reactstrap";
import { Button, Row } from "react-bootstrap";
import { Header } from "../../common/components/Header";
import { getProducts, createProducts } from "../../services/cadastro";

export const Registration = () => {
  const [productCod, setProdutCod] = useState('')
  const [buyValue, setBuyValue] = useState('')
  const [sellValue, setSellValue] = useState('')
  const [description, setDescription] = useState('')
  const [productsList, setProductList] = useState([])

  const handleSubmit = async () => {
    if (productCod === '') {
      alert('Campo Cod. Produto precisa ser preenchido.')
      return
    }
    if (buyValue === '') {
      alert('Campo Valor Compra precisa ser preenchido.')
      return
    }
    if (sellValue === '') {
      alert('Campo Valor Venda precisa ser preenchido.')
      return
    }
    if (description === '') {
      alert('Campo descrição precisa ser preenchido.')
      return
    }

    await createProducts({
      cod: productCod,
      buy: buyValue,
      sell: sellValue,
      description: description
    })
    setProdutCod('')
    setBuyValue('')
    setSellValue('')
    setDescription('')
    

    await fetchProducts()

  }


  const fetchProducts = async () => {
    const productsList = await getProducts()
    setProductList(productsList.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <>
      <Header />
      <Title>Cadastro de Produtos</Title>;
      <Div>
        <RowInput>
          <Row>
            <Col>
              <Labels htmlFor="" > Cod. Produto </Labels>
              <Input type="text" value={productCod} onChange={(e) => setProdutCod(e.target.value)} />
            </Col>
            <Col>
              <Labels htmlFor="" > Valor Compra R$</Labels>
              <Input type="number" value={buyValue} onChange={(e) => setBuyValue(e.target.value)} />
            </Col>
            <Col>
              <Labels htmlFor="" > Valor Venda R$</Labels>
              <Input type="number" value={sellValue} onChange={(e) => setSellValue(e.target.value)} />
            </Col>
          </Row>
        </RowInput>
        <RowInput>
          <Row>
            <Col>
              <Labels htmlFor="" > Descrição </Labels>
              <Input type="text" id='descricao' value={description} onChange={(e) => setDescription(e.target.value)} />
            </Col>
          </Row>
        </RowInput>
        <DivButton>
          <Button variant="outline-warning" onClick={() => handleSubmit()} > Salvar </Button>{" "}
        </DivButton>
        <DivTable>
          <Table responsive>
            <thead>
              <tr>
                <TH> Cod Produto </TH>
                <TH >Valor de Compra</TH>
                <TH >Valor de Venda</TH>
                <TH >Descrição</TH>
              </tr>
            </thead>
            <tbody>
              {productsList.map(pdcts => {
                return <tr key={pdcts.id}>
                  <TD>{pdcts.cod}</TD>
                  <TD>R$ {pdcts.buy},00</TD>
                  <TD>R$ {pdcts.sell},00</TD>
                  <TD>{pdcts.description}</TD>
                </tr>
              })}
            </tbody>
          </Table>
        </DivTable>
      </Div>
    </>
  );
};
