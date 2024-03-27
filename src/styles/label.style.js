import styled from "styled-components";
const Label = styled.label`
  font-size: 18px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export default Label;
