import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 80%;
  padding: 20px;
  border-radius: 5px;
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 100px;
  wheight: 100px;
`

export const Text = styled.p`
  font-size: 20px;
  color: #676767;
`;