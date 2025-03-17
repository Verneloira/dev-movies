import styled from "styled-components";


export const Background = styled.div`
height:100vh;
width: 100vw;
z-index: 999;
background-color: rgba(0, 0, 0, 0.7);
position: absolute;
display: flex;
align-items: center;
justify-content: center;

`
export const Container = styled.div`
background: #000;
width: 70%;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
padding: 50px;
max-width: 1200px;

iframe{
    border: none;
}

`
export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: black;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: grey;}
`
