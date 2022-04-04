import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Dropdown, { Option } from "./components/Dropdown";
import NumberInput from "./components/NumberInput";
import { TOrder, TSide } from "./order-book-stream";

export type TOrderForm = {
  submitOrder: (side: TSide, { price, amount }: TOrder) => void;
};

type TOrderFormData = {
  side: TSide;
} & TOrder;

const initialFormData: TOrderFormData = {
  side: "buy",
  price: "",
  amount: "",
};

const tradeOptions: Option[] = [
  { key: "buy", value: "Buy" },
  { key: "sell", value: "Sell" },
];

const OrderForm: React.FC<TOrderForm> = ({ submitOrder }) => {
  const [formData, updateFormData] = useState<TOrderFormData>(initialFormData);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitOrder(formData.side, {
      price: formData.price,
      amount: formData.amount,
    });
    updateFormData({ ...formData, amount: "", price: "" });
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleOnSubmit}>
          <ButtonContainer>
            <Dropdown
              name="side"
              options={tradeOptions}
              onChange={handleChange}
            />
          </ButtonContainer>
          <NumberInput
            label="Price"
            placeholder="price"
            name="price"
            required
            value={formData.price}
            onChange={handleChange}
          />
          <NumberInput
            label="Amount"
            placeholder="amount"
            name="amount"
            required
            value={formData.amount}
            onChange={handleChange}
          />
          <Button label="Submit" />
        </Form>
      </Container>
    </div>
  );
};

export default OrderForm;

const Container = styled.div`
  color: #fff;
  background-color: #283c4f;
  padding: 20px;
  border-radius: 20px;
  margin: 30px;
`;

const Form = styled.form``;

const ButtonContainer = styled.div`
  display: flex;
`;
