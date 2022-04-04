import styled from "styled-components";

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

export type Option = {
  key: string;
  value: string;
};

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { options = [] } = props;
  return (
    <Container>
      <SelectStyled {...props}>
        {options.map((item) => (
          <option
            key={item.key}
            value={item.key}
            data-testid={`choice-${item.key}`}
          >
            {item.value}
          </option>
        ))}
      </SelectStyled>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  width: 100%;
  margin-bottom: 12px;
  text-align: initial;
`;

const SelectStyled = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  border: solid 1px #cdcdcd;
`;

const LabelStyled = styled.label`
  margin-bottom: 4px;
`;
