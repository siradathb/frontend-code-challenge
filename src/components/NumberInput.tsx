import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const NumberInput: React.FC<InputProps> = (props) => {
  const { step = "0.01", type = "number", label } = props;
  return (
    <Container>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled step={step} type={type} {...props} />
    </Container>
  );
};

export default NumberInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: initial;
`;

const InputStyled = styled.input`
  padding: 8px;
  border-radius: 10px;
  border: solid 1px #cdcdcd;
  margin-bottom: 12px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const LabelStyled = styled.label`
  margin-bottom: 4px;
`;
