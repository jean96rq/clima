import React from 'react'
import styled from '@emotion/styled'


const ContenedorItems = styled.div`
width: 100%;
margin-top: 10px;
margin-bottom: 40px;
position: relative;
display: flex;
`;
const IconExpand = styled.p`
position: absolute;
right: 10px;
top: 0;
color: #616475;
font-size: 18px;
`
const Select = styled.div`
width: 100%;
padding: 0 10px;
box-sizing: border-box;
background-color: transparent;
border: 1px solid transparent;
font-size: 16px;
color: #616475;
transition:all .3s ease;
cursor: pointer;
position: relative;
&:hover{
    border: 1px solid #616475;
}
`;


const Items = ({ resul, listado, mostrarMenu, guardarClima, mostrarInicio }) => {

    if (!listado) return null;

    const mostrarClima = async () => {
        console.log(resul.woeid)
        const url = `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${resul.woeid}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarClima(resultado)
        mostrarMenu(false)
        mostrarInicio(false)
    }


    return (
        <ContenedorItems>
            <Select onClick={mostrarClima}>
                <h4>{resul.title}</h4>
                <IconExpand>
                    <span className="material-icons">
                        chevron_right
                    </span>
                </IconExpand>
            </Select>
        </ContenedorItems>
    )
}

export default Items
