import styled from "styled-components";

export const Header = styled.header`
  background-color:  #046ee5;
  width: 100vw;
  height: 60px;
  position: fixed;
  box-shadow: 0 1px 2px #0003;
`

export const Content = styled.div`
display: flex;
position: relative;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: justify;
justify-content: space-between;
margin-left: auto;
margin-right: 10%;
padding: 5px;
`

export const Navigation = styled.strong`
  cursor: pointer;

  a {
    font-size: 18px;
    text-decoration: none;
    color: white;
  }

  a:hover {
    opacity: .5;
    color: black;
  }
`

export const Text = styled.p`
  font-size: 20px;
  color: #676767;
`;

export const userName = styled.div`
display: flex;
position: relative;
align-items: center;
justify-content: flex-start;
color: white;

`;

export const TextUserName = styled.p`
  color: white;
  font-size: 18px;
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 50px;
  wheight: 30px;
  margin-right: 10%;
`
