import React from 'react'
import styled from '@emotion/styled'

const ContenedorError = styled.div`
width: 300px;
margin: 0 auto;
h2{
    font-size: 40px;
    color: #E7E7EB;
    text-align: center;
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
`;

const Error = ({ mensaje, mostrarMenu }) => {
    const mostrar = () => {
        mostrarMenu(true)
    }
    return (
        <ContenedorError>
            <h2>Error 404</h2>
            <h2>{mensaje}</h2>
            <Boton onClick={mostrar}>Buscar de nuevo</Boton>
        </ContenedorError>
    )
}

export default Error
