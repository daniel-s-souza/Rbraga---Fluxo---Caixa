import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
@media (max-width: 768px) {
  white-space: nowrap;
  word-break: break-all;
  
}
padding-top: 15px;
text-align: ${(props) => (props.alignCenter ? "center" : "start")};
word-break: break-all;

svg {
  width: 18px;
  height: 18px;
}
`;