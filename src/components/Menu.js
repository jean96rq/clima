import React from 'react'
import styled from '@emotion/styled'



import Formulario from './Formulario';



const MenuContenedor = styled.div`
background-color: #1E213A;
top: 0;
left: 0;
position: absolute;
min-height: 100vh;
width: 100%;
max-width: 459px;
display: flex;
justify-content: center;
align-items: flex-start;
z-index: 1;
@media (max-width:950px){
   max-width: 100%;
  }
`;
const IconClose = styled.p`
position: absolute;
top: 10px;
right: 42px;
cursor: pointer;
color: #E7E7EB;
`;




const Menu = ({ busqueda, guardarBusqueda, guardarConsulta, mostrarMenu, mostrarInicio, resultado, guardarClima }) => {


    const prueba = () => {
        mostrarMenu(false)

    }



    return (

        <MenuContenedor
            className="animate__animated animate__fadeInLeft"
        >
            <IconClose onClick={prueba}><span className="material-icons">
                close
            </span></IconClose>
            <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}
                mostrarMenu={mostrarMenu}
                mostrarInicio={mostrarInicio}
                resultado={resultado}
                guardarClima={guardarClima}
            />
        </MenuContenedor>

    )
}

export default Menu
