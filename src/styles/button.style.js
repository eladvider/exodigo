import styled from "styled-components";

const Button = styled.button`
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ theme, color }) => color || theme.FONT_COLOR || "#333"};

  &:hover {
  }
`;

export default Button;
