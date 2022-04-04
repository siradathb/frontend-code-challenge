import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
}

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
}

const Button: React.FC<ButtonProps> = (props) => {
  const { label, variant = ButtonVariant.Primary } = props;

  return (
    <ButtonContainer>
      <ButtonStyled variant={variant} {...props}>
        {label}
      </ButtonStyled>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  width: 100%;
  margin 8px 0;
`;

const ButtonStyled = styled.button<ButtonProps>`
  width: 100%;
  font-weight: bold;
  border-radius: 16px;
  padding: 14px;
  border: none;

  ${({ variant }) => {
    switch (variant) {
      case ButtonVariant.Primary:
        return css`
          background-color: #22b2c1;
          color: #fff;

          &:hover {
            background-color: #56d7e4;
          }
        `;
      case ButtonVariant.Secondary:
        return css`
          background-color: #fff;
          color: #22b2c1;
          border: solid 1px #22b2c1;

          &:hover {
            background-color: #d7f9fc;
          }
        `;
    }
  }}
`;
