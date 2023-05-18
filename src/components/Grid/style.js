import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  max-width: 1420px;
  margin: 20px auto;
  position: relative;
  top: 100px;
  overflow-x: auto;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  overflow-x: scroll;

  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;

export const Table = styled.table`
@media (max-width: 768px) {
  border-spacing: 20px;
}
  width: 100%;
  background-color: #fff;
  padding: 20px;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;

export const Container = styled.div`
  max-width: 95vw;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
  gap: 10px;
  position: relative;
  top: 100px;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const Input = styled.input`
  outline: none;
  padding: 8px 20px;
  width: 50%;
  border-radius: 5px;
  font-size: 16px;

  background-color: #f0f2f5;
  border: none;
`;

export const Select = styled.select`
outline: none;
border-radius: 5px;
padding: 5px 10px;
font-size: 15px;
border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #046ee5;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
`