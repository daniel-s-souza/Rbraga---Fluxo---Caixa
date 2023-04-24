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

export const Select = styled.select`
width: 100%;
height:35px;
background: white;
color: gray;
padding-left: 5px;
font-size: 14px;
border:none;
margin-left: 10px;

     option {
       color: black;
       background: white;
       font-weight: small;
       display: flex;
       white-space: pre;
       min-height: 20px;
       padding: 0px 2px 1px;
     }
`;

export const CheckedDiv = styled.div `
  display: flex;
`