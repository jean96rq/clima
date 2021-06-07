import React from 'react'
import styled from '@emotion/styled'
import Shower from '../images/Shower.png'


const ContenedorInicio = styled.div`
width: 100%;
max-width: 600px;
margin: 0 auto;
top: 0;
right: 50%;
transform: translateX(50%) ;
position: absolute;
text-align: center;
display: flex;
flex-direction: column;
h2{
    font-size: 40px;
    color: #E7E7EB;
    text-align: center;
}
img{
    width: 170px;
    margin: 0 auto;
}
@media (max-width:950px){
    width: 250px;
  }
`;

const Boton = styled.button`
background: #6E707A;
color: #E7E7EB;
font-size: 16px;
border: none;
outline: none;
cursor: pointer;
padding: 12px 20px;
width: 100%;
max-width: 200px;
margin: 0 auto;
margin-top: 20px;
`;
const Inicio = ({ mostrarMenu }) => {
    const mostrar = () => {
        mostrarMenu(true)
    }
    return (
        <ContenedorInicio>
            <h2>Realiza una busqueda para saber el clima</h2>
            <img src={Shower} alt="imagen" />
            <Boton onClick={mostrar}>Buscar de nuevo</Boton>
        </ContenedorInicio>
    )
}

export default Inicio
