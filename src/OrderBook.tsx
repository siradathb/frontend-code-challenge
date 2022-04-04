import styled from "styled-components";
import { TOrderBookStream } from "./order-book-stream";

type RowProps = {
  textAlign?: "start" | "end";
  color?: string;
};

const OrderBook: React.FC<TOrderBookStream> = ({ buy, sell }) => {
  return (
    <Container>
      <div>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <TH textAlign="start">AMT</TH>
              <TH>Bid</TH>
            </tr>
          </thead>
          <tbody>
            {buy.map((buyOrder, index) => (
              <tr key={index}>
                <TD textAlign="start">{buyOrder.amount}</TD>
                <TD color="#87d5ed">{buyOrder.price} </TD>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <TH>Ask</TH>
              <TH textAlign="end">AMT</TH>
            </tr>
          </thead>
          <tbody>
            {sell.map((sellOrder, index) => (
              <tr key={index}>
                <TD color="#ed8794">{sellOrder.price}</TD>
                <TD textAlign="end">{sellOrder.amount} </TD>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default OrderBook;

const Container = styled.div`
  display: inline-flex;
  color: rgb(255, 255, 255);
  background-color: rgb(40, 60, 79);
  padding: 20px;
  border-radius: 20px;
  margin: 30px;
`;

const TH = styled.th<RowProps>`
  text-align: ${(props) => props.textAlign};
`;

const TD = styled.td<RowProps>`
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
`;
