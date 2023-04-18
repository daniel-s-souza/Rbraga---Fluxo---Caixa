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
  align-items: center;
  justify-content: space-around;   
  padding: 20px;
  margin-left:50%;
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