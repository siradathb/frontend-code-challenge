import React, { useEffect, useState } from "react";
import styled from "styled-components";
import zipmex from "./assets/zipmex.svg";
import OrderForm, { TOrderForm } from "./OrderForm";
import OrderBook from "./OrderBook";
import orderBookStream, { TOrderBookStream } from "./order-book-stream";

function App() {
  const [orderBook, setOrderBook] = useState<TOrderBookStream>({
    buy: [],
    sell: [],
  });

  useEffect(() => {
    orderBookStream.subscribe((data) => {
      setOrderBook(data);
    });
  }, []);

  const handleSubmitOrder: TOrderForm["submitOrder"] = (
    side,
    { price, amount }
  ) => {
    orderBookStream.addOrder(side, { price, amount });
  };

  return (
    <AppContainer data-testid="app-containter">
      <Header>
        <LogoStyled src={zipmex} alt="logo" />
      </Header>
      <Container>
        <OrderForm submitOrder={handleSubmitOrder} />
        <OrderBook buy={orderBook.buy} sell={orderBook.sell} />
      </Container>
    </AppContainer>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 390px) {
    flex-direction: column;
  }
`;

const LogoStyled = styled.img`
  height: 10vmin;
  padding: 1rem;
  pointer-events: none;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppContainer = styled.div`
  text-align: center;
  background: linear-gradient(90deg, #14202c, #183047 50%, #14202c);
  min-height: 100vh;
`;
